import cv2
import os
import json
from PIL import Image

def crop_face(input_path, output_path):
    print(f"Cropping face from {input_path}...")
    # Load the image
    img = cv2.imread(input_path)
    if img is None:
        print(f"Error: Could not load image from {input_path}")
        return False
        
    # Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Load Haar Cascade face detector
    cascade_path = cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
    face_cascade = cv2.CascadeClassifier(cascade_path)
    
    # Detect faces
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.05, minNeighbors=5, minSize=(100, 100))
    
    if len(faces) == 0:
        print("No faces detected with default parameters. Trying with relaxed parameters...")
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.02, minNeighbors=3, minSize=(50, 50))
        
    if len(faces) == 0:
        print("Still no faces detected. Performing center crop fallback.")
        h, w, _ = img.shape
        size = min(w, h)
        crop_x = (w - size) // 2
        crop_y = (h - size) // 2
        crop_box = (crop_x, crop_y, size, size)
    else:
        # Take the largest face found
        faces = sorted(faces, key=lambda f: f[2] * f[3], reverse=True)
        x, y, w, h = faces[0]
        print(f"Detected face at x={x}, y={y}, width={w}, height={h}")
        
        # Calculate crop coordinates.
        # We want to crop tightly around the face (zoom in, remove background/body).
        # Let's apply tight padding (e.g. 15% of face size) to zoom in on the face.
        pad_w = int(w * 0.15)
        pad_h = int(h * 0.15)
        
        # Target square size around face
        size = max(w + 2 * pad_w, h + 2 * pad_h)
        
        # Center the square on the face center
        center_x = x + w // 2
        center_y = y + h // 2
        
        crop_x = max(0, center_x - size // 2)
        crop_y = max(0, center_y - size // 2)
        
        # Constrain to image boundaries
        img_h, img_w, _ = img.shape
        if crop_x + size > img_w:
            crop_x = img_w - size
        if crop_y + size > img_h:
            crop_y = img_h - size
            
        crop_box = (crop_x, crop_y, size, size)
        
    print(f"Cropping square box coords: {crop_box}")
    pil_img = Image.open(input_path)
    cropped_img = pil_img.crop((crop_box[0], crop_box[1], crop_box[0] + crop_box[2], crop_box[1] + crop_box[3]))
    
    # Resize to a standard high-quality circular thumbnail size (e.g., 200x200)
    cropped_img = cropped_img.resize((200, 200), Image.Resampling.LANCZOS)
    cropped_img.save(output_path, "PNG")
    print(f"Cropped profile saved successfully to {output_path}")
    return True

def analyze_videos(video_dir):
    print(f"Analyzing video files in {video_dir}...")
    video_links = {
        "arctic.mp4": "https://www.instagram.com/p/DPj6sfJjBLz/",
        "ascension.mp4": "https://drive.google.com/file/d/1GNQPf9Dg1BK58rsxz7cdzYp_zxnKAqRB/view?usp=sharing",
        "carlos.mp4": "https://www.instagram.com/p/DO3i_rqgitK/",
        "chia.mp4": "https://www.instagram.com/p/DPnnQ4RjLmT/",
        "chou.mp4": "https://www.instagram.com/p/DPwZtMLgSRz/",
        "dessin-geometrie-final.mp4.mp4": "https://drive.google.com/file/d/1pn6AcvqOFHrDmijWVeFSD14uLsxXJjxF/view?usp=sharing",
        "hrsk.mp4": "https://www.instagram.com/p/DSW4LLhDaFs/",
        "koki.mp4": "https://www.youtube.com/watch?v=04JMBzqteW0",
        "lanier.mp4": "https://www.instagram.com/p/DA_7hYIBpHR/",
        "stage20.mp4": "https://www.youtube.com/watch?v=qQ6721MnxTo",
        "liang.mp4": "https://www.instagram.com/p/DDF4NXqh05x/",
        "maximelim.mp4": "https://www.youtube.com/watch?v=umlUYT9OoaU",
        "naraoka.mp4": "https://www.tiktok.com/@alexandrobadminton/video/7561412958060842262",
        "popov.mp4": "https://www.instagram.com/p/DPl3VSwDL68/",
        "trainbotvideo.mp4": "https://www.youtube.com/watch?v=QUAGUvZIzmk",
        "max.mp4": "https://www.youtube.com/watch?v=xN6EBz2D2i4"
    }
    
    metadata = []
    for filename, link in video_links.items():
        path = os.path.join(video_dir, filename)
        if not os.path.exists(path):
            print(f"Warning: File {filename} not found in {video_dir}")
            continue
            
        cap = cv2.VideoCapture(path)
        if not cap.isOpened():
            print(f"Error: Could not open video {filename}")
            continue
            
        width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
        height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
        cap.release()
        
        aspect_ratio = width / height if height > 0 else 1.0
        orientation = "horizontal" if aspect_ratio >= 1.0 else "vertical"
        
        # Clean title for debugging or accessibility
        title = filename.replace('.mp4.mp4', '').replace('.mp4', '').replace('-', ' ').title()
        
        metadata.append({
            "filename": filename,
            "title": title,
            "width": width,
            "height": height,
            "aspect_ratio": round(aspect_ratio, 4),
            "orientation": orientation,
            "link": link
        })
        print(f"Processed {filename}: {width}x{height} (ratio={aspect_ratio:.2f}, orientation={orientation})")
        
    with open('video_metadata.json', 'w') as f:
        json.dump(metadata, f, indent=4)
    print("Video analysis complete. Saved to video_metadata.json.")

if __name__ == "__main__":
    image_input = "image/alexprofile.png"
    image_output = "image/alexprofile_cropped.png"
    crop_face(image_input, image_output)
    
    video_directory = "video"
    analyze_videos(video_directory)

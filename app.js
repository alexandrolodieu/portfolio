// Hardcoded Video Data to prevent CORS issues when index.html is opened locally via file://
const portfolioVideos = [
    {
        "filename": "arctic.mp4",
        "title": "Arctic",
        "width": 720,
        "height": 1280,
        "aspect_ratio": 0.5625,
        "orientation": "vertical",
        "link": "https://www.instagram.com/p/DPj6sfJjBLz/"
    },
    {
        "filename": "ascension.mp4",
        "title": "Ascension",
        "width": 1080,
        "height": 1920,
        "aspect_ratio": 0.5625,
        "orientation": "vertical",
        "link": "https://drive.google.com/file/d/1GNQPf9Dg1BK58rsxz7cdzYp_zxnKAqRB/view?usp=sharing"
    },
    {
        "filename": "carlos.mp4",
        "title": "Carlos",
        "width": 640,
        "height": 360,
        "aspect_ratio": 1.7778,
        "orientation": "horizontal",
        "link": "https://www.instagram.com/p/DO3i_rqgitK/"
    },
    {
        "filename": "chia.mp4",
        "title": "Chia",
        "width": 720,
        "height": 1280,
        "aspect_ratio": 0.5625,
        "orientation": "vertical",
        "link": "https://www.instagram.com/p/DPnnQ4RjLmT/"
    },
    {
        "filename": "chou.mp4",
        "title": "Chou",
        "width": 720,
        "height": 1280,
        "aspect_ratio": 0.5625,
        "orientation": "vertical",
        "link": "https://www.instagram.com/p/DPwZtMLgSRz/"
    },
    {
        "filename": "dessin-geometrie-final.mp4.mp4",
        "title": "Dessin Geometrie Final",
        "width": 1080,
        "height": 1920,
        "aspect_ratio": 0.5625,
        "orientation": "vertical",
        "link": "https://drive.google.com/file/d/1pn6AcvqOFHrDmijWVeFSD14uLsxXJjxF/view?usp=sharing"
    },
    {
        "filename": "hrsk.mp4",
        "title": "Hrsk",
        "width": 1920,
        "height": 1080,
        "aspect_ratio": 1.7778,
        "orientation": "horizontal",
        "link": "https://www.instagram.com/p/DSW4LLhDaFs/"
    },
    {
        "filename": "koki.mp4",
        "title": "Koki",
        "width": 1080,
        "height": 1920,
        "aspect_ratio": 0.5625,
        "orientation": "vertical",
        "link": "https://www.youtube.com/watch?v=04JMBzqteW0"
    },
    {
        "filename": "lanier.mp4",
        "title": "Lanier",
        "width": 1080,
        "height": 1920,
        "aspect_ratio": 0.5625,
        "orientation": "vertical",
        "link": "https://www.instagram.com/p/DA_7hYIBpHR/"
    },
    {
        "filename": "stage20.mp4",
        "title": "Stage20",
        "width": 1080,
        "height": 1920,
        "aspect_ratio": 0.5625,
        "orientation": "vertical",
        "link": "https://www.youtube.com/watch?v=qQ6721MnxTo"
    },
    {
        "filename": "liang.mp4",
        "title": "Liang",
        "width": 1080,
        "height": 1920,
        "aspect_ratio": 0.5625,
        "orientation": "vertical",
        "link": "https://www.instagram.com/p/DDF4NXqh05x/"
    },
    {
        "filename": "maximelim.mp4",
        "title": "Maximelim",
        "width": 1080,
        "height": 1920,
        "aspect_ratio": 0.5625,
        "orientation": "vertical",
        "link": "https://www.youtube.com/watch?v=umlUYT9OoaU"
    },
    {
        "filename": "naraoka.mp4",
        "title": "Naraoka",
        "width": 720,
        "height": 1280,
        "aspect_ratio": 0.5625,
        "orientation": "vertical",
        "link": "https://www.tiktok.com/@alexandrobadminton/video/7561412958060842262"
    },
    {
        "filename": "popov.mp4",
        "title": "Popov",
        "width": 720,
        "height": 1280,
        "aspect_ratio": 0.5625,
        "orientation": "vertical",
        "link": "https://www.instagram.com/p/DPl3VSwDL68/"
    },
    {
        "filename": "trainbotvideo.mp4",
        "title": "Trainbotvideo",
        "width": 1080,
        "height": 1920,
        "aspect_ratio": 0.5625,
        "orientation": "vertical",
        "link": "https://www.youtube.com/watch?v=QUAGUvZIzmk"
    },
    {
        "filename": "max.mp4",
        "title": "Max",
        "width": 1080,
        "height": 1920,
        "aspect_ratio": 0.5625,
        "orientation": "vertical",
        "link": "https://www.youtube.com/watch?v=xN6EBz2D2i4"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const videoGrid = document.getElementById("videoGrid");
    if (!videoGrid) return;

    // 1. Dynamically Render Video Cards
    portfolioVideos.forEach((video, index) => {
        const card = document.createElement("div");
        card.className = "video-card";
        card.id = `video-card-${index}`;

        card.innerHTML = `
            <div class="video-wrapper ${video.orientation}" id="wrapper-${index}">
                <video 
                    src="video/${video.filename}" 
                    loop 
                    muted 
                    playsinline 
                    preload="metadata"
                    id="video-${index}">
                </video>
                <div class="video-overlay">
                    <div class="play-indicator">
                        <svg viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <a href="${video.link}" target="_blank" rel="noopener noreferrer" class="view-project-btn" id="btn-${index}">
                    <span>View Project</span>
                    <svg class="btn-arrow-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </a>
            </div>
        `;

        videoGrid.appendChild(card);
    });

    // 2. Play/Pause Controller Logic
    const wrappers = document.querySelectorAll(".video-wrapper");
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Helper functions to safely play/pause videos
    const playVideo = (wrapper, video) => {
        if (!video.paused) return;
        
        wrapper.classList.add("is-playing");
        // Browsers block autoplay if not muted, but our video is muted
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                // Autoplay was prevented
                console.log("Autoplay prevented:", error);
                wrapper.classList.remove("is-playing");
            });
        }
    };

    const pauseVideo = (wrapper, video) => {
        if (video.paused) return;
        
        wrapper.classList.remove("is-playing");
        video.pause();
    };

    if (!isTouchDevice) {
        // Desktop Interaction: Play on Hover
        wrappers.forEach(wrapper => {
            const video = wrapper.querySelector("video");
            
            wrapper.addEventListener("mouseenter", () => {
                playVideo(wrapper, video);
            });
            
            wrapper.addEventListener("mouseleave", () => {
                pauseVideo(wrapper, video);
            });
        });
    } else {
        // Mobile Interaction: Autoplay centered video as user scrolls
        // Create an Intersection Observer focusing on the viewport center (middle 50%)
        const observerOptions = {
            root: null,
            rootMargin: "-25% 0px -25% 0px",
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const wrapper = entry.target;
                const video = wrapper.querySelector("video");

                if (entry.isIntersecting) {
                    playVideo(wrapper, video);
                } else {
                    pauseVideo(wrapper, video);
                }
            });
        }, observerOptions);

        wrappers.forEach(wrapper => {
            observer.observe(wrapper);
        });
    }
});

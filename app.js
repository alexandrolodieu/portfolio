// Hardcoded Portfolio Items (using lightweight JPG thumbnails)
const portfolioItems = [
    {
        "thumbnail": "arctic.jpg",
        "title": "Arctic",
        "orientation": "vertical",
        "link": "https://www.instagram.com/p/DPj6sfJjBLz/"
    },
    {
        "thumbnail": "ascension.jpg",
        "title": "Ascension",
        "orientation": "vertical",
        "link": "https://drive.google.com/file/d/1GNQPf9Dg1BK58rsxz7cdzYp_zxnKAqRB/view?usp=sharing"
    },
    {
        "thumbnail": "carlos.jpg",
        "title": "Carlos",
        "orientation": "horizontal",
        "link": "https://www.instagram.com/p/DO3i_rqgitK/"
    },
    {
        "thumbnail": "chia.jpg",
        "title": "Chia",
        "orientation": "vertical",
        "link": "https://www.instagram.com/p/DPnnQ4RjLmT/"
    },
    {
        "thumbnail": "chou.jpg",
        "title": "Chou",
        "orientation": "vertical",
        "link": "https://www.instagram.com/p/DPwZtMLgSRz/"
    },
    {
        "thumbnail": "dessin-geometrie-final.jpg",
        "title": "Dessin Geometrie Final",
        "orientation": "vertical",
        "link": "https://drive.google.com/file/d/1pn6AcvqOFHrDmijWVeFSD14uLsxXJjxF/view?usp=sharing"
    },
    {
        "thumbnail": "hrsk.jpg",
        "title": "Hrsk",
        "orientation": "horizontal",
        "link": "https://www.instagram.com/p/DSW4LLhDaFs/"
    },
    {
        "thumbnail": "koki.jpg",
        "title": "Koki",
        "orientation": "vertical",
        "link": "https://www.youtube.com/watch?v=04JMBzqteW0"
    },
    {
        "thumbnail": "lanier.jpg",
        "title": "Lanier",
        "orientation": "vertical",
        "link": "https://www.instagram.com/p/DA_7hYIBpHR/"
    },
    {
        "thumbnail": "stage20.jpg",
        "title": "Stage20",
        "orientation": "vertical",
        "link": "https://www.youtube.com/watch?v=qQ6721MnxTo"
    },
    {
        "thumbnail": "liang.jpg",
        "title": "Liang",
        "orientation": "vertical",
        "link": "https://www.instagram.com/p/DDF4NXqh05x/"
    },
    {
        "thumbnail": "maximelim.jpg",
        "title": "Maximelim",
        "orientation": "vertical",
        "link": "https://www.youtube.com/watch?v=umlUYT9OoaU"
    },
    {
        "thumbnail": "naraoka.jpg",
        "title": "Naraoka",
        "orientation": "vertical",
        "link": "https://www.tiktok.com/@alexandrobadminton/video/7561412958060842262"
    },
    {
        "thumbnail": "popov.jpg",
        "title": "Popov",
        "orientation": "vertical",
        "link": "https://www.instagram.com/p/DPl3VSwDL68/"
    },
    {
        "thumbnail": "trainbotvideo.jpg",
        "title": "Trainbotvideo",
        "orientation": "vertical",
        "link": "https://www.youtube.com/watch?v=QUAGUvZIzmk"
    },
    {
        "thumbnail": "max.jpg",
        "title": "Max",
        "orientation": "vertical",
        "link": "https://www.youtube.com/watch?v=xN6EBz2D2i4"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const videoGrid = document.getElementById("videoGrid");
    if (!videoGrid) return;

    // Dynamically Render Thumbnail Project Cards
    portfolioItems.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "video-card";
        card.id = `project-card-${index}`;

        card.innerHTML = `
            <div class="image-wrapper ${item.orientation}" id="wrapper-${index}">
                <img 
                    src="thumbnails/${item.thumbnail}" 
                    alt="${item.title}" 
                    class="project-thumbnail"
                    loading="lazy"
                    id="thumb-${index}">
            </div>
            <div class="card-footer">
                <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="view-project-btn" id="btn-${index}">
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
});

const previewContent = {
    image: {
        title: "Image Content",
        description: "High-quality static images in JPEG/PNG formats",
        preview: "../assets/images/sample.jpg"
    },
    video: {
        title: "Video Content",
        description: "MP4 videos with HD resolution",
        preview: "../assets/videos/sample2.png"
    },
    gif: {
        title: "Animation",
        description: "Animated GIF files with transparent backgrounds",
        preview: "../assets/gifs/gif.gif"
    },
    pdf: {
        title: "Document",
        description: "PDF files with text",
        preview: "../assets/pdfs/sample1.png"
    }
};

const links = document.querySelectorAll('.preview-link');
const previewCard = document.getElementById('previewCard');
let hoverTimeout;

function showPreview(event, type) {
    const content = previewContent[type];
    previewCard.innerHTML = `
        <img src="${content.preview}" alt="${type} preview">
        <h3>${content.title}</h3>
        <p>${content.description}</p>
    `;
    positionPreview(event);
    previewCard.style.opacity = '1';
}

function positionPreview(event) {
    const x = event.clientX + 20;
    const y = event.clientY + 20;
    const maxX = window.innerWidth - previewCard.offsetWidth - 20;
    const maxY = window.innerHeight - previewCard.offsetHeight - 20;
    
    previewCard.style.left = `${Math.min(x, maxX)}px`;
    previewCard.style.top = `${Math.min(y, maxY)}px`;
}

links.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        const type = e.target.dataset.type;
        hoverTimeout = setTimeout(() => showPreview(e, type), 300);
    });

    link.addEventListener('mousemove', (e) => {
        positionPreview(e);
    });

    link.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout);
        previewCard.style.opacity = '0';
    });
});

// Touch device support
document.addEventListener('touchstart', () => {
    previewCard.style.opacity = '0';
}, { passive: true });
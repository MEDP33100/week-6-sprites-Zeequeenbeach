class Sprite {
    constructor(data, container) {
        this.title = data.title;
        this.artist = data.artist;
        this.album = data.album;
        this.image = data.image;
        this.container = container;
        this.createElement();
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("sprite");
        this.element.innerHTML = `
            <img src='${this.image}' alt='${this.title}'>
            <strong>${this.title}</strong>
            <div class="artist">${this.artist}</div>
            <div class="album">${this.album}</div>
        `;
        this.container.appendChild(this.element);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("sprite-container");
    try {
        const response = await fetch("data.json");
        const data = await response.json();
        data.forEach(item => new Sprite(item, container));
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

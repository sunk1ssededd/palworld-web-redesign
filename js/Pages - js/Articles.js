const container = document.querySelector('.articles-container');
const nextBtn = document.querySelector('.slide-btn.next');
const prevBtn = document.querySelector('.slide-btn.prev');

const cards = [...container.children];

cards.forEach(card => {
    const clone = card.cloneNode(true);
    container.appendChild(clone);
});

let resetPoint = container.scrollWidth / 2;


let speed = 0.4;      // Gerakan halus
let autoPlay = true;  // bisa pause

function autoSlide() {
    if (autoPlay) {
        container.scrollLeft += speed;

        // kalau sudah lewat setengah → balik ke awal
        if (container.scrollLeft >= resetPoint) {
            container.scrollLeft = 0;
        }
    }

    requestAnimationFrame(autoSlide);
}

autoSlide();

// ==============================
// 3. MANUAL BUTTON
// ==============================
function pauseAuto() {
    autoPlay = false;
    clearTimeout(window.resumeTimer);

    window.resumeTimer = setTimeout(() => {
        autoPlay = true;
    }, 3000);
}

nextBtn.addEventListener("click", () => {
    container.scrollBy({ left: 400, behavior: "smooth" });
    pauseAuto();
});

prevBtn.addEventListener("click", () => {
    container.scrollBy({ left: -400, behavior: "smooth" });
    pauseAuto();
});

// ==============================
// 4. Pause saat user scroll
// ==============================
container.addEventListener("scroll", () => {
    pauseAuto();
});

// ==============================
// 5. Pause saat hover
// ==============================
container.addEventListener("mouseenter", () => autoPlay = false);
container.addEventListener("mouseleave", () => autoPlay = true);

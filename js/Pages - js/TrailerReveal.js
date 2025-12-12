document.addEventListener('DOMContentLoaded', () => {
    const trailerSection = document.getElementById("trailer-hero");

    const observerOptions = {
        root: null,
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                trailerSection.classList.add("reveal-active");
            } else {
                trailerSection.classList.remove("reveal-active");
            }
        });
    }, observerOptions);

    if (trailerSection) {
        observer.observe(trailerSection);
    }

    const trailerCard = document.getElementById('trailerTrigger');
    const videoModal = document.getElementById('videoModal');
    const popupVideo = document.getElementById('popupVideo');
    const closeModalBtn = document.querySelector('.close-modal');
    const bgVideo = trailerCard.querySelector('video');

    function openModal() {
        videoModal.classList.add('show');
        popupVideo.currentTime = 0;
        popupVideo.play();

        if(bgVideo) bgVideo.pause();
    }

    function closeModal() {
        videoModal.classList.remove('show');

        setTimeout(() => {
            popupVideo.pause();
            popupVideo.currentTime = 0;
        }, 300);

        if(bgVideo) bgVideo.play();
    }

    // Event Listeners
    if (trailerCard) {
        trailerCard.addEventListener('click', openModal);
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Tutup jika klik di luar area video (backdrop)
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal || e.target.classList.contains('video-modal-backdrop')) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('show')) {
            closeModal();
        }
    });
});

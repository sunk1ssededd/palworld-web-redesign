document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const tierRows = document.querySelectorAll('.tier-row');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            //filter
            tierRows.forEach(row => {
                const palCards = row.querySelectorAll('.pal-card');
                let hasVisiblePal = false;

                palCards.forEach(card => {
                    card.classList.remove('hidden');

                  //cek filter kondisi
                    if (filter === 'all' || card.classList.contains(filter)) {
                        hasVisiblePal = true;
                        card.style.animation = 'fadeIn 0.3s ease forwards';
                    } else {
                        card.classList.add('hidden');
                    }
                });

                if (hasVisiblePal) {
                    row.classList.remove('hidden');
                    row.style.display = 'flex';
                } else {
                    row.classList.add('hidden');
                    setTimeout(() => {
                        if(row.classList.contains('hidden')) row.style.display = 'none';
                    }, 100);
                }
            });
        });
    });
});

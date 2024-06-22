document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.querySelector('.card-container');
    const buttons = document.querySelectorAll('.btn-container button');

    const cards = {
        terbaru: [
            { img: "pics/istockphoto-1303362255-612x612.jpg", title: "Terbaru 1", description: "Description for Terbaru 1" },
            { img: "pics/istockphoto-1353103116-612x612.jpg", title: "Terbaru 2", description: "Description for Terbaru 2" },
            { img: "pics/card3.jpg", title: "Terbaru 3", description: "Description for Terbaru 3" }
        ],
        populer: [
            { img: "pics/istockphoto-1303362255-612x612.jpg", title: "Populer 1", description: "Description for Populer 1" },
            { img: "pics/istockphoto-1353103116-612x612.jpg", title: "Populer 2", description: "Description for Populer 2" },
            { img: "pics/card3.jpg", title: "Populer 3", description: "Description for Populer 3" }
        ],
        kesehatan: [
            { img: "pics/istockphoto-1303362255-612x612.jpg", title: "Kesehatan 1", description: "Description for Kesehatan 1" },
            { img: "pics/istockphoto-1353103116-612x612.jpg", title: "Kesehatan 2", description: "Description for Kesehatan 2" },
            { img: "pics/card3.jpg", title: "Kesehatan 3", description: "Description for Kesehatan 3" }
        ],
        obat: [
            { img: "pics/istockphoto-1303362255-612x612.jpg", title: "Obat 1", description: "Description for Obat 1" },
            { img: "pics/istockphoto-1353103116-612x612.jpg", title: "Obat 2", description: "Description for Obat 2" },
            { img: "pics/card3.jpg", title: "Obat 3", description: "Description for Obat 3" }
        ]
    };

    function createCard(card) {
        return `
            <div class="card">
                <img src="${card.img}" alt="${card.title}" />
                <div class="card-content">
                    <h3>${card.title}</h3>
                    <p>${card.description}</p>
                    <a href="#" class="btn">Read More</a>
                </div>
            </div>
        `;
    }

    function updateCards(category) {
        const selectedCards = cards[category];
        cardContainer.innerHTML = selectedCards.map(createCard).join('');
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            updateCards(category);
        });
    });

    // Load default category (e.g., "terbaru") on page load
    updateCards('terbaru');
});

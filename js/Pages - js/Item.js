const itemsData = [
    {
        id: 1,
        name: "Gold Coin",
        type: "Material",
        desc: "Currency traded on Palpagos Island. Can be exchanged for items or Pals.",
        img: "https://palworld.gg/_ipx/q_80&s_60x60/images/items/T_itemicon_Material_Money.png",
        stats: { rarity: 0, rank: 1, price: 1, weight: 0 },
        recipe: [
            { name: "Ingot", qty: 1, img: "https://palworld.gg/images/items/T_itemicon_Material_CopperIngot.png" }
        ]
    },
    {
        id: 2,
        name: "Animal Skin",
        type: "Material",
        desc: "Animal Skin",
        img: "https://palworld.gg/_ipx/q_80&s_60x60/images/items/T_itemicon_Material_AnimalSkin.png",
        stats: { rarity: 0, rank: 1, price: 140, weight: 1 },
        recipe: []
    },
    {
        id: 3,
        name: "Arrow",
        type: "Ammo",
        desc: "An Arrow for use with a bow.",
        img: "https://palworld.gg/_ipx/q_80&s_60x60/images/items/T_itemicon_Ammo_Arrow.png",
        stats: { rarity: 0, rank: 1, price: 5, weight: 0.025 },
        recipe: [
            { name: "Wood", qty: 1, img: "https://palworld.gg/images/items/T_itemicon_Material_Wood.png" },
            { name: "Stone", qty: 1, img: "https://palworld.gg/images/items/T_itemicon_Material_Stone.png" }
        ]
    },
    {
        id: 4,
        name: "Poison Arrow",
        type: "Ammo",
        desc: "Arrows for shooting with Bow_Poison and BowGun_Poison. It poisons any target it hits.",
        img: "https://palworld.gg/_ipx/q_80&s_60x60/images/items/T_itemicon_Ammo_Arrow_Poison.png",
        stats: { rarity: 0, rank: 1, price: 15, weight: 0.025 },
        recipe: [
            { name: "Wood", qty: 3, img: "https://palworld.gg/images/items/T_itemicon_Material_Wood.png" },
            { name: "Stone", qty: 3, img: "https://palworld.gg/images/items/T_itemicon_Material_Stone.png" },
            { name: "Venom Gland", qty: 1, img: "https://palworld.gg/images/items/T_itemicon_Material_Venom.png" }
        ]
    },
    {
        id: 5,
        name: "Fire Arrow",
        type: "Ammo",
        desc: "Arrows for shooting with Bow_Fire and BowGun_Fire. Deals COMMON_ELEMENT_NAME_Fire damage.",
        img: "https://palworld.gg/_ipx/q_80&s_60x60/images/items/T_itemicon_Ammo_Arrow_Fire.png",
        stats: { rarity: 0, rank: 1, price: 5, weight: 0.025 },
        recipe: [
            { name: "Wood", qty: 3, img: "https://palworld.gg/images/items/T_itemicon_Material_Wood.png" },
            { name: "Stone", qty: 3, img: "https://palworld.gg/images/items/T_itemicon_Material_Stone.png" },
            { name: "Flame Organ", qty: 1, img: "https://palworld.gg/images/items/T_itemicon_Material_FireOrgan.png" }
        ]
    },
     {
        id: 6,
        name: "Assault Rifle",
        type: "Weapon",
        desc: "Mows down enemies with overwhelming force. It excels at rapid-fire and is well suited to taking down powerful foes.",
        img: "https://palworld.gg/_ipx/q_80&s_60x60/images/items/T_itemicon_Weapon_AssaultRifle_Default1.png",
        stats: { rarity: 0, rank: 1, price: 5, weight: 0.025 },
        recipe: [
            { name: "Wood", qty: 1, img: "https://palworld.gg/images/items/T_itemicon_Material_Wood.png" },
            { name: "Stone", qty: 1, img: "https://palworld.gg/images/items/T_itemicon_Material_Stone.png" }
        ]
    },
     {
        id: 7,
        name: "Arrow",
        type: "Ammo",
        desc: "An Arrow for use with a bow.",
        img: "https://palworld.gg/_ipx/q_80&s_60x60/images/items/T_itemicon_Weapon_Pickaxe_Tier_00.png",
        stats: { rarity: 0, rank: 1, price: 5, weight: 0.025 },
        recipe: [
            { name: "Wood", qty: 1, img: "https://palworld.gg/images/items/T_itemicon_Material_Wood.png" },
            { name: "Stone", qty: 1, img: "https://palworld.gg/images/items/T_itemicon_Material_Stone.png" }
        ]
    },
     {
        id: 8,
        name: "Arrow",
        type: "Ammo",
        desc: "An Arrow for use with a bow.",
        img: "https://palworld.gg/_ipx/q_80&s_60x60/images/items/T_itemicon_Weapon_PumpActionShotgun.png",
        stats: { rarity: 0, rank: 1, price: 5, weight: 0.025 },
        recipe: [
            { name: "Wood", qty: 1, img: "https://palworld.gg/images/items/T_itemicon_Material_Wood.png" },
            { name: "Stone", qty: 1, img: "https://palworld.gg/images/items/T_itemicon_Material_Stone.png" }
        ]
    },
     {
        id: 9,
        name: "Arrow",
        type: "Ammo",
        desc: "An Arrow for use with a bow.",
        img: "https://palworld.gg/_ipx/q_80&s_60x60/images/items/T_itemicon_Armor_StealArmor.png",
        stats: { rarity: 0, rank: 1, price: 5, weight: 0.025 },
        recipe: [
            { name: "Wood", qty: 1, img: "https://palworld.gg/images/items/T_itemicon_Material_Wood.png" },
            { name: "Stone", qty: 1, img: "https://palworld.gg/images/items/T_itemicon_Material_Stone.png" }
        ]
    },
     {
        id: 10,
        name: "Arrow",
        type: "Ammo",
        desc: "An Arrow for use with a bow.",
        img: "https://palworld.gg/_ipx/q_80&s_60x60/images/items/Tex_medicines_05.png",
        stats: { rarity: 0, rank: 1, price: 5, weight: 0.025 },
        recipe: [
            { name: "Wood", qty: 1, img: "https://palworld.gg/images/items/T_itemicon_Material_Wood.png" },
            { name: "Stone", qty: 1, img: "https://palworld.gg/images/items/T_itemicon_Material_Stone.png" }
        ]
    },
     {
        id: 11,
        name: "Arrow",
        type: "Ammo",
        desc: "An Arrow for use with a bow.",
        img: "https://palworld.gg/_ipx/q_80&s_60x60/images/items/T_itemicon_Weapon_WeakerBow.png",
        stats: { rarity: 0, rank: 1, price: 5, weight: 0.025 },
        recipe: [
            { name: "Wood", qty: 1, img: "https://palworld.gg/images/items/T_itemicon_Material_Wood.png" },
            { name: "Stone", qty: 1, img: "https://palworld.gg/images/items/T_itemicon_Material_Stone.png" }
        ]
    },
     {
        id: 12,
        name: "Arrow",
        type: "Ammo",
        desc: "An Arrow for use with a bow.",
        img: "https://palworld.gg/_ipx/q_80&s_60x60/images/items/T_itemicon_Weapon_Launcher_Default.png",
        stats: { rarity: 0, rank: 1, price: 5, weight: 0.025 },
        recipe: [
            { name: "Wood", qty: 1, img: "https://palworld.gg/images/items/T_itemicon_Material_Wood.png" },
            { name: "Stone", qty: 1, img: "https://palworld.gg/images/items/T_itemicon_Material_Stone.png" }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('itemsGrid');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // --- FUNGSI RENDER UTAMA ---
    function renderItems(data) {
        grid.innerHTML = '';

        if (data.length === 0) {
            grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:#888;">No items found.</div>';
            return;
        }

        data.forEach(item => {
            // 1. Generate Recipe HTML (Jika ada)
            let recipeHTML = '';
            if (item.recipe && item.recipe.length > 0) {
                const ingredients = item.recipe.map(ing => `
                    <div class="r-item" title="${ing.name}">
                        <img src="${ing.img}" alt="${ing.name}">
                        <span>${ing.qty}</span>
                    </div>
                `).join('');

                recipeHTML = `
                    <div class="recipe-area">
                        <p>RECIPE</p>
                        <div class="recipe-icons">${ingredients}</div>
                    </div>
                `;
            } else {
                recipeHTML = '<div style="margin-top:auto;"></div>';
            }

            const card = document.createElement('div');
            card.className = 'item-card';

            card.innerHTML = `
                <div class="card-top">
                    <div class="card-title">
                        <h3>${item.name}</h3>
                        <span class="type-badge">${item.type}</span>
                    </div>
                    <div class="card-icon">
                        <img src="${item.img}" alt="${item.name}">
                    </div>
                </div>

                <p class="card-desc">${item.desc}</p>

                <!-- BAGIAN STATS 2x2 -->
                <div class="card-stats">
                    <div class="stat-box">
                        <label>RARITY</label>
                        <span>${item.stats.rarity}</span>
                    </div>
                    <div class="stat-box">
                        <label>RANK</label>
                        <span>${item.stats.rank}</span>
                    </div>
                    <div class="stat-box">
                        <label>PRICE</label>
                        <span class="highlight-stat">${item.stats.price}</span>
                    </div>
                    <div class="stat-box">
                        <label>WEIGHT</label>
                        <span>${item.stats.weight}</span>
                    </div>
                </div>

                ${recipeHTML}
            `;

            grid.appendChild(card);
        });
    }

// filter
    function filterItems() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeBtn = document.querySelector('.filter-btn.active');
        const category = activeBtn ? activeBtn.dataset.category : 'all';

        const filtered = itemsData.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm);
            const matchesCategory = category === 'all' || item.type.toLowerCase() === category;
            return matchesSearch && matchesCategory;
        });

        renderItems(filtered);
    }

    //event Listeners
    searchInput.addEventListener('input', filterItems);
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterItems();
        });
    });

    renderItems(itemsData);
});

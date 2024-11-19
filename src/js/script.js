document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('pokemon-container');

    fetch('https://raw.githubusercontent.com/chase-manning/pokemon-tcg-pocket-cards/refs/heads/main/v1.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(pokemon => {
                const card = document.createElement('div');
                card.classList.add('pokemon-card');

                card.innerHTML = `
                    <img src="${pokemon.image}" alt="${pokemon.name}">
                    <h3>${pokemon.name}</h3>
                    <p>Rarity: ${pokemon.rarity}</p>
                    <p>Pack: ${pokemon.pack}</p>
                    <p>Type: ${pokemon.type}</p>
                    <p>Health: ${pokemon.health}</p>
                    <p>Stage: ${pokemon.stage}</p>
                    <p>Crafting Cost: ${pokemon.craftingCost}</p>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao puxar dados da API:', error));
});

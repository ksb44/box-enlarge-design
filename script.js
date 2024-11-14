document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let selectedCard = null;

    function resetCards() {
        cards.forEach(card => {
            card.classList.remove('selected');
            card.querySelector('.card-radio').classList.remove('selected');
            card.classList.remove('enlarged');
        });
    }

    cards.forEach(card => {
        card.addEventListener('click', (event) => {
            if (selectedCard === card) {
                card.classList.remove('selected');
                card.querySelector('.card-radio').classList.remove('selected');
                card.classList.remove('enlarged');
                selectedCard = null;
                return;
            }

            resetCards();

            selectedCard = card;
            selectedCard.classList.add('selected');
            selectedCard.querySelector('.card-radio').classList.add('selected');
            selectedCard.classList.add('enlarged');
        });
    });

    const defaultCard = document.querySelector('.card[data-value="2"]');
    if (defaultCard) {
        defaultCard.classList.add('selected');
        defaultCard.querySelector('.card-radio').classList.add('selected');
        defaultCard.classList.add('enlarged');
        selectedCard = defaultCard;
    }
});
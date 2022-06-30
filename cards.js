// #1 and #2
// const deck = {
//     async init() {
//         let res = await axios.get('https://deckofcardsapi.com/api/deck/new/');
//         this.deckId = res.data.deck_id
//     },
//     async shuffle() {
//         let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle`)
//     },
//     async drawCard() {
//         let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`)
//         for (card of res.data.cards) {
//             console.log(`${card.value} of ${card.suit}.`)
//         }
//     }
// }



// #3
const cardBtn = document.querySelector('#cardBtn');
const deckBtn = document.querySelector('#createDeck');
const shuffleBtn = document.querySelector('#shuffleDeck');
const cardSpace = document.querySelector('#cardSpace');
let cardImg;

const deck = {
    async init() {
        let res = await axios.get('https://deckofcardsapi.com/api/deck/new/');
        this.deckId = res.data.deck_id
    },
    async shuffle() {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle`)
    },
    async drawCard() {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`)
        for (card of res.data.cards) {
            cardImg = card.image
            console.log(`${card.value} of ${card.suit}.`)
        }
    }
}

deckBtn.addEventListener('click', function () {
    deck.init();
})
shuffleBtn.addEventListener('click', function () {
    deck.shuffle();
})


cardBtn.addEventListener('click', async function () {
    cardSpace.innerHTML = "";
    await deck.drawCard();
    let card = document.createElement('img');
    card.setAttribute('src', cardImg);
    cardSpace.appendChild(card);
})
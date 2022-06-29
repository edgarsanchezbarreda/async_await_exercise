// #1
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
            console.log(`${card.value} of ${card.suit}.`)
        }
    }
}
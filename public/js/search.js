async function launch() {
    let cards = await get_cards()
    $.each(cards, function(i, card) {
        console.log(card)
    });
}

async function get_cards() {
    return (await axios.get('/cards')).data
}

launch().then(console.log('done!'))

$('#search-form').on('submit', async function(e, form) {
    e.preventDefault()
    let card_num = $('#card-number').val()
    let response = await axios.get(`/cards?card_number=${card_num}`)
    console.log(response)
})
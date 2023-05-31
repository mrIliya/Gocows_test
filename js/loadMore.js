const allCards = document.querySelectorAll('.casinos__card')
const moreBtn = document.querySelector('.casinos__more')

allCards.forEach((card, index) => {
    if (index > 3) {
        card.style.display = 'none'
    }
})

moreBtn.addEventListener('click', () => {
    allCards.forEach((card, index) => {
        if (index > 3) {
            card.style.display = 'flex'
        }
    })

    moreBtn.style.display = 'none'
})
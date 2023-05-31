const freeSpins = document.querySelectorAll('.free-spins')
const popups = document.querySelectorAll('.casinos-popup')
const popupClose = document.querySelectorAll('.casinos-popup__close')
const codeBtns = document.querySelectorAll('.casinos-popup__code')

codeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        navigator.clipboard.writeText(e.target.innerText)
        const copied = e.target.parentElement.querySelector('.casinos-popup__copied')
        copied.classList.add('active')
    })
})

popupClose.forEach((btn) => {
    btn.addEventListener('click', () => {
        popups.forEach((popup) => {
            popup.classList.remove('active')
            const copied = popup.querySelector('.casinos-popup__copied')
            copied.classList.remove('active')
        })
    })
})

freeSpins.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const popup = e.target.parentElement.querySelector('.casinos-popup')
        popup.classList.add('active')
    })
})
const cards = document.querySelectorAll('.cards')

cards.forEach(card => {
    card.addEventListener('dragstart', (event) => {
        event.currentTarget.classList.add('arrastando')
    })
  
    card.addEventListener('dragend', (event) => {
        event.currentTarget.classList.remove('arrastando')
    })
})

document.querySelectorAll('.inter').forEach(uni => {

    uni.addEventListener('dragover', (event) => {
        event.currentTarget.classList.add('fundo')
        event.preventDefault()
    })

    uni.addEventListener('dragleave', (event) => {
        event.currentTarget.classList.remove('fundo')
    })

    uni.addEventListener('drop', (event) => {
        event.currentTarget.classList.remove('fundo')
        const card = document.querySelector('.arrastando')
        event.currentTarget.appendChild(card)
    })
})
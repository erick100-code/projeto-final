const items = document.querySelectorAll('.list')
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
    })
})

items.forEach(item => {
    item.addEventListener('click', () => {
        items.forEach(itemd => {
            itemd.classList.remove('ground')
        })

        item.classList.add('ground')
    })
})

const but = document.getElementById('abref')


but.addEventListener('click', () => {
    const nav = document.getElementById('menunav')
    nav.classList.toggle('aberto')

})

document.querySelectorAll('.minis').forEach(mini => {
    mini.addEventListener('click', (event) => {
        mudarcor(event.currentTarget)
    })
    
    mini.addEventListener('mousedown', (event) => {
        mini.style.backgroundColor = '#6a7282'
    })
    
    mini.addEventListener('mouseup', (event) => {
        mini.style.backgroundColor = ''
    })

})

function mudarcor(mini) {
    mini.style.backgroundColor = '#6a7282'
    setTimeout(() => {
        mini.style.backgroundColor = ''        
    }, 200);
}

const botler = document.getElementById('botler')
botler.addEventListener('click', () => {
    const container = document.getElementById('containerlermais')
    container.classList.toggle('lermais')
    if (container.classList.contains('lermais')) {
        botler.textContent = 'Ler Menos'
    } else {
        botler.textContent = 'Ler Mais'
    }
})
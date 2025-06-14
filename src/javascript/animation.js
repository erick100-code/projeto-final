const btn = document.getElementById('botanimation')

btn.addEventListener('mousedown', () => {
    btn.style.color = 'red'
    btn.style.borderColor = 'red'
})

btn.addEventListener('mouseup', () => {
    btn.style.color = 'white'
    btn.style.borderColor = 'gold'
})

btn.addEventListener('mouseout', () => {
    btn.style.color = 'white'
    btn.style.borderColor = 'gold'
})

btn.addEventListener('click', (event) => {
    const local = document.getElementById('botrani')
    const sorteio = Math.floor(Math.random() * 5)
    
    mudacor()

    if (sorteio == 0){
        local.textContent = 'bounce'
        local.classList.add('zero')
        local.classList.remove('um')
        local.classList.remove('dois')
        local.classList.remove('tres')
        local.classList.remove('quatro')
    }
    
    if (sorteio == 1){
        local.textContent = 'ping'
        
        local.classList.add('um')
        local.classList.remove('zero')
        local.classList.remove('dois')
        local.classList.remove('tres')
        local.classList.remove('quatro')
    }
    
    if (sorteio == 2){
        local.textContent = 'pulse'
        
        local.classList.add('dois')
        local.classList.remove('zero')
        local.classList.remove('um')
        local.classList.remove('tres')
        local.classList.remove('quatro')
    }
    
    if (sorteio == 3){
        local.textContent = 'spin'

        local.classList.add('tres')
        local.classList.remove('zero')
        local.classList.remove('um')
        local.classList.remove('dois')
        local.classList.remove('quatro')
    }
    
    if (sorteio == 4){
        local.textContent = 'zoom'
    
        local.classList.add('quatro')
        local.classList.remove('zero')
        local.classList.remove('um')
        local.classList.remove('dois')
        local.classList.remove('tres')
    }
})

function mudacor() {
    btn.style.color = 'red'
    btn.style.borderColor = 'red'
    setTimeout(() => {
        btn.style.color = 'white'
        btn.style.borderColor = 'gold'
    }, 350);
}
const input = document.getElementById('txt')

input.addEventListener('input', (event) => {
    let valorInp = formatar(event.target.value)    
    const items = document.querySelectorAll('.item')
    const resultado = document.getElementById('res')
    const ul = document.getElementById('caixa2')
    let temRes = false

    items.forEach(item => {
        const titulo = item.querySelector('h1')
        
        if (formatar(titulo.textContent).indexOf(valorInp) != -1) {
            item.style.display = 'flex'
            temRes = true
        } else {
            item.style.display = 'none'
        }
    })

    if  (temRes) {
        resultado.style.display = 'none'
        ul.style.height = '350px'
    } else {
        resultado.style.display = 'block'
        ul.style.height = 'auto'
    }
})

function formatar(value) {
    return value.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036d]/g, '')
}
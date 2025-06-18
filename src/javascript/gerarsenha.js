function array() {
    const maiusculas = document.getElementById('maiusculas').checked
    const minusculas = document.getElementById('minusculas').checked
    const numeros = document.getElementById('numeros').checked
    const especial = document.getElementById('especial').checked
    
    let vet = []

    if (maiusculas) {
        vet.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    }
   
    if (minusculas) {
        vet.push('abcdefghijklmnopqrstuvwxyz')
    }
   
    if (numeros) {
        vet.push('123456789')
    }

    if (especial) {
        vet.push('/?<,>.;:^~}]{[{[+=_-)(*&¨%$#@!"\\\'')
    }

    return vet
}

function quantC() {
    const valor = document.getElementById('quantC').value
    
    return valor
}

function gerarSenha(quant, array) {
    let senhaF = ''

    while(senhaF.length < quant) {
        senhaF += aleatorio(array)
    }

    return senhaF
}


function aleatorio(array) {
    const aleatorio = Math.floor(Math.random() * array.length)
    return array[aleatorio][Math.floor(Math.random() * array[aleatorio].length)]
}

document.getElementById('btn').addEventListener('click', () => {
    const caixaSenha = document.getElementById('cxsenha')
    const vetor = array()
    const quant = quantC()
    
    
    if (isNaN(quant) || quant < 5 || quant > 100) {
        Toastify({
            text: "escolha um numero entre 5 e 100",
            style: {
                background: 'red',
                color: 'white'
            }
        }).showToast()
        return
    }

    if (vetor.length === 0) {
        Toastify({
            text: "marque algum dos formatos de senha abaixo",
            style: {
                background: "#8BC34A",
                color: 'black'
            }
        }).showToast()
        return
    }


    
    caixaSenha.style.display = 'flex'
    
    let textlocale = caixaSenha.querySelector('.spangerar')
    
    textlocale.textContent = gerarSenha(quant, vetor)
    
    const copyico = document.getElementById('copyico')
    
    copyico.style.cursor = 'pointer'
    
    copyico.addEventListener('click', () => {
        navigator.clipboard.writeText(textlocale.textContent)
        copyico.classList.add('animate-ping')
        copyico.style.pointerEvents = 'none'
        setTimeout(() => {
            copyico.classList.remove('animate-ping')
            copyico.style.pointerEvents = 'auto'
        }, 1000);
    })
    
    copyico.addEventListener('touchstart', () => {
        navigator.clipboard.writeText(textlocale.textContent)
        window.alert('ate aqui funciona')
        copyico.classList.add('animate-ping')
        copyico.style.pointerEvents = 'none'
        setTimeout(() => {
            copyico.classList.remove('animate-ping')
            copyico.style.pointerEvents = 'auto'
        }, 1000);
    })
})
const botMH = document.getElementById('menuM')

const telamedia = window.matchMedia( '(min-width:1100px)') //retorna true quando a tela é igual ou maior que mil pixels

setInterval(() => {//verifica se o tamanho da tela é maior ou igual 800
    if (telamedia.matches == true) {// se for, fecha o menu
        headermenu.classList.remove('aberto')
    }
}, 1000);// esse codigo corrije o erro de abrir o menu em tela pequena e quando aumentar o menu ainda esta aberto quando deveria estar fechado

const headermenu = document.getElementById('headermenu')

botMH.addEventListener('click', () => {
    headermenu.classList.toggle('aberto')
})
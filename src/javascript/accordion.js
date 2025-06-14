const accordions = document.querySelectorAll('.accordion')

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        
        const body = accordion.querySelector('.accordion-body')
        const ico = accordion.querySelector('.ico')
        
        body.classList.toggle('activado')
        
        if (body.classList.contains('activado')) {
            ico.style.transform = 'rotate(180deg)'
        } else {
            ico.style.transform = 'rotate(0deg)'
        }
    })
})
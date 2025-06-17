const bot = document.getElementById('modalbot')
const fechar = document.getElementById('modalf')

bot.addEventListener('click', () => {
    const att = bot.getAttribute('data-modal')
    const modal = document.getElementById(att)

    modal.showModal()
    document.body.style.overflow = 'hidden'
})

fechar.addEventListener('click', () => {
    const attf = fechar.getAttribute('data-modal')
    const modal = document.getElementById(attf) 
    
    modal.close()
    document.body.style.overflow = 'auto'

})
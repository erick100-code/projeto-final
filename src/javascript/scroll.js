const c2 = document.getElementById('c2')
const raio = 40
const circunferencia = 2 * Math.PI * raio

const bottop = document.getElementById('bottop')
bottop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

c2.style.strokeDasharray = circunferencia
c2.style.strokeDashoffset = circunferencia

window.addEventListener('scroll', () => {
    const atual = window.scrollY
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const progresso = atual / maxScroll
    const offset = circunferencia * (1 - progresso)
    c2.style.strokeDashoffset = offset
})
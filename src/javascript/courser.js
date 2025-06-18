const car = document.querySelectorAll('.carbot')
const images = document.querySelectorAll('.coursel-images')
let atualmage = 0
const maximage = images.length
const sec = document.getElementById('courselsec')

let teste

car.forEach(car => {
    car.addEventListener('click', () => {
        let left = car.classList.contains('botleft')
    
        if (left) {
            atualmage -= 1
        } else {
            atualmage += 1
        }

        if (atualmage < 0) {
            atualmage = maximage - 1
        }

        if (atualmage >= maximage) {
            atualmage = 0
        }
        
        images.forEach(image => image.classList.remove('acendida'))
        
        
        images[atualmage].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })
        
   
         

        images[atualmage].classList.add('acendida')
    })
})

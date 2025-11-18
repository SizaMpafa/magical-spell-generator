const screen = document.querySelector(".spellArea")
const magics = document.querySelectorAll(".ingredientsList li")
const shoot = document.querySelector(".generateButton")
const revert = document.querySelector(".resetGeneration")

shoot.onclick = () => {
    let countdown  = 5
    const randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16)
    const timer = setInterval(() =>{
        countdown --;
        if(countdown > 0){
            screen.textContent  = countdown
        }else{
            clearInterval(timer)
            const magic = magics[Math.floor(Math.random() * magics.length)].textContent
            screen.textContent = `${magic}`
            screen.style.BackgroundColor = randomColor()

        }

    }, 2500)
}
revert.onclick = () => {
    screen.textContent = ""
}
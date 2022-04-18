 const burgerBtn = document.querySelector('.header__burger')
const burgerMenu = document.querySelector('.burger')
const burgerLogo = document.querySelector('.burger__logo')
const headerLogo = document.querySelector('.header__logo')
const darkScreen = document.querySelector('.dark-screen')
const burgerLinks = document.querySelectorAll('.burger__link')
let isBurgerOpen = false
let isAnimathionStop = true
let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);

const openBurger = () => {
  if (isAnimathionStop === true) {
    isAnimathionStop = false
    darkScreen.style.display = 'block'
    burgerBtn.classList.remove('header__burger--close')
    burgerBtn.classList.add('header__burger--open')
    burgerMenu.classList.add('burger--active')
    burgerMenu.classList.add('burger__animation-in')
    burgerMenu.classList.remove('burger__animation-out')
    burgerLogo.classList.add('burger__logo--open')
    headerLogo.classList.add('header__logo--hide')
    document.body.style.overflowY = 'hidden'
    burgerLogo.addEventListener('animationend', () => {
      isAnimathionStop = true
      isBurgerOpen = true
    })
  }

}

const closeBurger = () => {
    darkScreen.style.display = 'none'
    burgerBtn.classList.remove("header__burger--open")
    burgerBtn.classList.add("header__burger--close")
    burgerMenu.classList.remove('burger__animation-in')
    burgerMenu.classList.add('burger__animation-out')
    burgerLogo.classList.remove('burger__logo--open')
    headerLogo.classList.remove('header__logo--hide')
    document.body.style.overflowY = 'visible'
    setTimeout(removeClassActive, 1500)
    isBurgerOpen = false 
}

const removeClassActive = () => {
  burgerMenu.classList.remove('burger--active')
}

burgerBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (isBurgerOpen) {
    closeBurger()    
  } else {
    openBurger()
  }
})

document.querySelector('.dark-screen').addEventListener('click', closeBurger)

window.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault
    if (isBurgerOpen) {
      closeBurger()      
    }
  }
})

burgerLinks.forEach(item => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault
    if (isBurgerOpen) {
      closeBurger()  
    }
  })
})

window.addEventListener('resize', () => {
  if (isBurgerOpen) {
    closeBurger() 
  }
})

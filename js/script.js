//toggles navbar burger menu between open and close
let menu = document.querySelector('#menu_icon')
let navbar = document.querySelector('.navbar')
let menuToggle = document.querySelector('.bx-menu')
menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
}
navbar.onclick = () => {
    navbar.classList.replace('open', 'navbar')
    menu.classList.replace('bx-x', 'bx-menu')

}


// creates home image carousel sliding functionality
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
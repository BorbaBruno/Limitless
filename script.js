function openMenu() {
    document.body.classList.add('menu-expanded')
  }
  
function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
  
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(products)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function showNavOnScroll() {
    if (scrollY > 0) {
      navegacao.classList.add('scroll')
    } else {
      navegacao.classList.remove('scroll')
    }
  }

window.addEventListener('scroll', onScroll)
onScroll()


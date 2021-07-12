function setClass(className, present) {
    if (present) {
        document.body.classList.add(className)
    } else {
        document.body.classList.remove(className)
    }
}

(function initSidenav() {
    const navbarEl = document.querySelector('.navbar')
    const navbarBoundingRect = navbarEl.getBoundingClientRect()
    const navbarHeight = navbarBoundingRect.top + navbarBoundingRect.height + window.scrollY
    console.log(navbarHeight)

    const updateSidenavVisible = () => setClass('sidenav-visible', window.scrollY > navbarHeight)

    window.addEventListener('scroll', () => updateSidenavVisible())
    updateSidenavVisible()
})()


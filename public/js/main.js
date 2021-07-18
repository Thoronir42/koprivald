function setClass(className, present) {
    if (present) {
        document.body.classList.add(className)
    } else {
        document.body.classList.remove(className)
    }
}
function toggleHistoryDetail() {
    document.querySelector('.history-detail-prompt').classList.toggle('active')
}

;(function initSidenav() {
    const navbarEl = document.querySelector('.navbar')
    const navbarBoundingRect = navbarEl.getBoundingClientRect()
    const navbarHeight = navbarBoundingRect.top + navbarBoundingRect.height + window.scrollY

    const updateSidenavVisible = () => setClass('sidenav-visible', window.scrollY > navbarHeight)

    window.addEventListener('scroll', () => updateSidenavVisible())
    updateSidenavVisible()
})()

;(function initTooptips() {
    document.querySelectorAll('.marker').forEach((markerEl, i) => {
        const label = markerEl.querySelector('.header .label')

        const content = markerEl.querySelector('.content')
        content.remove()
        content.classList.remove('content')
        content.classList.add('history-tooltip-content')

        const t = tippy(label, {
            content: content,
            theme: 'koprivald',
        })
    })
})()


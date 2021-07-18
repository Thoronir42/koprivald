function setClass(className, present, target) {
    if (present) {
        target.classList.add(className)
    } else {
        target.classList.remove(className)
    }
}
function toggleHistoryDetail() {
    document.querySelector('.history-detail-prompt').classList.toggle('active')
}

function getUrlTop(/**string*/url) {
    const iHash = url.indexOf('#')
    return iHash === -1 ? url : url.substring(0, iHash)
}

function setActiveSection(/**HTMLHeadingElement?*/ section) {
    let title = "Kopřivald"
    let href = getUrlTop(location.href)
    let hash
    if (section) {
        title += " - " + (section.dataset['title'] || section.textContent)
        href += (hash = '#' + section.id)
    }

    document.querySelectorAll('.sidenav .link').forEach((navEl) => {
        const active = navEl.querySelector('a').getAttribute('href') === hash
        setClass('active', active, navEl)
    })

    document.title = title
    if (href !== location.href) {
        history.replaceState(undefined, title, href)
    }
}

;(function initSidenav() {
    const sidenavEl = document.querySelector('.sidenav')

    window.scrollTargets = []

    const updateScrollTargets = () => {
        scrollTargets.splice(0)
        sidenavEl.querySelectorAll('a').forEach((anchorEl) => {
            const [, anchor] = anchorEl.href.split('#')
            const anchorTarget = anchor && document.querySelector('#' + anchor)
            anchorTarget && scrollTargets.push(anchorTarget)
        })

        scrollTargets.sort((a, b) => a.offsetTop - b.offsetTop)

        updateActiveNavItem()
    }

    const updateSidenavVisible = () => setClass('sidenav-visible', window.scrollY >= window.scrollTargets[0].offsetTop, document.body)
    const updateActiveNavItem = () => {
        let activeSection
        for (let i = window.scrollTargets.length - 1; i >= 0; i--) {
            const el = scrollTargets[i]
            if (el.offsetTop - 20 <= window.scrollY) {
                activeSection = el
                break
            }
        }


        if (!activeSection) {
            location.hash && setActiveSection()
        } else {
            setActiveSection(activeSection)
        }
    }

    window.addEventListener('resize', () => updateScrollTargets())
    updateScrollTargets()

    window.addEventListener('scroll', () => {
        updateSidenavVisible()
        updateActiveNavItem()
    })
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


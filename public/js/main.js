function setClass(className, present, target) {
    if (present) {
        target.classList.add(className)
    } else {
        target.classList.remove(className)
    }
}

function toggleHistoryDetail() {
    document.querySelector('.detail-prompt').classList.toggle('active')
}

function getUrlTop(/**string*/url) {
    const iHash = url.indexOf('#')
    return iHash === -1 ? url : url.substring(0, iHash)
}

function setActiveSection(container, /**HTMLHeadingElement?*/ section) {
    let title = "Kopřivald"
    let href = getUrlTop(location.href)
    let hash
    if (section) {
        title += " - " + (section.dataset['title'] || section.textContent)
        href += (hash = '#' + section.id)
    }

    container.querySelectorAll('.link').forEach((navEl) => {
        let linkHref = navEl.querySelector('a').getAttribute('href');
        const active = linkHref &&  linkHref.includes(hash)
        setClass('active', active, navEl)
    })

    document.title = title
    if (href !== location.href) {
        history.replaceState(undefined, title, href)
    }
}

// Leave some time for browser to scroll to anchor on new page load
setTimeout(function initSidenav() {
    const sidenavEl = document.querySelector('.navbar')
    // if we're not on the homepage, use default behavior
    if (!sidenavEl || location.pathname !== '/') {
        return
    }

    const brandLink = sidenavEl.querySelector('.brand a')
    brandLink.addEventListener('click', (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 0,
        })
    })

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
            // compensate for scroll-margin
            if (el.offsetTop - 128 <= window.scrollY) {
                activeSection = el
                break
            }
        }


        if (!activeSection) {
            location.hash && setActiveSection(sidenavEl)
        } else {
            setActiveSection(sidenavEl, activeSection)
        }
    }

    window.addEventListener('resize', () => updateScrollTargets())
    updateScrollTargets();

    window.addEventListener('scroll', () => {
        updateSidenavVisible()
        updateActiveNavItem()
    })
    updateSidenavVisible()
}, 100)

;(function initTooptips() {
    document.querySelectorAll('.marker').forEach((markerEl, i) => {
        const label = markerEl.querySelector('.header .label')

        const content = markerEl.querySelector('.content')
        content.remove()
        content.classList.remove('content')
        content.classList.add('history-tooltip-content')

        const singleChild = content.children.length === 1 && content.children[0]
        if (singleChild && singleChild.className === 'images') {
            if (markerEl.classList.contains('replace-label')) {
                label.innerHTML = ''
            }
            label.classList.add('label-image')
            const labelImages = document.createElement('div')
            label.appendChild(labelImages)
            labelImages.outerHTML = singleChild.outerHTML
            content.classList.add('images-blown-out')
        }

        let maxWidth
        if (markerEl.classList.contains('wide-tooltip')) {
            content.classList.add('wide-tooltip')
            maxWidth = '95vw';
        }
        const t = tippy(label, {
            content: content,
            theme: 'koprivald',
            interactive: true,
            appendTo: document.body,
            maxWidth,
        })
    })
})()

;(function initImageGalleries() {
    const initGalleryWith = (element) => {
        const items = element.querySelector('.items')
        /** @type {HTMLDivElement} */
        const positionerEl = element.querySelector('.positioner')

        let activeItem = 0
        const setActiveItem = (n) => {
            if (n === activeItem) {
                return
            }

            activeItem = n

            // positionerEl
            for (let i = 0; i < positionerEl.children.length; i++) {
                const peg = positionerEl.children[i]

                if (peg.nodeType === Node.TEXT_NODE) {
                    return
                }
                if (i === n) {
                    peg.classList.add('active')
                } else {
                    peg.classList.remove('active')
                }
            }

        }

        const scrollTo = (n) => {
            const itemEl = items.children[n]
            const offset = itemEl.offsetLeft - items.offsetLeft
            items.scrollTo({left: offset, behavior: "smooth"})
        }

        const updateActiveItem = () => {
            // This is imprecise as it omits gap...
            const n = Math.floor(items.scrollLeft / items.clientWidth)
            setActiveItem(n)
        }
        items.addEventListener('scroll', updateActiveItem)

        positionerEl.querySelectorAll('.peg').forEach((pegEl, n) => {
            pegEl.addEventListener('click', () => scrollTo(n))
        })

        updateActiveItem()
    }

    document.querySelectorAll('.image-gallery').forEach((el) => initGalleryWith(el))
})()

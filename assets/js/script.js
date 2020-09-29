function initnavbarScroll(){
    const navbarScroll = document.querySelectorAll('.js-navscroll a[href^="#"]')

    scrollToSection = (e) => {
        e.preventDefault()
        const href = e.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        const top = section.offsetTop

        window.scrollTo({
            top: top,
            behavior: 'smooth',
        })
    }

    navbarScroll.forEach((link) =>{
        link.addEventListener('click', scrollToSection)
    })
}

initnavbarScroll()

function initAnimationScroll(){
    const sections = document.querySelectorAll('.js-scroll')
    if(sections.length){
        const windowHalf = window.innerHeight * 0.7

        animaScroll = () => {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top
                const isSectionVisible = (sectionTop - windowHalf) < 0
                if(isSectionVisible){
                    section.classList.add('ativo')
                }else{
                    section.classList.remove('ativo')
                }
            })
        }

        animaScroll()

        window.addEventListener('scroll', animaScroll)
    }
}

initAnimationScroll()

function initModal() {
    const buttonOpen = document.querySelector('[data-modal="open"]')
    const buttonClose = document.querySelector('[data-modal="close"]')
    const containerModal = document.querySelector('[data-modal="container"]')


    if(buttonOpen && buttonClose && containerModal){
        function openModal(e){
            e.preventDefault()
            containerModal.classList.add('active') 
            console.log('oi')
        }

        function closeModal(e){
            e.preventDefault()
            containerModal.classList.remove('active') 
            console.log('tchau')
        }

        function clickOutsideModal(e){
            if(e.target === this) {
                closeModal(e)
            }

        }

        buttonOpen.addEventListener('click', openModal)
        buttonClose.addEventListener('click', closeModal)
        containerModal.addEventListener('click', clickOutsideModal)
    }
}

initModal()
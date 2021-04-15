const btn_menu = document.querySelector('.btn-menu'),
    responsive_menu = document.querySelector('.responsive-menu-dropdown'),
    dropdown_add = document.querySelector('.resp-none'),
    cargo_text = document.querySelector('.cargo-info-text'),
    langLogin = document.querySelector('.langLogin')

btn_menu.addEventListener('click', (e) => {
    if (e.currentTarget.textContent === 'Close') {
        e.currentTarget.textContent = 'Menu'
        responsive_menu.style.display = 'none'
        document.body.style.overflowY = 'auto'
        document.body.style.height = 'auto'
        dropdown_add.style.display = 'block'
        cargo_text.classList.remove('active');
        langLogin.classList.remove('active')
    } else {
        e.currentTarget.textContent = 'Close'
        responsive_menu.style.display = 'block'
        document.body.style.overflowY = 'hidden'
        document.body.style.height = '100vh'
        dropdown_add.style.display = 'none'
        cargo_text.classList.add('active');
        langLogin.classList.add('active')
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        document.body.style.overflowY = 'auto'
    }
})

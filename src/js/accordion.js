const card = document.querySelectorAll('.accordion .card'),
    toggle_icon = document.querySelectorAll('.toggle-icon'),
    btn_toggle = document.querySelectorAll('.btn_toggle'),
    toggle_card = document.querySelectorAll('.toggle_card');

[...btn_toggle].map((btn, index) => {
    btn.addEventListener('click', () => {
        if (!toggle_card[index].className.includes('show')) {
            card[index].classList.add('active-accordion');
            toggle_icon[index].classList.add('rotate');

            for (let i = 0; i < card.length; i++) {
                if (i !== index) {
                    card[i].classList.remove('active-accordion')
                    toggle_icon[i].classList.remove('rotate');
                }
            }
        } else {
            card[index].classList.remove('active-accordion');
            toggle_icon[index].classList.remove('rotate');
        }
    })
});

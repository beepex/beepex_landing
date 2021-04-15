const cart = document.querySelectorAll('.foreign-address-info-container'),
    info = document.querySelectorAll('.foreign-address-info-container-info');

[...cart].map((c, i) => {
    c.addEventListener('click', () => {
        let area = document.createElement('textarea');
        let text = info[i].innerHTML;
        document.body.appendChild(area);
        area.value = text;
        area.select();
        document.execCommand('copy');
        document.body.removeChild(area);
    })
})

const cart_owner_input = document.getElementById('cart_owner'),
    cart_number_input = document.getElementById('cart_number'),
    month_input = document.querySelector('.month'),
    year_input = document.querySelector('.year'),
    cvv_input = document.getElementById('cvv'),
    cart_number = document.querySelector('.flip_card-cards-front-number'),
    cart_front = document.querySelector('.flip_card-cards-front'),
    cart_owner = document.querySelector('.flip_card-cards-front-user'),
    cart_cvv = document.querySelector('.flip_card-cards-back-cvv'),
    cart_month = document.querySelector('.cart_month'),
    cart_year = document.querySelector('.cart_year');

cart_owner_input.addEventListener('input', (e) => {
    const _this = e.target;
    if (_this.value === '') {
        cart_owner.innerHTML = 'Ad Soyad'
    } else {
        cart_owner.innerHTML = _this.value
    }
})

cart_number_input.addEventListener('input', (e) => {
    const _this = e.target;
    if (_this.value === '') {
        cart_number.innerHTML = '1234 56** **** 3456'
    } else {
        cart_number.innerHTML = _this.value.replace(/\d/g, '*')
    }
})

$(function () {
    $(document).on('input', '.month', function () {
        let a = $(this).val();
        if ($(this).val().length > 2) {
            a = a < 0 ? a * -1 : a;
            $(this).val(a % 10 % 5 === 0 ? 1 : a % 10 % 5);
        }
        cart_month.textContent = $(this).val();
    })
    $(document).on('input', '.year', function () {
        let b = $(this).val()
        if ($(this).val().length > 2) {
            b = b < 0 ? b * -1 : b;
            $(this).val(b % 10 % 5 === 0 ? 1 : b % 10 % 5);
        }
        cart_year.textContent = $(this).val();
    })
    $(document).on('input', '#cvv', function () {
        let a = $(this).val()
        if ($(this).val().length > 4) {
            a = a < 0 ? a * -1 : a;
            $(this).val(a % 10 % 5 === 0 ? 1 : a % 10 % 5);
        }

        cart_cvv.textContent = $(this).val().replaceAll(/[0-9]/g, '*');
    })
})


$(cart_number_input).keydown(function (e) {
    let _this = $(this).val().split(" ").join("");
    let isText = ''
    if (_this.length > 0) {
        _this = _this.match(new RegExp('.{1,4}', 'g')).join(" ");
        if (isNumber(e.currentTarget.value)) {
            isText = $(this).val().replaceAll(/^[a-zA-Z]+$/g, '');
            $(this).val(isText)
        }
    }
    $(this).val(_this)

});

function isNumber(value) {
    let checkNumber = /^[a-zA-Z]+$/g

    return !!value.matchAll(checkNumber);
}

year_input.addEventListener('input', (e) => {
    if (e.target.value === '') {
        cart_year.innerHTML = '21'
    } else {
        cart_year.innerHTML = e.target.value
    }
})

cvv_input.addEventListener('input', (e) => {
    cart_front.classList.add('input_focused')
    if (e.target.value === '') {
        cart_cvv.innerHTML = '***'
    } else {
        cart_cvv.innerHTML = e.target.value;
    }
})

cvv_input.addEventListener('focus', (e) => {
    cart_cvv.innerHTML = e.target.value;
    cart_front.classList.add('input_focused')
})

cvv_input.addEventListener('blur', (e) => {
    cart_front.classList.remove('input_focused');
})

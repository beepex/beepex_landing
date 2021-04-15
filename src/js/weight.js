const input_weight = document.querySelector('.form-input__weight');
const label_weight = document.querySelector('.form-label__weight');

input_weight.addEventListener('blur', () => {
    if (input_weight.value === "") {
        input_weight.classList.remove('active-input');
        label_weight.classList.remove('active-label');
    }
});

input_weight.addEventListener('focus', () => {
    input_weight.classList.add('active-input');
    label_weight.classList.add('active-label');
});

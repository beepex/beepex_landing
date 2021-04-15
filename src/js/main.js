/*------------------------------------- Form Label Animation Start -------------------------------------*/

const form_label = document.querySelectorAll('.form-label');
const form_input = document.querySelectorAll('.form-input');


[...form_input].map((input, index) => {
    input.addEventListener('focus', () => {
        form_label[index].classList.add('active');
    });
});


[...form_label].map((label, index) => {
    form_input[index].addEventListener('blur', () => {
        form_input[index].value === "" ? label.classList.remove('active') : '';
    })
})

/*------------------------------------- Form Label Animation End -------------------------------------*/

/*------------------------------------- Form Input Show And Hide Password Start -------------------------------------*/

const input_pass = document.querySelectorAll('.input_password');
const btn_eye = document.querySelectorAll('.btn-eye');
const eye_icon = document.querySelectorAll('.btn-eye img');

[...btn_eye].map((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (input_pass[index].type === 'password') {
            input_pass[index].type = 'text';
            eye_icon[index].src = './assets/svgs/eye.svg';
        } else {
            input_pass[index].type = 'password';
            eye_icon[index].src = './assets/svgs/eye-closed.svg';
        }
    })
});

/* Prevent Copy and Paste from inputs */
[...input_pass].map(input_p => {
    input_p.addEventListener('paste', (e) => {
        e.preventDefault();
    });
    input_p.addEventListener('copy', (e) => {
        e.preventDefault();
    })
})

/*------------------------------------- Form Input Show And Hide Password End -------------------------------------*/

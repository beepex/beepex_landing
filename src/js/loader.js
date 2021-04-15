const loader = document.querySelector('.loader'),
    success_wrapper = document.querySelector('.success-wrapper');

window.onload = () => {
    setTimeout(() => {
        loader.style.display = 'none';
        success_wrapper.style.display = 'block';
    }, 5000)
}

const wrapper = document.querySelector(".wrapper");
const wrapper_item = document.querySelectorAll(".wrapper-item");
const prev = document.querySelector(".controller-prev");
const next = document.querySelector(".controller-next");
const indicatorParent = document.querySelector('.controller');
const indicators = document.querySelectorAll('.controller-item');

let index = 0;
let w = wrapper_item[0].clientWidth;

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        document.querySelector('.controller-item.active').classList.remove('active');
        indicator.classList.add('active');
        wrapper.style.transform = 'translateX(' + (i) * -w + 'px)';
        index = i;
    });
});

prev.addEventListener('click', function () {
    index = (index > 0) ? index - 1 : 0;
    document.querySelector('.controller-item.active').classList.remove('active');
    indicatorParent.children[index + 1].classList.add('active');
    wrapper.style.transform = 'translateX(' + (index) * -w + 'px)';
    if (index === 1) {
        wrapper.style.transform = 'translateX(' + (index) * -w * wrapper_item.length - 1 + 'px)';
    }
    console.log(index, "prev")
});

next.addEventListener('click', function () {
    /*index = (index < wrapper_item.length - 1) ? index + 1 : wrapper_item.length - 1;*/
    index = (index < wrapper_item.length - 1) ? index + 1 : wrapper_item.length - 1;
    console.log(index, "next")
    document.querySelector('.controller-item.active').classList.remove('active');
    indicatorParent.children[index + 1].classList.add('active');
    wrapper.style.transform = 'translateX(' + (index) * -w + 'px)';
});


/*
let w = wrapper_item[0].clientWidth;
let initial = 0;

next.addEventListener('click', slideToNext);
prev.addEventListener('click', slideToPrev);

[...controller_item].forEach((controller, index) => {
    controller.onclick = () => slideToActive(controller, index);
})

let t, l, matrix, transformValue;
l = wrapper_item.length - 1;
let wrapperIndex = 0;

function slideToPrev() {
    t = window.getComputedStyle(wrapper);
    matrix = t.transform;
    transformValue = matrix.slice(matrix.length - 5, matrix.length - 4);
    console.log(transformValue)
    if (matrix === "none" || transformValue === "0") {
        initial -= l * Number(w);
        wrapper.style.transform = `translateX(${initial}px)`
    } else {
        initial += w;
        wrapper.style.transform = `translateX(${initial}px)`
    }
}

function slideToNext() {
    t = window.getComputedStyle(wrapper)
    matrix = t.transform;
    transformValue = matrix.slice(matrix.length - 8, matrix.length - 4);
    if (transformValue === String(w * l)) {
        initial += l * Number(w);
        wrapper.style.transform = `translateX(${initial}px)`
    } else {
        initial -= w;
        wrapper.style.transform = `translateX(${initial}px)`
    }
}

function slideToActive(controller, index) {
    wrapperIndex = index;
    document.querySelector('.controller-item.active').classList.remove("active");
    controller.classList.add("active");
    wrapper.style.transform = `translate(${wrapperIndex * w * -1}px)`;
}*/

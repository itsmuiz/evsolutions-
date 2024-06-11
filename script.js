let sideBar = document.querySelector('.side-bar');
let navBar = document.querySelector('nav');
let menu = document.querySelector('.icon');

menu.addEventListener('click', () => {
    if (sideBar.style.right === '0%') {
        sideBar.style.right = '-100%';
        sideBar.style.display = 'none';
        menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    } else {
        sideBar.style.right = '0%';
        sideBar.style.display = 'block';
        menu.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }
});



const slider = document.querySelector('.slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function () {
    const slides = document.querySelectorAll('.slides');

    slider.appendChild(slides[0]);
});
prev.addEventListener('click', function () {
    const slides = document.querySelectorAll('.slides');

    slider.prepend(slides[slides.length - 1]);
});

// the code for on scroll transition

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log('entry: ', entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

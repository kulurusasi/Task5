const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderImages = document.querySelector('.slider-images');
const images = document.querySelectorAll('.slider-images img');

let index = 0;
const totalImages = images.length;

function showImage() {
    sliderImages.style.transform = `translateX(${-index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    index = (index === 0) ? totalImages - 1 : index - 1;
    showImage();
});

nextBtn.addEventListener('click', () => {
    index = (index === totalImages - 1) ? 0 : index + 1;
    showImage();
});

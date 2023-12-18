const slides = document.querySelectorAll(".slide")
const left = document.querySelector('.left')
const main = document.getElementById('main')
const right = document.querySelector('.right')
let counter = 0;
console.log(slides);

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
)

const goPrev = () => {
    if (counter == 0) {
        counter = slides.length - 1;
        slider();
    } else {
        counter--;
        slider();
    }

    // counter--;
    // slider();

}

const goNext = () => {
    if (counter == slides.length - 1) {
        counter = 0;
        slider();
    } else {
        counter++;
        slider();
    }

    // counter++ x
    // slider();

}

const slider = () => {

    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    )


}


// setInterval(() => goNext(), 3000)

// main.addEventListener("mouseout", () => {
//     setInterval(() => goNext(), 3000)
// });


// main.addEventListener("mouseover", () => {
//     clearInterval(() => goNext());
// });
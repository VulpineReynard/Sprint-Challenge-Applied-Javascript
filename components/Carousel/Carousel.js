class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.leftButton = carousel.querySelector('.left-button');
        this.rightButton = carousel.querySelector('.right-button');
        this.images = carousel.querySelectorAll('img');
        this.imgData = this.images.forEach(img => img.dataset.img);
        this.currentImg = carousel.querySelector(`img[data-img='${this.imgData}']`);
        console.log(this.currentImg);
        console.log(this.leftButton);
        console.log(this.rightButton);

        this.rightButton.addEventListener('click', () => this.slideRight());
        this.leftButton.addEventListener('click', () => this.slideLeft());
    }
    slideRight() {
        this.images.forEach(img => img.style.display = 'none');
    }
    slideLeft() {

    }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);
console.log(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

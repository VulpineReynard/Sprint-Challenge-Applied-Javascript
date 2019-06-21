class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.leftButton = carousel.querySelector('.left-button');
        this.rightButton = carousel.querySelector('.right-button');
        this.images = carousel.querySelectorAll('img');
        this.index = 0;
        console.log(this.images.length);
        console.log(this.leftButton);
        console.log(this.rightButton);

        this.rightButton.addEventListener('click', () => this.slideRight());
        this.leftButton.addEventListener('click', () => this.slideLeft());
    }
    slideRight() {
        if(this.index === 3) {
            this.index = 0;
            let currImg = this.images[this.index];
            this.images.forEach(img => img.classList.add('img-hidden'));
            currImg.classList.remove('img-hidden');
            TweenMax.from(currImg, 1, {opacity: 0});
            console.log(currImg);
        } else {
            this.index++;
            let currImg = this.images[this.index];
            this.images.forEach(img => img.classList.add('img-hidden'));
            currImg.classList.remove('img-hidden');
            TweenMax.from(currImg, 1, {opacity: 0});
            console.log(currImg);
        }
    }
    slideLeft() {
        if(this.index === 0) {
            this.index = 3;
            let currImg = this.images[this.index];
            this.images.forEach(img => img.classList.add('img-hidden'));
            this.images[this.index].classList.remove('img-hidden');
            TweenMax.from(currImg, 1, {opacity: 0});
        } else {
            this.index--;
            let currImg = this.images[this.index];
            this.images.forEach(img => img.classList.add('img-hidden'));
            this.images[this.index].classList.remove('img-hidden');
            TweenMax.from(currImg, 1, {opacity: 0});
        }
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

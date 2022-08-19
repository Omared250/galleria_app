# galleria_app
A place where you will find a little review of important art around the world.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Navigate the page easily and intuitively
- Have a detail information about the paint by clicking on the paint that the user wants
- Start and Stop the slideShow by clicking on the header of the page
- See the whole page in the screen of their preference
- Have a better view of the paint by clicking on the option "VIEW IMAGE" that is present in the detail of each paint
- Have an extended information about the paint by clicking on the "GO TO SOURCE" option

### Screenshot

- Desktop Desing
![Home Design](https://github.com/Omared250/galleria_app/blob/main/src/design/Desktop-Home.png)
![Detail Design](https://github.com/Omared250/galleria_app/blob/main/src/design/Desktop-Detail.png)

- Tablet Desing
![Home Design](https://github.com/Omared250/galleria_app/blob/main/src/design/Tablet-Home.png)
![Detail Design](https://github.com/Omared250/galleria_app/blob/main/src/design/Tablet-Detail.png)

- Mobile Desing

![Home Design](https://github.com/Omared250/galleria_app/blob/main/src/design/Mobile-Home.png)
![Detail Design](https://github.com/Omared250/galleria_app/blob/main/src/design/Mobile-Detail.png)

### Links

- Solution URL: [https://github.com/Omared250/galleria_app]
- Live Site URL: [https://omared250.github.io/galleria_app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Grid Display
- Responsive Design
- [Vanilla JS]
- [Architecture - MVC]

### What I learned

This project has taught me so much about handling the GRID since in previous projects I had only used FLEX and now in this one making use of GRID 
has given me the opportunity to have more options for future projects. I can also say that my confidence with Vanilla JS has grown a lot and 
I like that very much, I know that they are not perfect solutions but I keep learning more and more.

```js proud-of-this:
const footerSlide = function(slidePosition) {
    try {
        const slides = document.querySelectorAll('.slide');
        const backwardSlide = document.querySelector('.button__slider__left');
        const forwardSlide = document.querySelector('.button__slider__right');
        const progressBar = document.querySelector('.footer__progress__bar');

        let curSlide = slidePosition;
        const maxSlide = slides.length;

        progressBar.style.width = `${((curSlide + 1) / maxSlide) * 100}%`

        // Next Slide
        const nextSlide = function() {
            if(curSlide === maxSlide - 1) {
                curSlide = 0;
            } else {
                curSlide++;
            }
            slider(curSlide);
        }
        
        // Prev Slide
        const prevSlide = function() {
            if (curSlide === 0) {
                curSlide = maxSlide - 1;
            } else {
                curSlide--;
            }
            slider(curSlide);
        }

        forwardSlide.addEventListener('click', e => {
            e.preventDefault();
            nextSlide();
            const paintFilter = model.artState.art.filter((p, i) => i === curSlide ? p : null)
            footerView.renderFooter(paintFilter[0]);
            footerSlide(curSlide);
            showGalleryPicture(curSlide);
        });

        backwardSlide.addEventListener('click', e => {
            e.preventDefault();
            prevSlide();
            const paintFilter = model.artState.art.filter((p, i) => i === curSlide ? p : null)
            footerView.renderFooter(paintFilter[0]);
            footerSlide(curSlide);
            showGalleryPicture(curSlide);

        });
        
    } catch (err) {
        console.error(err);
    }
}
```

## Author

- Github - [Omar Ascanio](https://github.com/Omared250)
- Frontend Mentor - [@omared250](https://www.frontendmentor.io/profile/Omared250)

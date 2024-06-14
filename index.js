let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2')
let button = document.querySelector('button');

button.addEventListener('click', e => {
    let randomNumber1 = Math.floor(6 * Math.random()) + 1;
    img1.setAttribute('src', `images/dice${randomNumber1}.png`);
    let randomNumber2 = Math.floor(6 * Math.random()) + 1;
    img2.setAttribute('src', `images/dice${randomNumber2}.png`);
})






let img = document.querySelector('.signal');
let race = document.querySelector('#race');
let brake = document.querySelector('#brake');
setInterval(() => {
    let randomCount = Math.floor(Math.random() * 3);
    let images = ['red.jpg', 'yellow.jpg', 'green.jpg'];
    img.src = images[randomCount]
}, 3000)
race.addEventListener('click', () => {
    document.querySelector('.car').style.animationPlayState  = 'running'
})
brake.addEventListener('click', () => {
    document.querySelector('.car').style.animationPlayState  = 'paused'
})

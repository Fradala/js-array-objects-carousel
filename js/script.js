const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



const wrapperElement = document.querySelector('section.wrapper')

for (let i = 0; i < images.length; i ++) {
    const image = images[i]
    const newImageElement = document.createElement('img')
    newImageElement.src = image[i];
    wrapperElement.appendChild(newImageElement)
}

let activeindex = 0;
const imageElements = document.querySelectorAll('main section.wrapper img');
imageElements[activeindex].classList.add('active');

const downButton = document.querySelector('button.bottone-down');

downButton.addEventListener('click', function(){
    imageElements[activeindex].classList.remove('active');
    activeindex ++;
    imageElements[activeindex].classList.add('active');
})

const upButton = document.querySelector('button.bottone-up');

upButton.addEventListener('click', function(){
    imageElements[activeindex].classList.remove('active');
    activeindex = activeindex - 1;
    imageElements[activeindex].classList.add('active');
})
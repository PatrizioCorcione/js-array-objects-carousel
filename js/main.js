
const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    
    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    
    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const nextJs = document.querySelector(".my-next");
const previusJs = document.querySelector(".my-previous");
const myCoaroselJs = document.querySelector(".my-carousel-images");
const myThumbnailsJs = document.querySelector(".my-thumbnails");
let counter = 0;

images.forEach(element => {
    myCoaroselJs.innerHTML += 
    `
    <div class="my-carousel-item">
        <img class="img-fluid" src=${element.url} picture">
        <div class="item-description px-3">
            <h2>${element.title}</h2>
            <p>${element.description}</p>
        </div>
    </div>

    `
});

const Imgs = document.querySelectorAll(".my-carousel-item");
Imgs[0].classList.add("active");

images.forEach(element => {
    myThumbnailsJs.innerHTML += 
    `
    <div class="my-thumbnail">
      <img class="img-fluid" src=${element.url}>
    </div>

    `
});

const thumbs = document.querySelectorAll(".my-thumbnail");
thumbs[0].classList.add("active");

nextJs.addEventListener("click", () => { 

    thumbs[counter].classList.remove("active");
    Imgs[counter].classList.remove("active");
    counter++;
    if (counter == images.length) { 
        counter = 0;
        
    }
    thumbs[counter].classList.add("active");
    Imgs[counter].classList.add("active");
    
});

previusJs.addEventListener("click", () => { 

    thumbs[counter].classList.remove("active");
    Imgs[counter].classList.remove("active");
    counter--;
    if (counter < 0) { 
        counter = images.length - 1;
        
    }
    thumbs[counter].classList.add("active");
    Imgs[counter].classList.add("active");
    
});
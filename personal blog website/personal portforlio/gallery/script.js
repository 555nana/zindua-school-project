// JavaScript for Image Modal
let modal = document.getElementById('modal');
let modalImg = document.getElementById('modal-image');
let images = document.querySelectorAll('.gallery-item');
let currentIndex;

images.forEach((img, index) => {
    img.onclick = function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        currentIndex = index;
    }
});

let closeBtn = document.querySelector('.close');
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

let nextBtn = document.querySelector('.next');
nextBtn.onclick = function() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
}

let prevBtn = document.querySelector('.prev');
prevBtn.onclick = function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

/*Modal*/
var modalElement = document.getElementById('myModal');
var imageElement = document.getElementById('myImage');
var imageElement2 = document.getElementById('myImage2');
var imageElement3 = document.getElementById('myImage3');

var myModal = new bootstrap.Modal(modalElement, {});

var showModal = function() {
    myModal.show();
};

imageElement.addEventListener('click', showModal);
imageElement2.addEventListener('click', showModal);
imageElement3.addEventListener('click', showModal);


/*Colocar imagenes en el modal | Place images in the modal */
let icono1 = document.querySelector('.sorting-machine');
let icono2 = document.querySelector('.marmita');
let icono3 = document.querySelector('.labview');


let images = document.querySelectorAll('.d-block');
let items = document.querySelectorAll('.carousel-item');
let buttonprev = document.querySelector('.carousel-control-prev');
let buttonnext = document.querySelector('.carousel-control-next');



let imagesArray1 = ['images/Sorting_Machine.JPG', 'images/Sorting_Machine_2.JPG', 'images/Sorting_Machine_3.JPG'];
let imagesArray2 = ['images/marmita.JPG', 'images/marmita.JPG', 'images/marmita.JPG'];
let imagesArray3 = ['images/LabView_Marmita_1.png', 'images/LabView_Marmita_2.png', 'images/LabView_Marmita_3.png'];


icono1.addEventListener('click', function() {
    buttonprev.style.display = 'block';
    buttonnext.style.display = 'block';
    images[0].src = imagesArray1[0];
    images[1].src = imagesArray1[1];
    images[2].src = imagesArray1[2];
});

icono2.addEventListener('click', function() {
    buttonprev.style.display = 'none';
    buttonnext.style.display = 'none';
    images[0].src = imagesArray2[0];
    images[1].src = imagesArray2[1];
    images[2].src = imagesArray2[2];
});

icono3.addEventListener('click', function() {
    buttonprev.style.display = 'block';
    buttonnext.style.display = 'block';
    images[0].src = imagesArray3[0];
    images[1].src = imagesArray3[1];
    images[2].src = imagesArray3[2];
});





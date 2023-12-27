var modal1 = document.getElementById("my-modal-1");
var img1 = document.getElementById("image-modal-1");
var modalImg1 = document.getElementById("image-1");

var modal2 = document.getElementById("my-modal-2");
var img2 = document.getElementById("image-modal-2");
var modalImg2 = document.getElementById("image-2");

var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];


img1.onclick = function () {
    modal1.style.display = "block";
    modalImg1.src = this.src;
}

img2.onclick = function () {
    modal2.style.display = "block";
    modalImg2.src = this.src;
}


span1.onclick = function () {
    modal1.style.display = "none";
  
}

span2.onclick = function () {
    modal2.style.display = "none";
  
}


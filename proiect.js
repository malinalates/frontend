//validate contact
function validateForm() {
    let x = document.getElementById("nume").value;
    var error = 0;
    if (x == "") {

        document.getElementById("nameerror").innerHTML = "<span style='color:#f00'> Please enter your name. </span>"
        error++;
    }
    else {
        document.getElementById("nameerror").innerHTML =  "OK!";

    }

    let y = document.getElementById("email").value;
    if (y !== "" && y.includes("@")) {
        document.getElementById("emailerror").innerHTML = "OK!"
    }
    else {
        document.getElementById("emailerror").innerHTML = "<span style='color:#f00'>Enter a valid email address! </span>"
        error++;

    }

    let z = document.getElementById("mesaj").value;
    if (z.length < 15) {
        document.getElementById("mesajerror").innerHTML = "<span style='color:#f00'>Message too short.</span>";
        error++;
    }
    else {
        document.getElementById("mesajerror").innerHTML = "OK!"
    }
    console.log(error);

    if (error == 0) {
        document.getElementById("myform").submit();
    }
}
document.addEventListener('submit', function (evt) {
    evt.preventDefault();
}, false);
const formumeu = document.getElementById("myform");

formumeu.addEventListener("submit", validateForm);


//Portofolio
document.addEventListener('DOMContentLoaded',function(){
    var photo = new SmartPhoto(".js-img-viewer");
    photo.on('change',function(){
        console.log('change');
    });
    photo.on('close',function(){
        console.log('close');
    });
    photo.on('swipestart',function(){
        console.log('swipestart');
    });
    photo.on('swipeend',function(){
        console.log('swipeend');
    });
    photo.on('loadall',function(){
        console.log('loadall');
    });
    photo.on('zoomin',function(){
        console.log('zoomin');
    });
    photo.on('zoomout',function(){
        console.log('zoomout');
    });
    photo.on('open',function(){
        console.log('open');
    });
});

//OurNews
$(document).ready(function(){
    $('section, header').scrollFx({
      precision: 5,
      scaleElements: '.row',
      opacityElements: '.image'
    });
  });


var img = document.getElementById("img");
var download = document.getElementById("download");
var reset = document.querySelector("span");
var upload = document.getElementById("Upload");
var imgBox = document.getElementById("img-box")

var download = document.getElementById("download");
var saturate = document.getElementById("saturate");
var contrast = document.getElementById("contrast");
var brightness = document.getElementById("brightness");
var sepia = document.getElementById("sepia");
var grayscale = document.getElementById("grayscale");
var blur = document.getElementById("blur");
var hue_rotate = document.getElementById("hue-rotate");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d')

function resetValue(){
    img.style.filter = "none";
    saturate.value = "100";
    contrast.value = "100";
    brightness.value = "100";
    sepia.value = "0";
    grayscale.value = "0";
    blur.value = "0";
    hue_rotate.value = "0";
}
window.addEventListener('load', function () {
    reset.style.display = "none";
    download.style.display = "none";
})
upload.addEventListener('change', function () {
    resetValue();
    reset.style.display = "block";
    download.style.display = "block";
    var file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function () {
        img.src = file.result
    }
    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        img.style.display = "none";
    }
})
var fillters = document.querySelectorAll(".fillters ul li input");
fillters.forEach(filtter => {
    filtter.addEventListener('input', function () {
        ctx.filter = `
             saturate(${saturate.value}%)
             contrast(${contrast.value}%)
             brightness(${brightness.value}%)
             sepia(${sepia.value}%)
             grayscale(${grayscale.value})
             blur(${blur.value}px)
             hue-rotate(${hue_rotate.value}deg)
            `
            ctx.drawImage(img,0,0,canvas.width,canvas.height);
    })
})
reset.addEventListener('click' , function(){
    resetValue()
})
var body = document.querySelector("body")
var checkedMode = document.querySelector("#flexSwitchCheckChecked");
var container = document.querySelector(".container");
var text1 = document.querySelectorAll(".upload label , .fillters ul , .fillters ul li , .home");
var border1 = document.querySelectorAll(".upload label");
var bg = document.querySelectorAll(".fillters ul li a, span");
checkedMode.addEventListener('click' , function(){
    if(this.checked){ 
        body.style.backgroundColor = "#333"
        container.style.backgroundColor = "#222"
        text1.forEach(item => {
            item.style.color = "#fff"
        });
        border1.forEach(item => {
            item.style.border = "2px #fff dashed"
        });
        bg.forEach(item => {
            item.style.backgroundColor = "#060"
        })
    }else{
        body.style.backgroundColor = "rgb(238,238,238)"
        container.style.backgroundColor = "#fff"
        text1.forEach(item => {
            item.style.color = "black"
        })
        border1.forEach(item => {
            item.style.border = "2px black dashed"
        });
        bg.forEach(item => {
            item.style.backgroundColor = "rgb(29, 206, 29)"
        })
    }
})

var imgDown = img.style.filter = `
saturate(${saturate.value}%)
contrast(${contrast.value}%)
brightness(${brightness.value}%)
sepia(${sepia.value}%)
grayscale(${grayscale.value})
blur(${blur.value}px)
hue-rotate(${hue_rotate.value}deg)
`;

download.onclick = function(){
    download.href = canvas.toDataURL();
}

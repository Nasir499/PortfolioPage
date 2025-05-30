const video1=document.getElementById("projectvideo1");
const video2=document.getElementById("projectvideo2");
const video3=document.getElementById("projectvideo3");
const hoverSign=document.querySelector(".hover-sign");

//sidebar elements
const sidebar=document.querySelector('.side-bar');
const menu=document.querySelector('.menu-icon');
const close=document.querySelector('.close-icons');



const videoList=[video1,video2,video3];

videoList.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play();
        hoverSign.classList.add("active");
    })
    video.addEventListener('mouseout',function(){
        video.pause();
        hoverSign.classList.remove("active");
    })
})


//sidebar elements
menu.addEventListener("click",()=>{
    sidebar.classList.remove("close");
    sidebar.classList.add("open-side-bar");
})
close.addEventListener("click",()=>{
    sidebar.classList.remove("open-side-bar");
    sidebar.classList.add("close");
})



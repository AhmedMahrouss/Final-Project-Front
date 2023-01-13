let humburger = document.querySelector('.humburger');
let sideNav = document.querySelector('.sideNav');
let closeNav = document.querySelector('.sideNav i')
let icon = document.querySelector('.icon');
let gear = document.querySelector('.icon i');
let setting = document.querySelector('.setting');
let color = document.querySelectorAll('.colorOption span');
let root = document.querySelector(':root');
let on = document.getElementById('on');
let off = document.getElementById('off');
let header = document.querySelector('header');
humburger.onclick = ()=>{
sideNav.style.right='0'
closeNav.style.right = '170px'
closeNav.onclick=()=>{
    sideNav.style.right='-150px'
    closeNav.style.right='-170px'
}               
}
icon.onclick = ()=>{
    setting.classList.toggle('hide')
    gear.classList.toggle('fa-spin');
}

for(var i =0; i<color.length; i++){
    color[0].addEventListener('click',()=>{
        root.style.setProperty('--main-color','#ee9002');
        color[0].style.opacity = '1'
        color[1].style.opacity = '0.5'
        color[2].style.opacity = '0.5'
        color[3].style.opacity = '0.5'
    })
    color[1].addEventListener('click',()=>{
        root.style.setProperty('--main-color','#75aefc');
        color[1].style.opacity = '1'
        color[0].style.opacity = '0.5'
        color[2].style.opacity = '0.5'
        color[3].style.opacity = '0.5'
    })
    color[2].addEventListener('click',()=>{
        root.style.setProperty('--main-color','#f32727');
        color[2].style.opacity = '1'
        color[0].style.opacity = '0.5'
        color[1].style.opacity = '0.5'
        color[3].style.opacity = '0.5'
    })
    color[3].addEventListener('click',()=>{
        root.style.setProperty('--main-color','#8600ff');
        color[3].style.opacity = '1'
        color[0].style.opacity = '0.5'
        color[2].style.opacity = '0.5'
        color[1].style.opacity = '0.5'
    })  
}
let x;
let images = ['bg1.webp','bg2.webp','bg3.webp','bg4.webp','bg5.jpg']
on.onclick = ()=>{
    x = setInterval(function(){
        header.style.background = "linear-gradient(rgba(0,0,0,0.6) , rgba(0,0,0,0.6)) , url(images/" + images[Math.floor(Math.random() * images.length)] + ") no-repeat fixed center";
        header.style.backgroundSize='cover'
    },4000)
    
}
off.onclick = ()=>{
    setTimeout(x,100);
    clearTimeout(x);
}



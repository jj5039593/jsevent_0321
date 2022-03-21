"use strict";

const gallery = document.querySelector('.gallery')
const galleryLi = document.querySelectorAll('.gallery>ul>li')


//setTimeOut
// 3초 마다 0 12345k,,,,,

let i=-1;
function autoGallery(){
    i++;
    console.log(`i->${i}`)
//이동 거리 
    const gap = galleryLi[1].offsetLeft - galleryLi[0].offsetLeft;
    // console.log( `gap = ${gap}`);
    const goto =(-i*gap)+'px'
    // console.log( `goto = ${goto}`);
    gallery.style.left=goto;
    gallery.style.transition='all 1s'

    

    if(i>=galleryLi.length-1) i=-1;

    setTimeout(autoGallery,3000)
}

// setInterval(autoGallery,3000);

(()=>autoGallery())();


// //setTimeOut 한번만 호출
// let j=-1;
// setTimeout(()=>{
// j++;
// console.log(`j->${j}`)
// },3000)



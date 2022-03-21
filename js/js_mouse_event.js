"use strict";
// mouse event

// click 마우스를 눌렀다 뗏을 때 

//id btn 선택 click 이벤트로 바인딩 

const subCon=document.querySelector('.sub-con');

const btn1=document.querySelector('#btn');//객체(#btn)를 변수(btn1)에 담았음 

const btn2=document.querySelectorAll('.btn2');

btn1.addEventListener('click',(e)=>{
 subCon.style.border='1px solid brown';
 subCon.style.width='400px '
 subCon.style.height='400px ';
});

// dbclick 더블 클릭 

//더블 클릭시 subcon 텍스트 정 가운데 입력 
btn2[0].addEventListener('dblclick',(e)=>{
    subCon.innerText='SUBCON';
    subCon.style.lineHeight='400px';
    subCon.style.textAlign='center';

});

// mousedown 마우스를 눌렀을 때 
//mouseup과 짝꿍

btn2[1].addEventListener('mousedown',()=>{
    console.log(event.type)
});
// mouseup 마우스를 눌렀을 때 뗏을 때
// mouseup 눌렀다 뗏을 때 click보다 먼저 구현됨 
// //타겟 영영(자식 포함)
// mouseover 마우스를 타겟 영역에 오버 했을 때 
btn2[2].addEventListener('mouseover',()=>{
    console.log(event.type)
});

const gnbLi=document.querySelectorAll('.gnb>ul>li');

gnbLi[0].addEventListener('mouseover',e=>{
    console.log(e.target.parentElemnet)
    const liTag=e.target.parentElement;
    console.log(liTag.children[1])

    liTag.children[1].style.display='block'
})

//mouseup과 짝꿍
// mouseout  마우스를 타겠영역에 오버하고 아웃 할 때 
// //타겟 만 (자식 제외) 
gnbLi[1].addEventListener('mouseout',e=>{
    console.log(event.type)
})
// mouseenter 마우스를 타겟에 오버했을 때 

const btn=document.querySelectorAll('button');
btn[4].addEventListener('mouseenter',()=>{
    console.log(event.type)
})

// mouseleave 마우스를 타겟에 오버 했다 벗어 났을 때
btn[4].addEventListener('mouseleave',()=>{
    console.log(event.type)
})


btn.forEach(el=>{
    el.style.backgroundColor='burlywood'
})
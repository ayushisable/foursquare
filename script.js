let x =document.getElementById("ele1");

x.addEventListener("mouseenter",function(){
     let r=Math.ceil(Math.random()*100);
     x.innerHTML =`<h1>${r}</h>`;
})
x.addEventListener("mouseleave",function(){
    x.innerHTML =`<h1>1</h>`;
})
 
let y = document.getElementById("ele2");
let clr="red";
y.addEventListener("mouseenter",function(){
    if(clr=="red"){
        y.style.backgroundColor="red";
        clr = "green";
    }
    else if(clr=="green"){
        y.style.backgroundColor="green";
        clr="blue";
    }
    else{
        y.style.backgroundColor ="blue";
        clr = "red";
    }
})
y.addEventListener("mouseleave",function(){
    y.style.backgroundColor="white";
})

let z =document.getElementById("ele3");


z.addEventListener("mouseenter",function(){
    let rn =Math.ceil(Math.random()*200);
let rm =Math.ceil(Math.random()*200);
    z.style.backgroundColor=`rgb(255, ${rm}, ${rn})`;
})
z.addEventListener("mouseleave",function(){
    z.style.backgroundColor="white";
})

let iuc =document.getElementById("ele4");
iuc.addEventListener("mouseenter",function(){
    let rn =Math.ceil(Math.random()*200);
let rm =Math.ceil(Math.random()*200);
    z.style.backgroundColor=`rgb(255, ${rm}, ${rn})`;
    x.style.backgroundColor=`rgb(255, 255, ${rn})`;
    y.style.backgroundColor=`rgb(255, ${rm}, 0)`;
})

iuc.addEventListener("mouseleave",function(){
    z.style.backgroundColor="white";
    x.style.backgroundColor="white";
    y.style.backgroundColor="white";
})

let main = document.getElementById("main");
let cursr = document.getElementById("curser");

main.addEventListener("mousemove",function(dets){
   cursr.style.left = dets.x + "px";
   cursr.style.top = dets.y +"px";

}) 



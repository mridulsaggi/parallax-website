let text=document.getElementById('text');
let ltree=document.getElementById('ltree');
let rtree=document.getElementById('rtree');
let lg=document.getElementById('lg');
let rg=document.getElementById('rg');
window.addEventListener("scroll",()=>{
    let value=window.scrollY;
    text.style.marginBottom=value*2+"px";
    rtree.style.translate=value*0.5+"px";
    ltree.style.translate=-value*0.5+"px";
    rg.style.translate=value*1+"px";
    lg.style.translate=-value*1+"px";
});
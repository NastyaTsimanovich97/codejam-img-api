import newCanvas from "./inputButton";

const ctx = document.getElementById('canvas4');
function sizeCanvas(cssSize,htmlSize){
    localStorage.setItem('sizeCanvas',htmlSize);
    ctx.removeAttribute('width');
    ctx.removeAttribute('height');
    ctx.style.width = cssSize;
    ctx.style.height = cssSize;
    ctx.setAttribute('width', htmlSize);
    ctx.setAttribute('height', htmlSize);
}

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('button-128')){
        localStorage.setItem('canvas', ctx.toDataURL());
        sizeCanvas('512px',128);
        const image=localStorage.getItem('canvas');
        newCanvas(image);
    }
    if(e.target.classList.contains('button-256')){
        localStorage.setItem('canvas', ctx.toDataURL());
        sizeCanvas('512px',256);
        const image=localStorage.getItem('canvas');
        newCanvas(image);
    }
    if(e.target.classList.contains('button-512')){
        localStorage.setItem('canvas', ctx.toDataURL());
        sizeCanvas('512px',512);
        const image=localStorage.getItem('canvas');
        newCanvas(image);
    }
})
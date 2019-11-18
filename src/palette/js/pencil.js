function setPixel(x,y){
    const pixelSize=512/(+localStorage.getItem('sizeCanvas'));
    const canvas = document.getElementById('canvas4').getContext('2d');
    const color = localStorage.getItem('activeColor');
    canvas.fillStyle = color;
    canvas.fillRect(x, y, pixelSize, pixelSize);
}

function line(x0, y0, x1, y1) {
    let x=x0;
    let y=y0;
    const dx = Math.abs(x1 - x0);
    const dy = Math.abs(y1 - y0);
    const sx = (x0 < x1) ? 1 : -1;
    const sy = (y0 < y1) ? 1 : -1;
    let err = dx - dy;

    while(!undefined) {
    setPixel(x, y); 

    if (Math.abs(x - x1) < 0.0001 && Math.abs(y - y1) < 0.0001) break;
    const e2 = 2*err;
    if (e2 > -dy) { err -= dy; x += sx; }
    if (e2 < dx) { err += dx; y += sy; }
    }
}

function pencil(){
    const ctx = document.getElementById('canvas4');
    let xCoor;
    let yCoor;
    let x1Coor;
    let y1Coor;
    
    ctx.addEventListener('mousedown',(el)=>{
        const coef=512/(+localStorage.getItem('sizeCanvas'));
        const activeButton = localStorage.getItem('activeButton');
        if(el.target.id==='canvas4' && activeButton === 'button__pencil'){
            xCoor=Math.floor(el.layerX/coef);
            yCoor=Math.floor(el.layerY/coef);
        }
        
    })
    ctx.addEventListener('mouseup',(e)=>{
        const coef=512/(+localStorage.getItem('sizeCanvas'));
        const activeButton = localStorage.getItem('activeButton');
        if(e.target.id==='canvas4' && activeButton === 'button__pencil'){
            x1Coor=Math.floor(e.layerX/coef);
            y1Coor=Math.floor(e.layerY/coef);
            line(xCoor,yCoor,x1Coor,y1Coor);
        }
    })
}


const activeButton = localStorage.getItem('activeButton');
if(activeButton === 'button__pencil'){
    pencil();
}
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('button__pencil')){
        pencil();
    }
})
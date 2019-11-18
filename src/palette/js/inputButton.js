export default function newCanvas(src){
    const image = document.querySelector('#load__img');
    image.setAttribute('src',src);
    const ctx = document.getElementById('canvas4');
    const canvas = document.getElementById('canvas4').getContext('2d');
    canvas.fillStyle='#FFFFFF';
    canvas.fillRect(0,0,512,512);
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = ()=> {
        const width = +img.width;
        const height = +img.height;
        
        if(width/height === 1){
            canvas.drawImage(img, 0, 0, ctx.width,ctx.height);
        }
        if(width/height < 1){
            if(height < 512){
                const coef=512/height;
                const widthImg = width*coef;
                const heightImg = height*coef;
                const x = (512-widthImg)/2
                canvas.drawImage(img, x, 0, widthImg, heightImg);
            }
            if(height >= 512){
                const coef=height/512;
                const widthImg = width/coef;
                const heightImg = height/coef;
                const x = (512-widthImg)/2
                canvas.drawImage(img, x, 0, widthImg, heightImg);
            }
        }
        if(width/height > 1){
            if(width < 512){
                const coef=512/width;
                const widthImg = width*coef;
                const heightImg = height*coef;
                const y = (512-heightImg)/2
                canvas.drawImage(img, 0, y, widthImg, heightImg);
            }
            if(width >= 512){
                const coef=width/512;
                const widthImg = width/coef;
                const heightImg = height/coef;
                const y = (512-heightImg)/2
                canvas.drawImage(img, 0, y, widthImg, heightImg);
            }
        }
        canvas.beginPath();
    };

    img.src = src;
}

function drawInputImage(){
    const inputImg = document.querySelector('#input_file');

    inputImg.addEventListener('change',(e)=>{
        const src =  URL.createObjectURL(e.target.files[0]);
        newCanvas(src);
    });
}
document.addEventListener('click',(e)=>{
    if(e.target.id === 'input_file'){
       drawInputImage();
    }
})


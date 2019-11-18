function fillBucket(el){
    const canvas = document.querySelector('.canvas').getContext('2d');
    const color = localStorage.getItem('activeColor');
    if(el.target.className === 'canvas'){
        if(el.clientY<=240){
            if(el.clientX<=623){
                canvas.fillStyle = color;
                canvas.fillRect(0,0,128,128);
            }
            if(el.clientX>=876){
                canvas.fillStyle = color;
                canvas.fillRect(384,0,128,128);
            }
            if(el.clientX<=876 && el.clientX>=623){
                canvas.fillStyle = color;
                canvas.fillRect(128,0,256,128);
            }
        }

        if(el.clientY>=240 && el.clientY<=496){
            if(el.clientX<=623){
                canvas.fillStyle = color;
                canvas.fillRect(0,128,128,256);
            }
            if(el.clientX>=876){
                canvas.fillStyle = color;
                canvas.fillRect(384,128,128,256);
            }
            if(el.clientX<=876 && el.clientX>=623){
                canvas.fillStyle = color;
                canvas.fillRect(128,128,256,256);
            }
        }

        if(el.clientY>=496){
            if(el.clientX<=623){
                canvas.fillStyle = color;
                canvas.fillRect(0,384,128,128);
            }
            if(el.clientX>=876){
                canvas.fillStyle = color;
                canvas.fillRect(384,384,128,128);
            }
            if(el.clientX<=876 && el.clientX>=623){
                canvas.fillStyle = color;
                canvas.fillRect(128,384,256,128);
            }
        }
    }
}

document.addEventListener('click',(el)=>{
    const activeButton = localStorage.getItem('activeButton');
    if(activeButton === 'button__paint-bucket'){
        fillBucket(el);
    }
})



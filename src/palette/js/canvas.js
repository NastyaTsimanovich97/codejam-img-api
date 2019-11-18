import newCanvas from "./inputButton";

   if(!localStorage.getItem('canvas')){
      localStorage.setItem('sizeCanvas',512);
      const canvas4=document.getElementById('canvas4').getContext('2d');

      canvas4.fillStyle='#00BCD4';
      canvas4.fillRect(0,0,128,128);
      canvas4.fillStyle='#FFEB3B'
      canvas4.fillRect(128,0,256,128);
      canvas4.fillStyle='#00BCD4';
      canvas4.fillRect(384,0,128,128);
      canvas4.fillStyle='#FFEB3B';
      canvas4.fillRect(0,128,128,256);
      canvas4.fillStyle='#FFC107';
      canvas4.fillRect(128,128,256,256);
      canvas4.fillStyle='#FFEB3B';
      canvas4.fillRect(384,128,128,256);
      canvas4.fillStyle='#00BCD4';
      canvas4.fillRect(0,384,128,128);
      canvas4.fillStyle='#FFEB3B'
      canvas4.fillRect(128,384,256,128);
      canvas4.fillStyle='#00BCD4';
      canvas4.fillRect(384,384,128,128);
    }
    else{
         const image=localStorage.getItem('canvas');
         localStorage.setItem('sizeCanvas',512);
         newCanvas(image);
      }

    window.addEventListener('unload',()=> {
      const ctx = document.getElementById('canvas4');
      localStorage.setItem('canvas', ctx.toDataURL());
    })



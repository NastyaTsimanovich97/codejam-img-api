   function grayscale(){
    const canvas = document.getElementById('canvas4').getContext('2d');
    const ctx = document.getElementById('canvas4');
    const imageData = canvas.getImageData(0, 0,  ctx.width,  ctx.height);
    const {data} = imageData;
    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i]     = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }
    canvas.putImageData(imageData, 0, 0);
  };

  document.addEventListener('click',(e)=>{
      if(e.target.id==='invert__button'){
        grayscale();
      }
  })
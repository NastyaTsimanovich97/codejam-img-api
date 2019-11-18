let activeButton;
if(!localStorage.getItem('activeButton')){
    activeButton = document.querySelector('.button__pencil');
    activeButton.classList.toggle("isActive__button");
    localStorage.setItem('activeButton', 'button__pencil')
}else{
    const classActive = localStorage.getItem('activeButton');
    activeButton = document.querySelector(`.${classActive}`);
    activeButton.classList.toggle("isActive__button");
}

    document.addEventListener('click',(event)=>{
        if(event.target.id === 'button__palette'){
            activeButton.classList.remove("isActive__button");
            activeButton = event.target;
            activeButton.classList.toggle("isActive__button");
            if(activeButton.classList.contains("button__choose-color")){
                localStorage.setItem('activeButton', 'button__choose-color');
            }
            if(activeButton.classList.contains("button__pencil")){
                localStorage.setItem('activeButton', 'button__pencil');
            } 
            if(activeButton.classList.contains("button__transform")){
                localStorage.setItem('activeButton', 'button__transform');
            }
            if(activeButton.classList.contains("button__paint-bucket")){
                localStorage.setItem('activeButton', 'button__paint-bucket');
            }
        }
    });
    document.addEventListener('keypress',(e)=>{
        const classActive = localStorage.getItem('activeButton');
        activeButton = document.querySelector(`.${classActive}`);
        activeButton.classList.remove("isActive__button");
        if(e.code==='KeyB'){
            activeButton = document.querySelector('.button__paint-bucket')
            activeButton.classList.toggle("isActive__button");
            localStorage.setItem('activeButton', 'button__paint-bucket');
        }
        if(e.code==='KeyP'){
            activeButton = document.querySelector('.button__pencil')
            activeButton.classList.toggle("isActive__button");
            localStorage.setItem('activeButton', 'button__pencil');
        }
        if(e.code==='KeyC'){
            activeButton = document.querySelector('.button__choose-color')
            activeButton.classList.toggle("isActive__button");
            localStorage.setItem('activeButton', 'button__choose-color');
        }
    });

    


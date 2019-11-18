import newCanvas from "./inputButton";

const search=document.querySelector('#input__search');
function getLinkToImage(val) {
    const url={
      main: 'https://api.unsplash.com/photos/random?query=town,',
      searchImg: val,
      id: '&client_id=1fe2dfc745bc7b0203c41ae79aa60b68be3a34c7a699dcae90e964ee519213e9'
    }
    fetch(url.main+url.searchImg+url.id)
      .then(res => res.json())
      .then(data => { 
       newCanvas(data.urls.small);
      });
    }
   
    document.addEventListener('click',(e)=>{
      if(e.target.classList.contains('button__search-img') && search.value!==''){
        getLinkToImage(search.value);
      }
    })

    document.addEventListener('keypress',(e)=>{
      if(e.code==='Enter' && search.value!==''){
        getLinkToImage(search.value);
      }
    })
 
    
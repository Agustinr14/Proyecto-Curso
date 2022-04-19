let imagen1 = document.querySelector('#img-game1');
let imagen2 = document.querySelector('#img-game2');
let imagen3 = document.querySelector('#img-game3');
let destino = document.querySelector('.caja1');
let destino2 = document.querySelector('.caja2');
let destino3 = document.querySelector('.caja3');


imagen1.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData('text','./assets/imagenes/rompe2.png');
    console.log(e.dataTransfer)
});

imagen2.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData('text','./assets/imagenes/Rompe3.png');
    console.log(e.dataTransfer)
});

imagen3.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData('text','./assets/imagenes/Rompe1.png');
    console.log(e.dataTransfer)
});

imagen1.addEventListener('dragend',()=>{
    imagen1.style.visibility= 'hidden';
});

imagen2.addEventListener('dragend',()=>{
    imagen2.style.visibility= 'hidden';
});

imagen3.addEventListener('dragend',()=>{
    imagen3.style.visibility= 'hidden';
});

destino.addEventListener('dragover',(e)=>{
    e.preventDefault()
});

destino.addEventListener('drop',(e)=>{
    let data = e.dataTransfer.getData('text');
    destino.innerHTML= `<img  src="${data}" height="400px" width="275px"></img>`; 
});

destino2.addEventListener('dragover',(e)=>{
    e.preventDefault()
});

destino2.addEventListener('drop',(e)=>{
    let data = e.dataTransfer.getData('Text');
    destino2.innerHTML= `<img  src="${data}" height="400px" width="275px"></img>`;
    
});


destino3.addEventListener('dragover',(e)=>{
    e.preventDefault()
});

destino3.addEventListener('drop',(e)=>{
    let data = e.dataTransfer.getData('Text');
    destino3.innerHTML= `<img  src="${data}" height="400px" width="275px"></img>`;
   

});



let reinicio = document.querySelector('.rest');

reinicio.addEventListener('click',()=>{
    window.location.reload();
})

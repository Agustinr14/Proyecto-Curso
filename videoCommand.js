let botonInicio = document.getElementById('inicio');
let botonPausa = document.getElementById('pausa');
let video = document.querySelector('.video')

window.addEventListener('load',()=>{
    document.querySelector('.length').textContent=` Duracion video : ${video.duration}`;
    
});

botonInicio.addEventListener('click',()=>{
    video.play()
});

botonPausa.addEventListener('click',()=>{
    video.pause()
});



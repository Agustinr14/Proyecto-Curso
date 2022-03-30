let botonInicio = document.getElementById('inicio');
let botonPausa = document.getElementById('pausa');
let video = document.querySelector('video')


botonInicio.addEventListener('click',()=>{
    video.play()
})

botonPausa.addEventListener('click',()=>{
    video.pause()
}) 
let foto = document.getElementById("foto");
let inputfile = document.getElementById("input-file")
inputfile.onchange = function(){
    foto.src = URL.createObjectURL(inputfile.files[0])
}
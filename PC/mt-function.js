function cambiatexto() {
    var x = document.getElementById("contenido");
    if (x.innerHTML === "Ingeniera Técnica en Topografía") {
        x.innerHTML = "Especializada en Cartografía digital";
    } 
    else if(x.innerHTML === "Especializada en Cartografía digital") {
        x.innerHTML="Diseñadora Web";
    }
    
    else {
        x.innerHTML = "Ingeniera Técnica en Topografía";
    }

}

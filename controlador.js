let objetoAJAX = new XMLHttpRequest();

let url= "https://api.spotify.com/v1/artists/6urkHDoIVO1WO8vNIwcJmM/top-tracks?country=US";

let token = "Bearer BQAeXlqCAHmnQWVIY2lZOI4ncpfxvXf-TEwHOWP2Zmd5qmmjtfZy7cZ_cXfWe_iDudK2bX9yfAxhCHxRmkp8XP8Ki4zdHXAoUGCQz61E962GvHFo3zZok2D0SYqubUKIhs1JCaHroPnjSg43pg";
objetoAJAX.open('GET', url, true);

objetoAJAX.setRequestHeader('Authorization', token);

objetoAJAX.onload = function() {
    let respuesta = JSON.parse(this.responseText);
    console.log(respuesta.tracks[0].preview_url);
    console.log(respuesta.tracks[0].album.images[0].url);
    console.log(respuesta.tracks[0].album.name);

    let imagen1 = document.getElementById("imagen1");
    imagen1.src = respuesta.tracks[0].album.images[0].url;

    let titulo1 = document.getElementById("titulo1");
    titulo1.textContent = respuesta.tracks[0].album.name;

    let audio1= document.getElementById("audio1");
    audio1.src=respuesta.tracks[0].preview_url;

    console.log(respuesta.tracks[1].preview_url);
    console.log(respuesta.tracks[1].album.images[0].url);
    console.log(respuesta.tracks[1].album.name);

    let imagen2 = document.getElementById("imagen2");
    imagen2.src = respuesta.tracks[1].album.images[0].url;

    let titulo2 = document.getElementById("titulo2");
    titulo2.textContent = respuesta.tracks[1].album.name;

    let audio2 = document.getElementById("audio2");
    audio2.src = respuesta.tracks[1].preview_url;
    

    console.log(respuesta.tracks[3].preview_url);
    console.log(respuesta.tracks[3].album.images[0].url);
    console.log(respuesta.tracks[3].album.name);

    let imagen3 = document.getElementById("imagen3");
    imagen3.src = respuesta.tracks[3].album.images[0].url;

    let titulo3 = document.getElementById("titulo3");
    titulo3.textContent = respuesta.tracks[3].album.name;

    let audio3 = document.getElementById("audio3");
    audio3.src = respuesta.tracks[3].preview_url;
    
}

objetoAJAX.send();
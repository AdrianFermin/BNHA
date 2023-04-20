'use strict'

//INICIO LISTAS DE PERSONAJES

//BNH
var bnhList = [
    {nombre: "Izuku Midoriya", hName: "Deku", quirk: "One For All", img: "recursos/imgPersonajes/Midoriya.png", tipo: "Heroe", id: "deku"},
    {nombre: "Toshinori Yagi", hName: "All Might", quirk: "One For All", img: "recursos/imgPersonajes/AllMight.png", tipo: "Heroe", id: "allmight"},
    {nombre: "Bakugo Katsuki", hName: "Dynamight", quirk: "Explosion", img: "recursos/imgPersonajes/Bakugo.png", tipo: "Heroe", id: "bakugo"},
    {nombre: "Enji Todoroki", hName: "Endeavor", quirk: "Hell flame", img: "recursos/imgPersonajes/Endeavor.png", tipo: "Heroe", id: "endeavor"},
    {nombre: "Shigaraki Tomura", hName: "Shigaraki", quirk: "All for One", img: "recursos/imgPersonajes/Shigaraki.png", tipo: "Villano", id: "shigaraki"},
    {nombre: "Desconocido", hName: "All for One", quirk: "All for One", img: "recursos/imgPersonajes/AllForOne.png", tipo: "Villano", id: "allforone"},
    {nombre: "Shoto Todoroki", hName: "Shoto", quirk: "Medio frio, Medio caliente", img: "recursos/imgPersonajes/Shoto.jpeg", tipo: "Heroe"},
    {nombre: "Uraraka Ochaco", hName: "Uravity", quirk: "Zero Gravity", img: "recursos/imgPersonajes/Uraraka.png", tipo: "Heroe"},
    {nombre: "Keigo Takami", hName: "Hawks", quirk: "Alas rigidas", img: "recursos/imgPersonajes/Hawks.png", tipo: "Heroe"},
    {nombre: "Rumi Usagiyama", hName: "Mirko", quirk: "Conejo", img: "recursos/imgPersonajes/Mirko.png", tipo: "Heroe"},
    {nombre: "Shota Aizawa", hName: "Eraser Head", quirk: "Borrar", img: "recursos/imgPersonajes/Eraser.png", tipo: "Heroe"},
    {nombre: "Yu Takeyama", hName: "Mt. Lady", quirk: "Gigantificacion", img: "recursos/imgPersonajes/MtLady.jpg", tipo: "Heroe"},
    {nombre: "Nemuri Kayama", hName: "Midnight", quirk: "Aroma de sueño", img: "recursos/imgPersonajes/Midnight.png", tipo: "Heroe"},
    {nombre: "Shinji Nishiya", hName: "Kamui Woods", quirk: "Enramada", img: "recursos/imgPersonajes/Kamui.png", tipo: "Heroe"},
    {nombre: "Mirio Togata", hName: "Lemilion", quirk: "Penetracion", img: "recursos/imgPersonajes/Mirio.png", tipo: "Heroe"},
    {nombre: "Eijiro Kirishima", hName: "Red Riot", quirk: "Endurecer", img: "recursos/imgPersonajes/Kirishima.png", tipo: "Heroe"},
    {nombre: "Tenya Lida", hName: "Ingenium", quirk: "Engine", img: "recursos/imgPersonajes/Ida.png", tipo: "Heroe"},
    {nombre: "Kaina Tsutsumi", hName: "Lady Nagant", quirk: "Rifle", img: "recursos/imgPersonajes/Nagant.png", tipo: "Villano"},
    {nombre: "Chizome Akaguro", hName: "Stain", quirk: "Coagulo", img: "recursos/imgPersonajes/Stain.png", tipo: "Villano"},
    {nombre: "Toya Todoroki", hName: "Dabi", quirk: "Hell flame+", img: "recursos/imgPersonajes/Dabi.png", tipo: "Villano"},
    {nombre: "Kai Chisaki", hName: "Overhaul", quirk: "Overhaul", img: "recursos/imgPersonajes/Overhaul.png", tipo: "Villano"},
    {nombre: "Danjuro Tobita", hName: "Gentle Criminal", quirk: "Elasticity", img: "recursos/imgPersonajes/Gentle.jpg", tipo: "Villano"},
    {nombre: "Goto Imasuji", hName: "Muscular", quirk: "Fiber", img: "recursos/imgPersonajes/Muscular.png", tipo: "Villano"},
    {nombre: "Jin Bubaigawara", hName: "Twice", quirk: "Double", img: "recursos/imgPersonajes/Twice.png", tipo: "Villano"},
]

var bnhProtas = [bnhList[0], bnhList[1], bnhList[2], bnhList[3], bnhList[4], bnhList[5]]
var heroes = [];
var villanos = [];

bnhList.forEach(element => {
    if(element.tipo == "Heroe") {
        heroes.push(element);
    } else {
        villanos.push(element);
    }
})

//Heroes
var heroP = document.querySelector("#heroesPage");

if(heroP != null){
    heroes.forEach(element => {
        let newElement = document.createElement("div");
        newElement.setAttribute("id", "hola");
        newElement.setAttribute("class", "heroe");
        document.querySelector("#heroesPage").appendChild(newElement);
        let elemento = document.querySelector("#hola");
        elemento.innerHTML = "<div class='card float-start' style='width: 18rem; margin-right: 40px; margin-top: 10px; margin-bottom: 10px;'><img class='card-img-top' style='height: 300px; object-fit: cover' src='" + element.img +"'></img>" +
        "<div class='card-header'> <h5 class='card-title'>" + element.nombre + "</h5></div><div class='card-body'>" + 
        "<h6 class='card-text'>Nombre de " + element.tipo + ": <p class='fw-normal'>" + element.hName + "</p>Quirk: <p class='fw-normal'>" + element.quirk + "</p></h6></div> </div>";
        newElement.setAttribute("id", "");
    })
}

//Villanos
var villainP = document.querySelector("#villanosPage");

if(villainP != null){
    villanos.forEach(element => {
        let newElement = document.createElement("div");
        newElement.setAttribute("id", "hola");
        newElement.setAttribute("class", "heroe");
        document.querySelector("#villanosPage").appendChild(newElement);
        let elemento = document.querySelector("#hola");
        elemento.innerHTML = "<div class='card float-start' style='width: 18rem; margin-right: 40px; margin-top: 10px; margin-bottom: 10px;'><img class='card-img-top' style='height: 300px; object-fit: cover' src='" + element.img +"'></img>" +
        "<div class='card-header'> <h5 class='card-title'>" + element.nombre + "</h5></div><div class='card-body'>" + 
        "<h6 class='card-text'>Nombre de " + element.tipo + ": <p class='fw-normal'>" + element.hName + "</p>Quirk: <p class='fw-normal'>" + element.quirk + "</p></h6></div> </div>";
        newElement.setAttribute("id", "");
    })
}

var protas = document.querySelector("#protas");

bnhProtas.forEach(element => {
    let newElement = document.createElement("div");
    newElement.setAttribute("id", "hola");
    newElement.setAttribute("class", "prota");
    document.querySelector("#protas").appendChild(newElement);
    let elemento = document.querySelector("#hola");
    elemento.innerHTML = "<div class='card float-start' onmouseover='pagina(this)' style='width: 18rem; margin-right: 40px; margin-top: 10px; margin-bottom: 10px;'><a href='protasPages/" + element.id + ".html'> <img title='Ver Detalles' class='card-img-top' style='height: 300px; object-fit: cover' src='" + element.img +"'></img></a>" +
    "<div class='card-header'> <h5 class='card-title'>" + element.nombre + "</h5></div><div class='card-body'>" + 
    "<h6 class='card-text'>Nombre de " + element.tipo + ": <p class='fw-normal'>" + element.hName + "</p>Quirk: <p class='fw-normal'>" + element.quirk + "</p></h6></div> </div>";
    newElement.setAttribute("id", "");
})

//Personajes


function pagina(x){
    $(".prota").sliphover({
        textAlign: 'center',
        verticalMiddle: true,

    })
}

//TEMPORADAS

var temporadas = [
    {nombre: "Temporada1", img: "recursos/imgTemporadas/temporada1.jpg", resumen: "https://www.youtube.com/watch?v=v1roccJN3Q8&list=PLZes_P862jW8urT6LJQ4eW7PJjhBdE6-K"},
    {nombre: "Temporada2", img: "recursos/imgTemporadas/temporada2.jpg", resumen: "https://www.youtube.com/watch?v=bFj6ULs5srI&list=PLZes_P862jW8urT6LJQ4eW7PJjhBdE6-K&index=2"},
    {nombre: "Temporada3", img: "recursos/imgTemporadas/temporada3.jpg", resumen: "https://www.youtube.com/watch?v=e7Fzc0H0PDE&list=PLZes_P862jW8urT6LJQ4eW7PJjhBdE6-K&index=4"},
    {nombre: "Temporada4", img: "recursos/imgTemporadas/temporada4.jpg", resumen: "https://www.youtube.com/watch?v=LDGfiZAzXtQ&list=PLZes_P862jW8urT6LJQ4eW7PJjhBdE6-K&index=5"},
    {nombre: "Temporada5", img: "recursos/imgTemporadas/temporada5.jpg", resumen: "https://www.youtube.com/watch?v=L4X3Pqbp9w0&list=PLZes_P862jW8urT6LJQ4eW7PJjhBdE6-K&index=7"},
    {nombre: "Temporada6", img: "recursos/imgTemporadas/temporada6.jpg", resumen: "https://www.youtube.com/watch?v=uHKQoizedLk"}
]

temporadas.forEach(element => {
    let newElement = document.createElement("div");
    newElement.setAttribute("id", "hola");
    document.querySelector("#temporadas").appendChild(newElement);
    let elemento = document.querySelector("#hola");
    elemento.innerHTML = "<a class='temporada' data-tilt href='" + element.resumen + "' target='_blank'><div data-tilt id='" + element.nombre + "' class='temporada rounded border border-2 float-start mt-2 mb-2 ms-4' onmouseover='resumen(this)' onmouseout='normal(this)' style='background-image: url("+ element.img +"); width: 260px; height: 370px;'></div></a>";
    newElement.setAttribute("id", "");
})

function resumen(x){
    let elemento = temporadas.find(element => element.nombre == x.id);
    x.style.backgroundImage = "linear-gradient(rgba(255, 0, 0, 0.3), rgba(255, 0, 0, 0.3)), url('"+ elemento.img + "')"
    x.style.transition = "all 15s"
    $('.temporada').tilt({
        scale: 1.1
    })
}

function normal(x){
    let elemento = temporadas.find(element => element.nombre == x.id);
    x.style.backgroundImage = "url('" + elemento.img + "')"; 
}

function cambiarFondo(x){
    let cuerpo = document.querySelector("body");
    let bar = document.querySelector("#barra");
    let pie = document.querySelector("footer");
    if(cuerpo.id == "index"){
        if(x.id == "V"){
            cuerpo.style.backgroundImage = 'url("recursos/BackgroundFoto2.png")';
            bar.style.backgroundColor = "rgb(160, 196, 218)";
            pie.style.backgroundColor = "rgb(160, 196, 218)";
        } else if(x.id == "H"){
            cuerpo.style.backgroundImage = 'url("recursos/BackgroundFoto.png")';
            bar.style.backgroundColor = "rgb(13, 110, 253)";
            pie.style.backgroundColor = "rgb(13, 110, 253)";
        }
    } else {
        if(x.id == "V"){
            cuerpo.style.backgroundImage = 'url("../recursos/BackgroundFoto2.png")';
            bar.style.backgroundColor = "rgb(160, 196, 218)";
            pie.style.backgroundColor = "rgb(160, 196, 218)";
        } else if(x.id == "H"){
            cuerpo.style.backgroundImage = 'url("../recursos/BackgroundFoto.png")';
            bar.style.backgroundColor = "rgb(13, 110, 253)";
            pie.style.backgroundColor = "rgb(13, 110, 253)";
        }
    }
}

function pagina1(){
    $(".personajes").sliphover({
        textAlign: 'center',
        verticalMiddle: true,
    });
}


//script de Javascript

console.log("Hola Mundo")


//fetch es una función para obtener datos o archivos
//de internet
 fetch('./data.json')
 .then(response => response.json())
 .then(data => console.log(insertarDatos(data)))
 .catch(error => console.log(error))

 //Esta función manupula el DOM
 //creando elementos nuevos en el documentto
 //e instertando datos en esos elementos



 function insertarDatos(datos){
 
  var map = L.map('mapa').setView([4.5963704, -74.0760387], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

 
  let main = document.getElementById("principal")
  //esta es una iteración sobre los datos
  //obtendos por fetch
  datos.forEach(dato => {

    //crea un marcador por cada elemento de los datos
    //usando las propiedades latitude y longitude
    L.marker([dato.latitude,dato.longitude]).addTo(map)
    .bindPopup(dato.titulo)
    .openPopup();

  });
}


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
  let main = document.getElementById("principal")
  //esta es una iteración sobre los datos
  //obtendos por fetch
  datos.forEach(dato => {
    //crea un elemento img
    let imagen = document.createElement("img")
    //inserta la url de la imagen en el atributo src
    imagen.setAttribute("src", dato.archivo)
    //inserta la imagen en el documento
    main.append(imagen)
  });
}


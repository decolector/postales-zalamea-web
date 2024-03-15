//script de Javascript

console.log("Hola Mundo")

let datos = [
  {
    "identificador": "GZT_DOC161",
    "creator": "Gustavo Zalamea",
    "titulo": "Bogotá (la desmesura, a Melville)",
    "tipo": "Tarjeta postal",
    "dimensiones": "11x15.5 cms",
    "fecha": 1994,
    "produccion": "Jaime Vargas",
    "distribucion": "Taller Arte 2 Gráfico",
    "lugar": "Monserrate",
    "latitude": 4.5962015,
    "longitude": -74.0640615,
    "archivo": "https://badac.uniandes.edu.co/files/gzt/GZT_DOC161.jpg"
  },
  {
    "identificador": "GZT_DOC162",
    "creator": "Gustavo Zalamea",
    "titulo": "El mar en la plaza",
    "tipo": "Tarjeta postal",
    "dimensiones": "11x15.5 cms",
    "fecha": 1994,
    "produccion": "Jaime Vargas",
    "distribucion": "Taller Arte 2 Gráfico",
    "lugar": "Plaza de Bolívar",
    "latitude": 4.5963704,
    "longitude": -74.0760387,
    "archivo": "https://badac.uniandes.edu.co/files/gzt/GZT_DOC162.jpg"
  },
  {
    "identificador": "GZT_DOC163",
    "creator": "Gustavo Zalamea",
    "titulo": "San Jorge y Monserrate",
    "tipo": "Tarjeta postal",
    "dimensiones": "11x15.5 cms",
    "fecha": 1994,
    "produccion": "Jaime Vargas",
    "distribucion": "Taller Arte 2 Gráfico",
    "lugar": "Monserrate",
    "latitude": 4.5949595,
    "longitude": -74.0556611,
    "archivo": "https://badac.uniandes.edu.co/files/gzt/GZT_DOC163.jpg"
  },
  {
    "identificador": "GZT_DOC164",
    "creator": "Gustavo Zalamea",
    "titulo": "Escuadra (el ritmo de las montañas)",
    "tipo": "Tarjeta postal",
    "dimensiones": "11x15.5 cms",
    "fecha": 1994,
    "produccion": "Jaime Vargas",
    "distribucion": "Taller Arte 2 Gráfico",
    "lugar": "Monserrate",
    "latitude": 4.587295,
    "longitude": -74.030631,
    "archivo": "https://badac.uniandes.edu.co/files/gzt/GZT_DOC164.jpg"
  },
  {
    "identificador": "GZT_DOC165",
    "creator": "Gustavo Zalamea",
    "titulo": "Cortina azul y edificio Colpatria-Pisa vistos desde la estación de la sabana",
    "tipo": "Tarjeta postal",
    "dimensiones": "11x15.5 cms",
    "fecha": 1994,
    "produccion": "Jaime Vargas",
    "distribucion": "Taller Arte 2 Gráfico",
    "lugar": "Edificio Colpatria",
    "latitude": 4.6110805,
    "longitude": -74.0717681,
    "archivo": "https://badac.uniandes.edu.co/files/gzt/GZT_DOC165.jpg"
  },
  {
    "identificador": "GZT_DOC166",
    "creator": "Gustavo Zalamea",
    "titulo": "Congreso – Titanic\n (El hundimiento del congreso)\n Litografía publicada en La Prensa. (11 de mayo de 1991, versión en blanco y negro) y en El Tiempo (9 de Junio de 1991, versión a color)",
    "tipo": "Tarjeta postal",
    "dimensiones": "11x15.5 cms",
    "fecha": 1994,
    "produccion": "Jaime Vargas",
    "distribucion": "Taller Arte 2 Gráfico",
    "lugar": "Congreso de la República",
    "latitude": 4.5962002,
    "longitude": -74.0767726,
    "archivo": "https://badac.uniandes.edu.co/files/gzt/GZT_DOC166.jpg"
  },
  {
    "identificador": "GZT_DOC167",
    "creator": "Gustavo Zalamea",
    "titulo": "Huevo de Condor Gigante (Avenida El Dorado con Avenida Boyacá)",
    "tipo": "Tarjeta postal",
    "dimensiones": "11x15.5 cms",
    "fecha": 1994,
    "produccion": "Jaime Vargas",
    "distribucion": "Taller Arte 2 Gráfico",
    "lugar": "Avenida el Dorado con Avenida Boyacá",
    "latitude": 4.666513,
    "longitude": -74.1137347,
    "archivo": "https://badac.uniandes.edu.co/files/gzt/GZT_DOC167.jpg"
  },
  {
    "identificador": "GZT_DOC168",
    "creator": "Gustavo Zalamea",
    "titulo": "Rio Chapinero",
    "tipo": "Tarjeta postal",
    "dimensiones": "11x15.5 cms",
    "fecha": 1994,
    "produccion": "Jaime Vargas",
    "distribucion": "Taller Arte 2 Gráfico",
    "lugar": "Chapinero",
    "latitude": 4.6496279,
    "longitude": -74.0632791,
    "archivo": "https://badac.uniandes.edu.co/files/gzt/GZT_DOC168.jpg"
  },
  {
    "identificador": "GZT_DOC169",
    "creator": "Gustavo Zalamea",
    "titulo": "Palacio de Justicia Documento",
    "tipo": "Tarjeta postal",
    "dimensiones": "11x15.5 cms",
    "fecha": 1994,
    "produccion": "Jaime Vargas",
    "distribucion": "Taller Arte 2 Gráfico",
    "lugar": "Palacio de Justicia",
    "latitude": 4.5982529,
    "longitude": -74.0760914,
    "archivo": "https://badac.uniandes.edu.co/files/gzt/GZT_DOC169.jpg"
  },
  {
    "identificador": "GZT_DOC170",
    "creator": "Gustavo Zalamea",
    "titulo": "Mástiles",
    "tipo": "Tarjeta postal",
    "dimensiones": "11x15.5 cms",
    "fecha": 1994,
    "produccion": "Jaime Vargas",
    "distribucion": "Taller Arte 2 Gráfico",
    "lugar": "Cerros orientales",
    "latitude": 4.5767383,
    "longitude": -74.0698257,
    "archivo": "https://badac.uniandes.edu.co/files/gzt/GZT_DOC170.jpg"
  }
 ]

  let main = document.getElementById("principal")

  datos.forEach(dato => {
    let imagen = document.createElement("img")
    imagen.setAttribute("src", dato.archivo)
    main.append(imagen)
  });


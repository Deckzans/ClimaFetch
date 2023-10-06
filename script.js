let key = '8b7125f5c80f432f4a4724a72c6b5374';
let difKelvin = 273.15;


document.getElementById('botonBusqueda').addEventListener('click', () => { 
    const ciudad = document.getElementById("ciudadEntrada").value
    if(ciudad){ 
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}`)
    .then(data => data.json())
    .then(data =>MostrarDatosClima(data))
 }

 function MostrarDatosClima(data){ 
    console.log(data)

    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const tempInf = data.main.temp; 
    const ciudadNombre = data.name; 
    const descripcion = data.weather[0].description; 

    const ciudadTitulo = document.createElement('h2'); 
    ciudadTitulo.textContent = `La ciudad es ${ciudadNombre}`;
    
    const temperaturaElement = document.createElement('p'); 
    temperaturaElement.textContent = `La temperatura es ${tempInf-difKelvin}`;

    const descripcioninf = document.createElement('p')
    descripcioninf.textContent = `La descripcion meteorologica es ${descripcion}`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaElement);
    divDatosClima.appendChild(descripcioninf);
  
 }



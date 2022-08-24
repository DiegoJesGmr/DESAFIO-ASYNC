/*Consumir la api fake de https://jsonplaceholder.typicode.com/ 
implementando API Fetch y pintar en nuestro html (utilizando
bootstrap vía cdn para los estilos) una tabla de 10 usuarios
y debe contener las propiedades en sus columnas de Id, name,
username, email y address-street.*/

let get_Data = "https://jsonplaceholder.typicode.com/users";
fetch(get_Data)
    .then(Response => Response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData= (data) =>{
    console.log(data)
    let body = '';
    data.map(({ id, name, username, email, address }) => {
        body += `<tr><td>${id}</td><td>${name}</td><td>${username}</td><td>${email}</td><td>${address.street}</td></tr>`
    });
    document.getElementById('data').innerHTML = body;
}
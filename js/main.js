
const buscar = document.getElementById("buscar");
const busqueda = document.getElementsByTagName("p");
const input = document.getElementById("ingreso");
const form = document.querySelector("form");
const contenedorProductos = document.getElementById("contenedor-productos")

const vinos = [
    { id: 1, nombre: "el enemigo", precio: 1200, img: './img/salentein.jpg'},
    { id: 2, nombre: "salentein", precio: 1800,img:'./img/salentein.jpg'},
    { id: 3, nombre: "luigi bosca", precio: 2800,img:'./img/salentein.jpg'},
    { id: 4, nombre: "catena malbec", precio: 1500,img:'./img/salentein.jpg'},
    { id: 5, nombre: "patridge", precio: 1200,img:'./img/salentein.jpg' },
    { id: 6, nombre: "catena zapata", precio: 1900,img:'./img/salentein.jpg'},
  ];
  //evento de busqueda del producto
   input.addEventListener("keyup", ()=>{
     busqueda[0].innerText = input.value;
   })
    function filtrarVino(arr, filtro) {
      const filtrado = arr.filter((el) => {
        return el.nombre.includes(filtro);
     });
      return filtrado;
    }
    buscar.addEventListener("click", () => {
      let resultado = filtrarVino(vinos, input.value.toLowerCase());
      console.log(resultado);
      busqueda[0].innerText = `${resultado[0].nombre}`;
   });
   form.addEventListener("submit",(e)=>{

     e.preventDefault();
   })
  
  
  let carrito = [];
  // creando un div con los productos , precios y imagenes//
  vinos.forEach((producto) => {
    let content = document.createElement("div")
    content.className = "cards"
    content.innerHTML = `
    <h3 class=text-light>${producto.nombre}</h3>
    <img class=imgvinos src=${producto.img}>
    <p class="text-light precioProducto">Precio:$ ${producto.precio}
    
    `;
    
    contenedorProductos.append(content);
//creando un boton y dandole evento, y pusheando al carrito//
    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
      carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
      
    });

    console.log(carrito)
  });
    
  
 });
  
  
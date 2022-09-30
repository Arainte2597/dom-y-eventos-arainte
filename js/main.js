


//     let nombre = prompt("Ingresa tu nombre");
//    let apellido = prompt("Ingresa apellido");    
//    let edad = prompt("Ingresa tu edad")
   
//    while(edad < 18){
//      alert("No podes comprar! volve cuando tengas 18!")
//    }


//   function saludar(){
//      alert("Hola " + nombre +" " + apellido + " Bienvenido a la mejor vinoteca de Buenos Aires!");
//  }

//   saludar()

// const vino = [
// { nombre: "el enemigo", precio: 1500},
// { nombre: "salentein", precio: 6000},
// { nombre: "luigi bosca", precio: 1800},
// { nombre: "catena", precio: 2000},
// { nombre: "patridge", precio: 600},
// { nombre: "catena zapata", precio: 2500},

// ];
// let carrito = []


//  let seleccion = prompt ("desea comprar algun producto?")
//  while(seleccion !="si" && seleccion !="no"){
//     alert("por favor ingresa si o no")

//  }
//  if(seleccion =="si"){
//     alert("a continuacion nuestra lista de productos")
//     let todosLosProductos = vino.map((vino) => vino.nombre + " " + vino.precio + "$"
//     );

//  alert(todosLosProductos) 
// }
// else if (seleccion == "no"){
//     alert("gracias por venir , volve pronto.")
// }
// while(seleccion != "no"){
//     let vino = prompt("agrega un producto a tu carrito")
//     let precio = 0

//     if(vino == "el enemigo" || vino == "salentein" || vino == "luigi bosca" || vino == "catena" || vino == "patridge" || vino == "catena zapata"){
//         switch(vino){
//         case "el enemigo":
//                 precio = 1500;
//                 break;
//         case "salentein":
//                 precio = 6000;
//                 break;
//         case "luigi bosca":
//                 precio = 1800;
//                 break;
//         case "catena":
//                 precio = 2000;
//                 break;
//         case "patridge":
//                 precio = 600;
//                 break;
//         case "catena zapata":
//                 precio = 2500;
//                 break;
//        }
//        let unidades = parseInt(prompt("cuantas unidades quiere llevar"))
//        carrito.push({vino, unidades , precio})
//        console.log(carrito)

//     }
//     else{
//         alert("no tenemos ese producto")
//     }
//     seleccion = prompt("desea seguir comprando?")
//     while(seleccion == "no"){
//         alert("gracias por la compra")
//         carrito.forEach((carritoFinal) => {
//             console.log(`vino: ${carritoFinal.vino}, unidades:${carritoFinal.unidades},total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
//         })
//         break;
//     }
    
// }

// const total = carrito.reduce ((acc,el) => 
//     acc + el.precio * el.unidades,0)

// console.log(`el total a pagar por su compra es:${total}`)
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
  
  vinos.forEach((producto) => {
    let content = document.createElement("div")
    content.className = "cards"
    content.innerHTML = `
    <h3 class=text-light>${producto.nombre}</h3>
    <img class=imgvinos src=${producto.img}>
    <p class="text-light precioProducto">Precio:$ ${producto.precio}
    
    `;
    
    contenedorProductos.append(content);

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
    
    // contenedorProductos.appendChild(div)

    //   const boton = document.getElementById('boton')

    //  boton.addEventListener('click',() => {
     
    //     console.log("gracias por tu compra!")

  //  })

 });
  
  
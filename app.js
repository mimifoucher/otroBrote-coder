let stock = [
    {id:1,nombre: 'lentejas',precio: 300,img: '../img-productos/lentejas.jpg', cantidad: 1},
    {id:2,nombre: 'garbanzos',precio: 350,img: '../img-productos/garbanzos.jpg', cantidad: 1},
    {id:3,nombre: 'porotos aduki',precio: 300,img: '../img-productos/poroto-aduki.jpg', cantidad: 1},
    {id:4,nombre: 'soja',precio: 230,img: '../img-productos/soja.jpg', cantidad: 1},
    {id:5,nombre: 'almendras', precio: 500,img: '../img-productos/almendras.jpg', cantidad: 1},
    {id:6,nombre: 'castañas de caju', precio: 600,img: '../img-productos/castañas-caju.jpg', cantidad:1},
    {id:7,nombre: 'coco en escamas',precio: 200,img: '../img-productos/coco.jpg', cantidad: 1},
    {id:8,nombre: 'chia',precio: 150,img: '../img-productos/chia.jpg', cantidad: 1},
    {id:9,nombre: 'nueces',precio: 400,img: '../img-productos/nueces.jpg', cantidad: 1},
    {id:10,nombre: 'pasas',precio: 200,img: '../img-productos/pasas.jpg', cantidad: 1},
]


let carritoCompras = [];

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito');
const contadorCarrito = document.getElementById('contadorCarrito');


mostrarProductos(stock);

function mostrarProductos(array) {
    for(const productos of array) {
        let div = document.createElement('div');
        div.classList.add('productos');
        div.innerHTML += `<div class="card"> 
                                <img class="card-img" src= ${productos.img}>
                                <div class="card-title">
                                    <h2>${productos.nombre}</h2>
                                </div>
                                <div class="card-content">
                                    <p>1 Kilo</p>
                                    <p >${productos.precio}</p>
                                    <a><img class="card-buy" src="./img-productos/buy-card.png"></a>
                                </div>
                            </div>`
        contenedorProductos.appendChild(div);

    }
    
}



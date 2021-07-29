//Las clases son objetos



class products {
    constructor(){
        name = name;
        price = price;
        url = url;
        category = category;

    }
}

let allproducts = [];

let btn_card = document.getElementById('button');
let container = document.getElementById('container');

btn_card.addEventListener('click', () => {
    allproducts.push(new products());
    console.log(products);
})

let products_layout =  `
<div>
   <br>  Nombre:
   <br>  Precio:
   <br> Categoria:
</div>
`

container.innerHTML = products_layout;


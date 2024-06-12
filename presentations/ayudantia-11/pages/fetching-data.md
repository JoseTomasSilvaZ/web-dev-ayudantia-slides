### Obteniendo información desde la API
Eso nomás, no sé que escribirles aquí pero se ve mal sin este texto, así que les cuento que tengo dos gatitos 🐈, uno se llama Matías y la otra se llama Matildita. El Mati es blanco con negro, la Matildita tiene muchos colores; blanco, café, negro, naranjo. 
<div class='w-2/3 mt-10'>

```javascript {all}{maxHeight:'320px'}
 fetch("http://localhost:3000/api/v1/products")
        .then((response) => response.json())
        .then((data) => {
          const wrapper = document.getElementById("products-wrapper");
          let products = "";
          data.products.forEach((product) => {
            products += `
                <div class="card" style="width: 18rem">
                    <img
                    src=${product.image}
                    class="card-img-top card-product-img"
                        alt=${product.name}
                    />
                    <div class="card-body bg-body">
                        <h5 class="card-title text-capitalize">${product.name}</h5>
                        <h6 class="card-subtitle mb-4">${product.price}</h6>
                        <button class="btn btn-primary" onclick="addProductToCart('{{this._id}}')">Agregar al carrito</button>
                    </div>
                    </div>
                `;

            wrapper.innerHTML = products;
          });
        });

```
</div>
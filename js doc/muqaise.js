
const basketp = document.getElementById('muqaise');

getSelectedProducts();

function getSelectedProducts() {
    
    const storedData = localStorage.getItem('selectedPro');
    const constainerEll = document.getElementById('muqaisee');
    let productAsHtml = '';

    if(storedData) {
        
        const products = JSON.parse(storedData);
        basketp.innerText = products.length;
        
        for(let product of products) {
            productAsHtml += `
<div  class="col-3 ">
<div class="product-info">
 <ul class="product-list soft">
            <li class="img-fluid"> <a href=" "><img class="img-fluid" src="photo/product/${product.image}" alt=""></a> </li>
            <li>${product.brand}</li>
            <li> <a href="">SOBRANO VENEZIANO</a> </li>
            <li>Məhsullar</li>
            <li>#345204</li>
            <li class="price">${product.price}
              AZN </li>
            <li> <a href=" " class="btn-general add-cart">Səbətə at</a> </li>
          </ul>
          <ul class="product-list tech">
            <li></li>
            <li>3 il</li>
            <li>1-2 saat</li>
            <li>24 saat</li>
            <li>6-8 m²/kg (tək qat)</li>
          </ul>
          <button onclick="deleteProductt(event, ${product.id})"  class="btn-remove compare-remove-x" ><i class="fa-solid fa-xmark"></i></button>
  </div>
</div>
            `;
        }

    } else {
        basketp.innerText = 0;
    }

    constainerEll.innerHTML = productAsHtml;
}

function deleteProductt(e, productId) {
    e.preventDefault();

    const storedData = localStorage.getItem('selectedPro');

    if(storedData) {
        const products = JSON.parse(storedData);
        const newProducts = products.filter(item => item.id !== productId);

        if(newProducts.length) {
            localStorage.setItem('selectedPro', JSON.stringify(newProducts));
        } else {
            localStorage.removeItem('selectedPro');
        }

        getSelectedProducts();
    }
}

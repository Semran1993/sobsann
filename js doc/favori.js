






const basketEll = document.getElementById('favorit');

getSelectedProducts();

function getSelectedProducts() {
    
    const storedData = localStorage.getItem('selectedPro');
    const constainerEll = document.getElementById('product');
    let productAsHtml = '';

    if(storedData) {
        
        const products = JSON.parse(storedData);
        basketEll.innerText = products.length;
        
        for(let product of products) {
            productAsHtml += `
           <div class="card column">
            <div class="header-cart"> <span>Təklif olunan</span> </div>
            <div class="img-box"><a href=""> <img src="photo/product/${product.image}" alt=""></a></div>
            <div class="cart-info">
              <div class="grid"> <span >Sobsan</span> <a href="">${product.brand}</a></div>
              <div class="grid">
                <p>Son qat boya</p>
              </div>
              <div class="grid"> <span class="price">${product.price} AZN</span>
                <div class="pr-stock"> <span class="stock-icon">✓</span> <span>Anbarda: </span> <span class="stock-count"> ${product.storeCount} </span> <span>ədəd</span> </div>
              </div>
            </div>
            <div class="cart-footer"> <a onclick="addToBucket(event)" href="mehsul haqqında.html" class="btn-general add-cart" ><span>Səbətə at</span> <i class="fa-solid fa-cart-shopping"></i> </a>
              <div class="button-group"> <a href="#" ><i class="fa-solid fa-scale-balanced"></i> <span>Müqayisə</span> </a> <a onclick="deleteProductt(event, ${product.id})"   > <i class="fa-solid fa-heart"></i> </a> </div>
            </div>
          </div>
            `;
        }

    } else {
        basketEll.innerText = 0;
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

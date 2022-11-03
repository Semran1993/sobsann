const basketEl = document.getElementById('basket1');

getselectFav();

function getselectFav() {
    
    const storedData = localStorage.getItem('selectFav');
    const constainerEl = document.getElementById('product');
   
    let productAsHtml = '';
    let totalCount = 0

    if(storedData) {
        
        const products = JSON.parse(storedData);
        basketEl.innerText = products.length;
        

        for(let product of products) {
            totalCount += product.price;

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
              <div class="button-group"> <a href="#" ><i class="fa-solid fa-scale-balanced"></i> <span>Müqayisə</span> </a> <a onclick="deleteProduct(event, ${product.id})" href="#"  > <i class="fa-solid fa-heart"></i> </a> </div>
            </div>
          </div>
            `;
        }

    } else {
        basketEl.innerText = 5;
    }

    constainerEl.innerHTML = productAsHtml;
   
}

function deleteProduct(e, productId) {
    e.preventDefault();

    const storedData = localStorage.getItem('selectFav');

    if(storedData) {
        const products = JSON.parse(storedData);
        const newProducts = products.filter(item => item.id !== productId);

        if(newProducts.length) {
            localStorage.setItem('selectFav', JSON.stringify(newProducts));
        } else {
            localStorage.removeItem('selectFav');
        }

        getselectFav();
    }
}

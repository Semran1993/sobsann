const basketEl = document.getElementById('basket');

getSelectedProducts();

function getSelectedProducts() {
    
    const storedData = localStorage.getItem('selectedProducts');
    const constainerEl = document.getElementById('table-body');
    const totalCountEL = document.getElementById('total-amount');
    let productAsHtml = '';
    let totalCount = 0

    if(storedData) {
        
        const products = JSON.parse(storedData);
        basketEl.innerText = products.length;
        

        for(let product of products) {
            totalCount += product.price;

            productAsHtml += `
            <tr>
                <td><div class="brand-img"> <img class="img-fluid" style="max-width: 150px;" src="photo/product/${product.image}" alt=""> </div></td>
                <td ><div class="brand-name"> <span class="brand">${product.brand}</span> <a href="#" class="name">SƏDƏF BOYA</a> </div></td>
                <td><div class="brand-color"> <span class="brand">${product.name}</span> </div></td>
                <td><div class="brand-weight"> <span class="brand">3 kq</span> </div></td>
                <td><div class="brand-price">
                    <p class="brand">${product.price} AZN</p>
                </div></td>
                <td><div class="brand-number">
                    <div class="count">
                    <div class="stock"> <span class="stock-icon">✓</span> <span>Anbarda: </span> <span class="stock-count">${product.storeCount}</span> <span>ədəd</span> </div>
                    <div class="pr-counter">
                   <div class="wrapper">
    <span class="minus">-</span>
    <span class="num">01</span>
    <span class="plus">+</span>
  </div>
 
                </div>
                    </div>
                    </div>
                </div></td>
                <td>
                    <div class="brand-number">
                        <p class="brand">${product.price} AZN</p>
                    </div>
                </td>
                <td>
                    <div class="brand-number">
                        <a onclick="deleteProduct(event, ${product.id})" href="#">
                            <i class="fa-solid fa-xmark"></i>
                        </a>
                    </div>
                </td>
            </tr>
            `;
        }

    } else {
        basketEl.innerText = 0;
    }

    constainerEl.innerHTML = productAsHtml;
    totalCountEL.innerText = `${totalCount} azn`
}

function deleteProduct(e, productId) {
    e.preventDefault();

    const storedData = localStorage.getItem('selectedProducts');

    if(storedData) {
        const products = JSON.parse(storedData);
        const newProducts = products.filter(item => item.id !== productId);

        if(newProducts.length) {
            localStorage.setItem('selectedProducts', JSON.stringify(newProducts));
        } else {
            localStorage.removeItem('selectedProducts');
        }

        getSelectedProducts();
    }
}

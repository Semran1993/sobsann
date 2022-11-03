
/* get products */

let selectedProducts = [];
const basketEl = document.getElementById('favorit');

const products = [
     {
        id: 1,
        name: 'SƏDƏF BOYA',
        brand: 'Sobsan',
        image: '1638770687sedef.jpg',
        color: 'Sədəf-SF 340',
        weight: 3,
        price: 54.5,
        storeCount: 56,
        type: 'Son qat boya',
        category: 'Məhsullar',
        code: 'T 1260-901007',
        usePlace: 'Daxili cəbhə',
        view: 'Parlaq',
        characterize: 'Silinə bilən'
    },
    {
        id: 2,
        name: 'SPARUS- SOBPOKS 500',
        brand: 'Sobsan',
        image: '1641298884luxe parlaq balaca.jpg',
        color: 'Sədəf-SF 340',
        weight: 3,
        price: 8,
        storeCount: 26,
        type: 'Su əsaslı, mat, xarici cəbhə boyası',
        category: 'Məhsullar',
        code: 'T 1260-901007',
        usePlace: 'Daxili cəbhə',
        view: 'Parlaq',
        characterize: 'Silinə bilən'
    },
    {
        id: 3,
        name: 'SPARUS- SOBPOKS FINISH',
        brand: 'Sobsan',
        image: '1641298884luxe parlaq balaca.jpg',
        color: 'Sədəf-SF 340',
        weight: 3,
        price: 8,
        storeCount: 26,
        type: 'Su əsaslı, mat, xarici cəbhə boyası',
        category: 'Məhsullar',
        code: 'T 1260-901007',
        usePlace: 'Daxili cəbhə',
        view: 'Parlaq',
        characterize: 'Silinə bilən'
    },
    {
        id: 4,
        name: 'SOBAKRIL LUX',
        brand: 'Sobsan',
        image: '1638342071sobakril lux.jpg',
        color: 'Sədəf-SF 340',
        weight: 5,
        price: 15,
        storeCount: 80,
        type: 'Su əsaslı, mat, xarici cəbhə boyası',
        category: 'Məhsullar',
        code: 'T 1260-901007',
        usePlace: 'Daxili cəbhə',
        view: 'Parlaq',
        characterize: 'Silinə bilən'
    },
    {
        id: 5,
        name: 'BARBUS-SOBPOKS FINISH',
        brand: 'Sobsan',
        image: '1641361004sell parl lak balava.jpg',
        color: 'Sədəf-SF 340',
        weight: 3,
        price: 11,
        storeCount: 25,
        type: 'Son qat boya',
        category: 'Məhsullar',
        code: 'T 1260-901007',
        usePlace: 'Daxili cəbhə',
        view: 'Parlaq',
        characterize: 'Silinə bilən'
    },
];

addProducts();
getSelectedProducts();

function addProducts() {
    // product-container

    const containerEl = document.getElementById('product-container');
    let items = '';

    for(let product of products) {
        items += `
       <div class="card ">
            <div class="header-cart"> <span>Təklif olunan</span> </div>
            <div class="img-box"><a href="mehsul haqqında.html"> <img src="photo/product/${product.image}" alt=""></a></div>
            <div class="cart-info">
              <div class="grid"> <span>${product.brand}</span> <a href="">SƏDƏF BOYA</a></div>
              <div class="grid">
                <p>${product.category}</p>
              </div>
              <div class="grid"> <span class="price">${product.price} AZN</span>
                <div class="pr-stock"> <span class="stock-icon">✓</span> <span>Anbarda: </span> <span class="stock-count"> 56 </span> <span>ədəd</span> </div>
              </div>
            </div>
            <div class="cart-footer"> <a href="mehsul haqqında.html" class="btn-general add-cart"><span class="shopping-add">Səbətə at</span> <i class="fa-solid fa-cart-shopping"></i> </a>
              <div class="button-group"> <a href="#" class="btn-general"><i class="fa-solid fa-scale-balanced"></i> <span>Müqayisə</span> </a> <a  onclick="addToBucket(event, ${product.id})"  id="favorit" class="btn-general favorit"> <i class="fa-solid fa-heart"></i> </a> </div>
            </div>
          </div>
            `;
    }

    containerEl.innerHTML = items;



}

/* Add to bucket */

function addToBucket(e, productId) {
    e.preventDefault();
    const productAlreadySelected = selectedProducts.filter(item => item.id === productId);

    if(productAlreadySelected.length === 0) {
        const selectedProduct = products.filter(item => item.id === productId)
        selectedProducts.push(selectedProduct[0]);
    }

    basketEl.innerText = selectedProducts.length;
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
}

function getSelectedProducts() {
    
    const items = localStorage.getItem('selectedProducts');
    if(items) {
        const parsedItems = JSON.parse(items);
        selectedProducts = parsedItems;
        basketEl.innerText = parsedItems.length;
    }
}








let selectedProducts = [];
const basketEl = document.getElementById('favorit');


parseSelectedProduct();
getSelectedProducts();


function parseSelectedProduct() {
    const containerEl = document.getElementById('product-content');

    try {
        const product = JSON.parse(localStorage.getItem('currentProduct'));

        if (typeof product === 'object' && product.hasOwnProperty('name')){
            const productAsHtml = `
<div class="card ">
            <div class="header-cart"> <span>Təklif olunan</span> </div>
            <div class="img-box"><a href="mehsul haqqında.html"> <img src="photo/product/${product.image}" alt=""></a></div>
            <div class="cart-info">
              <div class="grid"> <span>${product.brand}</span> <a href="">SƏDƏF BOYA</a></div>
              <div class="grid">
                <p>${product.category}</p>
              </div>
              <div class="grid"> <span class="price">${product.price} AZN</span>
                <div class="pr-stock"> <span class="stock-icon">✓</span> <span>Anbarda: </span> <span class="stock-count"> 56 </span> <span>ədəd</span> </div>
              </div>
            </div>
            <div class="cart-footer"> <a href="mehsul haqqında.html" class="btn-general add-cart"><span class="shopping-add">Səbətə at</span> <i class="fa-solid fa-cart-shopping"></i> </a>
              <div class="button-group"> <a href="#" class="btn-general"><i class="fa-solid fa-scale-balanced"></i> <span>Müqayisə</span> </a> <a  onclick="addToBucfav(event, ${product.id})"  id="favorit" class="btn-general favorit"> <i class="fa-solid fa-heart"></i> </a> </div>
            </div>
          </div>
            `;
    
            containerEl.innerHTML = productAsHtml;
        } else {
            alert('Selected product not founded. Please select product')
        }

    } catch (error) {
        alert('Selected product not founded. Please select product')
    }

}

function getSelectedProducts() {
    
    const items = localStorage.getItem('selectedProducts');

    if(items) {
        const parsedItems = JSON.parse(items);
        selectedProducts = parsedItems;
        basketEl.innerText = parsedItems.length;
    }
}

/* Add to bucket */

function addToBucfav(e, productId) {
    e.preventDefault();
    const productAlreadySelected = selectedProducts.filter(item => item.id === productId);

    if(productAlreadySelected.length === 0) {
        const selectedProduct = data.filter(item => item.id === productId)
        selectedProducts.push(selectedProduct[0]);
    }

    basketEl.innerText = selectedProducts.length;
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
}
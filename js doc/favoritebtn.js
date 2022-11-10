/* get products */

let selectedProducts = [];
const basketEll = document.getElementById('favorit');
const basketp = document.getElementById('muqaise');
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
    /* {
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
    },*/
];

addProducts();
getSelectedProducts();

function addProducts() {
    // product-container
   
    const containerEll = document.getElementById('products-container');
 const product = JSON.parse(localStorage.getItem('currentPro'));
   
    let items = '';

    for(let product of products) {
        items += `
       
            <div class="card ">
            <div class="header-cart"> <span>Təklif olunan</span> </div>
            <div class="img-box"><a href="mehsul haqqında.html"> <img src="photo/product/${product.image}" alt=""></a></div>
            <div class="cart-info">
                <div class="grid"> <span >${product.brand}</span> <a href="">${product.name}</a></div>
                <div class="grid">
                <p>${product.type}</p>
                </div>
                <div class="grid"> <span class="price">${product.price} AZN</span>
                <div class="pr-stock"> <span class="stock-icon">✓</span> <span>Anbarda: </span> <span class="stock-count"> ${product.storeCount} </span> <span>ədəd</span> </div>
                </div>
            </div>
            <div class="cart-footer">
                <a href="mehsul haqqında.html" class="btn-general add-cart" >
                    <span>Səbətə at</span>
                    <i class="fa-solid fa-cart-shopping"></i>
                </a>
                <div class="button-group">
                    <a onclick="addToBuckett(event,${product.id})" >
                        <i class="fa-solid fa-scale-balanced"></i>
                        <span>Müqayisə</span>
                    </a>
                    <a  onclick="addToBucket(event,${product.id})" >
                        <i class="fa-solid fa-heart"></i>
                    </a>
                </div>
            </div>
            </div>
            
        `
    }

    containerEll.innerHTML = items;



}

/* Add to bucket */

function addToBucket(e, productId) {
    e.preventDefault();
    const productAlreadySelected = selectedProducts.filter(item => item.id === productId);

    if(productAlreadySelected.length === 0) {
        const selectedProduct = products.filter(item => item.id === productId)
        selectedProducts.push(selectedProduct[0]);
    }

    basketEll.innerText = selectedProducts.length;
    localStorage.setItem('selectedPro', JSON.stringify(selectedProducts));
}

function getSelectedProducts() {
    
    const items = localStorage.getItem('selectedProducts');
    if(items) {
        const parsedItems = JSON.parse(items);
        selectedProducts = parsedItems;
        basketEll.innerText = parsedItems.length;
    }
}




function addToBuckett(e, productId) {
    e.preventDefault();
    const productAlreadySelected = selectedProducts.filter(item => item.id === productId);

    if(productAlreadySelected.length === 0) {
        const selectedProduct = products.filter(item => item.id === productId)
        selectedProducts.push(selectedProduct[0]);
    }

    basketp.innerText = selectedProducts.length;
    localStorage.setItem('selectedPro', JSON.stringify(selectedProducts));
}

function getSelectedProducts() {
    
    const items = localStorage.getItem('selectedProducts');
    if(items) {
        const parsedItems = JSON.parse(items);
        selectedProducts = parsedItems;
        basketp.innerText = parsedItems.length;
    }
}
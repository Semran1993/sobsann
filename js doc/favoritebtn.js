const data = [
    {
        id: 1,
        name: 'SƏDƏF BOYA',
        brand: 'Sobsan',
        image: '1638770687sedef.jpg',
        color: 'Sədəf-SF 340',
        weight: 5,
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
        weight: 5,
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
        weight: 5,
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

let selectFav = [];
const basketEl = document.getElementById('basket1');


parseselectFav();
getselectFav();


function parseselectFav() {
    const containerEl = document.getElementById('product');

    try {
        const product = JSON.parse(localStorage.getItem('currentProduct'));

        if (typeof product === 'object' && product.hasOwnProperty('name')){
            const productAsHtml = `
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
              <div class="button-group"> <a href="#" ><i class="fa-solid fa-scale-balanced"></i> <span>Müqayisə</span> </a> <a onclick="addToBucket(event, ${product.id})" href="#"  > <i class="fa-solid fa-heart"></i> </a> </div>
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

function getselectFav() {
    
    const items = localStorage.getItem('selectFav');

    if(items) {
        const parsedItems = JSON.parse(items);
        selectFav = parsedItems;
        basketEl.innerText = parsedItems.length;
    }
}

/* Add to bucket */

function addToBucket(e, productId) {
    e.preventDefault();
    const productAlreadySelected = selectFav.filter(item => item.id === productId);

    if(productAlreadySelected.length === 0) {
        const selectFav = data.filter(item => item.id === productId)
        selectFav.push(selectFav[0]);
    }

    basketEl.innerText = selectFav.length;
    localStorage.setItem('selectFav', JSON.stringify(selectFav));
}



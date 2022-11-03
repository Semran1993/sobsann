const data = [
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

parseProducts();

function parseProducts() {
    const el = document.getElementById('products-container');

    let productsAsHtml = '';

    for(let item of data){
        productsAsHtml += `
        <div class="item">
            <div class="card ">
            <div class="header-cart"> <span>Təklif olunan</span> </div>
            <div class="img-box"><a href="mehsul haqqında.html"> <img src="photo/product/${item.image}" alt=""></a></div>
            <div class="cart-info">
                <div class="grid"> <span >${item.brand}</span> <a href="">${item.name}</a></div>
                <div class="grid">
                <p>${item.type}</p>
                </div>
                <div class="grid"> <span class="price">${item.price} AZN</span>
                <div class="pr-stock"> <span class="stock-icon">✓</span> <span>Anbarda: </span> <span class="stock-count"> ${item.storeCount} </span> <span>ədəd</span> </div>
                </div>
            </div>
            <div class="cart-footer">
                <a onclick='selectProduct(event, ${JSON.stringify(item)})' href="mehsul haqqında.html" class="btn-general add-cart" >
                    <span>Səbətə at</span>
                    <i class="fa-solid fa-cart-shopping"></i>
                </a>
                <div class="button-group">
                    <a href="#" >
                        <i class="fa-solid fa-scale-balanced"></i>
                        <span>Müqayisə</span>
                    </a>
                    <a  onclick='selectFav(event, ${JSON.stringify(item)})' >
                        <i class="fa-solid fa-heart"></i>
                    </a>
                </div>
            </div>
            </div>
        </div>
        `;
    }

    el.innerHTML = productsAsHtml;
}

function selectProduct(e, item) {
    localStorage.setItem('currentProduct', JSON.stringify(item));
}
function selectFav(e, item) {
    localStorage.setItem('currentProduct', JSON.stringify(item));
}
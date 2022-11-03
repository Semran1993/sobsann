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

let selectedProducts = [];
const basketEl = document.getElementById('basket');


parseSelectedProduct();
getSelectedProducts();


function parseSelectedProduct() {
    const containerEl = document.getElementById('product-content');

    try {
        const product = JSON.parse(localStorage.getItem('currentProduct'));

        if (typeof product === 'object' && product.hasOwnProperty('name')){
            const productAsHtml = `
                <div class="col-12 col-lg-8 col-xl-8 p-2">
                    <div class="parameters">
                        <p class="brend"> <span class="keys">Brend:</span> <span class="valu">${product.brand}</span></p>
                        <p> <span class="keys">Kateqoriya: </span> <span class="valu">${product.category}</span> </p>
                        <p> <span class="keys">Məhsulun kodu: </span> <span class="valu">${product.code}</span> </p>
                    </div>
                    <div class="parameters texnic">
                        <h2 class="inner-heading">Texniki parametrlər</h2>
                        <p> <span class="keys">Tətbiq sahələri:</span> <span class="valu">${product.usePlace}</span> </p>
                        <p> <span class="keys">Görünüş:</span> <span class="valu">${product.view}</span> </p>
                        <p> <span class="keys">Xüsusiyyətləri:</span> <span class="valu">${product.characterize}</span> </p>
                    </div>
                    <form class="product-form" id="product-form">
                    <div class="form-block">
                        <h2 class="inner-heading">Çəkini seç</h2>
                        <div id="text-radio " style="
                display: flex;">
                        <input class="text-nicelabel" data-nicelabel="{&quot;position_class&quot;: &quot;text_radio&quot;, &quot;checked_text&quot;: &quot;Checked&quot;, &quot;unchecked_text&quot;: &quot;jQuery&quot;}" checked="" type="radio" name="text_radio" id="nicelabel-533796">
                        <label class="text_radio" for="nicelabel-533796">${product.weight} kq</label>
                        <input class="text-nicelabel" data-nicelabel="{&quot;position_class&quot;: &quot;text_radio&quot;}" type="radio" name="text_radio" id="nicelabel-523445">
                        <label class="text_radio" for="nicelabel-523445">${product.weight} kq</label>
                        </div>
                    </div>
                    <div class="filter-block">
                        <h2 class="inner-heading">Rəngi seç</h2>
                        <div class="selected-color">
                        <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"> Kataloqa bax </button>
                        
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2">
                                    <div class="swiper-wrapper">
                                    <div class="swiper-slide"> <img src="photo/mehsulkatalog/img1.jpg" /> </div>
                                    <div class="swiper-slide"> <img src="photo/mehsulkatalog/img2.jpg" /> </div>
                                    <div class="swiper-slide"> <img src="photo/mehsulkatalog/img3.jpg" /> </div>
                                    <div class="swiper-slide"> <img src="photo/mehsulkatalog/img4.jpg" /> </div>
                                    <div class="swiper-slide"> <img src="photo/mehsulkatalog/img5.jpg" /> </div>
                                    <div class="swiper-slide"> <img src="photo/mehsulkatalog/img6.jpg" /> </div>
                                    <div class="swiper-slide"> <img src="photo/mehsulkatalog/img7.jpg" /> </div>
                                    <div class="swiper-slide"> <img src="photo/mehsulkatalog/img8.jpg" /> </div>
                                    <div class="swiper-slide"> <img src="photo/mehsulkatalog/img9.jpg" /> </div>
                                    <div class="swiper-slide"> <img src="photo/mehsulkatalog/img10.jpg" /> </div>
                                    </div>
                                    <div class="swiper-button-next"></div>
                                    <div class="swiper-button-prev"></div>
                                </div>
                                <div thumbsSlider="" class="swiper mySwiper">
                                    <div class="swiper-wrapper">
                                    <div class="swiper-slide"> <img src="photo/mehsulkatalog/img1.jpg" /> </div>
                                    <div class="swiper-slide"> <img src="photo/mehsulkatalog/img2.jpg" /> </div>
                                    <div class="swiper-slide"> <img src="photo/mehsulkatalog/img3.jpg" /> </div>
                                    <div class="swiper-slide"> <img src="photo/mehsulkatalog/img4.jpg" /> </div>
                                    <div class="swiper-slide"> <img src="photo/mehsulkatalog/img5.jpg" /> </div>
                                    <div class="swiper-slide"> <img src="photo/mehsulkatalog/img6.jpg" /> </div>
                                    <div class="swiper-slide"> <img src="photo/mehsulkatalog/img7.jpg" /> </div>
                                    <div class="swiper-slide"> <img src="photo/mehsulkatalog/img8.jpg" /> </div>
                                    <div class="swiper-slide"> <img src="photo/mehsulkatalog/img9.jpg" /> </div>
                                    <div class="swiper-slide"> <img src="photo/mehsulkatalog/img10.jpg" /> </div>
                                    </div>
                                </div>
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-primary">Rengi sec</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </form>
                    <div class="row " style="margin-top: 20px;">
                    <div class="col-lg-4">
                        <div class="form">
                
                    <div class="wrapper">
    <span class="minus">-</span>
    <span class="num">01</span>
    <span class="plus">+</span>
  </div>
                 
                </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="add-cart-block">
                            <a href="#" onclick="addToBucket(event, ${product.id})"  class="btn-general primary sepetat">Səbətə at </a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="price-block">
                        <div class="pr-stock"> <span class="stock-icon">✓</span> <span>Anbarda: </span> <span class="stock-count"> ${product.storeCount} </span> <span>ədəd</span> </div>
                        <span class="pr-price"> ${product.price} AZN 
                        
                        </span> </div>
                    </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4 col-xl-4">
                    <div class="img-box">
                    <div id="img1" class="tabcontentt"> <img src="photo/product/${product.image}" alt=""> 
                    <div id="img2" class="tabcontentt" style="display: none;"> <img src="photo/product/${product.image}" alt=""> </div>
                     </div>

                    <div class="tab tabss">
                        <button class="tablinks"  onclick="openCity(event, 'img1')"><img src="photo/product/${product.image}" alt=""></button>
                        
                    </div>
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

function addToBucket(e, productId) {
    e.preventDefault();
    const productAlreadySelected = selectedProducts.filter(item => item.id === productId);

    if(productAlreadySelected.length === 0) {
        const selectedProduct = data.filter(item => item.id === productId)
        selectedProducts.push(selectedProduct[0]);
    }

    basketEl.innerText = selectedProducts.length;
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
}


const btn = document.getElementsByClassName('favorit')

const products = []

for(var i = 0; i < btn.length; i++){
    let cartBtn = btn[i]
    cartBtn.addEventListener('click', () =>{
        let product = {
            image: event.target.parentElement.parentElement.children[0].children[0].src,
            name: event.target.parentElement.parentElement.children[1].children[0].textContent,
            price: event.target.parentElement.parentElement.children[2].children[0].textContent,
            totalPrice: parseInt(event.target.parentElement.parentElement.children[2].children[0].textContent) ,
            quantity: 1
        }
    
        addItemToLocal(product)
    })
}
function addItemToLocal(product){
let cartItem = JSON.parse(localStorage.getItem('item'))
if(cartItem === null){
products.push(product)
localStorage.setItem('item', JSON.stringify(products))

}else{
    cartItem.forEach(item => {
        if(product.name == item.name){
            product.quantity = item.quantity += 1;
            product.totalPrice = item.totalPrice += product.totalPrice;
        }else{
            products.push(item)
        }
    });
    products.push(product)
}
localStorage.setItem('item', JSON.stringify(products))
window.location.reload()
}
function cartNumberDisplay(){
    let cartNumbers = 0;
    let cartItem = JSON.parse(localStorage.getItem('item'))
    cartItem.forEach(item => {
        cartNumbers = item.quantity += cartNumbers;
    });
    console.log(cartNumbers);
    document.querySelector('#favorite .basket').textContent = cartNumbers;
}
cartNumberDisplay()




function dispCartItem(){
    let html = '';
    let cartItem = JSON.parse(localStorage.getItem('item'))
    cartItem.forEach(item => {
        html += `

 <div class="item">
          <div class="card ">
            <div class="header-cart"> <span>Təklif olunan</span> </div>
            <div class="img-box image"><a href="mehsul haqqında.html"> <img  src="photo/product/${item.image}" alt=""></a></div>
            <div class="cart-info  name">
              <div class="grid"> <span >Sobsan</span> <a href="">${item.name}</a></div>
              <div class="grid">
                <p>Son qat boya</p>
              </div>
              <div class="grid"> <span class="price">${item.price} AZN</span>
                <div class="pr-stock"> <span class="stock-icon">✓</span> <span>Anbarda: </span> <span class="stock-count"> 25 </span> <span>ədəd</span> </div>
              </div>
            </div>
            <div class="cart-footer"> <a  href="#" class="btn-general add-cart" ><span class="shopping-add">Səbətə at</span> <i class="fa-solid fa-cart-shopping"></i> </a>
              <div class="button-group"> <a href="#" ><i class="fa-solid fa-scale-balanced"></i> <span>Müqayisə</span> </a> <a id="favorit" > <i class="fa-solid fa-heart"></i> </a> </div>
            </div>
          </div>
        </div>

        `
    });
   document.querySelector('.product').innerHTML = html;
}
dispCartItem()



const removeItem = document.getElementsByClassName('reoveItem')
for(var i = 0; i < removeItem.length; i++){
    let removeBtn = removeItem[i]
    removeBtn.addEventListener('click', () =>{
        let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
        console.log(event.target.parentElement.parentElement.children[1].children[0].textContent);
        cartItem.forEach(item => {
            if(item.name != event.target.parentElement.parentElement.children[1].children[0].textContent){
                products.push(item) 
            }
        });
        localStorage.setItem('prdInCart', JSON.stringify(products))
        window.location.reload()
    })
}

function cartPrice(){
    let subTotal = 0;
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
    cartItem.map(item =>{
    subTotal = item.totalPrice += subTotal;
    
        })
     console.log(  subTotal);
     document.querySelector('.priceView h2').textContent = subTotal
 }
 cartPrice()
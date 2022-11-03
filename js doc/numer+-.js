 const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num"),
    stock = document.querySelector(".stock-count")
    let a = 1;
    let b = Number(stock.innerText);
    plus.addEventListener("click", ()=>{
      a++;
      a = (a < 10) ? "0" + a : a;
      num.innerText = a;
      b--;
      b = (b <1) ? "0" + b : b;
      stock.innerText = b; 
    });

    minus.addEventListener("click", ()=>{
      if(a > 1){
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
      }
         
      b++
        b = (b = b) ? 0 + b : b;
       
        if(b >= 56){
            b=56
        }
        stock.innerText = b;
    });
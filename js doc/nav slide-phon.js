window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navmobil").style.top = "0";
      document.getElementById("navmobil").style.boxShadow = " 0 5px 25px 10px rgba(86,86,86,1.00);";
       document.getElementById("navmobil").style.margin = "0px  -13px";
     document.getElementById("navbar").style.paddingTop = "16px";
      document.getElementById("login").style.display = "flex";
       document.getElementById("ustalogo").style.display = "none";
        document.getElementById("navbar").style.boxShadow = " 0px -4px 0px 4px rgb(50 50 50 / 70%)";
       document.getElementById("navbar").style.boxShadow = "10px 20px 30px red";
  } else {
    document.getElementById("navmobil").style.top = "40px";
       document.getElementById("login").style.display = "none";
      document.getElementById("ustalogo").style.display = "block";
        document.getElementById("navbar").style.boxShadow = "10px 20px 30px blue";
  }
}
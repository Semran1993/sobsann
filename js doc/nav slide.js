window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").style.top = "-25px";
      document.getElementById("navbar").style.boxShadow = " 0 5px 25px 10px rgba(86,86,86,1.00);";
       document.getElementById("navbar").style.margin = "0";
      
     document.getElementById("navbar").style.paddingTop = "16px";
      document.getElementById("login").style.display = "flex";
       document.getElementById("ustalogo").style.display = "none";
  } else {
    document.getElementById("navbar").style.top = "40px";
       document.getElementById("login").style.display = "none";
      document.getElementById("ustalogo").style.display = "block";
  }
}
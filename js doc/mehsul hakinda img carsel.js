		function openCity(evt, cityName) {

  var i, tabcontent, tablinks;


  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }


  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
	


function openimg(evt, imgName) {

  var i, tabcontent, tablinks;


  tabcontent = document.getElementsByClassName("tabcontentt");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }


  tablinks = document.getElementsByClassName("tablinkss");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activee", "");
  }

  
  document.getElementById(imgName).style.display = "block";
  evt.currentTarget.className += " active";
}
	
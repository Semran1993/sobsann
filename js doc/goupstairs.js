$(document).ready(function(){
		
   
/* ------------------------------------goupstairs-----------------------------------------------------------*/

$(window).scroll(function(){
  if($(this).scrollTop()<800){
    $('#goupstairs').fadeOut();
  }
  else{
    $('#goupstairs').fadeIn();

  }
});

$('#goupstairs').on('click', function(){
  $('html, body').animate({scrollTop:0},'slow');
});
});
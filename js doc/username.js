$(document).ready(function(){
  $(".tenzimleme").click(function(){
      document.querySelector('.profile-info-sec').style.display='none';
      document.querySelector('.elaqe').style.display='none';
       document.querySelector('.user-box ').style.display='block';
                         });                 
                  
    
     $(".yazin").click(function(){
      document.querySelector('.profile-info-sec').style.display='none';
       document.querySelector('.user-box ').style.display='none';
      document.querySelector('.elaqe').style.display='block';
                           });                 
    
    
     $(".gonderiler").click(function(){
      document.querySelector('.profile-info-sec').style.display='block';
       document.querySelector('.user-box ').style.display='none';
      document.querySelector('.elaqe').style.display='none';
                           });                 
    
    
    
                  });
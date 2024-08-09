
   $(document).ready(function() 
{
    var botao = $('.bt3');
    var dropDown = $('.ul-prod');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

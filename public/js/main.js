$(document).ready(function(){ 
  /*SideNav*/
    $(".buttonCollapse").sideNav();
   // $("ul#slide-out").addClass('fixed hide-on-med-and-down');
    if($(window).width() <= 992){
      $("ul#slide-out").removeClass('fixed hide-on-med-and-down');
    }
  
   /*profile*/
   $('input#input_text, textarea#textarea1').characterCounter();
  
   /*materialbox*/
   $('.materialboxed').materialbox();
   
   /*full screen slider*/
   $('.slider').slider({
       indicators : false,
       height : 500
   });

   /*Parallax*/
   $('.parallax').parallax();

   /*teaching-initiative*/
   if($(window).width() > 992 && $(window).width() <1326){
      $('.cardPanel').removeClass('col s12 m10 offset-m1 l5 offset-l7').addClass('col s12 m10 l10 offset-m1 offset-l1')
   }
   /*post flow text*/
  // $('.postFlow p').addClass('flow-text');
  /*Chatbot*/
    $(".mychatbot").click(function(){
      if($(this).css("transform") == "none"){
          $(this).css("transform","rotate(225deg)");
      }else{
          $(this).css("transform","");
      }
      $("#mychatbot").toggle();
    });

    $("#close").click(function(){
      $("#mychatbot").hide();
    });

});

//Express Pay in one page for three divis
$(document).ready(function(){
  $(".payment-conf").click(function(){
   $(this).closest(".paymentdivi").remove();
	 $(".reviewdivi").show();
	
  }); 
}); 
  $(document).ready(function(){
$(".review-conf").click(function(){
   $(this).closest(".paymentdivi").remove();
	 $(this).closest(".reviewdivi").remove();
	 $(".confirmdivi").show();
	
  });
$('.close-field').click(function(){
	 $(".paymentdivi").show();
}); 
  $(".edit-conf").click(function(e){
	 e.preventDefault();
   $(".from").focus();
	$(".from").prop("readonly",false);
	$(".amount").prop("readonly",false);
	$(".date").prop("readonly",false);
	
	
  });
    });
	
//Print Function	
function printdiv(printpage)
{
var headstr = "<html><head><title></title></head><body>";
var footstr = "</body>";
var newstr = document.all.item(printpage).innerHTML;
var oldstr = document.body.innerHTML;
document.body.innerHTML = headstr+newstr+footstr;
window.print();
document.body.innerHTML = oldstr;
return false;
}

//Express pay  Old
$(document).ready(function () {
	$('.exp-pay-show').hide();
	$('#2').show();
	$('#select').change(function () {
    $('.exp-pay-show').hide();
    $('#'+$(this).val()).show();
}); });

//On change select function
function toggleField(hideObj,showObj){
  hideObj.disabled=true;        
  hideObj.style.display='none';
  showObj.disabled=false;   
  showObj.style.display='inline';
  showObj.focus();
}
// Restrict only numbers on input
$(function () {
  //called when key is pressed in textbox
  $(".numbersonly").keypress(function (e) {					   
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
               return false;
    	}
  
   });

});

// US Phone/Cell Validation
$(function () {

    $('.phoneval').keydown(function (e) {
       var key = e.charCode || e.keyCode || 0;
       $text = $(this); 
       if (key !== 8 && key !== 9) {
           if ($text.val().length === 3) {
               $text.val('('+$text.val()+')');
           }
           if ($text.val().length === 8) {
               $text.val($text.val() + '-');
           }
       }
       return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
   })
});



// Account Summary See More Link
$('#seemore').click(function(){ //you can give id or class name here for $('button')
    $(this).text(function(i,old){
        return old=='See more' ?  'See less' : 'See more';
    });
});

//Document inner show jquery
$(document).ready(function(){
	$(".bank-agr-text").click(function(){
		$(".aggre-data").toggle();
		$(".aggre-viewdata").hide();
		$(".aggre-dataview").hide();
	});
	$(".bank-view-agr").click(function(){
		$(".aggre-data").hide();
		$(".aggre-viewdata").hide();
		$(".aggre-dataview").toggle();
	});
	$(".bank-agr-view").click(function(){
		$(".aggre-data").hide();
		$(".aggre-viewdata").toggle();
		$(".aggre-dataview").hide();
	});
	$(".close-butt img").click(function(){
		$(".aggre-data").hide();
		$(".aggre-viewdata").hide();
		$(".aggre-dataview").hide();
	});
});

// Document page div collapse
$(document).ready(function(){
	$(".accordion-ec").click(function(){
		$(".panel-ec").toggle();
		$(".panel-tc").hide();
		$(".panel-tt").hide();
		$(".panel-pa").hide();
		$(".panel-aa").hide();
	});
	$(".accordion-tc").click(function(){
		$(".panel-ec").hide();
		$(".panel-tc").toggle();
		$(".panel-tt").hide();
		$(".panel-pa").hide();
		$(".panel-aa").hide();
	});
	$(".accordion-tt").click(function(){
		$(".panel-ec").hide();
		$(".panel-tc").hide();
		$(".panel-tt").toggle();
		$(".panel-pa").hide();
		$(".panel-aa").hide();
	});
	$(".accordion-pa").click(function(){
		$(".panel-ec").hide();
		$(".panel-tc").hide();
		$(".panel-tt").hide();
		$(".panel-pa").toggle();
		$(".panel-aa").hide();
	});
	$(".accordion-aa").click(function(){
		$(".panel-ec").hide();
		$(".panel-tc").hide();
		$(".panel-tt").hide();
		$(".panel-pa").hide();
		$(".panel-aa").toggle();
	});
});	
//Profile Terms and conditions

$(document).ready(function(){
	$(".terms-cond a").click(function(){
		$(".panel-ec").toggle();
	});
});
//Responsive menu Bar
$(document).ready(function(){
	$(".responsive_icon").click(function(){
		$(".mobile-menu").toggleClass("menu-list-mobile");
		$(".mask_menu").toggle();
		$("body").css("overflow", "hidden");
	});	
	$(".mask_menu").click(function(){
        $(".mobile-menu").removeClass("menu-list-mobile");
		$(".mask_menu").hide();
	});
});

// Restrict only numbers on input
$(function () {
  //called when key is pressed in textbox
  $(".numbersonly").keypress(function (e) {					   
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
               return false;
    	}
   });
});

// Restrict only alphabets on input
$(function () {
  $(".alphabetsonly").keypress(function(e){
    var keyCode = (e.which) ? e.which : event.keyCode;
    if ( keyCode != 8 && keyCode != 32 && keyCode != 9 && !((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) ) 
	{
      return false;
    }
  });
});


// Show/hide password
$(document).ready(function(){
$(".loginPassword").on("click", function() {
$(this).toggleClass("glyphicon-eye-close");
  var type = $("#password").attr("type");
if (type == "text"){ 
  $("#password").prop('type','password');}
else{ 
  $("#password").prop('type','text'); }
});
});

// For Login Page
$(document).ready(function(){
$(".lgPassword").on("click", function() {
  $(".lgPassword").toggleClass("glyphicon-eye-close");
  var type = $("#lpassword").attr("type");
  if (type == "text"){ 
	  $("#lpassword").prop('type','password');}
  else{ 
	  $("#lpassword").prop('type','text'); }
  });
});


$(document).ready(function(){
$(".gly-repeat-pwd").on("click", function() {
$(this).toggleClass("glyphicon-eye-close");
  var type = $("#repeatpassword").attr("type");
if (type == "text"){ 
  $("#repeatpassword").prop('type','password');}
else{ 
  $("#repeatpassword").prop('type','text'); }
});
});

$(document).ready(function(){
$(".gly-choose-pwd").on("click", function() {
$(this).toggleClass("glyphicon-eye-close");
  var type = $("#choosepassword").attr("type");
if (type == "text"){ 
  $("#choosepassword").prop('type','password');}
else{ 
  $("#choosepassword").prop('type','text'); }
});
});

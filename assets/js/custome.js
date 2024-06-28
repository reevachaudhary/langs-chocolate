//  TOOGLE MENU 
$(document).ready(function () {
   $(".menu-icon-ham-burger").click(function () {
      $(".data").slideToggle("slow");
   });
});
//  TOOGLE MENU END

//  MAIN SLIDER HOME 
var swiper = new Swiper(".mySwiperhomeslider", {
   autoplay: {
      delay: 5000,
   },
   effect: 'fade',
   speed: 2000,
   loop: "true",
   autoplay: true,
   fadeEffect: {
      crossFade: true
   },
});
//  MAIN SLIDER HOME END


// MARGIN TOP 

var headerheaight = document.querySelector(".custome-header").offsetHeight;
document.querySelector('.margin-top').style.marginTop = `${headerheaight - 1}px`;
// MARGIN TOP END


// TAB 
// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function () {
   $('#tabs-nav li').removeClass('active');
   $(this).addClass('active');
   $('.tab-content').hide();

   var activeTab = $(this).find('a').attr('href');
   $(activeTab).fadeIn();
   return false;
});
// TAB END

// TAB SLIDER 
var swiper = new Swiper(".mySwipertab", {
   slidesPerView: 5,
   slidesPerGroup: 5,
   spaceBetween: 20,
   speed: 1000,
   slidesPerGroupSkip: 1,
   loop: "true",
   autoplay: {
      delay: 4000,
   },
   grabCursor: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      100: {
         slidesPerView: 1,
         slidesPerGroup: 1,

      },
      575: {
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
      767: {
         slidesPerView: 2,
         slidesPerGroup: 2,
      },
      991: {
         slidesPerView: 3,
         slidesPerGroup: 3,
      },

      1058: {
         slidesPerView: 3,
         slidesPerGroup: 3,
      },
      1199: {
         slidesPerView: 4,
         slidesPerGroup: 4,
      },

      1280: {
         slidesPerView: 4,
         slidesPerGroup: 4,
      },
      1399: {
         slidesPerView: 5,
         slidesPerGroup: 5,
      },
   },
});
// TAB SLIDER END


// CART SLIDER 
var swiper = new Swiper(".mySwipercart", {
   loop: true,
   spaceBetween: 10,
   slidesPerView: 5,
   freeMode: true,
   watchSlidesProgress: true,

});
var swiper2 = new Swiper(".mySwiper2", {
   loop: true,
   effect: 'fade',
   spaceBetween: 10,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   thumbs: {
      swiper: swiper,
   },
});
// CART SLIDER END


// CHECK BOX 
$(document).ready(function () {
   $('.holder-check-box.data-2').click(function () {
      $('.delivery-frequency').slideDown();
   });
   $('.holder-check-box.data-1').click(function () {
      $('.delivery-frequency').slideUp();
   })
});

// CHECK BOX END
// ADD QUANTITY 

$(function () {
   $(".button").on("click", function () {
      var $button = $(this);
      var $parent = $button.parent();
      var oldValue = $parent.find('.input').val();

      if ($button.text() == "+") {
         var newVal = parseFloat(oldValue) + 1;
      } else {
         // Don't allow decrementing below zero
         if (oldValue > 1) {
            var newVal = parseFloat(oldValue) - 1;
         } else {
            newVal = 1;
         }
      }
      $parent.find('a.add-to-cart').attr('data-quantity', newVal);
      $parent.find('.input').val(newVal);
   });
});
// ADD QUANTITY END

// CART PRICE CHECKBOX 

$(document).ready(function () {
   $('.universa-anchor.cart a').click(function () {
      $('.slide-cart-holder').css("right", "0");
      $(".over-lay").show();
   });

});
$(document).ready(function () {
   $('.over-lay').click(function () {
      $('.slide-cart-holder').css("right", "-100%");
      $(".over-lay").hide();
   });

});
$(document).ready(function () {
   $('.close-side-bar').click(function () {
      $('.slide-cart-holder').css("right", "-100%");
      $(".over-lay").hide();
   });

});
// CART PRICE CHECKBOX END


// REVIEW FORM 
$(document).ready(function () {
   $("a.review-form").click(function () {
      $(".review-form ").show("slow");
   });
});
// REVIEW FORM END


// FORM MODAL

function showModal() {
   var modal = document.getElementById("myModall");
   modal.style.display = "block";
}
setTimeout(showModal, 20000);


$(document).ready(function () {
   $(".cross-icon").click(function () {
      $('.modal-form').css("display", "none");
   });
});
$(document).ready(function () {
   $(".close-modal-form").click(function () {
      $('.modal-form').css("display", "none");
   });
});
// FORM MODAL END


// SCRL TO TOP 

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 300) {
      mybutton.style.display = "block";
   } else {
      mybutton.style.display = "none";
   }
}

// SCRL TO TOP END



document.getElementById('myForm').addEventListener('submit', function (event) {
   event.preventDefault();
   // Prevent the form from submitting in the default way

   // Get the form values
   var name = document.getElementById('name').value;
   var email = document.getElementById('email').value;

   // You can send this data to a server using AJAX if needed 

   // Hide the form
   document.querySelector('.trackin-new').style.display = 'none';

   // Show the thank you message
   document.getElementById('thankYou').style.display = 'block';
});
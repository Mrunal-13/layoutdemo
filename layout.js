document.addEventListener("DOMContentLoaded", ()=>{

    (function($) 
    {
        "use strict"; // Start of use strict
        // Configure tooltips for collapsed side navigation
        $('.navbar-sidenav [data-toggle="tooltip"]').tooltip({
          template: '<div class="tooltip navbar-sidenav-tooltip" role="tooltip" style="pointer-events: none;"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
        })
        // Toggle the side navigation
        $("#sidenavToggler").click(function(e) {
          e.preventDefault();
          $("body").toggleClass("sidenav-toggled");
          $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
          $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
        });
        // Force the toggled class to be removed when a collapsible nav link is clicked
        $(".navbar-sidenav .nav-link-collapse").click(function(e) {
          e.preventDefault();
          $("body").removeClass("sidenav-toggled");
        });
        // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
        $('body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse').on('mousewheel DOMMouseScroll', function(e) {
          var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
          this.scrollTop += (delta < 0 ? 1 : -1) * 30;
          e.preventDefault();
        });
        // Scroll to top button appear
        $(document).scroll(function() {
          var scrollDistance = $(this).scrollTop();
          if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
          } else {
            $('.scroll-to-top').fadeOut();
          }
        });
        // Configure tooltips globally
        $('[data-toggle="tooltip"]').tooltip()
        // Smooth scrolling using jQuery easing
        $(document).on('click', 'a.scroll-to-top', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
          }, 1000, 'easeInOutExpo');
          event.preventDefault();
        });
      }); // End of use strict


        document.querySelector("#dropbtnMyfunction").addEventListener('click', (e)=>{
            document.getElementById("myDropdown").classList.toggle("show");

        })

        // /* When the user clicks on the button,
        // toggle between hiding and showing the dropdown content */
        // function myFunction() {
        //     document.getElementById("myDropdown").classList.toggle("show");
        // }

        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                }
            }
            }
        }
    })

function showpateintTable(){
  document.getElementById('pateintdropdown').style.display = 'block';
  // document.getElementsById('btnforpateints').style.background = 'yellow';
}

function makelist(){
  document.getElementById('inputforhistory').style.display = 'block';
  $('.minus').click(function(e){
    e.target.parentElement.remove();
  });
}


document.getElementById('inputforhistory').addEventListener('keypress', function(e){
  if(e.key == 'Enter'){
    
    var text = document.getElementById('inputforhistory').value;
    document.getElementById('inputforhistory').value = null;
    document.getElementById('inputforhistory').style.display = 'none';
    var li = document.createElement('li');
    li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
    var empyttext = document.getElementById('inputforhistory').value;
    if( empyttext != null){
      document.getElementById('MedicalHistory').appendChild(li);
    }
  }
});

function makelist1(){
  document.getElementById('inputfordiseases').style.display = 'block';
  $('.minus').click(function(e){
    e.target.parentElement.remove();
  });
}

document.getElementById('inputfordiseases').addEventListener('keypress', function(e){

  if(e.key == 'Enter'){
    var text = document.getElementById('inputfordiseases').value;
    document.getElementById('inputfordiseases').value = null;
    document.getElementById('inputfordiseases').style.display = 'none';
    var li = document.createElement('li');
    li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
    var empyttext = document.getElementById('inputfordiseases').value;
    if( empyttext != null){
      document.getElementById('otherdisease').appendChild(li);
    }
  }
});

function makelist2(){
  document.getElementById('inputfordrug').style.display = 'block';
  $('.minus').click(function(e){
    e.target.parentElement.remove();
  });
}

document.getElementById('inputfordrug').addEventListener('keypress', function(e){

  if(e.key == 'Enter'){
    var text = document.getElementById('inputfordrug').value;
    document.getElementById('inputfordrug').value = null;
    document.getElementById('inputfordrug').style.display = 'none';
    var li = document.createElement('li');
    li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
    var empyttext = document.getElementById('inputfordrug').value;
    if( empyttext != null){
      document.getElementById('drugallergy').appendChild(li);
    }
  }
});

function makelist3(){
  document.getElementById('inputforfood').style.display = 'block';
  $('.minus').click(function(e){
    e.target.parentElement.remove();
  });
}

document.getElementById('inputforfood').addEventListener('keypress', function(e){

  if(e.key == 'Enter'){
    var text = document.getElementById('inputforfood').value;
    document.getElementById('inputforfood').value = null;
    document.getElementById('inputforfood').style.display = 'none';
    var li = document.createElement('li');
    li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
    var empyttext = document.getElementById('inputforfood').value;
    if( empyttext != null){
      document.getElementById('foodallergy').appendChild(li);
    }
  }
});

function makelist4(){
  document.getElementById('inputforinsect').style.display = 'block';
  $('.minus').click(function(e){
    e.target.parentElement.remove();
  });
}

document.getElementById('inputforinsect').addEventListener('keypress', function(e){

  if(e.key == 'Enter'){
    var text = document.getElementById('inputforinsect').value;
    document.getElementById('inputforinsect').value = null;
    document.getElementById('inputforinsect').style.display = 'none';
    var li = document.createElement('li');
    li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
    var empyttext = document.getElementById('inputforinsect').value;
    if( empyttext != null){
      document.getElementById('insectallergy').appendChild(li);
    }
  }
});

function makelist5(){
  document.getElementById('inputforlatex').style.display = 'block';
  $('.minus').click(function(e){
    e.target.parentElement.remove();
  });
}

document.getElementById('inputforlatex').addEventListener('keypress', function(e){

  if(e.key == 'Enter'){
    var text = document.getElementById('inputforlatex').value;
    document.getElementById('inputforlatex').value = null;
    document.getElementById('inputforlatex').style.display = 'none';
    var li = document.createElement('li');
    li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
    var empyttext = document.getElementById('inputforlatex').value;
    if( empyttext != null){
      document.getElementById('latexallergy').appendChild(li);
    }
  }
});

function makelist6(){
  document.getElementById('inputformold').style.display = 'block';
  $('.minus').click(function(e){
    e.target.parentElement.remove();
  });
}

document.getElementById('inputformold').addEventListener('keypress', function(e){

  if(e.key == 'Enter'){
    var text = document.getElementById('inputformold').value;
    document.getElementById('inputformold').value = null;
    document.getElementById('inputformold').style.display = 'none';
    var li = document.createElement('li');
    li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
    var empyttext = document.getElementById('inputformold').value;
    if( empyttext != null){
      document.getElementById('moldallergy').appendChild(li);
    }
  }
});

function makelist7(){
  document.getElementById('inputforpet').style.display = 'block';
  $('.minus').click(function(e){
    e.target.parentElement.remove();
  });
}

document.getElementById('inputforpet').addEventListener('keypress', function(e){

  if(e.key == 'Enter'){
    var text = document.getElementById('inputforpet').value;
    document.getElementById('inputforpet').value = null;
    document.getElementById('inputforpet').style.display = 'none';
    var li = document.createElement('li');
    li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
    var empyttext = document.getElementById('inputforpet').value;
    if( empyttext != null){
      document.getElementById('petallergy').appendChild(li);
    }
  }
});

function makelist8(){
  document.getElementById('inputforpollen').style.display = 'block';
  $('.minus').click(function(e){
    e.target.parentElement.remove();
  });
}

document.getElementById('inputforpollen').addEventListener('keypress', function(e){

  if(e.key == 'Enter'){
    var text = document.getElementById('inputforpollen').value;
    document.getElementById('inputforpollen').value = null;
    document.getElementById('inputforpollen').style.display = 'none';
    var li = document.createElement('li');
    li.innerHTML = text + "  " + "<img class='minus' src='https://img.icons8.com/small/16/000000/minus.png'/>";
    var empyttext = document.getElementById('inputforpollen').value;
    if( empyttext != null){
      document.getElementById('pollenallergy').appendChild(li);
    }
  }
});
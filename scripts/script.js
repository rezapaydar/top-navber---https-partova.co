document.addEventListener("DOMContentLoaded", function(){
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function(element){
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
}); 
// DOMContentLoaded  end


function darken_screen(yesno){
    if( yesno == true ){
        document.querySelector('.screen-darken').classList.add('active');
    }
    else if(yesno == false){
        document.querySelector('.screen-darken').classList.remove('active');
    }
}

function close_offcanvas(){
    darken_screen(false);
    document.querySelector('.mobile-offcanvas.show').classList.remove('show');
    document.body.classList.remove('offcanvas-active');
}

function show_offcanvas(offcanvas_id){
    darken_screen(true);
    document.getElementById(offcanvas_id).classList.add('show');
    document.body.classList.add('offcanvas-active');
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('[data-trigger]').forEach(function(everyelement){
        
        let offcanvas_id = everyelement.getAttribute('data-trigger');
        
        everyelement.addEventListener('click', function (e) {
            e.preventDefault();
            show_offcanvas(offcanvas_id);
              
        });
    });

    document.querySelectorAll('.btn-close').forEach(function(everybutton){
        
        everybutton.addEventListener('click', function (e) {
            e.preventDefault();
            close_offcanvas();
          });
    });

    document.querySelector('.screen-darken').addEventListener('click', function(event){
        close_offcanvas();
    });
    
}); 

let toggledrop = document.getElementById('toggledrop');
let megamenu = document.getElementById('megamenu');
let navlink=document.querySelectorAll('.nav-link');

// toggledrop.addEventListener('mouseenter',()=>{

//     $(toggledrop).dropdown('toggle')
//     $(`${toggledrop} i`).css('transform','rotate(90deg)')



// })

// toggledrop.addEventListener('mouseleave',()=>{

//     $(toggledrop).dropdown('toggle')
//     $(toggledrop).css('transform','rotate(0deg)')


// })




// $(document).ready(function(){

//     $("#services").hover(function(){

//         $(toggledrop).dropdown('toggle')
    
//     })
// -
//     $("#services").mouseleave(function () { 
//         $(toggledrop).dropdown('toggle')
//     });

//     $("#services").click(function(){

//         $(toggledrop).dropdown('toggle')
    
//     })

    

    

// })

// $(document).ready(function(){


//     $('.nav-link').mouseenter(function(){
//         $(this).tab('show');
//     })

    

// })

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
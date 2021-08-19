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

// $(document).ready(()=>{

//     const objectone = [
//         {
//           title: "اولین تایتل",
//           caption: "لورم ایپسوم وان تو تری فور فایو سیکس",
//           img: "img/2.jpg",
//         },
//         {
//           title: "دومین تایتل",
//           caption: "لورم ایپسوم وان تو تری فور فایو سیکس",
//           img: "img/3.jpg",
//         },
//         {
//           title: "سومین تایتل",
//           caption: "لورم ایپسوم وان تو تری فور فایو سیکس",
//           img: "img/4.jpg",
//         },
//       ];

//       let carinner = $(".carousel-inner");

//       for (let i in objectone) {
//         const element = objectone[i];

//         let loop = '';

//         loop += `
//         <div class="carousel-item active">
//         <button
//         type="button"
//         class="btn"

//       >
//       <img src="${objectone[i].img}" class="w-50 h-50" alt="First slide" onclick="onclicker(${objectone[i]})">
//       </button>
//               <div class="carousel-caption d-none d-md-block">
//                   <h3>${objectone[i].title}</h3>
//                   <p>${objectone[i].caption}</p>
//               </div>
//           </div>
//           <div
//       class="modal fade"
//       id="exampleModal"
//       tabindex="-1"
//       role="dialog"
//       aria-labelledby="exampleModalLabel"
//       aria-hidden="true"
//     >
//       <div class="modal-dialog" role="document">
//         <div class="modal-content">
         
//           <div class="modal-body">
//           <img src="${objectone[i].img}" class="w-100 h-100"
//           </div>

//         </div>
//       </div>
//     </div>
//           `

        
        
          
// console.log(loop);
//         $('.carousel-inner').append(loop)
//         // console.log(objectone[i]);
//       }

//       onclicker(eve){
//           alert(eve)
//       }

// })


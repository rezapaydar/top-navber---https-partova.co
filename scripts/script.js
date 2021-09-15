
$(document).ready(function(){
    let toggledrop = document.querySelectorAll("a[id*='toggledrop']");
    let megamenu = document.getElementById('megamenu');
    let navlink=document.querySelectorAll('.nav-link');
    
    for (let i = 0; i < toggledrop.length; i++) {
        const element = toggledrop[i];
        $(element).mouseenter((e)=>{

            $(element).dropdown('toggle');
            $('#btntabs').css('display','block');

        
        })
        $("#btntabs").mouseleave((e)=>{

            // const timing = setTimeout(()=>{
                $(element).dropdown('toggle')

                // if($('#tab-content').hover()){
                //     alert('heyyyyy')
                //     clearTimeout(timing)
                // }
            // },1000)
    
        
        })
    }
    
    

    $("#tabpane-select-buttons").mouseenter((e)=>{

        if(window.innerWidth<=800){
            $("#btntabs").css('background','#fa1942 !important')
        }else{
            
            $("#btntabs").css('background','white')
        
        }
           
            

    
    })

    
})






// ==========================* function open links on grey menu *=====================================
let openlinks=(link)=>{
    window.open(link,"_blank");
    alert('on double clickedddd');
}



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




$(document).ready(function(){
    let toggledrop = document.querySelectorAll("a[id*='toggledrop']");
    let fixmenu = document.getElementById("fixed-navbar");
    let btntabs = document.getElementById('btntabs');
    let megamenu = document.getElementById('megamenu');
    let navlink=document.querySelectorAll('.nav-link');

    if(window.innerWidth<=800){
        $("#btntabs").css('background','#fa1942 !important')
    }else{
        
        $("#btntabs").css('background','white')
    
    }

    window.addEventListener('scroll',()=>{
        if(window.pageYOffset > 500){
            // fixmenu.style.position='fixed';
            // fixmenu.style.width='100%';
            $('#fixed-navbar').css('position','fixed')
            $('#fixed-navbar').css('width','100%')

        }else{
            // fixmenu.removeAttributeNS='100%';
            // window.scrollTo(0,0);
            $('#fixed-navbar').removeAttr('style','position')
        }

        

    })
    
    for (let i = 0; i < toggledrop.length; i++) {
        const element = toggledrop[i];
        element.addEventListener('mouseenter',()=>{

        $(element).dropdown('toggle')

        })
        // $(element).mouseenter((e)=>{

        //     $(element).dropdown('toggle');
        //     $(element).toggleClass('show');

        
        // })
        // $(element).mouseleave((e)=>{
        //     $(element).removeClass('show');
        // })

        
    }
    btntabs.addEventListener('mouseleave',()=>{
    
        $(btntabs).dropdown('toggle')

    })
    // $("#btntabs").mouseleave((e)=>{

    //     // const timing = setTimeout(()=>{
    //         $(element).dropdown('toggle',function(){
    //             alert('fuckkkkk')

    //         })
    //         // if($('#tab-content').hover()){
    //         //     alert('heyyyyy')
    //         //     clearTimeout(timing)
    //         // }
    //     // },1000)

    
    // })
    

    // $("body").mouseenter((e)=>{


    
    // })

    
})






// ==========================* function open links on grey menu *=====================================
let openlinks=(link)=>{
    alert('function is working')
    window.open(link,"_blank");
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



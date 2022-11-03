$('#news .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,

    responsive:{
        0:{
            items:1,
            nav:true
        },
        765:{
            items:2,
            nav:false
        },
        
        1000:{
            items:3,
            nav:true,
            loop:false
        }
        
        
    }
})

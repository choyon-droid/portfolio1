// MENU

function openMenu(){
    document.getElementById('navbar').style.width="100%";
}

function closeMenu(){
    document.getElementById('navbar').style.width="0";
}

// SMOOTH SCROLL

$('.menu-bar ul li a, .next-section a').on('click', function(){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false
});

// WOW

new WOW({
    mobile: false
}).init();

// MIXITUP

var mixer = mixitup('.work-grid');
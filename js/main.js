(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    
    // Main carousel
    $(".carousel .owl-carousel").owlCarousel({
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        smartSpeed: 300,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });
    
    
// Modal Video
$(document).ready(function () {
    var $videoSrc;
    
    // When a play button is clicked, capture the data-src value (video path)
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    
    console.log($videoSrc);

    // When the modal is shown, set the video src attribute
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    });

    // When the modal is hidden, clear the video src attribute to stop the video
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', '');
    });
});

    
    
    // Causes carousel
    $(".causes-carousel").owlCarousel({
        autoplay: true,
        animateIn: 'slideInDown',
        animateOut: 'slideOutDown',
        items: 1,
        smartSpeed: 450,
        dots: false,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Related post carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    (function ($) {
        // Existing code...
    
        function toggleEventContent() {
            if (window.innerWidth <= 575.98) {
                document.getElementById('event-small').style.display = 'block';
                document.getElementById('event-medium').style.display = 'none';
                document.getElementById('event-small-2').style.display = 'block';
                document.getElementById('event-medium-2').style.display = 'none';
            } else if (window.innerWidth <= 991.98) {
                document.getElementById('event-small').style.display = 'none';
                document.getElementById('event-medium').style.display = 'block';
                document.getElementById('event-small-2').style.display = 'none';
                document.getElementById('event-medium-2').style.display = 'block';
            } else {
                document.getElementById('event-small').style.display = 'none';
                document.getElementById('event-medium').style.display = 'block';
                document.getElementById('event-small-2').style.display = 'none';
                document.getElementById('event-medium-2').style.display = 'block';
            }
        }
    
        // Run the function on page load
        toggleEventContent();
    
        // Run the function on window resize
        window.addEventListener('resize', toggleEventContent);
    
    })(jQuery);
    
    
})(jQuery);

document.querySelectorAll('.navbar-nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//  team
// $('.causes-progress').waypoint(function () {
//    $('.progress .progress-bar').each(function () {
//        $(this).css("width", $(this).attr("aria-valuenow") + '%');
//    });
// }, {offset: '80%'});

// Get the modal
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImg");

// Get the close button and arrows
var closeBtn = document.getElementsByClassName("close")[0];
var nextBtn = document.getElementsByClassName("next")[0];
var prevBtn = document.getElementsByClassName("prev")[0];

// Array to store all image URLs
var images = Array.from(document.querySelectorAll('.portfolio-item img')).map(img => img.src);
var currentIndex = 0;

// Open the modal when an image is clicked
document.querySelectorAll('.portfolio-item a').forEach((link, index) => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        currentIndex = index;
        modal.style.display = "block";
        modalImg.src = images[currentIndex];
    });
});

// Close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Show the next image
nextBtn.onclick = function() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex];
}

// Show the previous image
prevBtn.onclick = function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex];
}
jQuery(document).ready(function ($) { 
    $('#closeNotification').click(function (e) { 
        $('#siteNotification').slideUp(1000, function() {
    $(this).remove();
    })
    });
    const overlay = document.querySelector("#overlay"),
    mobileMenuIcon = document.querySelector("#mobileMenuIcon"),
    MobileMenuSection = document.querySelector("#MobileMenuSection"),
    MenuCloseIcon = document.querySelector("#MenuCloseIcon"),
    tabsTitle = document.querySelectorAll(".tabs-title"),
    contentTab = document.querySelectorAll(".tab-content");
let overlayFunc = function ($type) {
    if ($type) {
        overlay.classList.remove("hidden");
        setTimeout(() => {
            overlay.classList.remove("scale-0");
        }, 100);
    }
    if (!$type) {
        overlay.classList.add("scale-0");
        setTimeout(() => {
            overlay.classList.add("hidden");
        }, 300);
    }
};
let menuSectionFunc = function ($type) {
    if ($type) {
        MobileMenuSection.classList.remove("translate-x-80");
    }
    if (!$type) {
        MobileMenuSection.classList.add("translate-x-80");
    }
};
let MenuCloseIconFunc = function ($type) {
    if ($type) {
        MenuCloseIcon.classList.remove("-translate-x-20");
    }
    if (!$type) {
        MenuCloseIcon.classList.add("-translate-x-20");
    }
};
let tabActive = function () {
    tabsTitle.forEach((element) => {
        element.classList.remove("active");
    });
};
let contentTabActive = function () {
    contentTab.forEach((element) => {
        element.classList.add("hidden");
    });
};

overlay.addEventListener("click", () => {
    overlayFunc();
    menuSectionFunc();
    MenuCloseIconFunc();
});

mobileMenuIcon.addEventListener("click", () => {
    overlayFunc("open");
    menuSectionFunc("open");
    MenuCloseIconFunc("open");
});
MenuCloseIcon.addEventListener("click", () => {
    overlayFunc();
    menuSectionFunc();
    MenuCloseIconFunc();
});
tabsTitle.forEach((element) => {
    element.addEventListener("click", function () {
        tabActive();
        let typeMenu = element.getAttribute("data-menu");
        let typeContent = document.getElementById(typeMenu);
        element.classList.add("active");
        contentTabActive();
        typeContent.classList.remove("hidden");
    });
});
    const swiper = new Swiper(".showcaseSlider", {
        effect: "fade",
        loop: true,
      pagination: {
        el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
    });
    $('.tab-category-slider').click(function () { 
        $('.tab-category-slider').removeClass('active');
        $(this).addClass('active');
        const contentSectionName = $(this).attr('data-name');
        $('.content-category-slider').css('display', 'none');
        const contentSection = document.getElementById(contentSectionName);
        contentSection.style.display = 'flex';
    });
    const swiper_horizontal_slider = new Swiper(".horizontal-slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
    });
    var konkorSection = $('#konkorCounter').offset();
    var konkorSectionOffset = (konkorSection.top) - 500;
    $(window).scroll(function () {
                if ($(window).scrollTop() >= konkorSectionOffset) {
                    $('#konkorCounter').prop("Counter", 0).animate({
    Counter: 136,
    },
    {
    duration: 4000,
    easing:"swing",
    step:function (now) {
    now = Number(Math.ceil(now)).toLocaleString('en');
    $(this).text(now);
    },
    });
                }
    });
})
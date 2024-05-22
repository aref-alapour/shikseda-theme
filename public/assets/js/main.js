const toggleThemeBtns = document.querySelectorAll('.toggle-theme');

toggleThemeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    })
})
document.addEventListener("DOMContentLoaded", () => {
const swiper_section = new Swiper(".section-slider", {
    slidesPerView: "auto",
    spaceBetween: 20,
});
    const swiper_cart_1 = new Swiper(".cart-slider-1", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".right-button-1",
            prevEl: ".left-button-1",
        },
    });
    const swiper_cart_2 = new Swiper(".cart-slider-2", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".right-button-2",
            prevEl: ".left-button-2",
        },
    });
});
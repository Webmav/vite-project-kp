const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation")

navToggle.addEventListener("click", ()=>{
    primaryNav.toggleAttribute('data-visible');
    primaryNav.hasAttribute('data-visible')
    ?navToggle.setAttribute('aria-expanded', true)
    :navToggle.setAttribute('aria-expanded', false);
    primaryHeader.toggleAttribute("data-overlay");
})

const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,
    dots: true,
    centerMode: true,
    arrows: false,
    responsive: {
        480: {
            dots: false, // dots enabled px and up
            arrows: true,
        }
    }
});

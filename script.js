
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
})

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#menu-btn");
const menuBtn_icon = document.querySelector("#menu-btn i");

menuBtn.addEventListener('click', () => {
    if(menuBtn.classList.contains("active")){
        menu.classList.remove("show");
        menuBtn.classList.remove("active");
        menuBtn_icon.classList.remove("uil-multiply");
        menuBtn_icon.classList.add("uil-bars");
        return;
    }
    menu.classList.add("show");
    menuBtn.classList.add("active");
    menuBtn_icon.classList.add("uil-multiply");
    menuBtn_icon.classList.remove("uil-bars");
});

const servicebtn = document.querySelector("#menu-btn-nav");
const servicebtn_icon = document.querySelector("#menu-btn-nav i");
const servicecontaint= document.querySelector("#service");
servicebtn.addEventListener('click', () => {
    if(servicecontaint.classList.contains("show")){
        servicecontaint.classList.remove("show");
        // menuBtn.classList.remove("active");
        servicebtn_icon.classList.remove("uil-multiply");
        servicebtn_icon.classList.add("uil-list-ui-alt");
        return;
    }
    servicecontaint.classList.add("show");
    // menuBtn.classList.add("active");
    servicebtn_icon.classList.add("uil-multiply");
    servicebtn_icon.classList.remove("uil-list-ui-alt");
});

var showMenu = (toggleId, navId) =>{
    var toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
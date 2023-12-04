function closeOpenNav(){
    const toggle = document.querySelector(".nav__toggle[aria-expanded=true]");
    if (toggle){
        toggle.setAttribute("aria-expanded",false);
        const navList = document.querySelector(".nav__list.visible");
        if (navList){
            navList.setAttribute("hidden",true);
            navList.classList.remove("visible");
        }
    }
}

document.addEventListener("click",function (event) {
    if (event.target.tagName === "A" && event.target.href.endsWith("#")){
        event.preventDefault();
    }
})

document.addEventListener('keydown', (event) => {
    // Ignore IME 
    if (event.isComposing || event.keyCode === 229) {
        return;
    }  
    // fermer le menu avec esc
    if (event.keyCode === 27) {
        closeOpenNav();
    }
});

document.querySelector(".menu__deroulant").addEventListener('click', function (event) {
    let target = event.target;
    if (target.className === "first"){
        target = target.parentNode;
    }
    if (target.classList.contains("nav__toggle")){
        let navList = target.querySelector('.nav__list');
        if (navList.hasAttribute('hidden')){
            // On ferme les autres
            closeOpenNav();
            // On ouvre celui-là
            target.setAttribute('aria-expanded',"true");
            navList.removeAttribute('hidden');
            navList.classList.add("visible");
        } else {
            navList.setAttribute('hidden',true);
            navList.classList.remove("visible");
            target.setAttribute('aria-expanded',"false");
        }
    }
});
let objNav = document.querySelector("nav");
console.log(objNav.offsetTop);
(function() {
    // on cible l'objet nav
    let objNav = document.querySelector("nav");
    let positionNav = objNav.offsetTop;
    
    function sticky(){
      // position du curseur au scroll
      let posCurseur = this.pageYOffset;
      // je teste la différence de distance entre le scroll et nav
      if(positionNav-posCurseur<1){
        objNav.style.position = "fixed";
        objNav.style.top = 0;
        objNav.style.zIndex = 13;
      }
      if(posCurseur<522){
        objNav.style.position = "relative";
      }
    }
    // evenement
    window.addEventListener("scroll", sticky);
  })();
 
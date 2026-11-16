const bars = document.querySelector("#bars");
const icon = document.querySelector("#bars > i")

const openNav = () => {
    /* navigation */
    document.querySelector("nav > ul").classList.toggle("show");
    /* icon */
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
    /* aria-expanded */
    const expanded = bars.getAttribute('aria-expanded') === 'true';
    bars.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    /*aria-label*/
    const label = bars.getAttribute('aria-label') === 'åben navigation';
    bars.setAttribute('aria-label', label ? 'luk navigation' : 'åbn menu');

}

bars.addEventListener("click", openNav);







const bottomNavButton = document.querySelector("#menu-ikon");
const bottomNavMenu = document.querySelector("#menuen");

if (bottomNavButton && bottomNavMenu) {
    const bottomNavIcon = bottomNavButton.querySelector("i");

    const openBottomNav = () => {
        bottomNavMenu.classList.toggle("show");

        bottomNavIcon.classList.toggle("fa-bars");
        bottomNavIcon.classList.toggle("fa-xmark");

        const expanded = bottomNavButton.getAttribute("aria-expanded") === "true";
        bottomNavButton.setAttribute("aria-expanded", expanded ? "false" : "true");
        bottomNavButton.setAttribute("aria-label", expanded ? "åbn menu" : "luk menu");
    };

    bottomNavButton.addEventListener("click", openBottomNav);
}
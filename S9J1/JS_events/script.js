let footer = document.getElementsByTagName('footer')[0];
function displayClickOnFooter() {
    console.log("Clique");
}
footer.addEventListener("click", displayClickOnFooter);
let clicksCount = 0;
function displayClicksOnFooter() {
    clicksCount ++;
    console.log(`Clic numéro : ${clicksCount}.`);
}
footer.addEventListener("click", displayClicksOnFooter);




let burger = document.getElementsByClassName("navbar-toggler")[0];
let menuContent = document.getElementById("navbarHeader");
function toggleMenu() {
    menuContent.classList.toggle("collapse");
}
burger.addEventListener("click", toggleMenu);




let cards = document.getElementsByClassName("card");
let firstCard = cards[0];
let dangerButton = firstCard.getElementsByClassName("btn-outline-secondary")[0];
function paintItRed() {
    firstCard.style.color = 'red';
}
dangerButton.addEventListener("click", paintItRed);




let secondCard = cards[1];
let ecoButton = secondCard.getElementsByClassName("btn-outline-secondary")[0];
let ecoStyle = false;
function toggleTheGreen() {
    if (ecoStyle) {
        secondCard.style.color = "black";
        ecoStyle = false;
    } 
    else {
        secondCard.style.color = "green";
        ecoStyle = true;
    }
}
ecoButton.addEventListener("click", toggleTheGreen);




let navbar = document.getElementsByTagName("header")[0];
let bootstrapLink = document.head.getElementsByTagName("link")[0];
let bootstrapLinkContent = document.head.getElementsByTagName("link")[0].href;
let bootstrapStatus = true
function switchBootstrap() {
    if (bootstrapStatus) {
        bootstrapLink.href = "#";
        bootstrapStatus = false;
    }
    else {
        bootstrapLink.href = bootstrapLinkContent;
        bootstrapStatus = true;
    }
}
navbar.addEventListener("dblclick", switchBootstrap); 




let viewButtons = document.getElementsByClassName("btn btn-sm btn-success");
for (let i = 0; i < viewButtons.length; i++){
    viewButtons[i].addEventListener("mouseover" , () => {
    document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
    document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");
    });
}




function nextBtn() {
    let nextBtn = document.querySelector("main").querySelector("a.btn.btn-secondary");
    nextBtn.addEventListener("click", () => {
        let cards = document.querySelectorAll(".col-md-4");
        let lastCard = cards[cards.length - 1];
        let firstCard = cards[0];
        let parent = lastCard.parentNode;
        parent.removeChild(lastCard);
        parent.insertBefore(lastCard, parent.firstChild);
        });
}
nextBtn();




function previousBtn() {
    let nextBtn = document.querySelector("main").querySelector("a.btn.btn-primary");
    nextBtn.addEventListener("click", () => {
        let cards = document.querySelectorAll(".col-md-4");
        let lastCard = cards[cards.length - 1];
        let firstCard = cards[0];
        let parent = firstCard.parentNode;
        parent.removeChild(firstCard);
        parent.insertBefore(firstCard, lastCard.nextSibling);
    });
}
previousBtn();




let logoSelect = false;
let logoWrap = document.querySelector("a.navbar-brand.d-flex.align-items-center");
let logoText = logoWrap.querySelector("strong");
function toggleLogoSelect() {
    logoWrap.addEventListener("mousedown", () => {
        logoSelect = !logoSelect;
        if (logoSelect) {
            console.log("a = gauche ; y = milieu ; p = droite ; b = revenir");
            logoText.textContent = "fonction de derrière les fagots pas piqués des hannetons";
        } 
    });
}
toggleLogoSelect();

// nav bar drop down 
const toggle = () => {
    const nav = document.getElementById("topnav");
    nav.className === "topnav" ? nav.className += " responsive" : nav.className = "topnav";
};



// attempt card slider with pagination
const accordion = document.getElementById("dwAcc");
const dwAccUl = document.getElementById("dwAccUl");
let playing = true;
let tiles = accordion.getElementsByClassName("dwAccLi");
let totalTiles = tiles.length;
console.log(totalTiles)
const dots = document.getElementById("dots");
let firstActive = accordion.firstElementChild;

//add initial active class to first slide
firstActive.classList.add("dwAccT--active");

//click dot to slide
function createHandler(n) {
  return function() {
    playing = false;
    //If active class exists
    if (document.querySelector(".dwAccT--active") !== null) {
      //remove active class from all instances
      document.querySelector(".dwAccT--active").classList.remove("dwAccT--active");
    }
    //add active class to current dot
    this.classList.add("dwAccT--active");
    //animate to slide position
    dwAccUl.style.transform = "translateX(-" + n + "00%)";
  };
}

//create dots
const createDotsUl = document.createElement("ul");
//Append ul to #dots
dots.appendChild(createDotsUl);
//For each tile add click event listener and create a dot
for (let i = 0; i < tiles.length; i++) {
  //create a dot
  let createDotsLi = document.createElement("li");
  //reference created dot
  let createdDot = createDotsUl.getElementsByTagName("li");
  //append the created dot to the parent ul
  createDotsUl.appendChild(createDotsLi);
  //remove existing active class from all dots
  document.querySelector(".dwAccT--active").classList.remove("dwAccT--active");
  //add inital active class to first dot
  document.querySelector("#dwAcc ul li:nth-child(1)").classList.add("dwAccT--active");
  //add event handler
  createdDot[i].addEventListener("click", createHandler(i));
}


// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

let headerContainer = document.querySelector(".header-container");
let date = new  Date();
let currentDate = date.getMonth()+'/'+ date.getDay()+'/'+ date.getFullYear();

function Header() {
    let header = document.createElement("div");
        header.classList.add("header");

    let spanDate = document.createElement("span");
        spanDate.classList.add("date");
        spanDate.textContent = `${currentDate}`;

    let hOne = document.createElement("h1");
        hOne.textContent = "Lambda Times";

    let spanTemp = document.createElement("span");
        spanTemp.classList.add("temp");
        spanTemp.textContent = "98°";

    header.appendChild(spanDate);
    header.appendChild(hOne);
    header.appendChild(spanTemp);
    

    headerContainer.appendChild(header);

    return headerContainer;
}


Header();
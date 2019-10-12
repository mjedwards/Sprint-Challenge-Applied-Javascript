// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let container = document.querySelector('.cards-container');
let empty = '#';
let name = "John Doe";
let fakeHeadLine = "Oranges are great";
let authorName;
let authorPhoto;
let newsHeadline;


  axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(function (response) {
    // handle success

    console.log(response);
    createCard(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

function createCard (x) {
    let newsArticles= [];
    let newsBootstrap = Object.values(x.data.articles.bootstrap[i]);
    let newsJavaScript= Object.values(x.data.articles.javascript[i]);
    let newsJquery = Object.values(x.data.articles.jquery[i]);
    let newsNode = Object.values(x.data.articles.node[i]);
    let newsTech = Object.values(x.data.articles.technology[i]);

    for(let i = 0; i < 5; i++) {
        newsBootstrap;
        newsJavaScript;
        newsJquery;
        newsNode;
        newsTech; 
    }
     
   

  let card = document.createElement("div");
    card.classList.add("card");

    let headLine = document.createElement("div");
    headLine.classList.add("headline");
    headLine.textContent = `${newsHeadline}`;

    
    let author = document.createElement("div");
    author.classList.add("author");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

  let image = document.createElement("img");
    image.setAttribute("src",  `${authorPhoto}`);

  let spaN = document.createElement("span");
    spaN.textContent = `By ${authorName}`;
    

// card assembly
  container.appendChild(card);
    card.appendChild(headLine);
    card.appendChild(author);
        author.appendChild(imgContainer);
            imgContainer.appendChild(image);
        author.appendChild(spaN);

  return container;
}

createCard();
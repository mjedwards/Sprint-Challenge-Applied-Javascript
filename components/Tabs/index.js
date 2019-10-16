// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let topics = document.querySelector(".topics");

axios.get("https://lambda-times-backend.herokuapp.com/topics")
  .then(function (response) {
    // handle success
    for(let q = 0; q < response.data.topics.length; q++) 
    createTab(response,q);
    // createTab(response,1);
    // createTab(response,2);
    // createTab(response,3);
    // createTab(response,4);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


function createTab (x,i) {
    let tab = document.createElement("div");
        tab.classList.add("tab");
    
        tab.textContent = x.data.topics[i];
        // for(let i = 0; i < x.data.topics.length; i++) {
        //     
        // }
        // x.data.topics.forEach(el => {
        //     tab.textContent = el;
        // });
        // console.log(tab);

        topics.appendChild(tab);

        return topics;
}

createTab();
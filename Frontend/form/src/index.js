// import "./index.css";

/*
 Your solution here
 */

//helper function to determine if the search has characters
function isValid(value) {
  return value && value.trim();
}
//event listener
const submitHandler = (event) => {
  //prevents site from reloading
  event.preventDefault();
  //selects target
  const form = event.target;
  //creates new form target
  const formData = new FormData(form);
  //figures out if it's invalid
  if (!isValid(formData.get("searchTerm"))) {
    //creates no div element
    const newElement = document.createElement("div");
    //adds error class to div element
    newElement.classList.add("error");
    //adds searchError id to div element
    newElement.id = "searchError";
    //adds innerText to div element
    newElement.innerText = "Please enter a search term";
    //selects the searchForm element
    const formElement = document.querySelector("#searchForm");
    //appends div element to searchForm element
    formElement.appendChild(newElement);
  } else {
    //selects all h2 elements
    const article = document.querySelectorAll("h2");
    //iterates through h2 elements
    article.forEach((art) => {
      //selects the value within searchTerm id
      const search = document.querySelector("#searchTerm").value;
      //selects the innerText from the h2 element
      const artTxt = art.innerText;
      //figures out if texts match
      if (artTxt.toLowerCase().includes(search.toLowerCase())) {
        //////JUST FIGURE THIS OUT.
        const found = art.closest("article");
        found.classList.remove("hidden");
        //if texts don't match
      } else if (!artTxt.toLowerCase().includes(search.toLowerCase())) {
        //selects article element
        //adds hidden class to article element
        const hidden = art.closest("article");
        hidden.classList.add("hidden");
      }
    });
  }
};

const main = () => {
  // get the form element
  const form = document.querySelector("#searchForm");
  // attach the submit handler
  form.addEventListener("submit", submitHandler);
};

//waits for DOM content to load before invoking the search function
window.addEventListener("DOMContentLoaded", main);

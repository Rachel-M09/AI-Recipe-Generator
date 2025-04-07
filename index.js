function generateRecipe(event){
    event.preventDefault();
    

    new Typewriter("#search-results", {
        strings: "Generating a delicious recipe",
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", generateRecipe);
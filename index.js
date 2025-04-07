function displayRecipe(response) {
    new Typewriter("#search-results", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
    
}

function generateRecipe(event){
    event.preventDefault();
    
    let searchInput = document.querySelector("#search-bar");
    let apiKey = "abatc7e4c535e39o4038301f01bf3de5";
    let prompt = `generate a delicious recipe about ${searchInput.value}`;
    let context = "You are a well-renowned culinary expert, an amazing chef and you know all delicious recipes in the world. Make sure that the recipe is easy to follow and the food is delicious. Provide only the recipe and no additional talk. Provide the recipe in a way that is easy to read. The ingredients content should be on a seperate paragraph from the instructions content. Be attentive to what the user is searching for.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


    console.log(`prompt: ${prompt}`);
    console.log(`context: ${context}`);

    axios.get(apiUrl).then(displayRecipe);
}

let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", generateRecipe);
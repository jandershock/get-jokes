import * as DataManager from "./data/DataManager.js";

// Get target location for jokes
let jokeTargetLocation = document.getElementById("random__joke__location")

// Add event listener to our "New Joke" button
document.getElementById("newJoke__button").addEventListener("click", () => {
    DataManager.getRandomJoke(jokeTargetLocation);
});


DataManager.getRandomJoke(jokeTargetLocation);
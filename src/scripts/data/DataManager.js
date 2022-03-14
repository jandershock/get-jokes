import { generateJokeHtml } from "../htmlGenerators/generateJoke.js";

export const getRandomJoke = (location) => {
    return fetch ("https://icanhazdadjoke.com/", 
        { headers: {
                Accept: 'application/json'
            }
        }
    )
    .then(response => {
        return response.json();
    })
    .then(parsed => {
        // Call insert random joke function with location
        location.innerText = generateJokeHtml(parsed);
        return parsed;
    })
}
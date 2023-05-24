const jokeElement = document.getElementById("newJoke");

async function getJoke() {
    const item = await fetch("https://official-joke-api.appspot.com/random_joke");
    const obj = await item.json();

    // console.log("A: " + obj.setup);
    // console.log("B: " + obj.punchline);
    const fact = "- " + obj.setup +" - " + obj.punchline;

    jokeElement.textContent = fact;
}
getJoke();
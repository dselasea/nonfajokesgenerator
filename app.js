const nonfaJokes = [
  {
    author: "",
    joke: "I ate a watch yesterday, it was very time-consuming.",
  },
  {
    author: "",
    joke:
      "Don't interrupt someone working intently on a puzzle. Chances are, you'll hear some crosswords.",
  },
  {
    author: "",
    joke: "What is a well-read cat's favorite book? A: Of Mice and Men",
  },
  {
    author: "Kwaku Darko",
    joke: "Butts talking. Is that not Buttocks?",
  },
  {
    author: "",
    joke:
      "If Obinim meets Afia Schwarzeneger, I guess that's gonna be ObiShwar",
  },
  {
    author: "",
    joke: "In Fanteland, when Dede gets missing, don't they say Dede Ayew",
  },
  {
    author: "",
    joke: "If Afia laughs at stone, we say Afia Serebo)",
  },
  {
    author: "",
    joke: "When Fiifi and Fafa Marry, we call is FIFA",
  },
  {
    author: "",
    joke: "When you tell someone a vision you had, that's TELEVISION",
  },
  {
    author: "",
    joke: "If you own a land in Ho, can we say you're the owner of Holland?",
  },
  {
    author: "",
    joke: "If a Mass Server goes to court, isn't he a Mascot? #chr333d333r",
  },
];

const content = document.getElementById("content");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
const random = document.getElementById("random");

let jokes = 0;

window.addEventListener("DOMContentLoaded", () => {
  displayJokes(jokes);
});

function displayJokes(nonfa) {
  const item = nonfaJokes[nonfa];
  content.textContent = item.joke;
}

leftArrow.addEventListener("click", () => {
  jokes--;
  if (jokes < 0) {
    jokes = nonfaJokes.length - 1;
  }
  displayJokes(jokes);
});

rightArrow.addEventListener("click", () => {
  jokes++;
  if (jokes > nonfaJokes.length - 1) {
    jokes = 0;
  }
  displayJokes(jokes);
});

random.addEventListener("click", () => {
  jokes = Math.floor(Math.random() * nonfaJokes.length);
  displayJokes(jokes);
});

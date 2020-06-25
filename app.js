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
    joke:
      "When a Ga man wants to say 'Solomon don't fool', Im sure he would say SOLOMON KALOU",
  },
  {
    author: "Kwaku Darko",
    joke: "I was walking and I saw a TIE on the LAND. I think im in #THAILAND",
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
    joke: "If Dem Blast somebody cus of Fame...Eno be BLASPHEMY #chr333d333r",
  },
  {
    author: "",
    joke: "If the rapper you like is an Alcoholic...then he be RAPPERHOLIC.",
  },
  {
    author: "",
    joke: "If a Mass Server goes to court, isn't he a Mascot? #chr333d333r",
  },
  {
    author: "",
    joke: "Everyday I lend cars, does that make ma a CALENDAR",
  },
  {
    author: "",
    joke: "My ex went to board a plane. Call that EXPLAIN #chr333d333r",
  },
  {
    author: "",
    joke: "If Aku love money, she is an obvious Akusika",
  },
];

const content = document.getElementById("content");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
const random = document.getElementById("random");
const number = document.querySelector("#number");
const total = document.querySelector("#total");

let jokes = 0;

window.addEventListener("DOMContentLoaded", () => {
  displayJokes(jokes);
});

function displayJokes(nonfa) {
  const item = nonfaJokes[nonfa];
  content.textContent = item.joke;
  number.textContent = jokes + 1;
  total.textContent = nonfaJokes.length;
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

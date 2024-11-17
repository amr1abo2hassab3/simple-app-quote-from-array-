var arrayQuote = [
  {
    sentence: "“Be yourself; everyone else is already taken.”",
    author: "Oscar Wilde",
  },
  {
    sentence: "“So many books, so little time.”",
    author: "Frank Zappa",
  },
  {
    sentence: "“A room without books is like a body without a soul.”",
    author: "Marcus Tullius Cicero",
  },
  {
    sentence: "“Be the change that you wish to see in the world.”",
    author: "Mahatma Gandhi",
  },
  {
    sentence: "“If you tell the truth, you don't have to remember anything.”",
    author: "Mark Twain",
  },
];

var previousNumber;
function handleQuote() {
  var output = document.getElementById("output");
  var author = document.getElementById("author");
  var newnumber = Math.floor(Math.random() * arrayQuote.length);

  while (newnumber === previousNumber) {
    newnumber = Math.floor(Math.random() * arrayQuote.length);
  }

  previousNumber = newnumber;

  output.innerHTML = arrayQuote[newnumber].sentence;
  author.innerHTML = arrayQuote[newnumber].author;
}

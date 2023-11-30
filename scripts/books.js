// books.js
var books = {
    1: {
        author: "This book was written by a Queer American author who grew up in Louisiana and currently lives in New York City.",
        quotes: "“The phrase 'see attached bibliography' is the single sexiest thing you have ever written to me.”",
        tropes: "Enemies to lovers, Queer Romance, Alternate history of the 21st century, The burden of fame"
    },
    2: {
        name: 'another book',
        author: 'another author',
        tropes: 'another synopsis'
    }
};

var isTropesvisible = {};

function revealTropes (bookNumber) {
    console.log(books[bookNumber].tropes);
    var tropesElement = document.getElementById("book" + bookNumber + "-tropes");

    // Hides and reveals button when clicked
    if (isTropesvisible[bookNumber]) {
        tropesElement.innerHTML = ""; // clears
    } else {
        console.log(books[bookNumber].tropes);
        tropesElement.innerHTML = books[bookNumber].tropes; //reveals
    }
    isTropesvisible[bookNumber] = !isTropesvisible[bookNumber]; // toggles
}

var isAuthorvisible = {};

function revealAuthor(bookNumber){
    console.log(books[bookNumber].author);
    var authorElement = document.getElementById("book" + bookNumber + "-author");

    // Hides and reveals button when clicked
    if (isAuthorvisible[bookNumber]) {
        authorElement.innerHTML = ""; // clears
    } else {
        console.log(books[bookNumber].author);
        authorElement.innerHTML = books[bookNumber].author; //reveals
    }
    isAuthorvisible[bookNumber] = !isAuthorvisible[bookNumber]; // toggles
}
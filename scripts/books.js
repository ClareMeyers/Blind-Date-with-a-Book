// books.js
var books = {
    1: {
        name: "Dracula",
        author: "Bram Stoker",
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


function revealName(bookNumber){
    document.getElementById("book" + bookNumber + "-name").innerHTML = books[bookNumber].name;
};
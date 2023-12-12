//This JavaScript handles both the buttons and the cover reveal. It inputs the information from button_info.js and identifies each book by its assigned number


// Currently visible
var isTropesvisible = {};
var isAuthorvisible = {};
var isQuotevisible = {};

// Clicked at least once
var isTropesClicked = {};
var isAuthorClicked = {};
var isQuoteClicked = {};

var revealedCount = 0;

function revealTropes(bookNumber) {
    var tropesElement = document.getElementById("book" + bookNumber + "-tropes");

    // Hides and reveals button when clicked
    if (isTropesvisible[bookNumber]) {
        tropesElement.innerHTML = ""; // clears
    } else {
        var tropes = books[bookNumber].tropes;
        // Makes the tropes show up in a bulleted list
        var tropeBulletsArray = tropes.split(",");
        var tropesBulletsLis = tropeBulletsArray.map(element => (
            '<li>' + element.trim() + '</li>'
        ));
        tropesElement.innerHTML = '<ul>' + tropesBulletsLis.join('') + '</ul>';
        isTropesClicked[bookNumber] = true;
    }
    isTropesvisible[bookNumber] = !isTropesvisible[bookNumber]; // toggles
    handleReveal(bookNumber);
}


function revealAuthor(bookNumber) {
    var authorElement = document.getElementById("book" + bookNumber + "-author");

    // Hides and reveals button when clicked
    if (isAuthorvisible[bookNumber]) {
        authorElement.innerHTML = ""; // clears
    } else {
        authorElement.innerHTML = books[bookNumber].author; //reveals
        isAuthorClicked[bookNumber] = true;
    }
    isAuthorvisible[bookNumber] = !isAuthorvisible[bookNumber]; // toggles
    handleReveal(bookNumber);
}

function revealQuote(bookNumber) {
    var quoteElement = document.getElementById("book" + bookNumber + "-quote");

    // Hides and reveals button when clicked
    if (isQuotevisible[bookNumber]) {
        quoteElement.innerHTML = ""; // clears
    } else {
        quoteElement.innerHTML = books[bookNumber].quote; //reveals
        isQuoteClicked[bookNumber] = true;
    }
    isQuotevisible[bookNumber] = !isQuotevisible[bookNumber]; // toggles
    handleReveal(bookNumber);
}



function handleReveal(bookNumber) {
    if (isTropesClicked[bookNumber] && isAuthorClicked[bookNumber] && isQuoteClicked[bookNumber]) {
        var coverElement = document.getElementsByClassName("cover" + bookNumber)[0];
        
    }
        if (coverElement) {
            // Clears
            coverElement.innerHTML = "";

            // Automatically resizes all covers to fit the container
            var imgElement = document.createElement("img");
            imgElement.src = books[bookNumber].cover;
            imgElement.style.width = "100%";
            imgElement.style.height = "100%";
            coverElement.appendChild(imgElement);
        }
    }


    
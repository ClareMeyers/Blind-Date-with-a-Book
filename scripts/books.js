// inputs in each book's button info by book number 
var books = {
    1: {
        tropes: 'Enemies to lovers, Queer Romance, Alternate history of the 21st century, The burden of fame',
        author: 'This book was written by a Queer American author who grew up in Louisiana and currently lives in New York City.',
        quote: '“The phrase "see attached bibliography" is the single sexiest thing you have ever written to me.”',
        cover: './book_covers/red_white_and_royal_blue.jpg'
    },
    2: {
        tropes: 'Enemies to Lovers, Fake dating, Stuck together',
        author: 'This book was written by two longtime writing partners and best friends who operate under one combined pen name.',
        quote: '“I’m a terrible liar.” <p>“Really? You hid it so well.” </p> “It’s never been my strength, okay? Those of us who aren’t summoned by the Dark Mark consider honesty to be a virtue.”',
    },
    3: {
        tropes: 'Queer Romance, The burden of fame, Forbidden love, Found family, Rags to riches, Anti-hero archetype',
        author: 'This book was written by an American author with four New York Times Bestselling novels(including this one), one of which was adapted into an Amazon original miniseries(not this one).',
        quote: '“You do not know how fast you have been running, how hard you have been working, how truly exhausted you are, until somewhat stands behind you and says, “It’s OK, you can fall down now. I’ll catch you.”',
    },
    4: {
        tropes: 'Love triangle with brothers, Coming-of-age, Sunny vs grumpy',
        author: 'This #1 New York Times bestselling author has received notable acclaim over her two YA romance trilogies, one of which was adapted into an Amazon original series(it might be this one).',
        quote: '"When you walk on the beach at night, you can say things you can’t say in real life. In the dark you can feel really close to a person. You can say whatever you want.”',
    },
};

// Currently visible
var isTropesvisible = {};
var isAuthorvisible = {};
var isQuotevisible = {};

// Clicked at least once
var isTropesClicked = {};
var isAuthorClicked = {};
var isQuoteClicked = {};

var revealedCount = 0;


function handleReveal(bookNumber) {
    if (isTropesClicked[bookNumber] && isAuthorClicked[bookNumber] && isQuoteClicked[bookNumber]) {
        var coverElement = document.getElementsByClassName("cover" + bookNumber)[0];
        coverElement.innerHTML = "<img src='" + books[bookNumber].cover + "' />";
    }
}



function revealTropes(bookNumber) {
    console.log(books[bookNumber].tropes);
    var tropesElement = document.getElementById("book" + bookNumber + "-tropes");

    // Hides and reveals button when clicked
    if (isTropesvisible[bookNumber]) {
        tropesElement.innerHTML = ""; // clears
    } else {
        console.log(books[bookNumber].tropes);
        var tropes = books[bookNumber].tropes;
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
    console.log(books[bookNumber].author);
    var authorElement = document.getElementById("book" + bookNumber + "-author");

    // Hides and reveals button when clicked
    if (isAuthorvisible[bookNumber]) {
        authorElement.innerHTML = ""; // clears
    } else {
        console.log(books[bookNumber].author);
        authorElement.innerHTML = books[bookNumber].author; //reveals
        isAuthorClicked[bookNumber] = true;
    }
    isAuthorvisible[bookNumber] = !isAuthorvisible[bookNumber]; // toggles
    handleReveal(bookNumber);
}

function revealQuote(bookNumber) {
    console.log(books[bookNumber].quote);
    var quoteElement = document.getElementById("book" + bookNumber + "-quote");

    // Hides and reveals button when clicked
    if (isQuotevisible[bookNumber]) {
        quoteElement.innerHTML = ""; // clears
    } else {
        console.log(books[bookNumber].quote);
        quoteElement.innerHTML = books[bookNumber].quote; //reveals
        isQuoteClicked[bookNumber] = true;
    }
    isQuotevisible[bookNumber] = !isQuotevisible[bookNumber]; // toggles
    handleReveal(bookNumber);
}


// inputs in each book's button info by book number 
var books = {
    1: {
        tropes: 'Enemies to lovers, Queer Romance, Alternate history of the 21st century, The burden of fame',
        author: 'This book was written by a Queer American author who grew up in Louisiana and currently lives in New York City.',
        quote: '“The phrase "see attached bibliography" is the single sexiest thing you have ever written to me.”',
        cover: 'book_covers/red_white_and_royal_blue.jpg'
    },
    2: {
        tropes: 'Enemies to Lovers, Fake dating, Stuck together',
        author: 'This book was written by two longtime writing partners and best friends who operate under one combined pen name.',
        quote: '“I’m a terrible liar.” <p>“Really? You hid it so well.” </p> “It’s never been my strength, okay? Those of us who aren’t summoned by the Dark Mark consider honesty to be a virtue.”',
        cover: 'book_covers/unhoneymooners.jpg'
    },
    3: {
        tropes: 'Queer Romance, The burden of fame, Forbidden love, Found family, Rags to riches, Anti-hero archetype',
        author: 'This book was written by an American author with four New York Times Bestselling novels(including this one), one of which was adapted into an Amazon original miniseries(not this one).',
        quote: '“You do not know how fast you have been running, how hard you have been working, how truly exhausted you are, until somewhat stands behind you and says, “It’s OK, you can fall down now. I’ll catch you.”',
        cover: 'book_covers/evelyn_hugo.jpg'
    },
    4: {
        tropes: 'Love triangle with brothers, Coming-of-age, Sunny vs grumpy',
        author: 'This #1 New York Times bestselling author has received notable acclaim over her two YA romance trilogies, one of which was adapted into an Amazon original series(it might be this one).',
        quote: '"When you walk on the beach at night, you can say things you can’t say in real life. In the dark you can feel really close to a person. You can say whatever you want.”',
        cover: 'book_covers/summer_i_turned_pretty.jpg'
    },
    5: {
        tropes: 'Starcrossed lovers, Queer Romance, Burden of fate, Unchecked ambition',
        author: 'The author of this book is an American novelist, who has published two critically acclaimed Greek mythology retellings(including this one).',
        quote: '"We reached for each other, and I thought of how many nights I had lain awake loving him in silence.”',
        cover: 'book_covers/song_of_achilles.jpg'
    },
    6: {
        tropes: 'Misjudged death, Incompetent police, Blackmail, Amateur sleuth, Small town secrets',
        author: 'This book was written by a British author of young adult novels, who wrote her first book when she was only 15.',
        quote: 'Who am I between the projects and the assignments, when there’s nothing to do? I haven’t found her yet and it scares me. Maybe that’s why, for my senior capstone project this year, I decided to solve a murder.”',
        cover: 'book_covers/good_girls_guide_to_murder.jpg'
    },
    7: {
        tropes: 'Mysterious disappearance, Amateur sleuth, Secret past',
        author: 'This #1 New York Times bestselling author has had her work published in thirty-eight different countries.',
        quote: '"Maybe we are all fools, one way or another, when it comes to seeing the totality of the people who love us - the people we try to love.”',
        cover: 'book_covers/last_thing_he_told_me.jpg'
    },
    8: {
        tropes: 'Unreliable narrator, Villainous victim, Stuck together, Twist ending',
        author: 'The author of this book is an American author more commonly known for her contemporary romance novels.',
        quote: '“What you read will taste so bad at times, you’ll want to spit it out, but you’ll swallow these words and they will become part of you, part of your gut, and you will hurt because of them.”',
        cover: 'book_covers/verity.jpg'
    },
    9: {
        tropes: 'Unreliable narrator, Dual-timelines, Unknown mystery, Villainous victim',
        author: 'The author of this book is a former actor-turned-writer, and this is her first book.',
        quote: '“You can justify anything if you do it poetically enough.”',
        cover: 'book_covers/if_we_were_villians.jpg'
    },
    10: {
        tropes: 'Unreliable narrator, Dual-timelines, Murder trial, Villainous victim',
        author: 'The author of this book is an American zoologist, and this is her only novel so far.',
        quote: '“She knew the years of isolation had altered her behavior until she was different from others, but it wasn’t her fault she’d been alone. Most of what she knew, she’d learned from the wild. Nature had nurtured, tutored, and protected her when no one else would.”',
        cover: 'book_covers/where_the_crawdads_sing.jpg'
    },
    11: {
        tropes: 'Enemy to lovers, Dysfunctional family, Dragons, Magical school',
        author: 'The author of this book is an American writer who has recently transitioned from writing traditional romance to writing Romantasy.',
        quote: '“A dragon without its rider is a tragedy. A rider without their dragon is dead.”',
        cover: 'book_covers/fourth_wing.jpg'
    },
    12: {
        tropes: 'The Chosen One, Political dynasties, Magical resource',
        author: 'The author of this book is famous for her contributions to the young adult fantasy genre.',
        quote: '“Deep in the human unconscious is a pervasive need for a logical universe that makes sense. But the real universe is always one step beyond logic.”',
        cover: 'book_covers/dune.jpg'
    },
    13: {
        tropes: 'Deadly competition, Teenage assassin, Love Triangle, Fae, Hidden past',
        author: 'The author of this book is a famous American science fiction writer who has recently had his work adapted into a movie franchise (it might be this one).',
        quote: '“Libraries were full of ideas—perhaps the most dangerous and powerful of all weapons.”',
        cover: 'book_covers/throne_of_glass.jpg'
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
        
        // Check if the cover element exists
        if (coverElement) {
            // Clear the existing content
            coverElement.innerHTML = "";

            // Replace the cover with an image
            var imgElement = document.createElement("img");
            imgElement.src = books[bookNumber].cover;
            imgElement.style.width = "100%";
            imgElement.style.height = "100%";
            coverElement.appendChild(imgElement);
        }
    }
}

function revealTropes(bookNumber) {
    var tropesElement = document.getElementById("book" + bookNumber + "-tropes");

    // Hides and reveals button when clicked
    if (isTropesvisible[bookNumber]) {
        tropesElement.innerHTML = ""; // clears
    } else {
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


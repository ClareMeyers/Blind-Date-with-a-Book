// An array of each book's button information organized by assigned numbers 
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
        cover: 'book_covers/song_of_achilles.jpg',
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
        quote: '“Libraries were full of ideas — perhaps the most dangerous and powerful of all weapons.”',
        cover: 'book_covers/throne_of_glass.jpg'
    },
    14: {
        tropes: 'Forbidden love, Gang rivalry, Mysterious monster attacks, Historical fiction backdrop',
        author: 'The author is a Chinese-American young adult fiction writer who started writing this book as a student at the University of Pennsylvania.',
        quote: '“This place hums to the tune of debauchery. This city is filthy and deep in the thrall of unending sin, so saturated with the kiss of decadence that the sky threatens to buckle and crush all those living vivaciously beneath it in punishment.”',
        cover: 'book_covers/these_violent_delights.jpg'
    },
    15: {
        tropes: 'Ancient evil, Dragons, Prophecies, LGBTQ+, Secret society, Cultural conflict',
        author: 'The author of this book is a prominent British fantasy writer.',
        quote: '“I do not sleep because I am not only afraid of the monsters at my door, but also of the monsters my own mind can conjure. The ones that live within.”',
        cover: 'book_covers/priory_of_the_orange_tree.jpg'
    },
    16: {
        tropes: 'Intersection of science and philosophy, Impacts of cancer, Facing mortality',
        author: 'The author was an Indian-American neurosurgeon who sadly died right before finishing this book.',
        quote: '“I began to realize that coming in such close contact with my own mortality had changed both nothing and everything. Before my cancer was diagnosed, I knew that someday I would die, but I didn’t know when. After the diagnosis, I knew that someday I would die, but I didn’t know when. But now I knew it acutely.”',
        cover: 'book_covers/when_breath_becomes_air.jpg'
    },
    17: {
        tropes: 'Journey of self-discovery, Healing power of nature, Solo adventure, Flashbacks',
        author: 'This book was written by an American author and memoirist, who has published two other novels in addition to this one.',
        quote: '“It had nothing to do with gear or footwear or the backpacking fads or philosophies of any particular era or even with getting from point A to point B. It had to do with how it felt to be in the wild. With what it was like to walk for miles with no reason other than to witness the accumulation of trees and meadows, mountains and deserts, streams and rocks, rivers and grasses, sunrises and sunsets."',
        cover: 'book_covers/wild.jpg'
    },
    18: {
        tropes: 'Child actor, Eating disorder, Complicated family dynamics, Journey of self-discovery',
        author: 'This book was written by a well-known child actress-turned-director. This is her only book.',
        quote: '“Why do we romanticize the dead? Why can’t we be honest about them? Especially moms. They’re the most romanticized of anyone."',
        cover: 'book_covers/im_glad_my_mom_died.jpg'
    },
    19: {
        tropes: 'Florida history, Cuban-American culture, Culinary evolution',
        author: 'The authors of this book live in Tampa, Florida, and are avid cuban sandwich enjoyers.',
        quote: '“When prepared well, the Cuban sandwich enthralls with the first bite, the audible crunch as your teeth shatter the toasted Cuban bread and plunge into the warm fillings inside. Sweet ham, pungent Cuban roast pork, the subtle charm of Swiss cheese, briny pickles, mustard, and sometimes more—are sliced and layered to become one dynamic flavor on the palate."',
        cover: 'book_covers/cuban_sandwich.jpg'
    },
    20: {
        tropes: 'Medical ethics, Theme of immortality, Systemic racism, Scientific progress and responsibility',
        author: 'The author of this book is an American journalist, who has written for The New York Times, The Oprah Magazine, among others.',
        quote: '“She’s the most important person in the world and her family living in poverty. If our mother is so important to science, why can’t we get health insurance?”',
        cover: 'book_covers/henrietta_lacks.jpeg'
    },
};
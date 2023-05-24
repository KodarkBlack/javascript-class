//TEMPLATE LITERAL OR TEMPLATE STRING

//The best way i can explain template literal or template is Referring to textContent because they share same similarities ,
//Using template literals with the ${} syntax allows you to embed expressions and variable values directly into a string. The placeholders within the template string 
//are replaced with the actual values of the variables when the string is evaluated or displayed. It provides a concise and readable way to combine static
//text with dynamic content.
//textContent allows you to manipulate the textual content of an HTML content so using the templateLiteral, the values of the variables are substituted into 
//the placeholder when the string changes. And i also got to know that template literal can be used to create multiple line string using the backtick()

// for example
let favRapArtist = "So far my favorite rap artist is YB "
let favAlbum = "And my best album is TOP"
let myFavoriteSong = ["Drug addiction",
 "Level i want to reach",
  "Kentrell talk",
  "Paronamic",
  "Still Waiting", "Act A Fool",
  "Purge Me",
  "I Love It",
  "All In",
  "Heart & Soul",
  "Life Support",
  "Death Enclaimed",
  "Red Eye",
  "Untouchable",
  "Diamonds",
  "Sedated",
  "Smoke One",
  "I Admit",
  "Astronaut Kid"
]
let dieHard = true;
let amountOfAlbumReleased = 

let words = `${favRapArtist} ${favAlbum} and some of my favorite songs from never broke again young boy is : ${myFavoriteSong} and if you ask me if i'm a die hard fan i'll say : ${dieHard} `

console.log(words)

/* Opdracht 0: voorbeeld */
// Schrijf een functie die de string "Goedemorgen" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Goedemorgen"

function morningGreeter() {
  return "Goedemorgen";
}

const greeting = morningGreeter();

console.log(greeting);

//Manier 2: arrow-function:

const morningGreeter2 = () => "Goedemorgen";
console.log(morningGreeter2());

/* Opdracht 1 */
// Schrijf een functie genaamd getSchool, die de string "Novi Hogeschool" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Novi Hogeschool"

function getSchool() {
  return "Novi Hogeschool";
}

//Manier 1:
const school = getSchool();
console.log(school);

//Manier 2:
console.log(getSchool());

//Manier 3: arrow-function:
const getSchool3 = () => "Novi Hogeschool voor ICT";
console.log(getSchool3());

/* Opdracht 2 */
// Schrijf een functie genaamd compliment, die jou een complimentje geeft!
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Lekker bezig met die functies, Jan!"

function getCompliment() {
  return "Lekker bezig met die functies, Irene!"
}

const compliment = getCompliment();
console.log(compliment);

//Manier 2: arrow-function

const getCompliment2 = () => "Lekker bezig!";
console.log(getCompliment2());

/* Opdracht 3 */
// Schrijf een functie genaamd getGrades, die een array met de cijfers 8, 8.5, 6 en 7 teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: [8, 8.5, 6, 7]

function getGrades() {
  return [8, 8.5, 6, 7];
}

const grades = getGrades();
console.log(grades);

//Manier 2: arrow-function

const getGrades2 = () => [8, 8.5, 6, 7];
console.log(getGrades2());

/* Opdracht 4 */
// Schrijf een functie genaamd getDetails, die een object met daarin jouw eigen naam en achternaam teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: { firstName: 'Jan', lastName: 'Janssen' }

function getDetails() {
  const myName = {
    firstName: "Irene",
    lastName: "Jurna",
  }
  return myName
}

const details = getDetails();
console.log(details);

// Manier 2: arrow-function

const getDetails2 = () => {
  const fullName = {
    first: "Judith",
    last: "Jurna",
  }
  return fullName;
}

console.log(getDetails2());
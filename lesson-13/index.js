// Promise example
const maPromesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("toto");
  }, 300); // -> 300ms
});

maPromesse
  .then((valeur) => {console.log("Valeur reçue 1:", valeur); return `${valeur} et truc`})
  .then((valeur) => {console.log("Valeur reçue 2:", valeur); return `${valeur} et truc blabla`})
  .then((valeur) => {console.log("Valeur reçue 3:", valeur); return `${valeur} et blabla`})
  .then((valeur) => {console.log("Valeur reçue 4:", valeur); return `${valeur} et blabla`})
  .then((valeur) => {
    console.log("Valeur finale:", valeur);
  })
  .catch((err) => {
    console.error(err);
  });




// let counter = 1;
// const callbackFunction = function () {
//   console.log(counter);
//   timeoutId = setTimeout(callbackFunction, 1000);
 
//   counter += 1; // counter = counter + 1;
 
//   if (counter > 10) {
//     clearTimeout(timeoutId);
//   }
// };
 
// let timeoutId = setTimeout(callbackFunction, 1000);

// let i = 1;
// const intervalId = setInterval(function () {
//   console.log(i);
 
//   i++; // i = i + 1;
 
//   if (i > 10) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// let i = 10;
// const intervalId = setInterval(function () {
//   if (i > 0) {
//     console.log(i);
//   } else {
//     console.log("Pop!");
//     clearInterval(intervalId);
//   }
 
//   i--;
// }, 1000);

// Promise example 2 with directions
const directions = [
  "Starting point: Ironhack Madrid",
  "➔ Turn right towards P. de la Chopera",
  "← At the roundabout, take the 1st exit onto P. de la Chopera",
  "* Lune Creperie P. de la Chopera 33, Madrid",
];
 
function obtainDirections(step) {
  return new Promise(function (resolve, reject) {
    // setTimeout(() => {
    console.log(directions[step]);
 
    if (!directions[step]) reject("Instructions not found.");
    else resolve();
    // }, 2000);
  });
}
 
obtainDirections(0)
  .then(() => obtainDirections(1))
  .then(() => obtainDirections(2))
  .then(() => obtainDirections(3))
  .then(() => console.log("You arrived at your destination!"))
  .catch((err) => console.log(err));
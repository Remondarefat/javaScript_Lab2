function check() {
  var checkInput = confirm("do you want to add another age");
  if (checkInput) {
    userAge();
  } else {
    alert("Done");
  }
}

function userAge() {
  var age = Number(prompt("please enter your age"));

  if (age < 0) {
    alert("Wrong Input");
    userAge();
  } else if (age >= 1 && age <= 10) {
    alert("You Are a Chiled");
    check();
  } else if (age >= 11 && age <= 18) {
    alert("You Are a Teenager");
    check();
  } else if (age >= 19 && age <= 50) {
    alert("You Are a Grown up ");
    check();
  } else if (age > 50) {
    alert("You Are a Old is greater ");
    check();
  }
}
userAge();

// ------------------------------------Q2----------------------------
function calculateVowelNumber() {
  var userInput = prompt("please enter a string");
  var vowelCount = 0;
  if (userInput === null) {
    alert("Invalied String");
    calculateVowelNumber();
  } else {
    let lowerCasedString = userInput.toLowerCase();
    for (let char of lowerCasedString) {
      if (
        char === "a" ||
        char === "e" ||
        char === "o" ||
        char === "u" ||
        char === "i"
      ) {
        vowelCount++;
      }
    }
    alert(`The number of vowel in the string is ${vowelCount}`);
  }
}

calculateVowelNumber();

// -----------------------------------Q3----------------------------
function timeConvertion() {
  var hour = Number(prompt("please enter  an hour"));
  if (hour >= 0 && hour <= 12) {
    alert(`${hour} AM`);
  } else if (hour > 12 && hour <= 24) {
    alert(`${hour - 12}PM`);
  } else {
    alert("please enter hour between 1 to 24");
    timeConvertion();
  }
}
timeConvertion();

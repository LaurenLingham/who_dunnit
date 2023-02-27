// EPISODE 1

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
const verdict = declareMurderer();
console.log(verdict);

// The murderer is Miss Scarlet
// The declareMurderer function is accessing the murderer assigned to the scenario object who is Miss Scarlet


// EPISODE 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Error as code is trying to ressign murderer which is a constant variable


// EPISODE 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// First verdict: The murdered is Mrs Peacock.
// Second verdict: The murdered is Professor Plum.
// In firstVerdict the murderer variable has been reassigned within the function to Mrs Peacock.
// In secondVerdict it's accessing the original value of the murderer variable, Professor Plum.


// EPISODE 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
// Suspect three is Mrs. Peacock.
// In the first console.log suspects variable accesses declareAllSuspects function, within that function suspectThree has been reassigned to Colonel Mustard.
// In the second, it's accessing the original value of suspectThree variable which is Mrs. Peacock.


// EPISODE 5

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// The weapon is the Revolver.
// changeweapon function has been called passing in 'Revolver' to change weapon.


// EPISODE 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// The murderer is Mrs. White
// changeMurderer function calls plotTwist function which changes murderer to Mrs. White.


// EPISODE 7

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// The murderer is Mr. Green.
// The murderer variable of Professor Plum gets reassigned to Mr. Green within the changeMurderer function.
// The murder variable of Colonel Mustard, which later gets reassigned to Miss Scarlet, is a separate variable so has no effect.


// EPISODE 8

const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
  }
  
  const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
  }
  
  changeScenario();
  const verdict = declareWeapon();
  console.log(verdict);

// The weapon is Candle Stick.
// The changeScenario function reassigned the room to the dining room which then matched the condition for the plotTwist function, changing the
// murderer to Colonel Mustard.  That then matches the condition for unexpectedOutcome which changes the weapon to the candle stick.


// EPISODE 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// The murderer is Professor Plum.
// The murderer variable of Mrs. Peacock is a new variable, separate from the original murderer variable of Professor Plum so this doesn't change.


// EPISODE 10

const scenario = {
    murderer: "Colonel Mustard",
    room: "Billiard Room",
    weapon: "Rope"
  };
    
  const plotTwist = function(weapon) {
    if (scenario.weapon === weapon) {
        scenario.murderer = "Mrs White";
      }
  }
  
  const declareMurderer = function () {
    return `The murderer is ${scenario.murderer}.`;
  }
  
  plotTwist("Rope");
  const verdict = declareMurderer();
  console.log(verdict);
  
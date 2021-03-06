// ## Challenge #2

// The lights flicker on, and you can see the interior of the ship, along with LARRY, your duck-shaped friend. You feel relieved, until LARRY’s eyes start to glow red, and he starts blaring, "SHIP IN DANGER! SHIP IN DANGER!"

// What can it be? You've turned the power back on, everything should be back to normal, right? "MODULES NOT ACTIVE!" Modules, what modules? A quick check of the ship's status board reveals an empty array labelled 'modules'.

// You flip through the manual to the section labelled 'Modules', where the first page describes a number of available modules. They are stored in memory in the availableModules array. Each module is an object, with four properties:

//     the name of the module is a string
//     the size of the module is an integer
//     the enabled and essential properties are booleans

// Start off by finding out how many modules there are. Make a function called countModules to reveal how many modules there are to choose from.

const availableModules = [
  { name: '',
    size: 0,
    enabled: false,
    essential: false
  }
];

let ship = {
  powerOn: false,
  modules: []
};

const powerOn = (power) => {
  return (power) ? power : power = true;
};

const countModules = (availableMod) => {
  if (typeof availableMod === "undefined") {
    console.log("undefined");
  }
  return availableMod.length;
};

ship.powerOn = powerOn(ship.powerOn);
console.log(ship.powerOn);

console.log(countModules(availableModules));

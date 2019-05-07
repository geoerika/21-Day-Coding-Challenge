// ## Challenge #3

// "QUACK QUACK QUACK QUACK QUACK QUACK QUACK", goes LARRY, his eyes still glowing red. He’s counting off each of the seven modules on the list - you must be on the right track! Now to find out how many of them are essential.

// Use your JavaScript skills to write a function called countEssential() which will count how many modules from the availableModules array have the essential flag set.


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

const powerOn = () => {
  return (ship.powerOn) ? ship.powerOn : ship.powerOn = true;
};

const countModules = () => {
  return availableModules.length;
};

const countEssential = () => {
  let count = 0;
  for (obj of availableModules) {
    if (obj.essential) count++;
  }
  return count;
}

powerOn();
console.log(ship.powerOn);

console.log(countModules());
console.log(countEssential());
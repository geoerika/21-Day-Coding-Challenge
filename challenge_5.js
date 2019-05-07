// ## Challenge #5

// "BREATHE EASIER!" LARRY quacks out. "LITERALLY. Life support module loaded. Propulsion needed."

// You can re-use your code from before, but this time you should do what all good programmers do: modularize your code. Write a function called findModuleIndex() which will take in a name that you’re looking for, and return the index of that module in the availableModules array. Remember: it has to have the essential flag, too!

// Use your findModuleIndex function to find the "propulsion" module and then load it into the ship's system.


const availableModules = [
  { name: 'life-support',
    size: 0,
    enabled: false,
    essential: true
  },

  { name: 'propulsion',
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
  for (let obj of availableModules) {
    if (obj.essential) count++;
  }
  return count;
}

const loadModule = () => {

  let index = findModuleIndex('propulsion');
  availableModules[index].essential = true;
  ship.modules.push(availableModules[index]);
  index = findModuleIndex('life-support');
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);

};

const findModuleIndex = (name) => {
  let index;
  for (let i = 0; i < availableModules.length; i++) {
    if (availableModules[i].name === name) index = i;
  }
  return index;
};

powerOn();
console.log(ship.powerOn);
console.log(countModules());
console.log(countEssential());
loadModule();
console.log(ship.modules);
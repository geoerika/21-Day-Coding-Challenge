// ## Challenge #6

// "NAVIGATION SYSTEM needed," LARRY tells you. Navigation is important - you can't move through space without it!

// Use your already-defined methods and load in the "navigation" module. It's pretty simple once you have the functions to do it, and LARRY's eyes are finally easing from red back to normal.

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
  index = findModuleIndex('navigation');
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

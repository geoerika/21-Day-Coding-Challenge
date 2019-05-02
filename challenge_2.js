const availableModules = [
  { name: '',
    size: 0,
    enabled: false,
    essential: false
  }
];

let ship = {
  powerOn: false
};

const powerOn = (power) => {
  return (power) ? power : power = true;
};

const countModules = (availableMod) => {
  return availableMod.length;
};

ship.powerOn = powerOn(ship.powerOn);
console.log(ship.powerOn);

console.log(countModules(availableModules));

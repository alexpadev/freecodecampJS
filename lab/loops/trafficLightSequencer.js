const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles) {
  if (config.phases.length === 0) {
    console.log("No phases found");
    return;
  } 
  if (config.fault) {
    console.log("Faulted phase!")
    return;
  }
 
  let cont = 0;
  while (cont < cycles) {
    for ( let i = 0; i < config.phases.length; i++ ) {
      if (config.phases[i].duration <= 0) {
        console.log("Invalid phase detected")  
        continue; 
      }
      const color = config.phases[i].color;
      const duration = config.phases[i].duration;

      console.log(`Switching to ${color} for ${duration} s`);
    }
    cont++;
  }
 
  return;
}

function generateTimeline(config, cycles) {
  let cont = 0;
  const arr = [];
  let sum = 0;
  while (cont < cycles) {
    for ( let i = 0; i < config.phases.length; i++ ) {
      sum += config.phases[i].duration;
      arr.push(sum);
    };
    cont++;
  }
  return arr;
}
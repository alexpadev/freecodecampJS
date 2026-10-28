let cargoManifest = {
  containerId: 68,
  destination: "Salinas",
  weight: 101,
  unit: "lb",
  hazmat: true
}

function normalizeUnits(manifest) {
  let manifestCopy = {...manifest};
  if (manifest.unit === "kg") {
    return manifestCopy;
  } else {
    manifestCopy.unit = "kg";
    manifestCopy.weight = manifestCopy.weight*0.45;
    return manifestCopy;
  }
};

function validateManifest(manifest) {
  let manifestCopy = {};
  if (manifest.containerId === undefined) {
    manifestCopy.containerId = "Missing";
  } else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    manifestCopy.containerId = "Invalid";
  }
  if (manifest.destination === undefined) {
    manifestCopy.destination = "Missing";
  } else if (typeof(manifest.destination) !== "string" || manifest.destination.trim() === "") {
    manifestCopy.destination = "Invalid";
  }
  if (manifest.weight === undefined) {
    manifestCopy.weight = "Missing";
  } else if (!Number.isInteger(manifest.weight) ||manifest.weight <= 0) {
    manifestCopy.weight = "Invalid";
  } 
  if (manifest.unit === undefined) {
    manifestCopy.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    manifestCopy.unit = "Invalid";
  }
  if (manifest.hazmat === undefined) {
    manifestCopy.hazmat = "Missing";
  } else if (typeof(manifest.hazmat) !== "boolean") {
    manifestCopy.hazmat = "Invalid";
  } 
  return manifestCopy;
}

function processManifest(manifest) {
  const normalizedManifest = normalizeUnits(manifest);
  const validatedManifest = validateManifest(manifest);
  if (Object.keys(validatedManifest).length === 0) {
    console.log( `Validation success: ${normalizedManifest.containerId}`)
    console.log(`Total weight: ${normalizedManifest.weight} kg`)
  
  } else {
    console.log( `Validation error: ${manifest.containerId}`)
    console.log (validatedManifest);
  }
}

console.log(normalizeUnits(cargoManifest));
console.log(validateManifest(cargoManifest));
console.log(processManifest(cargoManifest));
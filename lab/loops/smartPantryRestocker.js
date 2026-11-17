const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
  const trimmedParts = [];
  const skuList = [];

  for ( let i = 0; i < rawData.length; i++ ) {
    const parts = rawData[i].split("|");  
    if (!skuList.includes(parts[0])) {
      skuList.push(parts[0]);
      trimmedParts.push(parts)
    }         
  }
  const objectsArr = [];
  for ( let i = 0; i < trimmedParts.length; i++ ) {
    const sku = trimmedParts[i][0];
    const name = trimmedParts[i][1];
    const qty = trimmedParts[i][2];
    const expires = trimmedParts[i][3];
    const zone = trimmedParts[i][4];

    const object =  {
      sku: sku,
      name: name,
      qty: parseInt(qty),
      expires: expires,
      zone: zone || "general"
    }
    objectsArr.push(object)
  }
  return objectsArr;
}

function planRestock(pantry, shipment) {
  const objArr = [];
  for ( let i = 0; i < shipment.length; i++ ) {
    let type;
    let foundSku = false;
  
    for ( let j = 0; j < pantry.length; j++ ) {
      if (shipment[i].sku === pantry[j].sku) {
        foundSku = true;    
      }
    }

    if (shipment[i].qty <= 0) {
      type = "discard";
    } else if (foundSku) {
      type = "restock";
    } else {
      type = "donate";
    }
  
    const object = {
      type: type,
      item: shipment[i],      
    }
    objArr.push(object);
  }
  return objArr;
}

function groupByZone(actions) {
  const result = {};

  for (let i = 0; i < actions.length; i++) {
    const zone = actions[i].item.zone;
    if (result[zone] === undefined) {
      result[zone] = [];
    }
    result[zone].push(actions[i]);
  }
  return result;
}

function clonePantry(pantry) {
  const clonnedPantry = [];
  for ( let i = 0; i < pantry.length; i++ ) {
    const newObj = {
       sku: pantry[i].sku,
       name: pantry[i].name,
       qty: pantry[i].qty,
       expires: pantry[i].expires,
       zone: pantry[i].zone
    }
    clonnedPantry.push(newObj);
  }
  return clonnedPantry;
}

console.log(groupByZone(planRestock(pantry, parseShipment(rawData))));
const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

function serializeLedger(ledger) {
  return JSON.stringify(ledger);
};

function loadLedger(json) {
  return JSON.parse(json);
} 

function checkoutDevice(ledger, assetTag, borrower) {
  if (!Object.hasOwn(ledger, assetTag)) {
    return { ledger, message: `Asset ${assetTag} not found.`};
  }
  if (ledger[assetTag].status === "CheckedOut") {
    return { ledger, message : `Asset ${assetTag} is already checked out.`};
  }

  const updatedLedger = loadLedger(serializeLedger(ledger));

  updatedLedger[assetTag].borrower = borrower;
  updatedLedger[assetTag].status = "CheckedOut";
 

  return { ledger: updatedLedger, message: `Device with asset tag ${assetTag} has been borrowed by ${borrower.name}` };

};

function checkinDevice(ledger, assetTag) {
  if (!Object.hasOwn(ledger, assetTag)) {
    return { ledger, message: `Device with asset tag ${assetTag} not found.`};
  }

  const updatedLedger = loadLedger(serializeLedger(ledger));

  updatedLedger[assetTag].borrower.name = "";
  updatedLedger[assetTag].borrower.email = "";
  updatedLedger[assetTag].status = "CheckedIn";
  updatedLedger[assetTag].dueDate = "";

  return { ledger: updatedLedger, message: `The device with asset tag ${assetTag} has been returned.`};
};

function listOverdueDevices(ledger, today) {
  const [todayMonth, todayDay, todayYear] = today.split("/");
  const todayNumber =
    Number(todayYear) * 10000 + Number(todayMonth) * 100 + Number(todayDay);

  const arr = [];

  for (let device in ledger) {
    if (ledger[device].status === "CheckedOut") {
      const [month, day, year] = ledger[device].dueDate.split("/");
      const dueDateNumber =
        Number(year) * 10000 + Number(month) * 100 + Number(day);

      if (dueDateNumber < todayNumber) {
        arr.push({ dueNumber: dueDateNumber, device: ledger[device] });
      }
    }
  }

  arr.sort((a, b) => a.dueNumber - b.dueNumber);

  const result = [];
  for (const item of arr) {
    result.push(item.device);
  }

  return result;
}

// const result = checkoutDevice(equipmentLedger, "2", { name: "Ana", email: "ana@mail.com" }); 
// const result2 = listOverdueDevices(equipmentLedger, "11/13/2025");
// console.log(result2);
// console.log(result.message);

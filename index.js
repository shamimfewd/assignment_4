function calculateMoney(ticketSale) {
  const perTicket = 120;
  const gatekeeperCost = 500;
  const staffs = 8;

  if (ticketSale < 0) {
    return "Invalid Number";
  }

  const ticketQuantity = ticketSale * perTicket;
  const staffsCost = staffs * 50;
  const totalCost = gatekeeperCost + staffsCost;

  const result = ticketQuantity - totalCost;
  return result;
}

// const output = calculateMoney(-130);
// console.log(output);

function checkName(name) {
  let arr = ["A", "y", "i", "e", "o", "u", "w"];
  let caseCompatibility = arr.toString().toLowerCase();

  let endOfName = name[name.length - 1];

  if (typeof name !== "string") {
    return "invalid";
  }

  if (caseCompatibility.includes(endOfName)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

function deleteInvalids(array) {
  let arr = [];

  if (!Array.isArray(array)) {
    return "Invalid Array";
  }

  for (const number of array) {
    if (typeof number === "number" && !isNaN(number)) {
      arr.push(number);
    }
  }
  return arr;
}

// const output = deleteInvalids({num: [ 1 , 2 , 3 ]});
// console.log(output);

function password(obj) {
  let site = obj.siteName;
  let birthDay = obj.birthYear;
  let username = obj.name;

  if (
    !obj.hasOwnProperty("siteName") ||
    !obj.hasOwnProperty("birthYear") ||
    !obj.hasOwnProperty("name")
  ) {
    return "invalid";
  }

  if (obj.birthYear.toString().length !== 4) {
    return "invalid";
  }
  let result =
    site.charAt(0).toUpperCase() +
    site.slice(1) +
    "#" +
    username +
    "@" +
    birthDay;

  return result;
}

// let output = password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" });
// console.log(output);

function monthlySavings(arr, livingCost) {
  let savings = 0;

  if (!Array.isArray(arr) || typeof livingCost !== "number"){
    return 'invalid input'
  }
    for (const item of arr) {
      savings = savings + item;
    }

  if (arr.includes(3000)) {
    let payment = arr.indexOf(3000);
    let bankTax = (arr[payment] * 20) / 100;
    savings = savings - bankTax;
  }

  let living = savings - livingCost;

  if (living < 0) {
    return "earn more";
  }
  return living;
}

// let output = monthlySavings({name: 'shamim'});

// console.log(output);

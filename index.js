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

  let lastChar = name[name.length - 1];

  if (typeof name !== "string") {
    return "Invalid";
  }

  if (caseCompatibility.includes(lastChar)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

const output = checkName("mahbuba");
console.log(output);

// function checkName(name){
//     last_chars = ['A', 'Y', 'I', 'E', 'O', 'U', 'W']
//     last_char = last_chars[last_chars.length - 1]
//     // arr[arr.length - 1]

// if (last_char in last_chars)
//     return "Good Name"
// else{
//     return "Bad Name"
//     }

// }

//    const output = checkName('shamiE')
//    console.log(output);

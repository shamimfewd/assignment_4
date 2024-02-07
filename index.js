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

const output = calculateMoney(-130);
console.log(output);

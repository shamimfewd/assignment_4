function calculateMoney(ticketSale) {
  const perTicket = 120;
  let gatekeeperCost = 500;
  let staffs = 8;

  const ticketQuantity = ticketSale * perTicket;
  const staffsCost = staffs * 50;

  const totalCost = gatekeeperCost + staffsCost;
  const result = ticketQuantity - totalCost;
  return result;
}

const output = calculateMoney(-130);

console.log(output);

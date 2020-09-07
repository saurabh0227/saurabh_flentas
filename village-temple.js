function findMinimumCost(price) {
  let arrayLength = price.length;
  price.sort();
  let totalCost = 0;
  for (let i = arrayLength - 1; i > 1; i -= 2) {
    if (i == 2) {
      totalCost += price[2] + price[0];
    } else {
      let price_first = price[i] + price[0] + 2 * price[1];
      let price_second = price[i] + price[i - 1] + 2 * price[0];
      totalCost += Math.min(price_first, price_second);
    }
  }
  if (arrayLength == 1) totalCost += price[0];
  else totalCost += price[1];
  return totalCost;
}

const minimumCost = findMinimumCost([300, 400, 600, 700]);
// const minimumCost = findMinimumCost([1321, 2450])
// const minimumCost = findMinimumCost([500, 123, 873]);
// const minimumCost = findMinimumCost([600, 800, 150, 700]);
console.log('minimumCost', minimumCost);

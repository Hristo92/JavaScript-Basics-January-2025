function vegetableMarket(vegPrice, fruitPrice, vegWeigh, fruitWeight) {
  let vegSum = vegPrice * vegWeigh;
  let fruitSum = fruitPrice * fruitWeight;
  let totalSum = vegSum + fruitSum;
  let sumInEuros = totalSum / 1.94;

  console.log(sumInEuros.toFixed(2));
}
vegetableMarket(0.194, 19.4, 10, 10);

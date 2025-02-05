function depositCalculator(deposit, months, yearlyRate) {
  let totalSum = deposit + months * ((deposit * (yearlyRate / 100)) / 12);
  console.log(totalSum);
}
depositCalculator(2350, 6, 7);

function repainting(naylon, paint, thinner, hours) {
  let naylonSum = naylon * 1.5;
  let paintSum = paint * 14.5;
  let thinnerSum = thinner * 5;

  paintSum += paint * 0.1 * 14.5;
  naylonSum += 2 * 1.5;

  let totalMaterialExpence = naylonSum + paintSum + thinnerSum + 0.4;
  let oneHourWork = totalMaterialExpence * 0.3;

  let totalWorkSum = hours * oneHourWork;

  let totalSum = totalMaterialExpence + totalWorkSum;

  console.log(`${totalSum}`);
}
repainting(5, 10, 10, 1);

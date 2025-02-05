function foodDelivery(chickenMenu, fishMenu, vegetarianMenu) {
  let chickenMenuSum = chickenMenu * 10.35;
  let fishMenuSum = fishMenu * 12.4;
  let vegetarianMenuSum = vegetarianMenu * 8.15;

  let totalMenusSum = chickenMenuSum + fishMenuSum + vegetarianMenuSum;

  let dessert = totalMenusSum * 0.2;

  let totalPrice = totalMenusSum + dessert + 2.5;

  console.log(totalPrice);
}
foodDelivery(9, 2, 6);

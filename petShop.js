function petShop(dogPackCount, catPackCount) {
  let dogFinalPrice = dogPackCount * 2.5;
  let catFinalPrice = catPackCount * 4;

  let totalPriceForFood = dogFinalPrice + catFinalPrice;

  console.log(`${totalPriceForFood} lv.`);
}
petShop(5, 4);

function fishland(
  mackerelPrice,
  sprinklePrice,
  bonitoKg,
  safridKg,
  shellfishKg
) {
  let bonitoPrice = bonitoKg * (mackerelPrice + mackerelPrice * 0.6);
  let safridPrice = safridKg * (sprinklePrice + sprinklePrice * 0.8);
  let shellfishPrice = shellfishKg * 7.5;
  let total = bonitoPrice + safridPrice + shellfishPrice;
  console.log(total.toFixed(2));
}
fishland(6.9, 4.2, 1.5, 2.5, 1);

function suppliesForSchool(pens, markers, detergent, discount) {
  let pensPrice = pens * 5.8;
  let markersPrice = markers * 7.2;
  let detergentPrice = detergent * 1.2;

  let totalPrice = pensPrice + markersPrice + detergentPrice;
  let discountSum = totalPrice * (discount / 100);

  let finalPrice = totalPrice - discountSum;

  console.log(finalPrice);
}
suppliesForSchool(4, 2, 5, 13);

function basketballEquipment(yearlyPrice) {
  let trainers = yearlyPrice - yearlyPrice * 0.4;
  let tracksuit = trainers - trainers * 0.2;
  let basketBall = tracksuit / 4;
  let accesories = basketBall / 5;

  let totalSum = trainers + tracksuit + basketBall + accesories + yearlyPrice;

  console.log(totalSum);
}
basketballEquipment(365);

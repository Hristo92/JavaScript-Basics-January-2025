function fishTank(length, width, height, percent) {
  let tankDimensions = length * width * height;
  let clearTankDimensions =
    (tankDimensions - tankDimensions * (percent / 100)) / 1000;

  console.log(clearTankDimensions);
}
fishTank(105, 77, 89, 18.5);

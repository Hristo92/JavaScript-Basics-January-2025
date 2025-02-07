function trainingLab(length, width) {
  let lengthInCm = length * 100;
  let widthInCm = width * 100;

  widthInCm -= 100;

  let desks = Math.trunc(widthInCm / 70);
  let rows = Math.trunc(lengthInCm / 120);

  let totalSpaces = desks * rows - 3;

  console.log(totalSpaces);
}
trainingLab(8.4, 5.2);

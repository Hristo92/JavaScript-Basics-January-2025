function housePainting(x, y, h) {
  let frontAndBackWallsArea = 2 * (x * x) - 1.2 * 2;
  let sideWallsArea = 2 * (x * y) - 2 * (1.5 * 1.5);
  let rectanglePartOfRoof = 2 * (x * y);
  let trianglePrtOfRoof = 2 * ((x * h) / 2);

  let totalGreenArea = frontAndBackWallsArea + sideWallsArea;
  let totalRedArea = rectanglePartOfRoof + trianglePrtOfRoof;

  let greenPaintNeeded = totalGreenArea / 3.4;
  let redPaintNeeded = totalRedArea / 4.3;

  console.log(greenPaintNeeded.toFixed(2));
  console.log(redPaintNeeded.toFixed(2));
}
housePainting(6, 10, 5.2);

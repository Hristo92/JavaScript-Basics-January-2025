function areaOfFigures(figure, size1, size2) {
  let area = 0;

  if (figure === "square") {
    area = size1 * size1;
  } else if (figure === "rectangle") {
    area = size1 * size2;
  } else if (figure === "circle") {
    area = Math.PI * size1 * size1;
  } else if (figure === "triangle") {
    area = (1 / 2) * size1 * size2;
  }

  console.log(area.toFixed(3));
}
areaOfFigures("rectangle", 7, 2.5);

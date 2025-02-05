function vacationBooksList(currPages, pagesPerHour, days) {
  let hours = currPages / pagesPerHour;
  let hoursNeeded = hours / days;

  console.log(hoursNeeded);
}
vacationBooksList(432, 15, 4);

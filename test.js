const driversList = (['Antonia', 'Nuru', 'Amari', 'Mo']);

function  returnFirstTwoDrivers() {
  return driversList.slice(0,2);
}
function  returnLastTwoDrivers() {
  return driversList.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function(value){
    return fare * value; }
}

function  fareDoubler(fare) {
  return (fare * 2) ;

}
function fareTripler(fare) {
  return fare * 3;
}
function selectDifferentDrivers(driversList, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(driversList);
};


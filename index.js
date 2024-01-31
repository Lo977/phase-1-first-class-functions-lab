// Code your solution in this file!
const driverList = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(driverList) {
  return driverList.slice(0,2);
}

const returnLastTwoDrivers = function(driverList) {
  return driverList.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(fare) {
  return function(par1) {
  return fare * par1;
  }
}
const fareDoubler = createFareMultiplier(2);

const    fareTripler = createFareMultiplier(3);

const  selectDifferentDrivers = function(driverList, returnLastTwoDrivers) {
  return returnLastTwoDrivers(driverList);
}
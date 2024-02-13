let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = ()=>drivers.slice(0,2);
const  returnLastTwoDrivers = ()=>drivers.slice(-2);
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
const createFareMultiplier =fare=>value=> fare * value;
const fareDoubler=fare=>fare*2;
const fareTripler=fare=>fare*3;
const selectDifferentDrivers=(drivers, returnFirstTwoDrivers)=>returnFirstTwoDrivers(drivers);

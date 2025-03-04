const returnFirstTwoDrivers = function(driversArr) {
    return driversArr.slice(0, 2)
}

const returnLastTwoDrivers = function(driversArr) {
    return driversArr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier) {
    return function(value) {
        return multiplier * value;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(driversArr, driversSelect) {
    return driversSelect(driversArr);
  };
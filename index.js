const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num1) {
    return function(num2) {
        return num1 * num2
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

//const selectDrivers = function(drivers, uniqueDrivers) {
    //return uniqueDrivers(drivers)
//}

function selectDifferentDrivers(arrayOfDrivers, uniqueDrivers) {
    return uniqueDrivers(arrayOfDrivers)
}

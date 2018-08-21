'use strict';

function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;

    
    return function(location) {
        warningCounter += 1;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`)
        return warningCounter;
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('There is water Everywhere');
const tornadoWarning = hazardWarningCreator('It is a bit windy');

rocksWarning('Colorado');

floodWarning('Arizona');

tornadoWarning('Kansas');
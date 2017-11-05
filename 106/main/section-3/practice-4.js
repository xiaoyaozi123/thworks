'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {

    for (let i = 0; i < collectionA.length; i++) {
        let elem = existKey(collectionA[i], result);
        if (elem) {
            elem.count++;
        } else {
            result.push({key: collectionA[i], count: 1});
        }
    }

    return result;

};

function existKey(key, array) {
    for (let j = 0; j < array.length; j++) {
        if (array[j].key === key) {
            return array[j];
        }
    }
}

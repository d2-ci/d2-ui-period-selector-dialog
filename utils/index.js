/**
 * Check if two arrays are identical
 * @param array1
 * @param array2
 */
export var arrayEquals = function arrayEquals(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    for (var i = 0; i < array1.length; ++i) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;
};

export default {
    arrayEquals: arrayEquals
};
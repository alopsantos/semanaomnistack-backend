module.exports = function parseStringAsArray(arrayAsString, campoString){
    return arrayAsString.split(',').map(campoString => campoString.trim());
}
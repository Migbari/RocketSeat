// Indica proximo item com split(','), percorre techs com map e .trim() remove espaços 
module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim()); 
}
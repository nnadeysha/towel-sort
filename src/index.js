
// You should implement your task here.

module.exports = function towelSort (matrix) {
    
    
    if(!matrix || !matrix.length){
        return []
    } ;

    for(let i = 0; i < matrix.length; i++){
        if(i%2 == 1) {
            matrix[i].reverse();
        }
    }
   return matrix.reduce((array, subArray) => array.concat(subArray), [])
  
}




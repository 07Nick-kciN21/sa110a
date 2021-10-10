export function sumBy(Array, iteratee) {
    var n;
    var sum=0;
    if(iteratee instanceof Function){
        for (var i=0; i<Array.length; i++){
            sum += iteratee(Array[i]);
        } 
    }
    else{
        n = iteratee;
        for (var i=0; i<Array.length; i++){
            sum += Array[i][n];
        } 
    }
    return sum;
}


export function size(collection) {
    if(collection instanceof Object){
        var counts=0;
        for(var co in collection){
            if(Object.prototype.hasOwnProperty.call(collection, co)){
                counts++;
            }
        }
        return counts;
    }
    if(collection instanceof Array){
        return collection.length;
    }
    return collection.length;
}
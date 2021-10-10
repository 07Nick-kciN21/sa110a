export function head(Array) {
    var x;
    if(Array.length == 0){
        return undefined;
    }
    else{
        x = Array[0];
        return x;
    }
}

export function fill(Array, str, start=0, end=Array.length) {
    for(var i=start; i<end; i++){
        Array[i] = str;
    }
    return Array;
}

export function indexof(Array, value, fromIndex=0) {
    for(var i=fromIndex; i<Array.length; i++){
        if(Array[i] == value){
            return i;
        }
    }
    return -1;
}

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
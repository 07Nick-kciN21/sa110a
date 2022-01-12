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


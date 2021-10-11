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

// function baseFill(array, value, start, end) {
//     var length = array.length;

//     start = start;
//     if (start < 0) {
//       start = -start > length ? 0 : (length + start);
//     }
//     end = (end === undefined || end > length) ? length : end;
//     if (end < 0) {
//       end += length;
//     }
//     end = start > end ? 0 : end;
//     while (start < end) {
//       array[start++] = value;
//     }
//     return array;
//   }

// export function fill(array, value, start, end) {
//     var length = array == null ? 0 : array.length;
//     if (!length) {
//       return [];
//     }
//     if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
//       start = 0;
//       end = length;
//     }
//     return baseFill(array, value, start, end);
//   }

export function indexof(Array, value, fromIndex=0) {
    for(var i=fromIndex; i<Array.length; i++){
        if(Array[i] == value){
            return i;
        }
    }
    return -1;
}


// import { compact } from 'lodash';
import * as _ from '../lodash.js';

// import _ from "https://dev.jspm.io/lodash";
var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 
console.log(_.sumBy(objects, function(o) { return o.n; }))
// => 20
function x(o) { return o.n; }
// console.log(x(objects[0]))
// The `_.property` iteratee shorthand.
console.log(_.sumBy(objects, 'n'))
// => 20
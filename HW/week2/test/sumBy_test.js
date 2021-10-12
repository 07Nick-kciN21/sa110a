// import { compact } from 'lodash';
import * as _ from '../lodash_you.js';
import { assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";
// import _ from "https://dev.jspm.io/lodash";
var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 
// console.log(_.sumBy(objects, function(o) { return o.n; }))
// => 20

// console.log(_.sumBy(objects, 'n'))
// => 20

Deno.test("sumBy", () => {
    assertEquals(_.sumBy(objects, function(o) { return o.n; }), 20)
    assertEquals(_.sumBy(objects, 'n'), 20)
  })
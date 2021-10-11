import * as _ from '../lodash.js'
import { assertEquals, assertThrows } from "https://deno.land/std@0.63.0/testing/asserts.ts";

var array = [1, 2, 3];

// console.log("_.fill(array, 'a') = ", _.fill(array, "a"));
// => ['a', 'a', 'a']
// console.log("_.fill(Array(3), 2) = ", _.fill(Array(3), 2));
// => [2, 2, 2]
// console.log("_.fill([4, 6, 8, 10], '*', 1, 3) = ", _.fill([4, 6, 8, 10], '*', 1, 3))
// => [4, '*', '*', 10]

Deno.test("fill", () => {
    var x = _.fill(array, 'a')
    assertEquals(_.fill(array, "a"), ['a', 'a', 'a'])
    assertEquals(_.fill(Array(3), 2), [2, 2, 2])
    assertEquals(_.fill([4, 6, 8, 10], '*', 1, 3), [4, '*', '*', 10])
  })

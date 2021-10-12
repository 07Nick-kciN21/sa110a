import * as _ from '../mylodash.js'
import { assertEquals, assertThrows } from "https://deno.land/std@0.63.0/testing/asserts.ts";

// console.log("_.indexOf([1, 2, 1, 2], 2) = ", _.indexof([1, 2, 1, 2], 2));
// => 1
// Search from the `fromIndex`.
// console.log("_.indexOf([1, 2, 1, 2], 2, 2) = ", _.indexof([1, 2, 1, 2], 2, 2));
// => 3

Deno.test("indexof", () => {
    assertEquals(_.indexof([1, 2, 1, 2], 2), 1)
    assertEquals(_.indexof([1, 2, 1, 2], 2, 2), 3)
  })
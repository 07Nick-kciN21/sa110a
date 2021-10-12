import * as _ from '../mylodash.js'
import { assertEquals, assertThrows } from "https://deno.land/std@0.63.0/testing/asserts.ts";


// console.log("_.head([1, 2, 3]) = ", _.head([1, 2, 3]));
// => 1
// console.log("_.head([]) = ", _.head([]));
// => undefined

Deno.test("head", () => {
    assertEquals(_.head([1, 2, 3]), 1)
    assertEquals(_.head([]), undefined)
  })
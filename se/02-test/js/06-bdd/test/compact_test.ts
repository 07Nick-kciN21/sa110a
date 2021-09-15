import { expect } from "../../../../lib/expect.ts";
import * as _ from "../src/ccclodash.ts";

Deno.test("compact", () => {
  let r = _.compact([0, 1, false, 2, '', 3])
  expect(r).to.equal([ 1, 2, 3])
})

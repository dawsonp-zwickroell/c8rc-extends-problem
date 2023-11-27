import { expect } from "chai";
import { foo } from "./foo.js";

describe("foo module", function () {
    it("should return foo", function () {
        expect(foo()).to.eql("foo");
    });
});

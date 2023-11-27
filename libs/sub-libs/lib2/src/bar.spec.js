import { expect } from "chai";
import { bar } from "./bar.js";

describe("bar module", function () {
    it("should return bar", function () {
        expect(bar()).to.eql("bar");
    });
});

import { vecDot, vecReset } from "../../functions/vecFunctions";

describe("vecDot", () => {
  it("(2,4) • (3,10) => 46", () => {
    expect(vecDot(vecReset(2, 4), vecReset(3, 10))).toBe(46);
  });
});

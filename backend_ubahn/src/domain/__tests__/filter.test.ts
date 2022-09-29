import { getLineByName } from "../getLineByName";

describe("filter tests", () => {
  it("filter by name", () => {
    const lineName = "U1";
    expect(getLineByName(lineName)).toBeDefined;
  });
});

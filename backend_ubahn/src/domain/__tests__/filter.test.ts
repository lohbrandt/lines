import { getLineByName } from "../getLineByName";

describe("filter tests", () => {
  it("filter by name", () => { 
    const lineName = "U1";
    // TS: the test should probably be more specific than that. Also, toBeDefined() needs to be called in order to do anything
    expect(getLineByName(lineName)).toBeDefined; 
  });
});

const { secretGenerator } = require("./secretGenerator");

describe("secretGenerator", () => {
  it("should generate a secret with length of 4", () => {
    const secret = secretGenerator();
    expect(secret.length).toEqual(4);
  });

  it("should generate a secret that contains only digits", () => {
    const secret = secretGenerator();
    const allDigitsRegex = /^\d+$/;

    expect(secret).toEqual(expect.stringMatching(allDigitsRegex));
  });
})
const { matcher } = require("./matcher");

describe("matcher", () => {
  describe("bulls", () => {
    describe("when there are some exact matches", () => {
      it("returns the number of matches", () => {
        const { bulls } = matcher("1234", "5674");

        expect(bulls).toBe(1);
      })
    });

    describe("when there are no exact matches", () => {
      it("returns 0", () => {
        const { bulls } = matcher("1234", "5678");

        expect(bulls).toBe(0);
      })
    });
  });
});

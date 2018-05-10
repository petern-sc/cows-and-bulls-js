const { matcher } = require("./matcher");

describe("matcher", () => {
  describe("bulls", () => {
    describe("when there are some exact matches", () => {
      it("returns the number of matches", () => {
        const { bulls } = matcher("1234", "5674");

        expect(bulls).toBe(1);
      });
    });

    describe("when there are no exact matches", () => {
      it("returns 0", () => {
        const { bulls } = matcher("1234", "5678");

        expect(bulls).toBe(0);
      });
    });
  });

  describe("cows", () => {
    describe("when there are matches in different position", () => {
      it("returns the number of matches", () => {
        const { cows } = matcher("1234", "5673");

        expect(cows).toBe(1);
      });
    });

    describe("when there are matches in different position and exact", () => {
      it("returns the number of matches", () => {
        const { cows } = matcher("1234", "1673");

        expect(cows).toBe(1);
      });
    });

    describe("when there are no matches", () => {
      it("returns 0", () => {
        const { cows } = matcher("1234", "5678");

        expect(cows).toBe(0);
      });
    });
  });
});

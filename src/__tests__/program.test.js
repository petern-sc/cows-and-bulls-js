const { run } = require("../program");

const questionStub = (values) => {
  let index = 0;
  return (_, inputHandler) => {
    inputHandler(values[index++]);
  };
};

describe("program", () => {
  it('should close if input is quit', () => {
    const closeStub = jest.fn();
    const rl = {
      question: questionStub(["quit"]),
      close: closeStub
    };

    run('1234', rl, _ => {});

    expect(closeStub.mock.calls.length).toBe(1);
  })

  describe('matching', () => {
    describe('full match', () => {
      const closeStub = jest.fn();
      const rl = {
        question: questionStub(["1234"]),
        close: closeStub
      };
      let outputtedMessage = [];
      const output = message => {
        outputtedMessage.push(message);
      };

      run('1234', rl, output);

      it('should close if guess matches secret', () => {
        expect(closeStub.mock.calls.length).toBe(1);
      })

      it('should output YAY', () => {
        expect(outputtedMessage[1]).toBe('YAY');
      })

      it ('should output 4 bulls', () => {
        expect(outputtedMessage[0]).toBe('4 Bulls, 0 Cows');
      })
    });

    describe('not a full match', () => {
      const closeStub = jest.fn();
      const rl = {
        question: questionStub(["2345", "5678", "quit"]),
        close: closeStub
      };
      let outputtedMessage = [];
      const output = message => {
        outputtedMessage.push(message);
      };

      run('1234', rl, output);

      it('should output 3 cows', () => {
        expect(outputtedMessage[0]).toBe('0 Bulls, 3 Cows');
      });
      it('then should output 0 cows and bulls', () => {
        expect(outputtedMessage[1]).toBe('0 Bulls, 0 Cows');
      });
      it('should finally quit', () => {
        expect(closeStub.mock.calls.length).toBe(1);
      });
    })
  })
});
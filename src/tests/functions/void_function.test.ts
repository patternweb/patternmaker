import PatternMaker from "../../index";
import { loadFixture } from "../utils";

it("parses a function that does not return a value", () => {
  const subject = new PatternMaker(
    loadFixture("functions/void_function")
  ).parse().components;

  const result = {
    log: {
      name: "log",
      thing: "function",
      type: "(toLog: any) => void",
      inputs: [
        {
          name: "toLog",
          type: "any"
        }
      ],
      outputs: []
    }
  };
  expect(subject).toMatchObject(result);
});

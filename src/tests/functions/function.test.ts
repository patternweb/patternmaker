import PatternMaker from "../../index";
import { loadFixture } from "../utils";

it("parses a basic function", () => {
  const subject = new PatternMaker(loadFixture("functions/function")).parse()
    .components;

  const result = {
    add: {
      name: "add",
      docs: "adds two numbers",
      thing: "function",
      type: "(a: number, b?: number) => number",
      inputs: [
        {
          name: "a",
          docs: "first number",
          type: "number"
        },
        {
          name: "b",
          docs: "last number",
          type: "number",
          defaultValue: 1
        }
      ],
      outputs: [
        {
          type: "number"
        }
      ]
    }
  };
  expect(subject).toEqual(result);
});

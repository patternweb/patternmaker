import PatternMaker from "../../index";
import { loadFixture } from "../utils";

it("parses an async function", () => {
  const subject = new PatternMaker(
    loadFixture("functions/async_function")
  ).parse().components;
  const result = {
    add1: {
      name: "add1",
      thing: "asyncFunction",
      inputs: [
        {
          name: "x",
          type: "any"
        }
      ],
      outputs: [
        {
          // type: "Promise"
        }
      ]
    }
  };
  expect(subject).toMatchObject(result);
});

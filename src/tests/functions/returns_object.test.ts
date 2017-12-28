import PatternMaker from "../../index";
import { loadFixture } from "../utils";

it("destructures return objects", () => {
  const subject = new PatternMaker(
    loadFixture("functions/returns_object")
  ).parse().components;

  const result = {
    mmTo: {
      docs: "converts millimeters to different units",
      thing: "function",
      name: "mmTo",
      type: "(mm?: number) => { cm: number; inches: number; }",
      inputs: [
        {
          defaultValue: 0,
          name: "mm",
          docs: "millimeters",
          type: "number"
        }
      ],
      outputs: [
        {
          name: "cm",
          type: "number"
        },
        {
          name: "inches",
          type: "number"
        }
      ]
    }
  };
  expect(subject).toMatchObject(result);
});

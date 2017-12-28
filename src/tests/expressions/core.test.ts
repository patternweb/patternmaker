import PatternMaker from "../../index";
import { loadFixture } from "../utils";

it("handles core js functions", () => {
  const subject = new PatternMaker(loadFixture("expressions/core")).parse()
    .nodes;

  const result = [
    {
      component: "Math.min",
      inputs: [10, 20]
    },
    {
      component: "console.log",
      inputs: ["hello world"]
    },
    {
      component: "alert",
      inputs: ["boo"]
    }
  ];
  expect(subject).toMatchObject(result);
});

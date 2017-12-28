import PatternMaker from "../../index";
import { loadFixture } from "../utils";

it("can form a basic pattern", () => {
  const subject = new PatternMaker(loadFixture("all/basic")).parse();

  const result = {
    components: {
      greet: {
        thing: "function"
      }
    },
    nodes: [
      {
        name: "person"
      },
      {
        name: "$$115",
        component: "greet",
        inputs: ["$$99", "hi"]
      }
    ]
  };
  expect(subject).toMatchObject(result);
});

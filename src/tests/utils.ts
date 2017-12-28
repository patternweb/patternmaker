import * as path from "path";
import { readFileSync } from "fs";

export function loadFixture(fileName) {
  const fullFileName = `${fileName}.ts`;
  return {
    [fullFileName]: readFileSync(path.join(__dirname, fullFileName)).toString()
  };
}

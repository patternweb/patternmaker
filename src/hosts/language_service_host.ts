import * as ts from "typescript";

export default class LanguageServiceHost implements ts.LanguageServiceHost {
  files: {
    [fileName: string]: {
      file: ts.IScriptSnapshot;
      ver: number;
    };
  } = {};

  log = _ => {};

  trace = _ => {};

  error = _ => {};

  getCompilationSettings = ts.getDefaultCompilerOptions;

  getCurrentDirectory = () => "";

  getDefaultLibFileName = _ => "lib";

  getScriptVersion = fileName => this.files[fileName].ver.toString();

  getScriptSnapshot = fileName => {
    console.log(this.files, { fileName });
    return this.files[fileName].file;
  };

  getScriptFileNames(): string[] {
    const names: string[] = [];
    for (const name in this.files) {
      if (this.files.hasOwnProperty(name)) {
        names.push(name);
      }
    }
    return names;
  }

  fileExists(path: string): boolean {
    return !!this.files[path];
  }

  readFile(fileName: string): string {
    return this.files[fileName].file.toString();
  }

  addFile(fileName: string, body: string) {
    // console.log("ADD", fileName)
    const snap = ts.ScriptSnapshot.fromString(body);
    snap.getChangeRange = _ => undefined;
    const existing = this.files[fileName];
    if (existing) {
      this.files[fileName].ver++;
      this.files[fileName].file = snap;
    } else {
      this.files[fileName] = { ver: 1, file: snap };
    }
  }
}

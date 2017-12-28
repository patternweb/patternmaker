import * as ts from "typescript";
import LanguageServiceHost from "./language_service_host";

export default class CompilerHost extends LanguageServiceHost
  implements ts.CompilerHost {
  getSourceFile(
    fileName: string,
    languageVersion: ts.ScriptTarget,
    onError?: (message: string) => void,
    shouldCreateNewSourceFile?: boolean
  ): ts.SourceFile | undefined {
    const f = this.files[fileName];
    if (!f) return undefined;
    const sourceFile = ts.createLanguageServiceSourceFile(
      fileName,
      f.file,
      ts.ScriptTarget.ES5,
      f.ver.toString(),
      true
    );
    return sourceFile;
  }

  writeFile(
    fileName: string,
    data: string,
    writeByteOrderMark: boolean,
    onError: ((message: string) => void) | undefined,
    sourceFiles: ReadonlyArray<ts.SourceFile>
  ): void {}

  getCanonicalFileName = (fileName: string) => fileName;

  useCaseSensitiveFileNames = () => true;

  getDirectories = (path: string): string[] => [];

  getNewLine = () => "\n";
}

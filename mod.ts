import antlr4 from "antlr4";
import UntypedLambdaLexer from "./grammars/UntypedLambdaLexer.js";
import UntypedLambdaParser from "./grammars/UntypedLambdaParser.js";
import UntypedLambdaListener from "./grammars/UntypedLambdaListener.js";

class MyListener extends UntypedLambdaListener {
  constructor() {
    super();
  }

  enterExpr(ctx: any): void {
    console.dir(ctx.children);
  }
}

const inputPath = new URL("./lambda.txt", import.meta.url);
const input = await Deno.readTextFile(inputPath);

const chars = antlr4.CharStreams.fromString(input);
const lexer = new UntypedLambdaLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new UntypedLambdaParser(tokens);

const tree = parser.file();

antlr4.tree.ParseTreeWalker.DEFAULT.walk(new MyListener(), tree);

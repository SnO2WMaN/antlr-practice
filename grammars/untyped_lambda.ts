import antlr4 from "antlr4";
import UntypedLambdaLexer from "./UntypedLambdaLexer.js";
import UntypedLambdaParser from "./UntypedLambdaParser.js";

const serialize = (ctx: unknown, nodes: {
  type: "file" | "expr" | "vari" | "func" | "appl";
  start: { line: number; column: number };
  stop: { line: number; column: number };
}[]) => {
  if (ctx instanceof UntypedLambdaParser.FileContext) {
    nodes.push({
      type: "file",
      start: { line: (ctx as any).start.line as number, column: (ctx as any).start.column as number },
      stop: { line: (ctx as any).stop.line as number, column: (ctx as any).stop.column as number },
    });
    serialize(ctx.expr(), nodes);
  } else if (ctx instanceof UntypedLambdaParser.ExprContext) {
    nodes.push({
      type: "expr",
      start: { line: (ctx as any).start.line as number, column: (ctx as any).start.column as number },
      stop: { line: (ctx as any).stop.line as number, column: (ctx as any).stop.column as number },
    });
    const w = ctx.vari() ?? ctx.func() ?? ctx.appl();
    serialize(w, nodes);
  } else if (ctx instanceof UntypedLambdaParser.VariContext) {
    nodes.push({
      type: "vari",
      start: { line: (ctx as any).start.line as number, column: (ctx as any).start.column as number },
      stop: { line: (ctx as any).stop.line as number, column: (ctx as any).stop.column as number },
    });
  } else if (ctx instanceof UntypedLambdaParser.FuncContext) {
    nodes.push({
      type: "func",
      start: { line: (ctx as any).start.line as number, column: (ctx as any).start.column as number },
      stop: { line: (ctx as any).stop.line as number, column: (ctx as any).stop.column as number },
    });
    serialize(ctx.expr(), nodes);
    serialize(ctx.vari(), nodes);
  } else if (ctx instanceof UntypedLambdaParser.ApplContext) {
    nodes.push({
      type: "appl",
      start: { line: (ctx as any).start.line as number, column: (ctx as any).start.column as number },
      stop: { line: (ctx as any).stop.line as number, column: (ctx as any).stop.column as number },
    });
    serialize(ctx.expr(0), nodes);
    serialize(ctx.expr(1), nodes);
  } else if (ctx instanceof Array) {
    ctx.forEach((a) => serialize(a, nodes));
  }
  return nodes;
};

export const tokenize = (input: string) => {
  const chars = antlr4.CharStreams.fromString(input);
  const lexer = new UntypedLambdaLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new UntypedLambdaParser(tokens);
  const tree = parser.file();
  return serialize(tree, []);
};

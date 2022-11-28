import { oakCors } from "cors/mod.ts";
import { Application, Router } from "oak/mod.ts";
import { tokenize as tokenizeUntypedLambda } from "./grammars/untyped_lambda/mod.ts";

const app = new Application();
const router = new Router();

router.get("/", ({ response }) => {
  response.redirect("https://github.com/SnO2WMaN/deadsimple-antlr-tokenizer");
  return;
});

router.post("/lambda", async ({ request, response }) => {
  if (!request.hasBody) {
    response.status = 400;
    return;
  }
  const input = await request.body({ type: "text" }).value;
  const tokenized = tokenizeUntypedLambda(input);

  response.status = 200;
  response.body = tokenized;
  return;
});

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8080 });

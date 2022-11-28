import { oakCors } from "cors/mod.ts";
import { Application, Router } from "oak/mod.ts";
import { tokenize } from "./grammars/untyped_lambda.ts";

const app = new Application();
const router = new Router();

router.post("/lambda", async ({ request, response }) => {
  if (!request.hasBody) {
    response.status = 400;
    return;
  }
  const input = await request.body({ type: "text" }).value;
  const tokenized = tokenize(input);

  response.status = 200;
  response.body = tokenized;
  return;
});

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8080 });

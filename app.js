import Koa from "koa";
import testRouter from "./api/test";

const app = new Koa();
app.use(testRouter.routes());
app.use(testRouter.allowedMethods())

app.listen(3000,()=> console.log("Start 3000 Listen!"));

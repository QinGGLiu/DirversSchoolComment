const Koa = require("koa");
const testRouter = require("./api/test");

const app = new Koa();
app.use(testRouter.routes());
app.use(testRouter.allowedMethods())

app.listen(3000,()=> console.log("Start 3000 Listen!"));

import Router from "koa-router";

const router = new Router({prefix:"api/test"});
router
.get('/', function (ctx, next) {
  ctx.body = 'Hello World!';
})
.post('/test', function (ctx, next) {
  // ...
})
.put('/test/:id', function (ctx, next) {
  // ...
})
.del('/test/:id', function (ctx, next) {
  // ...
})
.all('/test/:id', function (ctx, next) {
  // ...
});

export default router;
const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const path = require('path');

app.use(serve('.'));

app.listen(80);

console.log('listening on port 80');
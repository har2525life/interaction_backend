import express from "express";
const app = express();
const port = 5000;

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.listen(port)
console.log('listen on port ' + port)


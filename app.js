const express = require('express');
const session = require('express-session');
const store_router = require('./routes/store');
const dao = require('./services/dao');

const app = express();
app.set('views', __dirname+"/views");
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(session({
    secret:'My secret',
    resave: false,
    saveUninitialized: false
}));

app.use("/", store_router)

app.listen(80, ()=>{
    console.log('PORT 80 ready...')
})

module.exports = app;
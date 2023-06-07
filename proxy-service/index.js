const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const proxy = require("express-http-proxy");

app.use(cors());
app.use('/vendor', proxy('http://127.0.0.1:3001'));
app.use('/shopper', proxy('http://127.0.0.1:3002'));

app.listen(port, () => {
    console.log("server started!");
});
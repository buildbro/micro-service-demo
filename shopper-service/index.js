const express = require("express");
const app = express();
const port = 3002;

app.get('/', (request, response) => {
    response.send("Hello from shopper service!");
});

app.listen(port, () => {
    console.log("server started!");
});
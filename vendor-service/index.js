const express = require("express");
const app = express();
const port = 3001;

app.get('/', (request, response) => {
    response.send("Hello from vendor service!");
});

app.listen(port, () => {
    console.log("server started!");
});
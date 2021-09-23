const express = require("express");
const app = express();
const port = 3000;

app.get("/", (res,req) =>{
    req.send("online");
});
app.listen(port,() => {
    console.log(`The server has started and is listening on port number: ${port}`);
    });
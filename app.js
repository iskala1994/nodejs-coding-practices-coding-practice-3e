const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let newDate = new Date();
  let dateFormat = `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
  response.send(dateFormat);
});

app.listen(3000);
module.exports = app;

const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
app.use(cors())
app.get("/hello", (req, res) => {
  const language = req.query.language;

  let greeting;
  if (language === "English") {
    greeting = " hello World";
  } else if (language === "french") {
    greeting = "Bonjour le monde";
  } else if (language === "hindi") {
    greeting = "Namastey sansar";
  } else {
    greeting = " language not suppoerted ";
  }
  res.send(greeting);
});

app.listen(port, () => {
  console.log("server is running");
});

// app.js

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const { add, subtract, multiply, divide } = require("./calculator");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/calculate", (req, res) => {
  const { num1, num2 } = req.body;
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  const result = {
    addition: add(number1, number2),
    subtraction: subtract(number1, number2),
    multiplication: multiply(number1, number2),
    division: divide(number1, number2),
  };

  // Read the template file and replace placeholders with calculated results
  fs.readFile(
    __dirname + "/public/result-template.html",
    "utf8",
    (err, data) => {
      if (err) {
        console.error("Error reading template file:", err);
        res.status(500).send("Internal Server Error");
        return;
      }

      const renderedHtml = data
        .replace("${num1}", number1)
        .replace("${num2}", number2)
        .replace("${addition}", result.addition)
        .replace("${subtraction}", result.subtraction)
        .replace("${multiplication}", result.multiplication)
        .replace("${division}", result.division);

      res.send(renderedHtml);
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

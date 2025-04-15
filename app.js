const express = require("express");
const app = express();
const port = 3000;

const errorMessage = "Invalid parameters: enter two (2) numbers only";

app.get("/", (req, res) => {
  res.send("SIT323 Building a simple calculator microservice");
});

app.use(express.json());

app.get("/add", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (!checkValidParameters(num1, num2)) {
    return res.status(400).json({ error: errorMessage });
  }

  const result = num1 + num2;

  res.status(200).send({
    result: result,
  });
});

app.get("/subtract", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (!checkValidParameters(num1, num2)) {
    return res.status(400).json({ error: errorMessage });
  }

  const result = num1 - num2;

  res.status(200).send({
    result: result,
  });
});

app.get("/multiply", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (!checkValidParameters(num1, num2)) {
    return res.status(400).json({ error: errorMessage });
  }

  const result = num1 * num2;

  res.status(200).send({
    result: result,
  });
});

app.get("/divide", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (!checkValidParameters(num1, num2)) {
    return res.status(400).json({ error: errorMessage });
  }

  const result = num1 / num2;

  res.status(200).send({
    result: result,
  });
});

function checkValidParameters(num1, num2) {
  if (typeof num1 === "undefined" || typeof num2 === "undefined") {
    return false;
  }

  return Number.isInteger(num1) && Number.isInteger(num2);
}

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});

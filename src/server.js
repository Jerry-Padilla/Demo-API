const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("hello I work");
});

app.get("/flip-coin", (request, response) => {
  const randomNumber = Math.random();
  let coinValue = "";
  if (randomNumber < 0.5) {
    coinValue = "heads";
  } else {
    coinValue = "tails";
  }

  //response.send(request.query);
  response.send(coinValue);
});

app.get("/flip-coins", (request, response) => {
  const times = request.query.times;

  if (times && times > 0) {
    let heads = 0;
    let tails = 0;
    for (let i = 0; i < times; i += 1) {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        heads += 1;
      } else {
        tails += 1;
      }
    }
    response.json({ heads, tails });
  } else {
    response.send("You need to send times");
  }
});

app.listen(5000, () => {
  console.log("started server, listening on port");
});

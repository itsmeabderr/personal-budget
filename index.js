const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
// import the data and
const { envelopes, createEnvelop, getEnvelope } = require("./data");

app.post("/envelopes", (req, res) => {
  const { id, title, budget } = req.query;
  if (!id || !title || !budget) {
    res.status(400).json({ error: "Required value is missing." });
  }
  const newEnvelop = createEnvelop(id, title, budget);
  envelopes.push(newEnvelop);
  res.status(201).send(envelopes);
});

app.get("/", (req, res) => {
  res.send(envelopes);
});

app.get("/envelopes/:id", (req, res) => {
  const { id } = req.params;
  const envelope = getEnvelope(id);
  res.send(envelope);
});

app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});

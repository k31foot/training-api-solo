const express = require("express");

const setupExpressServer = () => {
  /* return configured express app */
  const app = express();
  app.use(express.json());

  app.get("/status", function (req, res) {
    res.status(200).json({ status: "200" });
  });

  app.get("/prefectureList", function (req, res) {
    res.send("prefectureList");
  });

  app.get("/prefectureList/:idOrName", function (req, res) {
    const prefecParam = req.params.idOrName;
    res.send(`Hello ${prefecParam}!`);
  });

  app.post("/add/prefecture", function (req, res) {
    const data = req.body;
    res.send(data);
  });

  app.patch("/edit/prefecture", function (req, res) {
    const data = req.body;
    res.send('editted prefecture');
  });

  app.delete("/delete/prefecture", function (req, res) {
    const data = req.body;
    res.send('deleted prefecture');
  });

  return app;
};

module.exports = { setupExpressServer };

const express = require("express");
const knex = require("./knex");

const PREFECTURE_TABLE = "prefecture";

const setupExpressServer = () => {
  /* return configured express app */
  const app = express();
  app.use(express.json());

  app.get("/status", function (req, res) {
    res.status(200).json({ status: "200" });
  });

  app.get("/prefectureList", async function (req, res) {
    await knex.select('*').from(PREFECTURE_TABLE).then((result) => {
      res.status(200).json(result);
    });
  });

  app.get("/prefectureList/:idOrName", async function (req, res) {
    const prefecParam = req.params.idOrName;
    if (prefecParam.match("\\d+")) {
      await knex.select('*').from(PREFECTURE_TABLE).where({id: prefecParam}).then((result) => {
        res.status(200).json(result);
      });
    } else {
      result = await knex.select('*').from(PREFECTURE_TABLE).where({ prefec: prefecParam }).then((result) => {
      res.status(200).json(result);
    });
    }
  });

  app.post("/add/prefecture", async function (req, res) {
    const data = req.body;
    await knex(PREFECTURE_TABLE).insert(data).then((result) => {
      res.status(200).json({status: '200'});
    })
  });

  app.patch("/edit/prefecture", async function (req, res) {
    const data = req.body;
    await knex(PREFECTURE_TABLE).where({ id: data.id }).update(data).then((result) => {
      res.status(200).json({ status: '200' });
    });
  });

  app.delete("/delete/prefecture/:id", async function (req, res) {
    const id = req.params.id;
    await knex(PREFECTURE_TABLE).where({ id: id }).delete().then((result) => {
      res.status(200).json({ status: '200' });
    });
  });

  return app;
};

module.exports = { setupExpressServer };

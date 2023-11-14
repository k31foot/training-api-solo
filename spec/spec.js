const { setupExpressServer } = require("../src/server");
// We know about chai...
const chai = require("chai");
const { expect, assert } = require("chai");
// ...with chai-http we can add matchers for making http requests!
const chaiHttp = require("chai-http");
// ... we need to tell chai to use chaiHttp though. It is a middleware
chai.use(chaiHttp);
// this enables us to use .should assertions instead of expecct. Personal Preference
chai.should();

// Another reason we separated creating our server from starting it
const app = setupExpressServer();

describe("The express server", () => {
    let request;
  beforeEach(() => {
    request = chai.request(app);
  });

  describe("GET /status - checking server status", () => {
    it("should return status 200", async () => {
      const res = await request.get("/status");
      res.should.have.status(200);
    });
  });

  describe("GET /prefectureList", () => {
    it("should return prefectureList", async () => {
      const res = await request.get("/prefectureList");
      const expected = res.body; //JSON.parse(res.body);
      //console.log(expected)
      res.should.have.status(200);
      expect(expected.length).deep.equal(47);
    });
  });
  describe("GET /prefectureList/:idOrName", () => {
    it("should return prefecture by id", async () => {
      const res = await request.get("/prefectureList/10");
      const expected = res.body;
      //console.log(expected[0].id)
      res.should.have.status(200);
      expect(expected[0].id).deep.equal(10);
    });
    it("should return prefecture by name", async () => {
      const encodedPath = encodeURI("/prefectureList/青森県");
      const res = await request.get(encodedPath);
      const expected = res.body;
      res.should.have.status(200);
      expect(expected[0].prefec).deep.equal('青森県');
    });
  });
  describe("POST /add/prefecture", () => {
    it("should add a new prefecture", async () => {
      const addPrefec = {
        id: 48,
        region: 'カリフォルニア',
        prefec: 'ロサンゼルス',
        city: 'ロサンゼルス',
        population: '3976322',
        density: '3276',
        area: '1301970',
        homepage: 'https://lacity.gov/'
      };
      const res = await request.post("/add/prefecture").send(addPrefec);
      res.should.have.status(200);
    });
  });
  describe("PATCH /edit/prefecture", () => {
    it("should edit a new prefecture", async () => {
      const editPrefec = {
        id: 48,
        region: 'ニューヨーク',
        prefec: 'ロサンゼルス',
        city: 'ロサンゼルス',
        population: '3976322',
        density: '3276',
        area: '1301970',
        homepage: 'https://lacity.gov/'
      };
      const res = await request.patch("/edit/prefecture").send(editPrefec);
      res.should.have.status(200);
    });
  });
  describe("DELETE /delete/prefecture/:id", () => {
    it("should delete a new prefecture", async () => {
      const res = await request.delete("/delete/prefecture/48");
      res.should.have.status(200);
    });
  });
});

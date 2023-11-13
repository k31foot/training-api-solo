const { setupExpressServer } = require("../src/server");
// We know about chai...
const chai = require("chai");
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

  describe("GET /teapot - modifying status", () => {
    it("should return status 200", async () => {
      const res = await request.get("/status");
      res.should.have.status(200);
    });
  });
});

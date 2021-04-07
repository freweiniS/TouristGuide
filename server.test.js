const express = require("express"); // import express
const server = require("./server"); //import file we are testing
const request = require("supertest")// supertest is a framework that allows to easily test web apis
let app = express(); //an instance of an express app, a 'fake' express app
const bodyParser = require('body-parser');
app.use("/api",server); //routes
describe("testing-server", () => {
  it("GET /api - success", async () => {
    const { body } = await request(app).get("/api"); //uses the request function that calls on express app instance
    expect(body).toEqual({});
  });
});

app.use(bodyParser.json());

describe("plan form", function () {
  it("Thank you", function (done) {
    let state = {
          state: "AL",
          capital: "Montgomery",
          governor: "Kay Ivey",
        };
    request(app).post("/plan_created").send(state);

    expect(body).toEqual({
        status: "success",
        stateInfo: {
          state: "AL",
          capital: "Montgomery",
          governor: "Kay Ivey",
        },
  });
});
});

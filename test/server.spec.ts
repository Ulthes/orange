import chai from "chai";
import chaiHttp from "chai-http";

import {server} from "../src/server";

const should = chai.should();
chai.use(chaiHttp);

describe("/test route", () => {
    it("should get /test", (done) => {
        chai.request(server).get("/test").end((err, res) => {
          res.should.have.status(200);
          done();
        });
    })
});
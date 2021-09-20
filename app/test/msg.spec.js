let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
const { response } = require("express");

//assertion Style

var expect = chai.expect;

chai.use(chaiHttp);

describe("Test server", ()=>{
        
     

/**Test the get route */

describe("GET /", ()=>{
     it("it should succeed as expected", (done)=>{
          
          chai.request(server)
               .get('/')
               .end((err,res)=>{
                    
                    expect(res).to.be.html;
                    expect(res).to.be.status(200);
                    
                    done();
               })
           return Object
     })
})

describe("GET *", ()=>{

     
     it("it should send a string message as expected", (done)=>{
          
          chai.request(server)
               .get('/*')
               .end((err,res)=>{
                    expect(res).to.be.status(404);
                    done();
               })
             return String
     })
})









})
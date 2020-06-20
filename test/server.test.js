const mocha = require('mocha');
const chai = require('chai');
const request = require('request');

const expect = chai.expect;

const { app }= require('../server');

let server;
describe('server', ()=>{

    before((done)=>{
        server = app.listen(9990, done)
    })

    it('rates should be correct', (done)=>{
        request.get('http://localhost:9990/rate', (err, resp, body)=>{
            let rates = JSON.parse(body);
            expect(rates.fixed).to.equal(50);
            done();
        })
    })

    after(()=>{
        server.close();
    })
})
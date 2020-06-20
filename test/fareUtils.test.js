const mocha = require('mocha');
const chai = require('chai');
const fareUtils = require('../fareUtils');

const expect = chai.expect;
describe('fareUtils', function(){
    it('expect fare to be 50 for 0km, 0min', ()=>{
        let fare = fareUtils.calcfare(0, 0);
        expect(fare).to.equal(50);
    })
    it('expected fare to be 100 for 10km, 0min', ()=>{
        let fare = fareUtils.calcfare(10, 0);
        expect(fare).to.equal(100);
    })
    it('expected fare to be 56 for 2km, 18min', ()=>{
        let fare = fareUtils.calcfare(2, 18);
        expect(fare).to.equal(56);
    })
})
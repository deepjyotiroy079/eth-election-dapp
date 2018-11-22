// creating an artifact of the contract
var Election = artifacts.require("./Election.sol");

// declaring the contract
contract("Election", function(accounts) { // this will inject all of the accounts
    // 1. to check whether our contract was initialised with correct number of candidates
    // 'it' denotes the contract | from the mocha framework
   
    var test_instance;
    
    it("initializes with three candidates", function() {
        return Election.deployed().then(function(instance) {
            return instance.candidatesCount(); // this will return the number of candidates
        }).then(function(count){
            assert.equal(count, 3);
        });
    });
    it("it initializes the candidates with the correct values", function() {
            return Election.deployed().then(function(instance) {
                test_instance = instance;
                return test_instance.candidates(1);
        }).then(function(candidate) {
            assert.equal(candidate[0], 1, "contains the correct id");
            assert.equal(candidate[1], "Candidate 1", "contains the correct name");
            assert.equal(candidate[2], 0, "contains the correct votes count");
            return test_instance.candidates(2);
        }).then(function(candidate) {
            assert.equal(candidate[0], 2, "contains the correct id");
            assert.equal(candidate[1], "Candidate 2", "contains the correct name");
            assert.equal(candidate[2], 0, "contains the correct votes count");
            return test_instance.candidates(3);
        }).then(function(candidate) {
            assert.equal(candidate[0], 3, "contains the correct id");
            assert.equal(candidate[1], "Candidate 3", "contains the correct name");
            assert.equal(candidate[2], 0, "contains the correct votes count");
        });
    });
});

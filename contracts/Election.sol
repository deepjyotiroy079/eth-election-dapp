pragma solidity ^0.4.2;

contract Election {
    // model a candidate
    // this is basically describe about how our candidate looks like (has a name, a id and vote count)
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
    // store a candidate
    mapping(uint=>Candidate) public candidates; // creating the variable of that mapping
    // fetch candidate 
    
    
    // get candidate count
    uint public candidatesCount;     // this is the counter

    function Election() public{
       // we dont want any one else to add the candidates therefore we call the addCandidate function in the constructor
        addCandidates("Candidate 1");
        addCandidates("Candidate 2");
        addCandidates("Candidate 3");
        // candidates count is 3
    }
    // adding the candidate to the mapping
    function addCandidates(string _name) private {
        candidatesCount++; // this will increment the candidate counter
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0); // assiging value to the candidate structure
    }

}
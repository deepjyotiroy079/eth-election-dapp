pragma solidity ^0.4.2;

contract Election {
    // store candidates
    // Read candidates
    string public candidate; // similar to classes the public data members
    // constructor
     
    
    function Election() public{
        candidate = "Candidate 1"; // this is a state variable
    }
}
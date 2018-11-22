# Election-DApp
A simple voting app using DApps and Ethereum Blockchains
# Notes created during development ;)

1. truffle is used for creating ethereum smart contracts.
2. for creating a smart contract we need to download the following
	- gnash (local blockchain)
	- truffle framework
	- metamask extension (for chrome)

3. Steps involve the following
	- create the project directory
	- download truffle boilerplate by simply typing
		- truffle unbox pet-shop

	(keep the gnash blockchain running in the background)
	- create a smart contract in the contracts directory
	- create a migration for this contract in the migrations directory
	- go to the terminal and type the following
		- truffle migrate

3. once the contracts are migrated go to the truffle console by typing truffle console in the terminal
	truffle(development)>
4. To create an instace of the newly create contract create a function
	- Election.deployed().then(function(instance){ app = instance})
	- in the above lines we are storing the instance of the contract or in simple words we are just creating an object of that smart contract.
5. we can perform various operations using the 'app' instance
	like 
		- app.address (to get the account that we were using from the gnash blockchain)
		- app.candidate() (to get the information of the state variable in the contract)
		
		 -- for any state variable, solidity by default creates a getter function for it. So in order to get the value of the state 
	                         variable simple call the function of that state variable


*IMPORTANT*

* reads on the blockchains is free but writes on the blockchains costs gas i.e. ethereum currency
* after every writing the amount will change;

Steps:
=====

1. Model a candidate
	- our candidate has a name
	- an id
	- and a vote count

	solidity allows us to create structures
	
	struct candidate {
		uint id;
		string name;
		uint voteCount;
	}
2. Store a candidate

	- we want to store the above created structure into a mapping (similar to an associative array)
	- mapping is done between a key and a value pair
	
	mapping(uint=>Candidate) public candidates;

	- uint will be the id of the candidate which will be mapped to (candidate structure)

	- if we declare any variable as public in solidity, it automatically generates the getter() method for that variable.
	
	- when we add a candidate to the mapping, there are changes in the states of the ethereum blockchain(as we are performing the writing operation)

	*ADDING THE CANDIDATE TO THE MAPPING*
==========================================================
(_<variable-name> : underscore before the variable name is called local variable)
(<variable-name> : this is called a state variable)
1. create a function that takes the name of the candidate
	function addCandidate(string _name) private{
		// increase the candidate count;
		candidateCount++;
		// add it to the mapping as in array
		candidates[candidateCount] = Candidate(candidateCount, _name, 0);
	}
	// here the parameters are the current candidate count, the name and the initial vote count of the candidate i.e. 0;
================================================================================================================
Data in blockchains is suppose to be immutable i.e. they are not supposed to be changed.
So wherever we are making changes to our smart contract we must push new contracts to the blockchain
we must reset all our accounts after every migrations that has ever occures in the blockchain using the --reset flag
	truffle migrate --reset
=================================================================================================================
* getting information from the truffle console
 - create the instance of the deployed contract
	app.candidate();
	- this candidates is actually a mapping and solidity generated a getter function for it
	
	app.candidates(1);
	- we must pass an unsigned integer inside the parenthesis to tell which candidate to access. the uint will work as the key to the mapping


3. fetch the candidate
	if we want to fetch the information of a candidate
	then
	 - create a promise for that specific candidate
	like - 
		app.candidates(1).then(function(c){ candidate = c; })
		candidate[0].toNumber(); // for id
		candidate[1]; // for name
		candidate[2].toNumber(); // for voteCount
	
4. get candidate count

	- we simple create a counter variable ( and declare it public ) to count the number of candidates in the mapping as there is no seperate way to get the size of the mapping that we have
	created.


*VOTERS*
==========
Voters are represented by the addresses given by the local blockchain (ganash)

- to get the account details in the truffle console we have something known as 
	truffle(developement)>web3

	web3.eth.accounts
	(this given information about all the accounts that we have on the local blockchain)


*TESTING*
(Testing is important because any bug in the functions will cost gas in the ethereum blockchain)
steps;
1. create a test/election.js
2. we are using javascript to do the tests( we will use mochajs and chaijs for running our tests)


This is a smart contract deployed to the Ethereum blockchain. The main contract can be found at [contracts/PollBooth.sol](https://github.com/michael-mcmasters/Poll-Booth-Smart-Contract/blob/master/contracts/PollBooth.sol)

This contract allows you to vote for any item or person (represented as a string), retrieve who is currently winning, and get all items and their corresponding tallies. The data is stored in a hashmap for O(1) time complexity to lessen gas fees. The string type could be changed to bytes32 for more effeciency but I decided against it for readability while getting used to the data types. This was just a fun project I decided to take on to learn how to deploy to testnet and mainnet, and learn all of the different tools such as Truffle, Ganache, Ropsten and more. It was a lot of fun and I plan on developing more in the future.

## To Run Locally

```
git clone https://github.com/michael-mcmasters/Poll-Booth-Smart-Contract.git
cd Poll-Booth-Smart-Contract
```

Use [NPM](https://www.npmjs.com/) to install Truffle which will give you a local blockchain. Then install a hardware wallet to store your fake Ether.
<br>
(Both commands may take a few minutes.)
```
npm install -g truffle
npm install @truffle/hdwallet-provider
```

Compile the smart contracts.
```
truffle compile
```
You should now have a ./build directory with Migrations.json and PollBooth.json inside.
<br>
Start the blockchain.
```
truffle develop
```
Your terminal should now say `truffle(develop)>`
<br>
Deploy the contracts to the blockchain.
```
truffle(develop)> truffle migrate
```

You can now interact with the smart contracts by using JavaScript in the command line, just as if you were using it in a browser console.
<br>
Create an instance of the PollBooth contract.
```
truffle(develop)> let instance = await PollBooth.deployed()
```
It will print undefined. This is fine.
<br>
Now you can use the instance to call on any of the contract's public methods [found here](https://github.com/michael-mcmasters/Poll-Booth-Smart-Contract/blob/master/contracts/PollBooth.sol).

```
truffle(develop)> instance.voteFor("Chocolate")
truffle(develop)> instance.getVotesFor("Chocolate")
truffle(develop)> instance.getWinner("")
```

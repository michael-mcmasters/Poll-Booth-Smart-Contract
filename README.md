## Poll-Booth-Smart-Contract

See the main contract at [contracts/PollBooth.sol](https://github.com/michael-mcmasters/Poll-Booth-Smart-Contract/blob/master/contracts/PollBooth.sol).

## About

A decentralized smart contract running on the Ethereum blockchain. It's written in the Solidity programming language, which syntactically feels like a mix between Java and JavaScript. The purpose of this contract is to store any name or item (represented as a string) and save how many votes it has using a hashmap for O(1) operations. Big O notation is important when developing for this blockchain in particular because you pay Ether for processing time when interacting with it.

I created this project to learn more about the crypto world and to become more familiar with the technologies. I deployed it locally using a local blockchain with Truffle and Ganache. And then deployed to the Ropsten testnet which is one step away from deploying to mainnet, the actual live Ethereum blockchain.

It was a lot of fun, Solidity is interesting, and now that I understand it I look forward to creating more contracts and deploying to mainnet in the future.

## Functionality

The contract is pretty straight forward with 3 public methods:

Vote for an item:
<br>
```voteFor("Oreo Mocha Fudge Blizzard")```

See how many votes an item has
<br>
```getVotesFor("Strawberry Swizzle Blizzard")```

Get the current winner
<br>
```getWinner()```

In this scenario Oreo Mocha Fudge Blizzard is the winner, as it should be. But you can call any function as many times as you want to get different results. If you'd like to try it out yourself, follow the steps below.

## To Run Locally

Make sure [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) are installed on your computer.
<br>
Clone and cd into the project.
```
git clone https://github.com/michael-mcmasters/Poll-Booth-Smart-Contract.git
cd Poll-Booth-Smart-Contract
```

Use NPM to install Truffle which will give you a local blockchain. Then install a hardware wallet to store your fake Ether.
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
You should now have a `./build` directory with Migrations.json and PollBooth.json inside.
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

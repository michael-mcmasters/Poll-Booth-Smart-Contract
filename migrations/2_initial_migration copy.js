const PollBooth = artifacts.require("PollBooth");

module.exports = function (deployer) {
  deployer.deploy(PollBooth);
};

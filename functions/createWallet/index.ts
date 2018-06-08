import Web3 from "web3";

const w3 = new Web3(
  new Web3.providers.HttpProvider("https://rinkeby.infura.io/")
);

const handler: AWSLambda.Handler = (e, ctx, cb) => {
  cb(null, w3.eth.accounts.create());
};

export default handler;

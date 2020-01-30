const assert = require('assert');

const Web3 = require('web3');

const json = require('/Users/stanleyyong/localchaingeth/hello/build/contracts/Hello.json');

const interface = json['abi'];

const bytecode = json['bytecode'];

var localweb3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

var account = "0xC3E39f690FAE857CF1622C757a5A20366BE91691";

//var key = new Buffer('a6b7f670225bf9c58bee180eb2830d051e8db273dd36925ed7e6fa30ff2e80a5','hex');

var Contract = new localweb3.eth.Contract(interface,'0xD7bE37BAfEC37F6d70a306e2F234885D3fd15726');

const gasPrice = localweb3.eth.gasPrice;

const gasPriceHex = localweb3.utils.toHex(gasPrice);

const gasLimitHex = localweb3.utils.toHex(6721975);

var tra = {
	gasPrice: gasPriceHex,
	gasLimit: gasLimitHex,
	data: bytecode,
	from: account
}

//Contract.methods.getName().call().then(console.log);

Contract.methods.setName("Moses").send({from:account}).then(console.log);



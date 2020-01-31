const assert = require('assert');

const Web3 = require('web3');

const json = require('/Users/stanleyyong/localchaingeth/hello/build/contracts/Hello.json');

const interface = json['abi'];

const bytecode = json['bytecode'];

var localweb3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

var account = "0xC3E39f690FAE857CF1622C757a5A20366BE91691";

var Contract = new localweb3.eth.Contract(interface,'0xD7bE37BAfEC37F6d70a306e2F234885D3fd15726');
//change the address based on the output from truffle migrate
const gasPrice = localweb3.eth.gasPrice;

const gasPriceHex = localweb3.utils.toHex(gasPrice);

const gasLimitHex = localweb3.utils.toHex(300000000);

var tra = {
	gasPrice: gasPriceHex,
	gasLimit: gasLimitHex,
	data: bytecode,
	from: account
}

/*
	uint _loanid, 
	uint _borrowerid, 
	Loanstatus _loanstatus, 
	Loanterm _loanterm, 
	int _loanamt, 
	int _interestratebasispoints, 
	int _installment
*/
var bid_1 = 30012020001;
var bid_2 = 30012020002;

Contract.methods.setLoan(
	159170615,
	bid_1,
	0,//Loanstatus.current
	0,//Loanterm.m36
	16000,
	1774,
	576
).send({from:account,gas:250000}).then(console.log);

Contract.methods.setLoan(
	159210254,
	bid_2,
	0,//Loanstatus.current
	1,//Loanterm.m60
	10000,
	1524,
	239
).send({from:account,gas:250000}).then(console.log);
























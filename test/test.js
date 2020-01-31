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

const gasLimitHex = localweb3.utils.toHex(300000000);

var tra = {
	gasPrice: gasPriceHex,
	gasLimit: gasLimitHex,
	data: bytecode,
	from: account
}

//Contract.methods.getName().call().then(console.log);

//Contract.methods.setName("OUE Downtown").send({from:account}).then(console.log);
//generate ids web3.fromAscii("20160528")
//Contract.methods.setBorrower(localweb3.utils.fromAscii("30012020-001"),0,120000,"verified",'0x00061820','0x11',"Director",600,700).send({from:account}).then(console.log);
var id_1 = 30012020001;
var id_2 = 30012020002;
Contract.methods.setBorrower(id_1,0,30000,"verified",'0x00054800','0x47',"Banquet Server",775,779).send({from:account,gas:249669}).then(console.log);
Contract.methods.setBorrower(id_2,0,115000,"verified",'0x00075000','0x41',"Chief Advisor Litigation Tech Unit",680,684).send({from:account,gas:279669}).then(console.log);



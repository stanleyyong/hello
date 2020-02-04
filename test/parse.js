var Papa = require('papaparse');

var fs = require('fs');

var lendingClubFile = '/Users/stanleyyong/localchaingeth/hello/doc/loanstats300.csv';

var contents = fs.readFileSync(lendingClubFile,"ascii");

var rows;

var data; 

Papa.parse(contents, {
	header: true,
	delimiter: ",",
	dynamicTyping: true,
	complete: function(results){
		console.log(results);
		data = results.data
	}
});

/*
var id_1 = 30012020001;
var id_2 = 30012020002;
Contract.methods.setBorrower(id_1,0,30000,"verified",'0x00054800','0x47',"Banquet Server",775,779).send({from:account,gas:249669}).then(console.log);
Contract.methods.setBorrower(id_2,0,115000,"verified",'0x00075000','0x41',"Chief Advisor Litigation Tech Unit",680,684).send({from:account,gas:279669}).then(console.log);
*/
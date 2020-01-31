pragma solidity ^0.5.1;

contract Hello {

	enum Homeownership {own, mortgage, rent, unknown}
	enum Loanstatus {current, fullypaid, late16to30, late31to120, graceperiod}
	enum Loanterm {m36, m60}
	enum LoanPurpose{car, creditcard, debtconsolidation, homeimprovement, medical, house, majorpurchase, renewableenergy, smallbusiness, vacation}

	//declares a struct that represents a loan
	struct Borrower{
		uint borrowerid;
		Homeownership homeownership;
		int annualincome;
		string verificationstatus; //{Not verified, verified, source verified}
		bytes8 zipcode;
		//state abbreviations in the US are in two letters, but we are aiming to save space here by storing as two bytes
		//For this purpose we will use the mapping from the state abbreviations to a 2 digit space
		//USHCN 2-digit State Codes
		//https://cdiac.ess-dive.lbl.gov/climate/temp/us_recordtemps/states.html
		bytes2 addrstate;
		string employmenttitle;
		uint ficorangelow;
		uint ficorangehigh;
		bool isValue;
	}

	struct Loan{
		uint loanid;
		uint borrowerid;
		Loanstatus loanstatus;
		Loanterm loanterm;
		int loanamt;
		int interestratebasispoints;
		int installment;
		bool isValue;
	}

	mapping (uint => Loan) loansbook;
	mapping (uint => Borrower) borrowers;

	uint[] public loanids;
	uint[] public borrowerids;

	function setBorrower(
		uint _borrowerid, 
		Homeownership _homeownership, 
		int _annualincome, 
		string memory _verificationstatus,
		bytes8 _zipcode,
		bytes2 _addrstate,
		string memory _employmenttitle,
		uint _ficorangelow,
		uint _ficorangehigh
	) public {
		Borrower storage borrower = borrowers[_borrowerid];
		borrower.borrowerid = _borrowerid;
		borrower.homeownership = _homeownership;
		borrower.annualincome = _annualincome;
		borrower.verificationstatus = _verificationstatus;
		borrower.zipcode = _zipcode;
		borrower.addrstate = _addrstate;
		borrower.employmenttitle = _employmenttitle;
		borrower.ficorangelow = _ficorangelow;
		borrower.ficorangehigh = _ficorangehigh;
		borrower.isValue = true;
		borrowerids.push(_borrowerid)-1;
	}

	function setLoan(uint _loanid, uint _borrowerid, Loanstatus _loanstatus, Loanterm _loanterm, int _loanamt, int _interestratebasispoints, int _installment) public {
		Loan storage loan = loansbook[_loanid]; //have to be explicit about storage vs memory location, loans have to be persistent hence kept in "storage"
		loan.loanid = _loanid;
		loan.borrowerid = _borrowerid;
		loan.loanstatus = _loanstatus;
		loan.loanterm = _loanterm;
		loan.loanamt = _loanamt;
		loan.interestratebasispoints = _interestratebasispoints;
		loan.installment = _installment;
		loan.isValue = true;
		loanids.push(_loanid) - 1;
	}


	function getBorrower(uint _bid) view public returns(Homeownership,int,string memory){
		if(borrowers[_bid].isValue){
			return(borrowers[_bid].homeownership, borrowers[_bid].annualincome, borrowers[_bid].verificationstatus);
		}else{
			return(Homeownership.unknown, -1, "unknown");
		}
	}

	function getBorrowers() view public returns(uint[] memory){//have to be explicit in returning a clone of the borrower array through memory instead of storage
		return borrowerids;
	}

	function getLoans() view public returns(uint[] memory){//have to be explicit in returning a clone of the loansid array through memory instead of storage
		return loanids;
	}

	function getLoanEconomics(uint _loanid) public view returns(uint, int, int, int){//will return the loanid, loan amount, loan basis points, installment
		if(loansbook[_loanid].isValue){
			//check if the loan id is real
			return(_loanid,loansbook[_loanid].loanamt,loansbook[_loanid].interestratebasispoints, loansbook[_loanid].installment);
		}else{
			//else it wasn't real if we fail to return?
			return(0,0,0,0);
		}
	} 

	address private owner;
	string private name;
	
	constructor() public {
		owner = msg.sender;
	}
	
	function setName(string memory _name) public {
		require(msg.sender == owner, "You are not the owner!");
		name = _name;
	}
	
	function getName() public view returns (string memory){
		return name;
	}
	
	function sayHello() public view returns (string memory, string memory){
		return ("Hello my name is: ", name);
	}
	//a comment to be updated
}

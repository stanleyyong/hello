# hello
Solidity test for RegTech course loans upload to a private chain in Ganache

```
truffle(ganache)> let instance = await Hello.deployed()

truffle(ganache)> 
instance.setBorrower("0x0213e3852b8afeb08929a0f448f2f693b0fc3ebe",0,36000,"verified",'0x00061820','0x11',"analyst",400,600)

truffle(ganache)> 
instance.setLoan(1,"0x0213e3852b8afeb08929a0f448f2f693b0fc3ebe",0,0,10000,225,300)

truffle(ganache)> instance.getLoans()

truffle(ganache)> instance.getLoanEconomics(1)
```

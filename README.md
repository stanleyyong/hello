# hello
Solidity test for RegTech course loans upload to a private chain in Ganache

```
truffle(ganache)> let instance = await Hello.deployed()
```

It is important to ```await``` async methods such as the getBorrowers() function, unless we include a callback function.

For work using the *truffle console*, it is better to use await as it is easier than the alternative   
```
let bor = await instance.getBorrowers()

truffle(ganache)> bor[1]
BN {
  negative: 0,
  words: [ 14357794, 447, <1 empty item> ],
  length: 2,
  red: null
}

truffle(ganache)> bor[1].toNumber()
30012020002

truffle(ganache)> let cal = await instance.getBorrower(bor[1].toNumber())
undefined

truffle(ganache)> let loanx = await instance.getLoanEconomics(loans[0].toNumber())
undefined
truffle(ganache)> loanx[3]
BN {
  negative: 0,
  words: [ 239, <1 empty item> ],
  length: 1,
  red: null
}
truffle(ganache)> loanx[3].toNumber()
239
truffle(ganache)> loanx[2].toNumber()
1524
truffle(ganache)> loanx[1].toNumber()
10000
truffle(ganache)> loanx[0].toNumber()
159210254
```

BN is a BigNumber in Solidity. We have access to functions such as ```toString(10)```, ```toNumber()``` etc.


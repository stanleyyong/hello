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
```

BN is a BigNumber in Solidity. We have access to functions such as ```toString(10)```, ```toNumber()``` etc.


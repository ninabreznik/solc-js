# Mise

* [ethereum/solc-bin - github](https://github.com/ethereum/solc-bin)
* [Using the compiler - Solidity 0.5.2 documentation](https://solidity.readthedocs.io/en/develop/using-the-compiler.html#compiler-input-and-output-json-description)


**versions**

```
{
  all: {},
  nightly: 
  {
    v0.5.1-nightly-2018.11.30: "soljson-v0.5.1-nightly.2018.11.30+commit.a7ca4991.js"
  v0.5.1-nightly-2018.12.03: "soljson-v0.5.1-nightly.2018.12.3+commit.a73df9bc.js"
  v0.5.2-nightly-2018.12.03: "soljson-v0.5.2-nightly.2018.12.3+commit.e6a01d26.js"
  v0.5.2-nightly-2018.12.04: "soljson-v0.5.2-nightly.2018.12.4+commit.e49f37be.js"
  v0.5.2-nightly-2018.12.05: "soljson-v0.5.2-nightly.2018.12.5+commit.6efe2a52.js"
  v0.5.2-nightly-2018.12.06: "soljson-v0.5.2-nightly.2018.12.6+commit.5a08ae5e.js"
  },
  release: {
  'v0.1.3-stable-2015.09.30': 'soljson-v0.1.3+commit.28f561.js',
  'v0.1.4-stable-2015.10.09': 'soljson-v0.1.4+commit.5f6c3cd.js',
  'v0.1.5-stable-2015.10.19': 'soljson-v0.1.5+commit.23865e3.js',
  'v0.1.6-stable-2015.11.17': 'soljson-v0.1.6+commit.d41f8b7.js',
  'v0.1.7-stable-2015.11.30': 'soljson-v0.1.7+commit.b4e666c.js',
  'v0.2.0-stable-2016.01.31': 'soljson-v0.2.0+commit.4dc2445.js',
  'v0.2.1-stable-2016.02.15': 'soljson-v0.2.1+commit.91a6b35.js',
  'v0.2.2-stable-2016.03.10': 'soljson-v0.2.2+commit.ef92f56.js',
  'v0.3.2-stable-2016.05.27': 'soljson-v0.3.2+commit.81ae2a7.js',
  'v0.3.3-stable-2016.06.02': 'soljson-v0.3.3+commit.4dc1cb1.js',
  'v0.3.4-stable-2016.06.11': 'soljson-v0.3.4+commit.7dab890.js',
  'v0.3.5-stable-2016.08.10': 'soljson-v0.3.5+commit.5f97274.js',
  'v0.3.6-stable-2016.09.08': 'soljson-v0.3.6+commit.3fc68da.js',
  v0.4.21-stable-2018.03.07: "soljson-v0.4.21+commit.dfe3193c.js"
  v0.4.22-stable-2018.04.16: "soljson-v0.4.22+commit.4cb486ee.js"
  v0.4.23-stable-2018.04.19: "soljson-v0.4.23+commit.124ca40d.js"
  v0.4.24-stable-2018.05.16: "soljson-v0.4.24+commit.e67f0147.js"
  v0.4.25-stable-2018.09.13: "soljson-v0.4.25+commit.59dbf8f1.js"
  v0.5.0-stable-2018.11.13: "soljson-v0.5.0+commit.1d4f565a.js"
  v0.5.1-stable-2018.12.03: "soljson-v0.5.1+commit.c8a2cb62.js"}
}
```

0.5.1

```
{ 
  name: 'yContract',
  abi: undefined,
  sources:
   { sourcecode: undefined,
     compilationTarget: undefined,
     remappings: [],
     libraries: {},
     sourcelist: undefined },
  compiler:
   { language: 'solidity',
     version: 'v0.5.1-stable-2018.12.03',
     url: 'https://solc-bin.ethereum.org/bin/soljson-v0.5.1+commit.c8a2cb62.js',
     evmVersion: 'byzantium',
     optimizer: true,
     runs: 200 },
  assembly: { assembly: undefined, opcodes: undefined },
  binary:
   { bytecodes: { bytecode: undefined, runtimeBytecode: undefined },
     sourcemap: { srcmap: undefined, srcmapRuntime: undefined } },
  metadata:
   { ast: undefined,
     devdoc: { methods: {} },
     userdoc: { methods: {} },
     functionHashes: undefined,
     gasEstimates: undefined,
     analysis: { warnings: [], others: [] } } }
```

0.4.25

```
{ name: 'Mortal',
  abi: undefined,
  sources:
   { sourcecode:
      { keccak256: '0x57a6dcbb923ce7fd835617ad78452ac24fad490fb3ef7d81fdeda009dd06c70a',
        urls: [Array] },
     compilationTarget: 'Mortal',
     remappings: [],
     libraries: {},
     sourcelist: [ '' ] },
  compiler:
   { language: 'solidity',
     version: 'v0.4.25-stable-2018.09.13',
     url: 'https://solc-bin.ethereum.org/bin/soljson-v0.4.25+commit.59dbf8f1.js',
     evmVersion: 'byzantium',
     optimizer: true,
     runs: 200 },
  assembly:
   { assembly: { '.code': [Array], '.data': [Object] },
     opcodes: 'PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB NOT AND CALLER OR SWAP1 SSTORE PUSH2 0x120 DUP1 PUSH2 0x32 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH1 0x48 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x41C0E1B5 DUP2 EQ PUSH1 0x4D JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH1 0x61 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH1 0x58 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x5F PUSH1 0x9C JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH1 0x6C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x73 PUSH1 0xD8 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER EQ ISZERO PUSH1 0xD6 JUMPI PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SELFDESTRUCT JUMPDEST JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xa6 SWAP3 LOG2 SWAP15 0xde 0x47 0xf8 0xe0 OR 0xa8 GT 0x5d ORIGIN DUP14 REVERT 0xeb PUSH20 0x2474A0985E2346E41EE6C0456DE66E0029000000 ' },
  binary:
   { bytecodes:
      { bytecode: '608060405234801561001057600080fd5b5060008054600160a060020a03191633179055610120806100326000396000f30060806040526004361060485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166341c0e1b58114604d5780638da5cb5b146061575b600080fd5b348015605857600080fd5b50605f609c565b005b348015606c57600080fd5b50607360d8565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60005473ffffffffffffffffffffffffffffffffffffffff1633141560d65760005473ffffffffffffffffffffffffffffffffffffffff16ff5b565b60005473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a72305820a692a29ede47f8e017a8115d328dfdeb732474a0985e2346e41ee6c0456de66e0029',
        runtimeBytecode: '60806040526004361060485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166341c0e1b58114604d5780638da5cb5b146061575b600080fd5b348015605857600080fd5b50605f609c565b005b348015606c57600080fd5b50607360d8565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60005473ffffffffffffffffffffffffffffffffffffffff1633141560d65760005473ffffffffffffffffffffffffffffffffffffffff16ff5b565b60005473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a72305820a692a29ede47f8e017a8115d328dfdeb732474a0985e2346e41ee6c0456de66e0029' },
     sourcemap:
      { srcmap: '5:181:0:-;;;57:44;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;80:5:0;:18;;-1:-1:-1;;;;;;80:18:0;88:10;80:18;;;5:181;;;;;;',
        srcmapRuntime: '5:181:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;108:72;;8:9:-1;5:2;;;30:1;27;20:12;5:2;108:72:0;;;;;;29:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;29:20:0;;;;;;;;;;;;;;;;;;;;;;;108:72;151:5;;;;137:10;:19;133:44;;;171:5;;;;158:19;133:44;108:72::o;29:20::-;;;;;;:::o' } },
  metadata:
   { ast:
      { attributes: [Object],
        children: [Array],
        id: 41,
        name: 'SourceUnit',
        src: '5:341:0' },
     devdoc: { methods: {} },
     userdoc: { methods: {} },
     functionHashes: { 'kill()': '41c0e1b5', 'owner()': '8da5cb5b' },
     gasEstimates: { creation: [Array], external: [Object], internal: {} },
     analysis: { warnings: [], others: [], warning: [Array] } } }
```
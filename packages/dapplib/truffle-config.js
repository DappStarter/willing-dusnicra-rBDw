require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note mushroom purpose hover enrich symptom seed'; 
let testAccounts = [
"0x89655e55edf253cb176c6f6949cc94f89d55e17ac478bad02057a7f84b1c9d5e",
"0x327563c5c360ffc3c60b74a738e3d53f83117d934764035145304a5e167c124c",
"0xb7f712abafa7a393722ad973f279e79cc2baf271973e70cb10fa13ea8ae236ee",
"0x92dc216a99311a592be6a822220d1289d297ba93b23e5390eeb75e64e4133219",
"0xf537b7b60179f238a6c8620d53ae62e544e063b72ad2812f6b3fba7bad3faee4",
"0x5567cb0497a8f033f174ca6a6a87c8b7ed579af5dfa652fd2444e348773fdf3c",
"0x037d539d7583385387ac55cfe44c25ed73dd2e5e56da56555d9b39c86ec63bee",
"0xce51bb605120a8a1f382229496e7802d99396e14afefc3f718d80388852cd931",
"0xdaf198e9d7db9827f01a5f32c37d283a5d8ac558b59e2fd1059875ed16c20315",
"0xd54ecbbff4c09b4e4810ab0a8517f64b6e7a77a12e24309d3cb1d1f995d2f0d9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



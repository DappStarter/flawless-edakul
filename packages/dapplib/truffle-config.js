require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid glide fruit sugar fire ridge remain prosper gesture forum force gate'; 
let testAccounts = [
"0xd2f57fbbf8f21e58429527fea9a209ebad08f80f82c5cfbdbc94ab64fdac18f2",
"0x840ff215e295602a489227d8fcf7a45e66b0dff84cc74754387bc6a892704edc",
"0x6a1dd1de259219c4748e0c28ddf92f7e868d17a9c483ee7c5b2ba66769f3b694",
"0x9c3fa80dd2a2f9b713a3be8a9f24402ccd6be07406592348e50b1a86a872c83f",
"0x92fea021339a8c65efb4a775bf187b6a9c62673998157b806cf85039d6292092",
"0xb0dd02892b4c42c12d5f3b12548dbe4d1b35bcc58ef1c9a4121fdb5de30349b0",
"0x54a65140f1f582a428d55802015c73c7236ea82dd4a9c9d00d836cd9f1b92453",
"0x83ea618976868495d0138da0ab47eff2daed580aab5031610b038c64e7adbde9",
"0xb45d9177c9aaa40f71e684d8288b61fe6eb882560b1a5323c54d66f37128f7eb",
"0x07e2be0bf3438414e294c7e273f128bdbd79f37943c01175320e574bac0223f6"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



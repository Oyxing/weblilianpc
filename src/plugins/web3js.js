let Web3 = require('web3');
let web3;

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    var HttpProvider = new Web3.providers.HttpProvider("http://10.1.1.210:8545")
    web3 = new Web3(HttpProvider);
}
if (!web3.currentProvider) {
    web3 = web3.setProvider('http://10.1.1.210:8545');
}
export default ({ Vue }) => {
    Vue.prototype.$web3js = web3
}
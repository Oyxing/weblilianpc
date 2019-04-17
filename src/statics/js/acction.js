import fileFun from './filefun'
import { async } from 'q';
export default {
    // 创建账户
    creadFun: async(data) => {
        const pwd = data.pass
            //     // 调用 web3 创建账户
        let account = await data._this.$web3js.eth.accounts.wallet.create(1)
        var result
        for (var i = 0; i < account.length; i++) {
            // encrypt 返回一个JSON 对象
            const keystoreJson = await account[i].encrypt(pwd)
                // 将 JSON 对象转为字符串
            const keystoreStr = JSON.stringify(keystoreJson)
                // 生成随机文件存储 keystore 的字符串
            const randFilename = "UTC--" + new Date().getTime() + "--" + account[i].address
                // 将 keystore 的内容写入文件中
            await fileFun.writeFun(randFilename, keystoreStr).then((result) => {
                result = { "account": account[i].address, "privateKey": account[i].privateKey, "keystore": filePath }
            }).catch((err) => {});
            // 将 用户地址、私钥、keystore 数据返回
        }
        return result
    },
    // 读取 keystore
    readFun: async() => {
        var keystoreArr = []
        await fileFun.readFile().then((data) => {
            keystoreArr = data
        }).catch((err) => {

        });
        return keystoreArr
    },
    // 解密 私钥秘钥 
    decryptFun: (data) => {
        var decrypt = data._this.$web3js.eth.accounts.wallet.decrypt(data.arr, data.pass)
        return decrypt
    },
    // 查询账户余额
    getBalance: async(data) => {
        var balance = 0
        await data._this.$web3js.eth.getBalance(data.address).then((Balance) => {
            balance = data._this.$web3js.utils.fromWei(Balance, 'ether');
        }).catch((err) => {

        });
        return balance
    },
    // 交易
    signTransaction: async(data) => {
        var wallet = data._this.$web3js.eth.accounts.wallet
        var gasnum, GasPricenum, noncenum, signtx
        var sendSignedjson = {
            err: "",
            data: ""
        }
        var Gasjson = {
                from: wallet[0].address,
                to: data.toaddress,
                value: data._this.$web3js.utils.toWei(String(data.money), 'ether')
            }
            //  获取 gas
        await data._this.$web3js.eth.estimateGas(Gasjson).then((gas) => {
                gasnum = gas
            })
            //  获取 GasPrice
        await data._this.$web3js.eth.getGasPrice().then((GasPrice) => {
                GasPricenum = GasPrice
            })
            //  获取 nonce
        await data._this.$web3js.eth.getTransactionCount(wallet[0].address).then((nonce) => {
            noncenum = nonce
        })
        if (data.datastr) {
            data.datastr["time"] = new Date()
        }
        var stringify = await JSON.stringify(data.datastr)
        var datastr = await data.datastr ? data._this.$web3js.utils.asciiToHex(stringify) : ""
        var value = await data._this.$web3js.utils.toWei(String(data.money), 'ether')
        const txData = await {
            // nonce每次++，以免覆盖之前pending中的交易
            nonce: data._this.$web3js.utils.toHex(noncenum++),
            // 设置gasLimit和gasPrice
            gasLimit: data._this.$web3js.utils.toHex(99000),
            gasPrice: data._this.$web3js.utils.toHex(GasPricenum),
            // 要转账的哪个账号  
            to: data.toaddress,
            // 从哪个账号转
            from: wallet[0].address,
            // 0.001 以太币
            value: data._this.$web3js.utils.toHex(value),
            data: datastr
        }
        await wallet[0].signTransaction(txData, (err, tx) => {
            signtx = tx
        })
        var raw = await signtx.rawTransaction;
        // 交易
        await data._this.$web3js.eth.sendSignedTransaction(raw, (err, data) => {
            sendSignedjson.err = err
            sendSignedjson.data = data
        })
        return sendSignedjson
    },
    // 交易查询
    // 读出 区块 交易数据
    async transactionRecord(data) {
        var getBlockNumber = 0
        var err
            // 获取 块的高度
        await data._this.$web3js.eth.getBlockNumber().then((result) => {
            getBlockNumber = result
        }).catch((err) => {
            err = err
        });
        // 交易 哈希值
        var transactionsHexArr = []
        for (var i = 0; i < getBlockNumber; i++) {
            await data._this.$web3js.eth.getBlock(i).then((result) => {
                if (result.transactions.length > 0) {
                    for (var q = 0; q < result.transactions.length; q++) {
                        transactionsHexArr.push({ "transaction": result.transactions[q], "timestamp": result.timestamp })
                    }
                }
            }).catch((err) => {
                err = err
            });
        }
        var transactionsArr = []
        for (var i = 0; i < transactionsHexArr.length; i++) {
            await data._this.$web3js.eth.getTransaction(transactionsHexArr[i].transaction).then(async(result) => {
                if (result.input) {
                    var hexToAscii = await data._this.$web3js.utils.hexToAscii(result.input)
                }
                await transactionsArr.push({
                    timestamp: transactionsHexArr[i].timestamp,
                    from: result.from,
                    to: result.to,
                    value: result.value,
                    hash: result.hash,
                    data: hexToAscii ? JSON.parse(hexToAscii) : ""
                })
            }).catch((err) => {
                err = err
            });
        }
        return new Promise(function(resolve, reject) {
            resolve(transactionsArr)
        })
    }
}
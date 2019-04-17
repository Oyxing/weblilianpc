import { Promise } from "q";

const fs = require("fs");
const path = require('path');
var json = {
    success: 0,
    msg: "成功"
}
const writeFun = async(fliename, data) => {
    const fpath = path.join(__dirname, '../keystore/')

    await stat(fpath).then((result) => {
        json = result
    }).catch((err) => {
        json = err
    });
    await write(fpath + fliename, data).then((result) => {
        json = result
    }).catch((err) => {
        json = err
    });

    return new Promise((resolve, reject) => {
        resolve(json)
    })
}

const readFile = async() => {
        var fPath = path.join(__dirname, "../keystore/")
        await readdirFun(fPath).then((result) => {
            json = result
        }).catch((err) => {
            json = err
        });
        const array = await json.msg
        const keystoreArr = []
        for (let i = 0; i < array.length; i++) {
            const element = await array[i];
            await readFun(fPath + element).then((result) => {
                keystoreArr.push(result.msg)
            }).catch((err) => {});
        }
        return new Promise((resolve, reject) => {
            if (keystoreArr.length) {
                resolve({ success: 0, msg: keystoreArr })
            } else {
                reject({ success: 1, msg: "无keystore" })
            }
        })
    }
    // 读取文件
const readFun = (fPath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fPath, function(err, data) {
            if (err) reject({ success: 1, msg: "读取文件失败" })
            else resolve({ success: 0, msg: JSON.parse(data.toString()) })
        });
    })
}

// 读取目录文件
const readdirFun = (fPath) => {
        return new Promise((resolve, reject) => {
            fs.readdir(fPath, function(err, data) {
                if (err) reject({ success: 1, msg: "读取目录失败" })
                else resolve({ success: 0, msg: data })
            });
        })
    }
    // 读取目录
const stat = (path) => {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if (err) {
                mkdir(path).then((result) => {
                    resolve(result);
                }).catch((err) => {
                    reject(err);
                });
            } else {
                resolve({ success: 0, msg: "文件存在" });
            }
        })
    })
}

// 创建目录
const mkdir = (dir) => {
        return new Promise((resolve, reject) => {
            fs.mkdir(dir, err => {
                if (err) {
                    reject({ success: 1, msg: "创建失败" });
                } else {
                    resolve({ success: 0, msg: "创建成功" });
                }
            })
        })
    }
    // 写入文件
const write = (fliename, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fliename, data, (err, data) => {
            if (err) {
                reject({ success: 1, msg: "写入失败" });
            } else {
                resolve({ success: 0, msg: "写入成功" });
            }
        });
    })
}


export default {
    writeFun,
    readFile
}
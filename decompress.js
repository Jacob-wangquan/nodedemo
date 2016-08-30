/**
 * Created by Administrator on 2016/8/30.
 */
var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt'));

console.log("文件解压完成。");
/**
 * Created by Administrator on 2016/8/30.
 */
buf = new Buffer(256);
len = buf.write("www.runoob.com");

console.log("写入字节数 : "+  len);
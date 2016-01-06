
var pk = 'd9e51b64202a4e5d45ae44aad312b2c800771d09f8335b8da664c9d8cc724345';
var sk = 'f8322b80de9842853433fafc5cb83f5cc9d584734b9f889e642f9152a11debe5';
var nonce = '565870a7000bd8466f83d97a04333245000067dd443bbb4b';

//找个安静的地方保存上面的加密参数


function encrypt(msg){
//msg为要加密的字符串,返回值即为加密后的值
  var timestamp = new Date().getTime();
  var enc = msg + ':' + timestamp;
  var enced = sodium.crypto_box_easy(enc,sodium.from_hex(nonce),sodium.from_hex(pk),sodium.from_hex(sk),'hex');
  return msg+'.'+timestamp+'.'+enced;
}  
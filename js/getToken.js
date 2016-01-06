// JavaScript Document
function getToken(){
	var a = document.cookie.split("=");
	var reg = new RegExp(a[0]);
	if (reg.test("token")){
		return a[1];
	}
	else {
		alert("出错了，请重新登陆");
		window.location.href="";
	}
	//获取本地cookie中的token

}
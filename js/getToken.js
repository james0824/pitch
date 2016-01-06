// JavaScript Document
function getToken(){
	var a = document.cookie.split("=");
	var k = 1;
	var i = 0;
	var t;
	alert(a);
	while (k){
		var reg = new RegExp(a[i]);
		if (reg.test("token")){
			t = a[i+1];
			k = 0;
		}
		if (a[i]==""){
			alert("出错了，请重新登陆");
			window.location.href="http://222.201.132.27/crewManageEvolve/#/login";
		}
	}
	//获取本地cookie中的token
}
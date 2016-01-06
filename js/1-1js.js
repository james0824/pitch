$(document).ready(function() {
	document.cookie = "token=B378A7ADAF7A76A8AF7BA3A7AFAEA59D9690AFA395CECF9C79CDA7A183BAA49FB277B0A1BC8E7799C5A5B4A4BCBD6764858FB2A081CCACA979CCAFA18E99ADACCA8CA880BC797E67ABA1B799AEA97C9E95A5B79F96AAB99C79CDA7B082AAB8AEB588D1AEB0A07E63C8889F6D";
	var token = getToken();
	var auth = encrypt(token);
	var a = { "auth" : auth };
    $.ajax({
		url: "http://192.168.1.120/bbter/index.php/Home/UserData/getUserData",
		type: "POST",
		processData: "false",
		contentType: "application/x-www-form-urlencoded",
		data: a,
		success: function(getdata){
			var obj = eval ("(" + getdata + ")");
			if (obj.code==200){
				token = obj.token;
				info = obj.info;
				name = obj.data.name;
				//photo = obj.data.photo;
				position = obj.data.position;
				department = obj.data.department;
				sex = obj.data.sex;
				tel = obj.data.tel;
				shorttel = obj.data.shorttel;
				classstatus = obj.data.classstatus;
				pitchnumber = obj.data.pitchnumber;
				document.cookie = "token=" + token;
				$(".name").text(name);
				//$(".photo").attr("src",photo);
				$(".position").text(position);
				$(".department").text(department);
				$(".sex .val").text(sex);
				$(".tel .val").text(tel);
				$(".shortTel .val").text(shorttel);
				$(".classstatus .val").text(classstatus);
				$(".pitchnumber .val").text(pitchnumber);//填充信息
			}
		}
	});

});
$(document).ready(function(){
	document.cookie = "token=B378A7ADAF7A76A8AF7BA3A7AFAEA59D9690AFA395CECF9C79CDA7A183BAA49FB277B0A1BC8E7799C5A5B4A4BCBD6764858FB2A081CCACA979CCAFA18E99ADACCA8CA880BC797E67ABA1B799AEA97C9E95A5B79F96AAB99C79CDA7B082AAB8AEB578D169B18A7663C8889F6D"
	var token = getToken();
	var auth = encrypt(token);
	var a = { "auth" : auth,"data" : {"kind":"全部"} };
	block = "<div class='block'><p class='actName fontNormal'>活动名称</p><p class='actStatus fontSmall'>状态</p><p class='actTime fontSmall'>创建时间</p></div>";
    $.ajax({
		url: "http://192.168.1.120/bbter/index.php/Home/Activity/obtainActivityList",
		type: "POST",
		processData: "false",
		contentType: "application/x-www-form-urlencoded",
		data: a,
		success: function(getdata){
			console.log(getdata);
			var obj = eval ("(" + getdata + ")");
			if (obj.code==200){
				document.cookie = "token=" + token;
				info = obj.info;
				number = obj.data.number;
				actid = new Array();
				for (var i = 0; i < number; i++) {
					$(".subContentDetail").append(block);
					$(".actName").eq(i).text(obj.data.list[i].actname);
					$(".actTime").eq(i).text(obj.data.list[i].acttime);
					$(".actStatus").eq(i).text(obj.data.list[i].actstatus);
					actid[i] = obj.data.list[i].actid;
				}
			};//存储信息
		}
	});
    $(".subContentDetail").on("click",".block",function(){
    	index =  $(this).index(".block");
    	thisid = actid[index];
    	var src = "id="+thisid;
    	window.location.href="pitch3-2.html?"+src;
    });
    $(".add").click(function(){
    	$(".frontWindow").slideToggle(400);
    });
    $(".cancel").click(function(){
		$(".frontWindow").css("display","none");
    });
    $(".submit").click(function(){
    	var token = getToken();
		var auth = encrypt(token);
    	var name = $(".addActName").val();
    	var description = $(".addActDescription").val();
		a = { "auth" : auth,"data":{"name":name,"description":description} };
    	$.ajax({
		url: "http://192.168.1.120/bbter/index.php/Home/Activity/addActivity",
		type: "POST",
		processData: "false",
		contentType: "application/x-www-form-urlencoded",
		data: a,
		success: function(getdata){
			var obj = eval ("(" + getdata + ")");
			if (obj.code==200){
				document.cookie = "token=" + token;
				info = obj.info;
				alert("新增摆摊成功");
				$(".frontWindow").toggle(400);
				window.location.href="pitch3-1.html";
				};//存储信息
			}
		});
    });
});
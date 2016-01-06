$(document).ready(function(){
	document.cookie = "token=B378A7ADAF7A76A8AF7BA3A7AFAEA59D9690AFA395CECF9C79CDA7A183BAA49FB277B0A1BC8E7799C5A5B4A4BCBD6764858FB2A081CCACA979CCAFA18E99ADACCA8CA880BC797E67ABA1B799AEA97C9E95A5B79F96AAB99C79CDA7B082AAB8AEB578D169B18A7663C8889F6D"
	var token = getToken();
	var auth = encrypt(token);
	var p = window.location.search;
	var id = p.match(/\d+/g);
	id = id.toString();
	var a = { "auth" : auth,"data":{"id":id} };
	block = "<tr class='trHover block'><td class='name'>xx</td><td class='position'>xx</td><td class='department'>xxxx部</td><td class='shortTel'>xxxxxx</td><td class='tel'>xxxxxxxxxxx</td></tr>"
    $.ajax({
		url: "http://192.168.1.120/bbter/index.php/Home/SubActivity/getpublishsa",
		type: "POST",
		processData: "false",
		contentType: "application/x-www-form-urlencoded",
		data: a,
		success: function(getdata){
			$(".block").remove();
			var obj = eval ("(" + getdata + ")");
			if (obj.code==200){
				document.cookie = "token=" + token;
				info = obj.info;
				number = obj.data.number;
				var summary = obj.data.date + obj.data.day + obj.data.time;
				activityid = obj.data.activityid;
				$(".subSummary").text(summary);
				$(".subPlace .val").text(obj.data.place);
				$(".subNumber .val").text(obj.data.neednumber);
				$(".subNeededDepartment .val").text(obj.data.needdepartment);
				$(".subNeededBoy .val").text(obj.data.boy);
				$(".subCommander .val").text(obj.data.commander);
				if(obj.data.boy==1)
					$(".boy .val").text("是");
				else $(".boy .val").text("否");
				for (var i = 0; i < number; i++) {
					$(".subContentTable").append(block);
					$(".name").eq(i).text(obj.data.list[i].name);
					$(".position").eq(i).text(obj.data.list[i].position);
					$(".department").eq(i).text(obj.data.list[i].department);
					$(".tel").eq(i).text(obj.data.list[i].tel);
					$(".shortTel").eq(i).text(obj.data.list[i].shorttel);
				}
			};//存储信息
		}
	});
	$(".back").click(function(){
		var src = "id="+activityid;
    	window.location.href="pitch3-2.html?"+src;
	});
});
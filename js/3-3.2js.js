$(document).ready(function(e){
	document.cookie = "token=B378A7ADAF7A76A8AF7BA3A7AFAEA59D9690AFA395CECF9C79CDA7A183BAA49FB277B0A1BC8E7799C5A5B4A4BCBD6764858FB2A081CCACA979CCAFA18E99ADACCA8CA880BC797E67ABA1B799AEA97C9E95A5B79F96AAB99C79CDA7B082AAB8AEB578D169B18A7663C8889F6D"
	var token = getToken();
	var auth = encrypt(token);
	var p = window.location.search;
	var id = p.match(/\d+/g);
	id = id.toString();
	var a = { "auth" : auth,"data":{"id":id} };
	$.ajax({
			url: "http://192.168.1.120/bbter/index.php/Home/SubActivity/getpublishsa",
			type: "POST",
			processData: "false",
			contentType: "application/x-www-form-urlencoded",
			data: a,
			success: function(getdata){
				var obj = eval ("(" + getdata + ")");
				if (obj.code==200){
					document.cookie = "token=" + token;
					info = obj.info;
					activityid = obj.data.activityid;
					$(".activityName").text(obj.data.name);
					$(".subDate .val").text(obj.data.date + " " + obj.data.day);
					$(".subTime .val").text(obj.data.time);
					$(".place .val").val(obj.data.place);
					$(".neededNumber .val").val(obj.data.neednumber);
					$(".commander .val").val(obj.data.commanderId);
					var d = obj.data.needdepartment;
					var dArray = d.split(" ");
					for (var i = 0; i<dArray.length; i++){
						switch (dArray[i]){
							case "编辑部" :{
								$(".checked").eq(0).css("display","block");
								$(".unchecked").eq(0).css("display","none");
							}break;
							case "策划推广部" :{
								$(".checked").eq(1).css("display","block");
								$(".unchecked").eq(1).css("display","none");
							}break;
							case "节目部" :{
								$(".checked").eq(2).css("display","block");
								$(".unchecked").eq(2).css("display","none");
							}break;
							case "技术部" :{
								$(".checked").eq(3).css("display","block");
								$(".unchecked").eq(3).css("display","none");
							}break;
							case "人力资源部" :{
								$(".checked").eq(4).css("display","block");
								$(".unchecked").eq(4).css("display","none");
							}break;
							case "视频部" :{
								$(".checked").eq(5).css("display","block");
								$(".unchecked").eq(5).css("display","none");
							}break;
							case "视觉设计部" :{
								$(".checked").eq(6).css("display","block");
								$(".unchecked").eq(6).css("display","none");
							}break;
							case "综合新闻部" :{
								$(".checked").eq(7).css("display","block");
								$(".unchecked").eq(7).css("display","none");
							}break;
							case "外联部" :{
								$(".checked").eq(8).css("display","block");
								$(".unchecked").eq(8).css("display","none");
							}break;
							case "综合管理部" :{
								$(".checked").eq(9).css("display","block");
								$(".unchecked").eq(9).css("display","none");
							}break;
						}
					}
					var b = obj.data.boy;
					if (b==1){
						$(".boychecked").css("display","block");
						$(".boyunchecked").css("display","none");
					}
				}
			}
		});
	$(".submit").click(function(){
		var date = $(".subDate .val").text();
		var time = $(".subTime .val").text();
		var place = $(".place .val").val();
		var needednumber = $(".neededNumber .val").val();
		var commander = $(".commander .val").val();
		var neededdepartment = "";
		$(".checked").each(function(){
			if ($(this).css("display")=="block"){
				var index = $(this).index(".checked");
				switch (index)
				{
					case 0 :{
						neededdepartment = neededdepartment + " 编辑部"
					}break;
					case 1 :{
						neededdepartment = neededdepartment + " 策划推广部"
					}break;
					case 2 :{
						neededdepartment = neededdepartment + " 节目部"
					}break;
					case 3 :{
						neededdepartment = neededdepartment + " 技术部"
					}break;
					case 4 :{
						neededdepartment = neededdepartment + " 人力资源部"
					}break;
					case 5 :{
						neededdepartment = neededdepartment + " 视频部"
					}break;
					case 6 :{
						neededdepartment = neededdepartment + " 视觉设计部"
					}break;
					case 7 :{
						neededdepartment = neededdepartment + " 综合新闻部"
					}break;
					case 8 :{
						neededdepartment = neededdepartment + " 外联部"
					}break;
					case 9 :{
						neededdepartment = neededdepartment + " 综合管理部"
					}break;
				}
			}
		});
		var boy;
		if($(".boychecked").css("display")=="block")
			boy = 1;
		else boy = 0;
		var p = window.location.search;
		var id = p.match(/\d+/g);
		id = id.toString();
		var a = { "auth" : auth,"data":{"date":date,"time":time,"place":place,"neednumber":needednumber,"commander":commander,"needdepartment":neededdepartment,"boy":boy,"id":id }};
		$.ajax({
			url: "http://192.168.1.120/bbter/index.php/Home/SubActivity/editactivity",
			type: "POST",
			processData: "false",
			contentType: "application/x-www-form-urlencoded",
			data: a,
			success: function(getdata){
				var obj = eval ("(" + getdata + ")");
				if (obj.code==200){
					document.cookie = "token=" + token;
					info = obj.info;
					alert("提交成功");
					var src = "id="+activityid;
    				window.location.href="pitch3-2.html?"+src;
				}
			}
		});
	});
	$(".back").click(function(){
		var src = "id="+activityid;
    	window.location.href="pitch3-2.html?"+src;
	});
	$(".frontWindow").click(function(e){
		e.stopPropagation();
	});
	$(".subTime .val,.subTime .img").click(function(e){
		if($(".frontWindow").css("display")=="block")
	        {
				$(".frontWindow").toggle(200);
			}
		$(".option").slideToggle(200);
		e.stopPropagation();
	});
	$(".option").click(function(){
		$(".subTime .val").text($(this).text());
	})
	$(".unchecked").click(function(){
		var index = $(this).index(".unchecked");
		$(".checked").eq(index).css("display","block");
		$(this).css("display","none");
	});
	$(".checked").click(function(){
		var index = $(this).index(".checked");
		$(".unchecked").eq(index).css("display","block");
		$(this).css("display","none");
	});
});
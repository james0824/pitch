$(document).ready(function(e){
	var token = getToken();
	var auth = encrypt(token);
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
			url: "http://localhost/bbter-all/index.php/Home/SubActivity/addactivity",
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
					var p = window.location.search;
					var id = p.match(/\d+/g);
					id = id.toString();
					var src = "id="+id;
    				window.location.href="pitch3-2.html?"+src;
				}
			}
		});
	});
	$(".back").click(function(){
		var p = window.location.search;
		var thisid = p.match(/\d+/g);
		thisid = thisid.toString();
		var src = "id="+thisid;
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
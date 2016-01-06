$(document).ready(function(e){
	var token = getToken();
	var auth = encrypt(token);
	var p = window.location.search;
	var id = p.match(/\d+/g);
	id = id.toString();
	block = "<tr class='trHover block'><td class='subDate'>xxxx-xx-xx周五</td><td class='subTime'>56节</td><td class='subPlace'>x饭</td><td class='subNumber'>x</td><td class='subCommander'>xxx</td></tr>"
	var a = { "auth" : auth,"data":{"id":id} };
    $.ajax({
		url: "http://192.168.1.120/bbter/index.php/Home/SubActivity/getSaByAct",
		type: "POST",
		processData: "false",
		contentType: "application/x-www-form-urlencoded",
		data: a,
		success: function(getdata){
			var obj = eval ("(" + getdata + ")");
			if (obj.code==200){
				document.cookie = "token=" + token;
				info = obj.info;
				number = obj.data.number;
				ifconfirm = obj.data.ifconfirm;
				$(".block").remove();
				subid = new Array();
				$(".actName").text(obj.data.name);
				$(".actTime .val").text(obj.data.date);
				$(".actStatus .val").text(obj.data.status);
				$(".actDescription .val").text(obj.data.description);
				$(".actNumber .val").text(obj.data.number);
				for (var i = 0; i < number; i++) {
					$(".subContentTable").append(block);
					var date = obj.data.list[i].subdate + obj.data.list[i].subday;
					$(".subDate").eq(i).text(date);
					$(".subTime").eq(i).text(obj.data.list[i].subtime);
					$(".subPlace").eq(i).text(obj.data.list[i].subplace);
					$(".subNumber").eq(i).text(obj.data.list[i].subnumber);
					$(".subCommander").eq(i).text(obj.data.list[i].subcommander);
					subid[i] = obj.data.list[i].subid;
				}
				if (ifconfirm==0){
					$(".export").css("display","none");
				}
				else $(".add,.submit").css("display","none");
			}//存储信息
		}
	});
	$(".subContentImg1").click(function(){
		$(".addActName").val($(".actName").text());
		$(".addActDescription").val($(".actDescription .val").text());
		$(".frontWindow").slideToggle(400);
		
	});
	$(".subContentImg2").click(function(){
		var token = getToken();
		var auth = encrypt(token);
		var p = window.location.search;
		var id = p.match(/\d+/g);
		id = id.toString();
		var a = { "auth" : auth,"data":{"id":id} };
		$.ajax({
			url: "http://192.168.1.120/bbter/index.php/Home/Activity/rmActivity",
			type: "POST",
			processData: "false",
			contentType: "application/x-www-form-urlencoded",
			data: a,
			success: function(getdata){
				var obj = eval ("(" + getdata + ")");
				if (obj.code==200){
					document.cookie = "token=" + token;
					info = obj.info;
					alert("删除成功")
    				window.location.href="pitch3-1.html";//存储信息
				}
			}
		});
	});
	$(".cancel").click(function(){
		$(".frontWindow").slideToggle(400);
	});
	$(".windowSubmit").click(function(){
		var token = getToken();
		var auth = encrypt(token);
		var p = window.location.search;
		var id = p.match(/\d+/g);
		id = id.toString();
		var name = $(".addActName").val();
		var description = $(".addActDescription").val();
		var a = { "auth" : auth,"data":{"id":id,"name":name,"description":description} };
		$.ajax({
			url: "http://192.168.1.120/bbter/index.php/Home/Activity/editActivity",
			type: "POST",
			processData: "false",
			contentType: "application/x-www-form-urlencoded",
			data: a,
			success: function(getdata){
				var obj = eval ("(" + getdata + ")");
				if (obj.code==200){
					document.cookie = "token=" + token;
					info = obj.info;
					alert("修改成功");
					var p = window.location.search;
					var id = p.match(/\d+/g);
					id = id.toString();
					var src = "id="+id;
    				window.location.href="pitch3-2.html?"+src;//存储信息
				}
			}
		});
	});
	$(".subContentTable").on("mouseenter",".block",function(){
		if (ifconfirm==0){
			$(this).children(".subDate").append("<img class='subContentDetailImg1' src='img/edit.png'>","<img class='subContentDetailImg2' src='img/del.png'>")
		}
	});
	$(".subContentTable").on("mouseleave",".block",function(){
		$(".subContentDetailImg1,.subContentDetailImg2").remove();
	});
	$(".subContentTable").on("click",".subContentDetailImg2",function(e){
		var index = $(this).parents(".block").index(".block");
		var token = getToken();
		var auth = encrypt(token);
		var id =  subid[index];
		a = { "auth" : auth,"data":{"id":id} };
	    $.ajax({
			url: "http://192.168.1.120/bbter/index.php/Home/SubActivity/rmSa",
			type: "POST",
			processData: "false",
			contentType: "application/x-www-form-urlencoded",
			data: a,
			success: function(getdata){
				var obj = eval ("(" + getdata + ")");
				if (obj.code==200){
					document.cookie = "token=" + token;
					info = obj.info;
					alert("删除成功");
					$(".block").eq(index).remove();
				}
			}
		});
		e.stopPropagation();
	});
	$(".subContentTable").on("click",".subContentDetailImg1",function(e){
		var index = $(this).parents(".block").index(".block");
    	thisid = subid[index];
    	var src = "id="+thisid;
    	window.location.href="pitch3-3.2.html?"+src;
    	e.stopPropagation();
	});
	$(".subContentTable").on("click",".block",function(){
		var index = $(this).index(".block");
    	thisid = subid[index];
    	var src = "id="+thisid;
    	window.location.href="pitch3-4.html?"+src;
	});
	
	$(".add").click(function(){
		var p = window.location.search;
		var thisid = p.match(/\d+/g);
		thisid = thisid.toString();
		var src = "id="+thisid;
    	window.location.href="pitch3-3.1.html?"+src;
	});
	$(".submit").click(function(){
		var token = getToken();
		var auth = encrypt(token);
		var p = window.location.search;
		var id = p.match(/\d+/g);
		id = id.toString();
		a = { "auth" : auth,"data":{"id":id} };
		postdata = { data :JSON.stringify(a) };
	    $.ajax({
			url: "http://192.168.1.120/bbter/index.php/Home/SubActivity/submit",
			type: "POST",
			processData: "false",
			contentType: "application/x-www-form-urlencoded",
			data: a,
			success: function(getdata){
				var obj = eval ("(" + getdata + ")");
				if (obj.code==200){
					document.cookie = "token=" + token;
					info = obj.info;
					alert("发布成功");
					var p = window.location.search;
					var id = p.match(/\d+/g);
					id = id.toString();
					var src = "id="+id;
    				window.location.href="pitch3-2.html?"+src;//存储信息
				}
			}
		});
	});
});
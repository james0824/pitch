// JavaScript Document
$(document).ready(function(e){
	var token = getToken();
	var auth = encrypt(token);
	var p = window.location.search;
	pagenow = 0;
	var kind = "全部"
	var a = { "auth" : auth,"data" : {"kind":kind,"pagenow":pagenow,"eachpage":8} };
	var block = "<tr class='trHover block'><td class='name'></td><td class='position'></td><td class='pitchNumber'></td><td class='pitchStatus'></td></tr>"
    $.ajax({
		url: "http://192.168.1.120/bbter/index.php/Home/State/selectPitchState",
		type: "POST",
		processData: "false",
		contentType: "application/x-www-form-urlencoded",
		data: a,
		success: function(getdata){
			var obj = eval ("(" + getdata + ")");
			if (obj.code==200){
				token = obj.token;
				info = obj.info;
				pageall = obj.data.pageall;
				pagenow = 1;
				pageeach = obj.data.pageeach;
				scnumber = new Array();
				for (var i = 0; i < pageeach; i++) {
					$(".contentTable").append(block);
					$(".name").eq(i).text(obj.data.list[i].name);
					$(".position").eq(i).text(obj.data.list[i].position);
					$(".pitchNumber").eq(i).text(obj.data.list[i].pitchnumber);
					$(".pitchStatus").eq(i).text(obj.data.list[i].pitchstatus);
					scnumber[i] = obj.data.list[i].scnumber;
				};
				$(".pitchStatus").each(function(){
					if ($(this).text()=="未审核"){
						$(this).css("color","rgba(0, 0, 0, 0.3)");
					}
				});
				document.cookie = "token=" + token;
				$(".pageAll").text(pageall);
				$(".pageNow").text(pagenow);//存储信息
			}
		}
	});
	$(".selectStatus").click(function(e){
		$(".option").toggle(200);
		e.stopPropagation();
	});
	$(".option").click(function(e){
		kind = $(this).text();
		var token = getToken();
		var auth = encrypt(token);
		var a = { "auth" : auth,"data" : {"kind":kind,"pagenow":pagenow,"eachpage":8} };
		postdata = { data :JSON.stringify(a) };
	    $.ajax({
			url: "http://192.168.1.120/bbter/index.php/Home/State/selectPitchState",
			type: "POST",
			processData: "false",
			contentType: "application/x-www-form-urlencoded",
			data: a,
			success: function(getdata){
				var obj = eval ("(" + getdata + ")");
				if (obj.code==200){
					token = obj.token;
					info = obj.info;
					pageall = obj.data.pageall;
					pageeach = obj.data.pageeach;
					pagenow = 1;
					number = new Array();
					$(".block").remove();
					for (var i = 0; i < pageeach; i++) {
						$(".contentTable").append(block);
						$(".name").eq(i).text(obj.data.list[i].name);
						$(".position").eq(i).text(obj.data.list[i].position);
						$(".pitchNumber").eq(i).text(obj.data.list[i].pitchnumber);
						$(".pitchStatus").eq(i).text(obj.data.list[i].pitchstatus);
						scnumber[i] = obj.data.list[i].scnumber;
					};
					$(".pitchStatus").each(function(){
						if ($(this).text()=="未审核"){
							$(this).css("color","rgba(0, 0, 0, 0.3)");
						}
					});
					document.cookie = "token=" + token;
					$(".pageAll").text(pageall);
					$(".pageNow").text(pagenow);//存储信息
				}
			}
		});
		$(".option").each(function(){
			if($(this).css("display")=="block")
	        {
				$(this).toggle(500);
			}
		})
		e.stopPropagation();
	});//option请求
	$(".contentTable").on("click",".block",function(e){
		var x = event.x;
		var y = event.y;
		$(".choose").css("backgroundColor","rgba(106,144,182,1)");
		$(".submit,.thisClassStatus").css("display","block");
		$(".frontWindow").css({"display":"none","left":x+"px","top":y+"px"});
		$(".frontWindow").toggle(200);
		if($(this).children(".pitchStatus").text()=="已审核")
			$(".submit").css("display","none");
		else $(".thisClassStatus").css("display","none");
		var index = $(this).index(".block");
		thisscnumber = scnumber[index];
		var token = getToken();
		var auth = encrypt(token);
		a = { "auth" : auth,"data":{"scnumber":thisscnumber} };
	    $.ajax({
			url: "http://192.168.1.120/bbter/index.php/Home/UserData/getOtherPersonNoClassData",
			type: "POST",
			processData: "false",
			contentType: "application/x-www-form-urlencoded",
			data: a,
			success: function(getdata){
				var obj = eval ("(" + getdata + ")");
				if (obj.code==200){
					token = obj.token;
					info = obj.info;
					classstatus = obj.data.classstatus;
					noclass = obj.data.noclass;
					document.cookie = "token=" + token;
					$(".thisClassStatus .val").text(classstatus);
					var i = 0;
					var j = 0;
					$(".windowContent .choose").each(function() {
						if(noclass[i][j]==0){
							$(this).css("backgroundColor","rgba(106,144,182,1)");
						}
						else $(this).css("backgroundColor","rgba(255,255,255,0.76)")
						j++;
						if(j==7){
							j=0;
							i++;	
						}
				    });//填充信息并显示没课表
				}
			}
		});//填充他人无课表
	e.stopPropagation();
	});
	$(document).click(function(){
		$(".option").each(function(){
			if($(this).css("display")=="block")
	        {
				$(this).toggle(500);
			}
		});
		if($(".frontWindow").css("display")=="block")
	        {
				$(".frontWindow").toggle(500);
			}
    });
	$(".submit").click(function(){
		var token = getToken();
		var auth = encrypt(token);
		var index = $(this).index();
		index = index - 1;
		thisscnumber = scnumber[index];
		a = { "auth" : auth,"data":{"scnumber":thisscnumber} };
	    $.ajax({
			url: "http://192.168.1.120/bbter/index.php/Home/UserData/checkOtherPersonNoClassData",
			type: "POST",
			processData: "false",
			contentType: "application/x-www-form-urlencoded",
			data: a,
			success: function(getdata){
				var obj = eval ("(" + getdata + ")");
				if (obj.code==200){
					token = obj.token;
					alert("审核通过");
				}
			}
		});
	});//审核他人无课表
	/*$(".next").click(function(){
		var token = getToken();
		var auth = encrypt(token);
		var p = window.location.search;
		pagenow = pagenow + 1;
		var a = { "auth" : auth,"data" : {"kind":kind,"pagenow":pagenow,"eachpage":8} };
	    $.ajax({
			url: "",
			type: "POST",
			processData: "false",
			contentType: "application/x-www-form-urlencoded",
			data: a,
			success: function(getdata){
				var obj = eval ("(" + getdata + ")");
				if (obj.code==200){
					token = obj.token;
					info = obj.info;
					pageall = obj.data.pageall;
					pagenow = obj.data.pagenow;//填充信息
					pageeach = obj.data.pageeach;
					scnumber = new Array();
					$(".block").remove();
					for (var i = 0; i < pageeach; i++) {
						$(".contentTable").append(block);
						$(".name").eq(i).text(obj.data.list[i].name);
						$(".position").eq(i).text(obj.data.list[i].position);
						$(".pitchNumber").eq(i).text(obj.data.list[i].pitchnumber);
						$(".pitchStatus").eq(i).text(obj.data.list[i].pitchstatus);
						scnumber[i] = obj.data.list[i].scnumber;
					};
					$(".pitchStatus").each(function(){
						if ($(this).text()=="待审核"){
							$(this).css("color","rgba(0, 0, 0, 0.3)");
						}
					});
					document.cookie = "token=" + token;
					$(".pageAll").text(pageall);
					$(".pageNow").text(pagenow);//存储信息
				}
			}
		});
	});
	$(".last").click(function(){
		var token = getToken();
		var auth = encrypt(token);
		var p = window.location.search;
		pagenow = pagenow - 1;
		var a = { "auth" : auth,"data" : {"kind":kind,"pagenow":pagenow,"eachpage":8} };
	    $.ajax({
			url: "",
			type: "POST",
			processData: "false",
			contentType: "application/x-www-form-urlencoded",
			data: a,
			success: function(getdata){
				var obj = eval ("(" + getdata + ")");
				if (obj.code==200){
					token = obj.token;
					info = obj.info;
					pageall = obj.data.pageall;
					pagenow = obj.data.pagenow;//填充信息
					pageeach = obj.data.pageeach;
					scnumber = new Array();
					$(".block").remove();
					for (var i = 0; i < pageeach; i++) {
						$(".contentTable").append(block);
						$(".name").eq(i).text(obj.data.list[i].name);
						$(".position").eq(i).text(obj.data.list[i].position);
						$(".pitchNumber").eq(i).text(obj.data.list[i].pitchnumber);
						$(".pitchStatus").eq(i).text(obj.data.list[i].pitchstatus);
						scnumber[i] = obj.data.list[i].scnumber;
					};
					$(".pitchStatus").each(function(){
						if ($(this).text()=="待审核"){
							$(this).css("color","rgba(0, 0, 0, 0.3)");
						}
					});
					document.cookie = "token=" + token;
					$(".pageAll").text(pageall);
					$(".pageNow").text(pagenow);//存储信息
				}
			}
		});
	});*/
});

$(document).ready(function(e){
	var year;
	var month;
	var selectday;
	var daynumber;
	var now = new Date();
	$(".subDate .val").click(function(e){
		$(".day").text(" ");
		$(".day").css("display","table-cell");
		$(".windowTable").css("height","190px");
		var now = new Date();
 		year = now.getFullYear();
 		month = now.getMonth();
 		month = month + 1;
		$(".date").text(year + "年" + month + "月");
		var ifleap = year/4;
		ifleap = ifleap.toString();
		var a = ifleap.match(/\D/g);
		if(a=='.')
			ifleap = 0;
		now.setFullYear(year,month-1,1);
		var day = now.getDay();
		switch(month)
		{
			case 1 : {
				daynumber = 31;
			}break;
			case 2 : {
				if (ifleap == 0){
					daynumber = 28;
				}
				else daynumber = 29;
			}break;
			case 3 : {
				daynumber = 31;
			}break;
			case 4 : {
				daynumber = 30;
			}break;
			case 5 : {
				daynumber = 31;
			}break;
			case 6 : {
				daynumber = 30;
			}break;
			case 7 : {
				daynumber = 31;
			}break;
			case 8 : {
				daynumber = 31;
			}break;
			case 9 : {
				daynumber = 30;
			}break;
			case 10 : {
				daynumber = 31;
			}break;
			case 11 : {
				daynumber = 30;
			}break;
			case 12 : {
				daynumber = 31;
			}break;

		}
		var i = 0;
		var j = 1;
		$(".day").each(function(){
			if(i==day){
				if(j<daynumber+1){
					$(this).text(j);
					j++;
				}
			}
			else i++;
		});
		if ($(".day").eq(35).text()==" "){
			for(var k = 35; k < 42; k++){
				$(".day").eq(k).css("display","none");
				$(".windowTable").css("height","202px");
			}
		}
		if ($(".day").eq(28).text()==" "){
			for(var k = 28; k < 42; k++){
				$(".day").eq(k).css("display","none");
				$(".windowTable").css("height","224px");
			}
		}
		var x = event.x;
		var y = event.y;
		$(".frontWindow").css({"display":"none","left":x+"px","top":y+"px"});
		$(".frontWindow").toggle(200);
		e.stopPropagation();
	});
	$(".pointerLeft").click(function(e){
		$(".day").text(" ");
		$(".day").css("display","table-cell");
		$(".windowTable").css("height","190px");
 		year = now.getFullYear();
 		month = now.getMonth();
 		month = month + 1;
 		if (month==1){
 			year = year - 1;
 			month = 12;
 		}
 		else {
 			month = month -1;
 		}
		$(".date").text(year + "年" + month + "月");
		var ifleap = year/4;
		ifleap = ifleap.toString();
		var a = ifleap.match(/\D/g);
		if(a=='.')
			ifleap = 0;
		now.setFullYear(year,month-1,1);
		var day = now.getDay();
		switch(month)
		{
			case 1 : {
				daynumber = 31;
			}break;
			case 2 : {
				if (ifleap == 0){
					daynumber = 28;
				}
				else daynumber = 29;
			}break;
			case 3 : {
				daynumber = 31;
			}break;
			case 4 : {
				daynumber = 30;
			}break;
			case 5 : {
				daynumber = 31;
			}break;
			case 6 : {
				daynumber = 30;
			}break;
			case 7 : {
				daynumber = 31;
			}break;
			case 8 : {
				daynumber = 31;
			}break;
			case 9 : {
				daynumber = 30;
			}break;
			case 10 : {
				daynumber = 31;
			}break;
			case 11 : {
				daynumber = 30;
			}break;
			case 12 : {
				daynumber = 31;
			}break;

		}
		var i = 0;
		var j = 1;
		$(".day").each(function(){
			if(i==day){
				if(j<daynumber+1){
					$(this).text(j);
					j++;
				}
			}
			else i++;
		});
		if ($(".day").eq(35).text()==" "){
			for(var k = 35; k < 42; k++){
				$(".day").eq(k).css("display","none");
				$(".windowTable").css("height","202px");
			}
		}
		if ($(".day").eq(28).text()==" "){
			for(var k = 28; k < 42; k++){
				$(".day").eq(k).css("display","none");
				$(".windowTable").css("height","224px");
			}
		}
		e.stopPropagation();
	});
	$(".pointerRight").click(function(e){
		$(".day").text(" ");
		$(".day").css("display","table-cell");
		$(".windowTable").css("height","190px");
 		year = now.getFullYear();
 		month = now.getMonth();
 		month = month + 1;
 		if (month==12){
 			year = year + 1;
 			month = 1;
 		}
 		else {
 			month = month + 1;
 		}
		$(".date").text(year + "年" + month + "月");
		var ifleap = year/4;
		ifleap = ifleap.toString();
		var a = ifleap.match(/\D/g);
		if(a=='.')
			ifleap = 0;
		now.setFullYear(year,month-1,1);
		var day = now.getDay();
		switch(month)
		{
			case 1 : {
				daynumber = 31;
			}break;
			case 2 : {
				if (ifleap == 0){
					daynumber = 28;
				}
				else daynumber = 29;
			}break;
			case 3 : {
				daynumber = 31;
			}break;
			case 4 : {
				daynumber = 30;
			}break;
			case 5 : {
				daynumber = 31;
			}break;
			case 6 : {
				daynumber = 30;
			}break;
			case 7 : {
				daynumber = 31;
			}break;
			case 8 : {
				daynumber = 31;
			}break;
			case 9 : {
				daynumber = 30;
			}break;
			case 10 : {
				daynumber = 31;
			}break;
			case 11 : {
				daynumber = 30;
			}break;
			case 12 : {
				daynumber = 31;
			}break;

		}
		var i = 0;
		var j = 1;
		$(".day").each(function(){
			if(i==day){
				if(j<daynumber+1){
					$(this).text(j);
					j++;
				}
			}
			else i++;
		});
		if ($(".day").eq(35).text()==" "){
			for(var k = 35; k < 42; k++){
				$(".day").eq(k).css("display","none");
				$(".windowTable").css("height","202px");
			}
		}
		if ($(".day").eq(28).text()==" "){
			for(var k = 28; k < 42; k++){
				$(".day").eq(k).css("display","none");
				$(".windowTable").css("height","224px");
			}
		}
		e.stopPropagation();
	});
	$(".day").click(function(e){
		var now = new Date();
		selectday = $(this).text();
		if(selectday==" ")
			return false;
		var select;
		switch (selectday)
		{
			case "1" : {
				select = 1;
			} break;
			case "2" : {
				select = 2;
			} break;
			case "3" : {
				select = 3;
			} break;
			case "4" : {
				select = 4;
			} break;
			case "5" : {
				select = 5;
			} break;
			case "6" : {
				select = 6;
			} break;
			case "7" : {
				select = 7;
			} break;
			case "8" : {
				select = 8;
			} break;
			case "9" : {
				select = 9;
			} break;
			case "10" : {
				select = 10;
			} break;
			case "11" : {
				select = 11;
			} break;
			case "12" : {
				select = 12;
			} break;
			case "13" : {
				select = 13;
			} break;
			case "14" : {
				select = 14;
			} break;
			case "15" : {
				select = 15;
			} break;
			case "16" : {
				select = 16;
			} break;
			case "17" : {
				select = 17;
			} break;
			case "18" : {
				select = 18;
			} break;
			case "19" : {
				select = 19;
			} break;
			case "20" : {
				select = 20;
			} break;
			case "21" : {
				select = 21;
			} break;
			case "22" : {
				select = 22;
			} break;
			case "23" : {
				select = 23;
			} break;
			case "24" : {
				select = 24;
			} break;
			case "25" : {
				select = 25;
			} break;
			case "26" : {
				select = 26;
			} break;
			case "27" : {
				select = 27;
			} break;
			case "28" : {
				select = 28;
			} break;
			case "29" : {
				select = 29;
			} break;
			case "30" : {
				select = 30;
			} break;
			case "31" : {
				select = 31;
			} break;
		}
		now.setFullYear(year,month-1,select);
		var day = now.getDay();
		var dayOfWeek;
		switch (day)
		{
			case 0 : {
				dayOfWeek = "周日";
			} break;
			case 1 : {
				dayOfWeek = "周一";
			}break;
			case 2 : {
				dayOfWeek = "周二";
			}break;
			case 3 : {
				dayOfWeek = "周三";
			}break;
			case 4 : {
				dayOfWeek = "周四";
			}break;
			case 5 : {
				dayOfWeek = "周五";
			}break;
			case 6 : {
				dayOfWeek = "周六";
			}break;
		}
		$(".day").css({"background-color":"#ffffff","color":"black"});
		
		$(this).css({"background-color":"#6487ab","color":"#ffffff"});
		$(".subDate .val").text(year+"."+month+"."+selectday+" "+dayOfWeek);
		e.stopPropagation();
	});
	$(document).click(function(){
		$(".option").each(function(){
			if($(this).css("display")=="block")
	        {
				$(this).slideToggle(500);
			}
		});
		if($(".frontWindow").css("display")=="block")
	        {
				$(".frontWindow").toggle(200);
			}
	});
});

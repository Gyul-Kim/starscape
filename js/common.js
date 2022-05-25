"use strict";
document.write(
"<!--[if lte IE 9]>"
+ "<script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/jquery-ajaxtransport-xdomainrequest/1.0.3/jquery.xdomainrequest.min.js'></script>"
+ "<script type='text/javascript'>alert('브라우저를 최신 버전으로 업그레이드하세요.'); window.open('http://outdatedbrowser.com/ko','_blank');</script>"
+ "<![endif]-->"
);

$(function(){

/*---------------------------------------------------------------*/	
//variable
let video = document.getElementById("MyVideo");
let path = (location.href.substr(location.href.lastIndexOf("/") + 1)).split(".")[0]; 	//path
let split = (location.href.substr(location.href.lastIndexOf("/") + 1)).split("&idx")[1]; //split
let detailPath = ((location.href.substr(location.href.lastIndexOf("=") + 1)).slice(0, 2) - 1 + 1) - 1; //detail Path
let scrollPosition = document.documentElement.scrollTop || 0;

/*---------------------------------------------------------------*/	
//header - SCROLL
document.addEventListener('scroll', function() {
	let documentY = document.documentElement.scrollTop;
	let direction = documentY - scrollPosition >= 0 ? 1 : -1;

	if(direction == -1){
		$("header hgroup > div:nth-of-type(2)").css({"transform":"translateY(0)"});
		$("header hgroup p").css({"color":"#000","text-shadow":"none"});
	} else {
		$("header hgroup > div:nth-of-type(2)").css({"transform":"translateY(-81px)"});
		$("header hgroup p").css({"color":"#fff","text-shadow":"0px 2px 2px rgb(107 107 107 / 80%)"});
	} 
	
	if(documentY <= 0){
		$("header hgroup > div:nth-of-type(2)").css({"transform":"translateY(-81px)"});
		$("header hgroup > div:nth-of-type(1)").css({"transform":"translateY(0)","opacity":"1"});
		$("header hgroup p").css({"color":"#fff","text-shadow":"0px 2px 2px rgb(107 107 107 / 80%)"});
	}else{
		$("header hgroup > div:nth-of-type(1)").css({"transform":"translateY(-81px)","opacity":"0"});
	}
	scrollPosition = documentY; // Update scrollY
});

//header - GNB
var GnbNavSize = $(".gnb > div").length;
for(var k=0; k < GnbNavSize; k++){
	var GnbNavHeight = $(".gnb > div").eq(k).find(".nv > div").height();
	$(".gnb > div").eq(k).find(".nv > div").css("margin-top", GnbNavHeight / -2);
}

$(window).on("resize",function(){
	var GnbNavSize = $(".gnb > div").length;
	for(var k=0; k < GnbNavSize; k++){
		var GnbNavHeight = $(".gnb > div").eq(k).find(".nv > div").height();
		$(".gnb > div").eq(k).find(".nv > div").css("margin-top", GnbNavHeight / -2);
	}
});

$(".gnv .menu ul li a").on("click",function(){
	var ThisNum = $(this).parent("li").index();
	
	$(".gnv .menu ul li").removeClass("on"); $(this).parent("li").addClass("on");
	$(".gnb > div").css("z-index",0); $(".gnb > div").eq(ThisNum).css("z-index",10);

	$(".gnb > div .nv > div").css({"transition":"0.6s","transform":"translateY(10%)","opacity":"0"});
	$(".gnb > div").eq(ThisNum).find(".nv > div").css({"transition":"0.6s","transform":"translateY(0)","opacity":"1"});

	$(".gnb > div").eq(ThisNum).stop(true,false).animate({"opacity":"1"},500,function(){
		$(".gnb > div").css("opacity","0"); $(".gnb > div").eq(ThisNum).css("opacity","1");
	});

	return false;
});

//open
$("hgroup .menu a").on("click",function(){
	$("header nav").css("top","0");

	$(".gnv .menu ul li").removeClass("on"); $(".gnv .menu ul li").eq(0).addClass("on");
	$(".gnb > div").css("z-index",0); $(".gnb > div").eq(0).css({"opacity":"1","z-index":10});

	$(".gnb > div .nv > div").css({"transition":"0.6s","transform":"translateY(10%)","opacity":"0"});
	$(".gnb > div").eq(0).find(".nv > div").css({"transition":"0.6s","transform":"translateY(0)","opacity":"1"});

	$(".gnb > div").eq(0).stop(true,false).animate({"opacity":"1"},500,function(){
		$(".gnb > div").css("opacity","0"); $(".gnb > div").eq(0).css("opacity","1");
	});

	$("nav > div.gnv > div.menu > div").css("opacity","1");
	$("nav > div.gnb > div > div.nv").css("opacity","1");
	
	return false;
});

//close
$(".gnb > .close").on("click",function(){
	$("header nav").css("top","-100%");

	$("nav > div.gnv > div.menu > div").css("opacity","0");
	$("nav > div.gnb > div > div.nv").css("opacity","0");

	return false;
});

$("header .sns > a").on("click",function(){
	if($(this).is(".on") === true){
		$("header .sns > a").removeClass("on");
		$(this).find("img").attr("src","images/sns_btn.jpg");
		$(this).next("ul").slideUp(300);
	}else{
		$("header .sns > a").removeClass("on");
		$(this).addClass("on");
		$(this).find("img").attr("src","images/sns_btn_off.jpg");
		$(this).next("ul").stop(true,false).slideDown(300);
	}
	return false;
});

$(window).on("scroll",function(){
	$("header .sns > a").removeClass("on");
	$("header .sns > a img").attr("src","images/sns_btn.jpg");
	$("header .sns > ul").slideUp(300);
});


/*---------------------------------------------------------------*/	
//body
switch(path){
	//index Page
	case '' :
	case 'index' :
		
		//Swipers
		for(var i=0; i < img[0]; i++){
			$(".Swipers .swiper-image").append(
				'<div class="swiper-slide">' + 
					'<div style="background-image:url('+ url +'/main/'+ (i + 1) +'.jpg)"></div>' + 
				'</div>'
			);
		} Swipers(".Swipers", "auto", true, 10, false); 

		// videoControl(video);

		$(window).on("scroll",function(){
			var height = $(window).height();
			var ThisTop = $(this).scrollTop();
			var Slides = $("#Slides .swiper-view").offset().top - height;
			
			var RoomTop = $("#Rooms").offset().top - height;
			var RoomEnd = $("#Rooms .image .InBox div").eq(5).offset().top;

			var room_a = $("#Rooms").offset().top - height / 2;
			var room_b = $("#Rooms .image .InBox div").eq(1).offset().top - height / 1.5;
			var room_c = $("#Rooms .image .InBox div").eq(2).offset().top - height / 1.5;
			var room_d = $("#Rooms .image .InBox div").eq(3).offset().top - height / 1.5;
			var room_e = $("#Rooms .image .InBox div").eq(4).offset().top - height / 1.5;
			var room_f = $("#Rooms .image .InBox div").eq(5).offset().top - height / 1.5;
			
			var Bottoms = $("#Bottoms").offset().top;

			$("#Visuals .title").css({"transform":"translateY("+ (ThisTop / 3.5) +"px)"});	
			$("#Visuals .reservation").css({"transform":"translateY("+ (ThisTop / -5.5) +"px)"});	

			$("#Vimeos .InBox").css({"transform":"translateY("+ (ThisTop / -3.5) +"px)"});

			//Slides
			if(ThisTop > Slides){
				$("#Slides .ttl,#Slides .swiper-view").css({"transform": "translateY(0)","opacity":"1"});
			}else{
				$("#Slides .ttl").css({"transform": "translateY(-12.5%)","opacity":"0"});
				$("#Slides .swiper-view").css({"transform": "translateY(12.5%)","opacity":"0"});
			}

			if(ThisTop > RoomTop){
				$("#Rooms .title .InBox").css({"transform":"translateX(0)","opacity":"1"});
				$("#Rooms .image").css({"transform":"translateX(0)","opacity":"1"});
			}else{
				$("#Rooms .title .InBox").css({"transform":"translateX(-20%)","opacity":"0"});
				$("#Rooms .image").css({"transform":"translateX(20%)","opacity":"0"});
			}	
	
			if(ThisTop > room_a){
				$("#Rooms .title").css({
					// 'transform': 'translateY('+ (ThisTop - room_a) +'px)',
					'position':"fixed",
					'top':"50%",
					'left':"10%",
					'margin-top':"-105.5px",
					'z-index':"100"
				});
				Rooms_begin(0);

			}else{
				$("#Rooms .title").css({
					//'transform': 'translateY(0px)'
					'position':"absolute",
					'top':"0",
					'left':"0",
					'margin-top':"0",
					'z-index':"100"

				});
				$("#Rooms .image .InBox div a img").css({'transform':'scale(1.075)'});

				$("#Rooms .title .InBox > div div.txt > div").css({'transform': 'translateY(0px)'});
			}

			if(ThisTop > room_b && ThisTop < room_c){ Rooms_begin(1); Rooms_ttl(150) }
			else{ Rooms_end(1); Rooms_ttl(0) } 

			if(ThisTop > room_c && ThisTop < room_d){ Rooms_begin(2); Rooms_ttl(300) }
			else{ Rooms_end(2) }
			
			if(ThisTop > room_d && ThisTop < room_e){ Rooms_begin(3); Rooms_ttl(450) }
			else{ Rooms_end(3) }
			
			if(ThisTop > room_e && ThisTop < room_f) { Rooms_begin(4); Rooms_ttl(600) }
			else{ Rooms_end(4) }
			
			if(ThisTop > room_f) { Rooms_begin(5); Rooms_ttl(750) }
			else{ Rooms_end(5) }

			if(ThisTop > RoomEnd){
				$("#Rooms .title .InBox > div").css({'transform': 'translateY(-'+ (ThisTop - RoomEnd) / 2 +'px)'});
			}else{
				$("#Rooms .title .InBox > div").css({'transform': 'translateY(0)'});
			}

			//Bottoms
			if( ThisTop > (Bottoms - height) ){
				$("#Bottoms .bg").css({"transform": "translateY(" + ((ThisTop - Bottoms) / 2.5) + "px)"});
				$("#Bottoms .op").css({"opacity": ( (ThisTop - Bottoms) / 700 ) });
			}

			if( ThisTop > Bottoms && ThisTop < ( Bottoms + (height / 2) ) ){
				$("#Bottoms .bg div").css({"transform": "scale("+ ( (ThisTop - Bottoms) / 2800 + 1 ) +")"});
			}

		});		

	break;	

	//starscape Page
	case 'starscape' :

		for(var i=0; i < img[1]; i++){
			$(".Swipers .swiper-image").append(
				'<div class="swiper-slide">' +
					'<div style="background-image:url('+ url +'/gallery/'+ (i + 1) +'.jpg)"></div>' +
				'</div>'
			);
		} 
		Swipers(".Swipers", "auto", true, 0, false); 
		
		$(window).on("scroll",function(){
			var height = $(window).height();
			var ThisTop = $(this).scrollTop();
			var Tops = $("#Tops").offset().top;
			var Slides = $(".swiper-view").offset().top;
			var Designs = $("#Designs").offset().top;
			var Designs_cont = $("#Designs .cont").offset().top;
			var Locations = $("#Bottoms #Locations").offset().top;
			var Bottoms = $("#Bottoms .InBox").offset().top;

			//Tops
			if( ThisTop > (Tops - height) ){
				$("#Tops .bg").css({"transform": "translateY(" + ((ThisTop - Tops) / 2.5) + "px)"});
				$("#Tops .op").css({"opacity": ( (ThisTop - Tops) / 700 ) });
			}

			if( ThisTop > Tops && ThisTop < ( Tops + (height / 2) ) ){
				$("#Tops .bg div").css({"transform": "scale("+ ( (ThisTop - Tops) / 2800 + 1 ) +")"});
			}
			//Tops - ttl
			$("#Tops .ttl").css({"transform":"translateY("+ ThisTop / 2 +"px)"});
			
			$("#Vimeos .InBox").css({"transform":"translateY("+ (ThisTop / -3.5) +"px)"});

			if( ThisTop > (Slides - height) ){
				$("#Gallerys .ttl").css({"transform":"translateX(0)","opacity":"1"});
				$("#Gallerys .swiper-view").css({"transform":"translateX(0)","opacity":"1"});
			}else{
				$("#Gallerys .ttl").css({"transform":"translateX(-12.5%)","opacity":"0"});
				$("#Gallerys .swiper-view").css({"transform":"translateX(12.5%)","opacity":"0"});	
			}

			if( ThisTop > (Designs - height) ){
				$("#Designs .ttl").css({"transform":"translateX(0)","opacity":"1"});
			}else{
				$("#Designs .ttl").css({"transform":"translateX(-12.5%)","opacity":"0"});
			}

			if( ThisTop > (Designs_cont - height) ){
				$("#Designs .cont div:nth-of-type(1)").css({"transform":"translateX(0)","opacity":"1"});
				$("#Designs .cont div:nth-of-type(2)").css({"transform":"translateX(0)","opacity":"1"});

			}else{
				$("#Designs .cont div:nth-of-type(1)").css({"transform":"translateX(-12.5%)","opacity":"0"});
				$("#Designs .cont div:nth-of-type(2)").css({"transform":"translateX(12.5%)","opacity":"0"});
			}

			//Bottoms
			if( ThisTop > (Locations - height) ){
				$("#Locations").css({"transform": "translateY(" + ((ThisTop - Locations) / -4.5) + "px)"});
			}

			if( ThisTop > (Bottoms - height) ){
				$("#Bottoms .bg").css({"transform": "translateY(" + ((ThisTop - Bottoms) / 2.5) + "px)"});
				$("#Bottoms .op").css({"opacity": ( (ThisTop - Bottoms) / 700 ) });
			}

			if( ThisTop > Bottoms && ThisTop < ( Bottoms + (height / 2) ) ){
				$("#Bottoms .bg div").css({"transform": "scale("+ ( (ThisTop - Bottoms) / 2800 + 1 ) +")"});
			}


		});

		$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ account +'/4',//사업자 정보
		function(data){
			
			var NEW_USER_ADDR = data.result.NEW_USER_ADDR;	//도로명 주소
			var USER_ADDR = data.result.USER_ADDR;			//지번 주소
			var USER_TEL1 = data.result.USER_TEL1;			//전화번호 1

			$("#Locations p").append(
				'<strong>'+ NEW_USER_ADDR +' <br />('+ USER_ADDR +')<br /></strong>' +
				'<span>TEL. '+ USER_TEL1 +'</span>'
			);

		});

		//Direct Page
		$(".gb01 .nv li:nth-of-type(2) a,.gb01 .nv li:nth-of-type(3) a").on("click",function(){
			$("header nav").css("top","-100%");

			$("nav > div.gnv > div.menu > div").css("opacity","0");
			$("nav > div.gnb > div > div.nv").css("opacity","0");

		});	

	break;	

	//rooms_pv Page
	case 'rooms_pv' :	

		$(window).on("scroll",function(){
			var height = $(window).height();
			var ThisTop = $(this).scrollTop();
			var Tops = $("#Tops").offset().top;
			var a = $("#Lists > div").eq(0).offset().top - $(window).height();
			var b = $("#Lists > div").eq(1).offset().top - $(window).height();
			var c = $("#Lists > div").eq(2).offset().top - $(window).height();

			//Tops
			if( ThisTop > (Tops - height) ){
				$("#Tops .bg").css({"transform": "translateY(" + ((ThisTop - Tops) / 2.5) + "px)"});
			}	
			$("#Tops .ttl").css({"transform":"translateY("+ ThisTop / 2 +"px)"});

			if( ThisTop > a ){
				$("#rooms_pv #Lists > div").eq(0).find("> div.txt").css({"transform":"translateY(-"+ (ThisTop - a) / 4.5 +"px)"});
			}else{
				$("#rooms_pv #Lists > div").eq(0).find("> div.txt").css({"transform":"translateY(0px)"});
			}

			if( ThisTop > b ){
				$("#rooms_pv #Lists > div").eq(1).find("> div.txt").css({"transform":"translateY(-"+ (ThisTop - b) / 4.5 +"px)"});
			}else{
				$("#rooms_pv #Lists > div").eq(1).find("> div.txt").css({"transform":"translateY(0px)"});
			}

			if( ThisTop > c ){
				$("#rooms_pv #Lists > div").eq(2).find("> div.txt").css({"transform":"translateY(-"+ (ThisTop - c) / 4.5 +"px)"});
			}else{
				$("#rooms_pv #Lists > div").eq(2).find("> div.txt").css({"transform":"translateY(0px)"});
			}

		});	


	break;		

	//rooms Page
	case 'rooms' :
		$("body").addClass("room_" + numbering(detailPath));
		$(".hd01 h1 img").attr("src","images/logo_b.png");

		$(window).on("scroll",function(){
			var ThisTop = $(this).scrollTop();

			//Tops
			if( ThisTop > 0 ){
				$("#Tops .ttl h2").css({"transform": "translateY(" + (ThisTop / 2.5) + "px)"});
				$("#Tops .list ul").css({"transform": "translateY(0)","opacity":"1"});

			}else{
				$("#Tops .list ul").css({"transform": "translateY(15%)","opacity":"0.5"});
			}	
			

		});	

		for(var i=0; i < img[2][0][0]; i++){
			$("#Contents #Swipers01 .swiper-image").append(
				'<div class="swiper-slide">' +
					'<div style="background-image:url('+ url +'/room/4/c101/'+ (i + 1) +'.jpg)"></div>' +
				'</div>'
			);
		} 

		for(var i=0; i < img[2][0][1]; i++){
			$("#Contents #Swipers02 .swiper-image").append(
				'<div class="swiper-slide">' +
					'<div style="background-image:url('+ url +'/room/4/c102/'+ (i + 1) +'.jpg)"></div>' +
				'</div>'
			);
		}


		Swipers("#Contents", "auto", true, 0, false); 

		$("#rooms #Contents .Swipers .rvCheck > a").on("click",function(){
			$(this).next(".calendar").css("height","371px");
			return false;
		});

		$("#rooms #Contents .Swipers .calendar").mouseleave(function(){
			$(this).css("height","0");
		});

	break;

	//rooms Page
	case 'rooms_02' :
		$("body").addClass("room_" + numbering(detailPath));
		$(".hd01 h1 img").attr("src","images/logo_b.png");

		$(window).on("scroll",function(){
			var ThisTop = $(this).scrollTop();

			//Tops
			if( ThisTop > 0 ){
				$("#Tops .ttl h2").css({"transform": "translateY(" + (ThisTop / 2.5) + "px)"});
				$("#Tops .list ul").css({"transform": "translateY(0)","opacity":"1"});

			}else{
				$("#Tops .list ul").css({"transform": "translateY(15%)","opacity":"0.5"});
			}	

		});	


		for(var i=0; i < img[2][1][0]; i++){
			$("#Contents #Swipers01 .swiper-image").append(
				'<div class="swiper-slide">' +
					'<div style="background-image:url('+ url +'/room/5/a101/'+ (i + 1) +'.jpg)"></div>' +
				'</div>'
			);
		} 

		for(var i=0; i < img[2][1][1]; i++){
			$("#Contents #Swipers02 .swiper-image").append(
				'<div class="swiper-slide">' +
					'<div style="background-image:url('+ url +'/room/5/a201/'+ (i + 1) +'.jpg)"></div>' +
				'</div>'
			);
		}
		Swipers("#Contents", "auto", true, 0, false); 

		$("#rooms #Contents .Swipers .rvCheck > a").on("click",function(){
			$(this).next(".calendar").css("height","371px");
			return false;
		});

		$("#rooms #Contents .Swipers .calendar").mouseleave(function(){
			$(this).css("height","0");
		});

	break;

	//rooms Page
	case 'rooms_03' :
		$("body").addClass("room_" + numbering(detailPath));
		$(".hd01 h1 img").attr("src","images/logo_b.png");

		$(window).on("scroll",function(){
			var ThisTop = $(this).scrollTop();

			//Tops
			if( ThisTop > 0 ){
				$("#Tops .ttl h2").css({"transform": "translateY(" + (ThisTop / 2.5) + "px)"});
				$("#Tops .list ul").css({"transform": "translateY(0)","opacity":"1"});

			}else{
				$("#Tops .list ul").css({"transform": "translateY(15%)","opacity":"0.5"});
			}	

		});	


		for(var i=0; i < img[2][2][0]; i++){
			$("#Contents #Swipers01 .swiper-image").append(
				'<div class="swiper-slide">' +
					'<div style="background-image:url('+ url +'/room/5/a101/'+ (i + 1) +'.jpg)"></div>' +
				'</div>'
			);
		} 

		Swipers("#Contents", "auto", true, 0, false); 

		$("#rooms #Contents .Swipers .rvCheck > a").on("click",function(){
			$(this).next(".calendar").css("height","371px");
			return false;
		});

		$("#rooms #Contents .Swipers .calendar").mouseleave(function(){
			$(this).css("height","0");
		});

	break;

	//facility_pv Page
	case 'facility_pv' :	

		$(window).on("scroll",function(){
			var height = $(window).height();
			var ThisTop = $(this).scrollTop();
			var Tops = $("#Tops").offset().top;
			var a = $("#Lists > div").eq(0).offset().top - $(window).height();
			var b = $("#Lists > div").eq(1).offset().top - $(window).height();

			//Tops
			if( ThisTop > (Tops - height) ){
				$("#Tops .bg").css({"transform": "translateY(" + ((ThisTop - Tops) / 2.5) + "px)"});
			}	
			$("#Tops .ttl").css({"transform":"translateY("+ ThisTop / 2 +"px)"});

			if( ThisTop > a ){
				$("#facility_pv #Lists > div").eq(0).find("> div.txt").css({"transform":"translateY(-"+ (ThisTop - a) / 4.5 +"px)"});
			}else{
				$("#facility_pv #Lists > div").eq(0).find("> div.txt").css({"transform":"translateY(0px)"});
			}

			if( ThisTop > b ){
				$("#facility_pv #Lists > div").eq(1).find("> div.txt").css({"transform":"translateY(-"+ (ThisTop - b) / 4.5 +"px)"});
			}else{
				$("#facility_pv #Lists > div").eq(1).find("> div.txt").css({"transform":"translateY(0px)"});
			}


		});	


	break;		


	//facility Page
	case 'facility' :	
		$("body").addClass("facility_" + numbering(detailPath));
		$(".hd01 h1 img").attr("src","images/logo_b.png");

		$(window).on("scroll",function(){
			var ThisTop = $(this).scrollTop();

			//Tops
			if( ThisTop > 0 ){
				$("#Tops .ttl h2").css({"transform": "translateY(" + (ThisTop / 2.5) + "px)"});
				$("#Tops .list ul").css({"transform": "translateY(0)","opacity":"1"});

			}else{
				$("#Tops .list ul").css({"transform": "translateY(15%)","opacity":"0.5"});
			}	
			

		});	


		for(var i=0; i < img[3][0]; i++){
			$("#Contents .swiper-image").append(
				'<div class="swiper-slide">' +
					'<div style="background-image:url('+ url +'/special/pool/'+ (i + 1) +'.jpg)"></div>' +
				'</div>'
			);
		} 
		Swipers("#Contents", "auto", true, 0, false); 



	break;	

	//facility Page
	case 'facility_02' :	
		$("body").addClass("facility_" + numbering(detailPath));
		$(".hd01 h1 img").attr("src","images/logo_b.png");

		$(window).on("scroll",function(){
			var ThisTop = $(this).scrollTop();

			//Tops
			if( ThisTop > 0 ){
				$("#Tops .ttl h2").css({"transform": "translateY(" + (ThisTop / 2.5) + "px)"});
				$("#Tops .list ul").css({"transform": "translateY(0)","opacity":"1"});

			}else{
				$("#Tops .list ul").css({"transform": "translateY(15%)","opacity":"0.5"});
			}	
			

		});	


		for(var i=0; i < img[3][0]; i++){
			$("#Contents .swiper-image").append(
				'<div class="swiper-slide">' +
					'<div style="background-image:url('+ url +'/special/cafe/'+ (i + 1) +'.jpg)"></div>' +
				'</div>'
			);
		} 
		Swipers("#Contents", "auto", true, 0, false); 



	break;	

	//reserve Page
	case 'reserve' :
		
		$(window).on("scroll",function(){
			var ThisTop = $(this).scrollTop();

			$("#Banners .title").css({"transform": "translateY(" + (ThisTop / 2.5) + "px)"});
			$("#Banners .reservation").css({"transform":"translateY("+ (ThisTop / 6.5) +"px)"});	

		});	

		$(".contents .snb li a").on("click",function(){ 
			var nb = $(this).parent("li").index();
			$(".contents .snb > li").removeClass("active");
			$(".contents .snb > li").eq(nb).addClass("active");

			if(nb == 0){
				$("#Banners h2 img").attr("src","images/tt_rv_rv.png");
				$(".frame").hide(); $(".frame_01").show();
			}else if(nb == 1){
				$("#Banners h2 img").attr("src","images/tt_rv_gd.png");
				$(".frame").hide(); $(".frame_02").show();
			} return false;
		}); reserInfo(account);

	break;
	
	

	//None Page
	default : location.href = "index.html";
	break;
}


/*---------------------------------------------------------------*/
//footer
	$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ account +'/4',	//User Info
	function(data){
		const USER_TEL1 = data.result.USER_TEL1;				//전화번호 1
		const USER_TEL2 = data.result.USER_TEL2;				//전화번호 2
		const NEW_USER_ADDR = data.result.NEW_USER_ADDR;		//도로명주소
		const USER_ADDR = data.result.USER_ADDR;				//지번주소
		const BUSI_NM = data.result.BUSI_NM;					//상호명
		const USER_ACCO = data.result.USER_ACCO;				//계좌번호
		const COMM_SALE_NO = data.result.COMM_SALE_NO;			//통신판매업번호

		$("footer").append(
			'<div class="InBox">' +
				'<div>' +
					'<h5><a href="index.html"><img src="images/ft_logo.png" width="205" height="40" alt="" /></a></h5>' +
				'</div>' +
				'<div>' +
					'<ul>' +
						'<li>회사명 : '+ BUSI_NM +'</li>' +
						'<li>주소 : '+ NEW_USER_ADDR +'</li>' +
						'<li>대표이사 : <span class="BUSI_PRE_NM"></span></li>' +
						'<li>전화 : '+ USER_TEL1 +'</li>' +
						'<li>사업자등록번호 : <span class="BUSI_NO"></span></li>' +
						'<li>통신판매업신고 : '+ COMM_SALE_NO +'</li>' +
					'</ul>' +
				'</div>' +
				'<div>' +
					'<ul>' +
						'<li><a href="#" target="_blank" class="sns_01"><img src="images/sns_01.png" width="35" height="35" alt="" /></a></li>' +
						'<li><a href="#" target="_blank" class="sns_02"><img src="images/sns_02.png" width="35" height="35" alt="" /></a></li>' +
						'<li><a href="#" target="_blank" class="sns_03"><img src="images/sns_03.png" width="35" height="35" alt="" /></a></li>' +
						'<li><a href="#" target="_blank" class="sns_05"><img src="images/sns_04.png" width="35" height="35" alt="" /></a></li>' +
					'</ul>' +
				'</div>' +
			'</div>' +
			'<p>Copyright © starscape All rights reserved.</p>'
		);

		//사업자 정보	
		$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ account +'/11', //User Info
		function(data){
			let BUSI_PRE_NM = new Array(); 						//대표자
			let BUSI_NO = new Array();							//사업자번호
			$.each(data.result,function(key,val){
				BUSI_PRE_NM.push(val["BUSI_PRE_NM"]); BUSI_NO.push(val["BUSI_NO"]);
				$(".BUSI_PRE_NM").text(BUSI_PRE_NM); $(".BUSI_NO").text(BUSI_NO);
			});
		});

		//sns - href
		$(".sns_01").attr("href",INTRAGRAM); 
		$(".sns_02").attr("href",FACEBOOK); 
		$(".sns_03").attr("href",NV_BLOG);
		$(".sns_04").attr("href",NV_CAFE);
		$(".sns_05").attr("href",KAKAO);

		if(INTRAGRAM == "#"){$(".sns_01").on('click',function(){alert('준비중입니다.');return false;});}
		if(FACEBOOK == "#"){$(".sns_02").on('click',function(){alert('준비중입니다.');return false;});}
		if(NV_BLOG == "#"){$(".sns_03").on('click',function(){alert('준비중입니다.');return false;});}
		if(NV_CAFE == "#"){$(".sns_04").on('click',function(){alert('준비중입니다.');return false;});}
		if(KAKAO == "#"){$(".sns_05").on('click',function(){alert('준비중입니다.');return false;});}
	});
});	

/*------------------------------------------------------------------------------------------------*/
//function - numbering
function numbering(n) { // 이미지 넘버링 10 보다 작을때
	var num = ''; var n = n + 1; var n = n.toString();
	if (n.length < 2){for (var i = 0; i < 2 - n.length; i++){num += '0';}}
	return num + n;
}
//function - swipers
function Swipers(value, view, center, Between, boolean){
	var swiper = new Swiper(value + ' .swiper', {
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		pagination: '.swiper-pagination',
		slidesPerView: view,
		centeredSlides: center,
		spaceBetween: Between,
		loop: boolean
	});
}
//function - video
function videoControl(control){
	videoScale(control);
	$(window).on("resize",function(){ videoScale(control); });
	$(window).on("scroll",function(){
		var thisTop = $(this).scrollTop();
		var stopTop = $(".section").eq(0).height() - 100;
		var player = new Vimeo.Player(control);
		if(thisTop > stopTop) player.pause();
		else player.play();
	});
}
//function - videocontrol
function videoScale(control){
	control.style.width = Math.round($(window).height() / 9 * 16) + "px";
	control.style.height = Math.round($(window).width() / 16 * 9) + "px";
}
//function - Rooms - begin - end
function Rooms_begin(i){
	$("#Rooms .image .InBox div").eq(i).find("a img").css({'transform':'scale(1)'});
}
function Rooms_end(i){
	$("#Rooms .image .InBox div").eq(i).find("a img").css({'transform':'scale(1.075)'});
}
function Rooms_ttl(i){
	$("#Rooms .title .InBox > div div.txt > div").css({
		'transform' : 'translateY(-'+ i +'px)',
		'transition' : "0.8s"
	});
}
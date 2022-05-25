//userAgent Check
const dataUser = document.documentElement;
dataUser.className = dataUser.className.replace('no-js','js');
dataUser.setAttribute("data-useragent",  navigator.userAgent);
dataUser.setAttribute("data-platform", navigator.platform );

//None Mouse Rgiht click
$(document).bind("contextmenu",function(e){return false;});
$(document).bind("ondragstart",function(e){return false;});
$(document).bind("onselectstart",function(e){return false;}); 

/* ------------------------------------------------------------------------------- */
/* 실시간예약 - account */
let account = "starscape";

/* 실시간예약 - Type */
let type = "Y";

/* 영상 - Url */
let url = "http://gonylab7.speedgabia.com/starscape";
let vid = [''];

/* 이미지 - Number */
let img = [
	//index
	[13],
	//exterior
	[10],
	
	//rooms
	[
		[10,10],
		[10,9],
		[12],
	],

	//facility
	[
		4,4
	],
	
];

let eq = [
	[// 디럭스
		'Shampoo, Conditioner, Body Wash, Hand Wash, 헤어드라이기, 타올, 샤워부스',
		
		'멀티쿠커, 전자레인지, 전기포트, 잔(와인잔 머그잔 커피잔 언더잔 맥주잔 소주잔), 아이스바스켓, 공기, 대접, 접시, 요리볼,'+ 
		'믹싱볼, 타공볼, 수저셋트, 중스푼, 롱스푼, 테이블포크, 티포크, 나이프, 칼셋트, 도마, 가위, 집게1, 집게2,'+  
		'국자, 트레이, 웍, 냄비, 주방세제',
		
		'욕실 쓰레기통, 음식물쓰레기통, 음식물쓰레기봉투(5L) 1EA, 소화기',

	],[//프리미어
		'Shampoo, Conditioner, Body Wash, Hand Wash, 헤어드라이기, 타올, 샤워부스',

		'멀티쿠커, 전자레인지, 전기포트, 잔(와인잔 머그잔 커피잔 언더잔 맥주잔 소주잔), 아이스바스켓, 공기, 대접, 접시, 요리볼,'+ 
		'믹싱볼, 타공볼, 수저셋트, 중스푼, 롱스푼, 테이블포크, 티포크, 나이프, 칼셋트, 도마, 가위, 집게1, 집게2, 국자, 트레이, 웍, 냄비, 주방세제',
	
		'욕실 쓰레기통, 음식물쓰레기통, 음식물쓰레기봉투(5L) 1EA, 소화기',

	],[//스페셜
		'Shampoo, Conditioner, Body Wash, Hand Wash, 헤어드라이기, 타올, 샤워부스',

		'멀티쿠커, 전자레인지, 전기포트, 잔(와인잔 머그잔 커피잔 언더잔 맥주잔 소주잔), 아이스바스켓, 공기, 대접, 접시, 요리볼,'+ 
		'믹싱볼, 타공볼, 수저셋트, 중스푼, 롱스푼, 테이블포크, 티포크, 나이프, 칼셋트, 도마, 가위, 집게1, 집게2, 국자, 트레이, 웍, 냄비, 주방세제',
	
		'욕실 쓰레기통, 음식물쓰레기통, 음식물쓰레기봉투(5L) 1EA, 소화기',

	],[//빌라 스위트
		'Shampoo, Conditioner, Body Wash, Hand Wash, 헤어드라이기, 타올, 샤워부스',

		'멀티쿠커, 전자레인지, 전기포트, 잔(와인잔 머그잔 커피잔 언더잔 맥주잔 소주잔), 아이스바스켓, 공기, 대접, 접시, 요리볼,'+ 
		'믹싱볼, 타공볼, 수저셋트, 중스푼, 롱스푼, 테이블포크, 티포크, 나이프, 칼셋트, 도마, 가위, 집게1, 집게2, 국자, 트레이, 웍, 냄비, 주방세제',
	
		'욕실 쓰레기통, 음식물쓰레기통, 음식물쓰레기봉투(5L) 1EA, 소화기',

	],[//스위트
		'Shampoo, Conditioner, Body Wash, Hand Wash, 헤어드라이기, 타올, 샤워부스',

		'멀티쿠커, 전자레인지, 전기포트, 잔(와인잔 머그잔 커피잔 언더잔 맥주잔 소주잔), 아이스바스켓, 공기, 대접, 접시, 요리볼,'+ 
		'믹싱볼, 타공볼, 수저셋트, 중스푼, 롱스푼, 테이블포크, 티포크, 나이프, 칼셋트, 도마, 가위, 집게1, 집게2, 국자, 트레이, 웍, 냄비, 주방세제',
	
		'욕실 쓰레기통, 음식물쓰레기통, 음식물쓰레기봉투(5L) 1EA, 소화기',

	],[//파티 스위트
		'Shampoo, Conditioner, Body Wash, Hand Wash, 헤어드라이기, 타올, 샤워부스',

		'멀티쿠커, 전자레인지, 전기포트, 잔(와인잔 머그잔 커피잔 언더잔 맥주잔 소주잔), 아이스바스켓, 공기, 대접, 접시, 요리볼,'+ 
		'믹싱볼, 타공볼, 수저셋트, 중스푼, 롱스푼, 테이블포크, 티포크, 나이프, 칼셋트, 도마, 가위, 집게1, 집게2, 국자, 트레이, 웍, 냄비, 주방세제',

		'욕실 쓰레기통, 음식물쓰레기통, 음식물쓰레기봉투(5L) 1EA, 소화기',
	]


];


/* ------------------------------------------------------------------------------- */
/* SNS */
let	INTRAGRAM = "#";				
let	FACEBOOK = "#";
let	NV_BLOG = "#";
let	NV_CAFE = "#";
let	KAKAO = "#";
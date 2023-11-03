


// 익스플로러의 버전 체크하기 
var version_IE = "0"; 
var ieLower = navigator.userAgent.match( /MSIE [0-9]{1,}/ ); 
if ( ieLower != null ){  version_IE = ieLower.toString().replace( "MSIE " , "" );  } 


function get_position_of_mousePointer ( event ) { 
	 event = event || window.event; 

	 var x = 0; // 마우스 포인터의 좌측 위치 
	 var y = 0; // 마우스 포인터의 위쪽 위치 

	 if ( 0 < version_IE && version_IE < 7 ) { // 인터넷 익스플로러 (ie) 6 이하 버전일 경우 적용될 내용 
	        x = event.offsetX; 
	        y = event.offsetY; 
	 } 
	 else if ( event.pageX ) { // pageX & pageY를 사용할 수 있는 브라우저일 경우 
	        x = event.pageX; 
	        y = event.pageY; 
	 } 
	 else { // 그외 브라우저용 
	        x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
	        y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
        } 

	 return { positionX : x, positionY : y }; 
} 

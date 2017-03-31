window.onload=function(){
	function tick(){
		var oDate=new Date();
		var str=toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());	
		var aImgs=document.getElementsByTagName('img');
		for (var i = 0; i < aImgs.length; i++) {
			aImgs[i].src='imgs/'+str.charAt(i)+'.png';
		};
	}
	setInterval(tick,1000);
	tick()
}
function toDou(n){
	if(n<10){
		return '0'+n;
	}else{
		return ''+n;
	}
}


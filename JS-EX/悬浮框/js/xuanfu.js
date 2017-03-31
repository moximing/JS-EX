window.onscroll=function(){
	var oDiv=document.getElementById('div1');
	var scrollTop=document.documentElement.scrollTop||document.body.
	scrollTop;
	// oDiv.style.top=document.documentElement.clientHeight-oDiv.
	// offsetHeight+scrollTop+'px';
	var a=document.documentElement.clientHeight-oDiv.offsetHeight+scrollTop;
	// var a=(document.documentElement.clientHeight-oDiv.offsetHeight)/2+scrollTop;
	startMove(a);

	
}

var timer=null;

function startMove(target){
var oDiv=document.getElementById('div1');
	clearInterval(timer);
	timer=setInterval(function(){
		var speed=(target-oDiv.offsetTop)/5;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(oDiv.offsetTop==target){
			clearInterval(timer);
		}
		else{
			oDiv.style.top=oDiv.offsetTop+speed+'px'
		}
	},30);
}
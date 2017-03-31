window.onload=function(){
	var aDiv=document.getElementsByTagName('div');
	var timer,speed;

	for (var i = 0; i < aDiv.length; i++) {
		aDiv[i].timer;
		aDiv[i].onmouseover=function(){
			startMove(this,400);
		}
		aDiv[i].onmouseout=function(){
			startMove(this,100);
		}
	}
}

function startMove(obj,iTarget){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var speed=(iTarget-obj.offsetWidth)/5
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(obj.offsetWidth==iTarget){
			clearInterval(obj.timer);
		}else{
			obj.style.width=obj.offsetWidth+speed+'px';
		}
	},30);
}

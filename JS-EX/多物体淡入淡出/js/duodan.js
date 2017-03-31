window.onload=function(){
	var aDiv=document.getElementsByTagName('div');
	var timer,speed,alpha;
	for (var i = 0; i < aDiv.length; i++) {
		aDiv[i].timer;
		aDiv[i].alpha=20;
		aDiv[i].onmouseover=function(){
			startMove(this,100);
		}
		aDiv[i].onmouseout=function(){
			startMove(this,20);
		}
	}

	
}

function startMove(obj,iTarget){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		speed=(iTarget-obj.alpha)/2
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(obj.alpha==iTarget){
			clearInterval(obj.timer);
		}else{
			obj.alpha+=speed;
			obj.style.filter='alpha(opacity:obj.alpha)'//IE6-8
			obj.style.opacity=obj.alpha/100;
		}
	},30);
}

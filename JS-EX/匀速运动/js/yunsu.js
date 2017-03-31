window.onload=function(){
	var oBtn1=document.getElementById('btn1');
	var oBtn2=document.getElementById('btn2');
	var oDiv=document.getElementById('div1');
	var speed;
	var timer;

	function startMove(target){
		
		clearInterval(timer);
		timer=setInterval(function(){
			if(oDiv.offsetLeft>target){
				speed=-7;
			}else{
				speed=7;
			}

			if (Math.abs(oDiv.offsetLeft-target)<7) {
				clearInterval(timer);
				oDiv.style.left=target+'px';
			}else{
				oDiv.style.left=oDiv.offsetLeft+speed+'px';
			}
		},30);
	}

	oBtn1.onclick=function(){
		startMove(100);
	}
	oBtn2.onclick=function(){
		startMove(300);
	}
}
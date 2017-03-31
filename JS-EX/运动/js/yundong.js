window.onload=function(){
	var oBtn=document.getElementById('btn');
	var oDiv=document.getElementById('div1');
	var speed=2;
	var timer;

	oBtn.onclick=function(){
		clearInterval(timer);
		timer=setInterval(function(){
			if (oDiv.offsetLeft>=300) {
			clearInterval(timer);
			}else{oDiv.style.left=oDiv.offsetLeft+speed+'px';}
		},30);
	}
}
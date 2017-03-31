window.onload=function(){
	var oDiv=document.getElementById('div1');
	// var oSpn=document.getElementById('spn');
	// var timer;var speed;

	// alert(parseInt(getComputedStyle(oSpn,false)['width']));
	oDiv.onmouseover=function(){move(0);}
	oDiv.onmouseout=function(){move(-100);}
	
	
}
var timer;

function move(target){
	var oDiv=document.getElementById('div1');
		if (oDiv.offsetLeft<target) {
			var speed=25;
		}else{speed=-25;}
		clearInterval(timer);
		timer=setInterval(function(){
			if(oDiv.offsetLeft==target){
				clearInterval(timer);
			}else{oDiv.style.left=oDiv.offsetLeft+speed+'px';}			
		},30);
	}
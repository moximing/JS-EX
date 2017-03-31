window.onload=function(){
	var oDiv=document.getElementById('div1');
	var timer,speed,opa=0.1;
	oDiv.onmouseover=function(){
		move(1);
	}
	oDiv.onmouseout=function(){
		move(0.1);
	}
	function move(target){
		
		clearInterval(timer);
		timer=setInterval(function(){
			if(opa<target){
				speed=0.1;
			}else{speed=-0.1}
			if(opa==target){clearInterval(timer);}
			else{
				opa=(opa*10+speed*10)/10;
				oDiv.style.opacity=opa;
			}			
		},30);
	}
}
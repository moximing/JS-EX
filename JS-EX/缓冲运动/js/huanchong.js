window.onload=function(){
	var oBtn=document.getElementById('btn');
	var oDiv=document.getElementById('div1');
	

	function startMove(){
		
		setInterval(function(){
			
			var speed=(300-oDiv.offsetLeft)/5;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
				
			oDiv.style.left=oDiv.offsetLeft+speed+'px';
		},30);
	}

	oBtn.onclick=function(){
		startMove();
	}
}
window.onload=function(){
	var oDiv=document.getElementById('div1');
	var oBtn=document.getElementById('btn');

	oBtn.onclick=function(){
		startMove(oDiv, {width: 100,height: 300,opacity: 100}, function(){
			alert('a');
		});
	}
}
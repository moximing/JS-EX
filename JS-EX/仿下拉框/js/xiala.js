window.onload=function(){
	var oDiv=document.getElementById('div1');
	var oBtn=document.getElementsByTagName('input')[0];

	oBtn.onclick=function(ev){
		var oEvent=ev||event;
		oDiv.style.display='block';
		oEvent.cancelBubble=true;//取消事件冒泡
	}
	document.onclick=function(){
		oDiv.style.display='none';
	}
}
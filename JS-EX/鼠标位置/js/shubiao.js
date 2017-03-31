window.onload=function(){
	var oDiv=document.getElementById('div1');

	document.onmousemove=function(ev){
		var oEvent=ev||event;
		var pos=getPos(oEvent);
		oDiv.style.left=pos.x+'px';
		oDiv.style.top=pos.y+'px';
	}
}

function getPos(ev){
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;

	return {x:ev.clientX+scrollLeft,y:ev.clientY+scrollTop};
}
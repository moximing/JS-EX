window.onload=function(){
	var aDiv=document.getElementsByTagName('div');

	document.onmousemove=function(ev){

		var oEvent=ev||event;
		var pos=getPos(oEvent);

		for (var i = aDiv.length-1; i >0; i--) {
			aDiv[i].style.left=aDiv[i-1].offsetLeft+'px';
			aDiv[i].style.top=aDiv[i-1].offsetTop+'px';
		};
		
		aDiv[0].style.left=pos.x+'px';
		aDiv[0].style.top=pos.y+'px';

	}
}

function getPos(ev){
	var scrollLeft=document.documentElement.scrollLeft||
	document.body.scrollLeft; 
	var scrollTop=document.documentElement.scrollTop||
	document.body.scrollTop;

	return {x:ev.clientX+scrollLeft,y:ev.clientY+scrollTop}
}
window.onload=function(){
	var oDiv1=document.getElementById('div1');
	var oDiv2=document.getElementById('div2');
	var timer=null;

	oDiv2.onmouseover=oDiv1.onmouseover=function(){
		clearTimeout(timer);
		setTimeout(function(){oDiv2.style.display='block'},1000);
	}
	oDiv2.onmouseout=oDiv1.onmouseout=function(){
		timer=setTimeout(function(){oDiv2.style.display='none'},1000);
	}
	
}




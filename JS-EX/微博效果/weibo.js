window.onload=function(){
	var oTxt=document.getElementById('txt');
	var oBnt=document.getElementById('btn');
	var oUl=document.getElementById('ul1');

	oBnt.onclick=function(){
		var oLi=document.createElement('li');
		oLi.innerHTML=oTxt.value;
		oTxt.value='';
		//倒序
		if(oUl.children.length>0){
			oUl.insertBefore(oLi,oUl.children[0]);
		}else{
			oUl.appendChild(oLi);
		}
		//运动
		var iHeight=oLi.offsetHeight;
		oLi.style.height=0;
		startMove(oLi,{height:iHeight},function(){
			startMove(oLi,{opacity:100});
		});
	}

	oTxt.onkeydown=function(ev){
	var oEvent=ev||event;
	if(oEvent.keyCode==13&&oEvent.ctrlKey){
		oBnt.onclick();
	}
}
}


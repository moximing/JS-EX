window.onload=function(){
	var oDiv=document.getElementById('play');
	var oOl=oDiv.getElementsByTagName('ol')[0];
	var aOlLi=oOl.getElementsByTagName('li');
	var oUl=oDiv.getElementsByTagName('ul')[0];

	var nowZIndex=2;
	var now=0

	var timer;

	for (var i = 0; i < aOlLi.length; i++) {
		aOlLi[i].index=i;
		aOlLi[i].onclick=function(){
			now=this.index;

			tab();
		}
	};

	function tab(){
		oUl.style.zIndex=nowZIndex++;
		startMove(oUl, {top:-(now)*150});
		for (var i = 0; i < aOlLi.length; i++) {
			aOlLi[i].className='';
		};
		aOlLi[now].className='active';
	}

	function next(){
		now++;
		if(now==aOlLi.length){
			now=0
		}
		tab();
	}

	timer=setInterval(next, 2000);
	oDiv.onmouseover=function(){
		clearInterval(timer);
	}
	oDiv.onmouseout=function(){
		timer=setInterval(next, 2000);
	}

}
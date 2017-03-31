window.onload=function(){
	var oDiv=document.getElementById('div1');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	//var aA1=document.getElementsByTagName('a')[0];
	//var aA2=document.getElementsByTagName('a')[1];
	var oDiv2=document.getElementById('div2');
	var oDiv3=document.getElementById('div3');

	oUl.innerHTML+=oUl.innerHTML;
	oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';

	var speed=2;

	function move(){
		if(oUl.offsetLeft<-oUl.offsetWidth/2){
			oUl.style.left=0;//同'0'?
		}
		if(oUl.offsetLeft>0){
			oUl.style.left=-oUl.offsetWidth/2+'px';
		}
		oUl.style.left=oUl.offsetLeft+speed+'px';
	}
	var timer;

	oUl.onmouseover=function(){
		clearInterval(timer);
	}
	oUl.onmouseout=function(){
		timer = setInterval(move,30);
	}

	oDiv2.onclick=function(){//or aA1.onclick
		speed=-2;
	}
	oDiv3.onclick=function(){//or aA2.onclick
		speed=2;
	}
}
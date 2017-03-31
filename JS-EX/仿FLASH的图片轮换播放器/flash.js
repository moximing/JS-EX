window.onload=function(){
	var oDiv=document.getElementById('playimages');
	var oMarkLeft=getByClass(oUlFir, 'mark_left')[0];
	var oMarkRight=getByClass(oUlFir, 'mark_right')[0];
	var oBtnLeft=getByClass(oUlFir, 'prev')[0];
	var oBtnRight=getByClass(oUlFir, 'next')[0];

	var oUlFir=getByClass(oDiv, 'big_pic')[0];
	var aLiFir=oUlFir.getElementsByTagName('li');
	var oDivSec=getByClass(oDiv, 'small_pic')[0];
	var oUlSec=oDivSec.getElementsByTagName('ul')[0];
	var aLiSec=oUlSec.getElementsByTagName('li');
	// var aLiSec=oDivSec.getElementsByTagName('li');

	var nowZIndex=2;
	var now=0;

	var timer;

	oUlSec.style.width=aLiSec[0].offsetWidth*aLiSec.length+'px';
	
//左右按钮
	oMarkLeft.onmouseover=oBtnLeft.onmouseover=function(){
		startMove(oBtnLeft, 'opacity', 100);
	}
	oMarkLeft.onmouseout=oBtnLeft.onmouseout=function(){
		startMove(oBtnLeft, 'opacity', 0);
	}
	oMarkRight.onmouseover=oBtnRight.onmouseover=function(){
		startMove(oBtnRight, 'opacity', 100);
	}
	oMarkRight.onmouseout=oBtnRight.onmouseout=function(){
		startMove(oBtnRight, 'opacity', 0);
	}
//大图切换	
	//点击小图切换
	for (var i = 0; i < aLiSec.length; i++) {
		aLiSec[i].index=i;
		aLiSec[i].onclick=function(){
			if(this.index==now){return;}
			now=this.index;

			tab();
		}
		
		aLiSec[i].onmouseover=function(){
			startMove(this, 'opacity', 100);
		}
		aLiSec[i].onmouseout=function(){
			if(this.index==now)return;
			startMove(this, 'opacity', 60);
		}
	}

	function tab(){
		for (var i = 0; i < aLiSec.length; i++) {
			startMove(aLiSec[i], 'opacity', 60);
		};
		startMove(aLiSec[now], 'opacity', 100);

		aLiFir[now].style.zIndex=nowZIndex++;
		aLiFir[now].style.width=0;
		startMove(aLiFir[now], 'width', 400);

		if(now==0){
			startMove(oUlSec, 'left', 0);
		}else if(now==aLiSec.length-1){
			startMove(oUlSec, 'left', -(now-2)*aLiSec[0].offsetWidth);
		}else
		startMove(oUlSec, 'left', -aLiSec[0].offsetWidth*(now-1));
	}
	//点击按钮切换
	oBtnLeft.onclick=function(){
		now--;
		if(now==-1){
			now=aLiFir.length-1;
		}
		tab();
	}
	oBtnRight.onclick=function(){
		now++;
		if(now==aLiFir.length){
			now=0;
		}
		tab();
	}

	timer=setInterval(oBtnRight.onclick, 2000);
	oDiv.onmouseover=function(){
		clearInterval(timer);
	}
	oDiv.onmouseout=function(){
		timer=setInterval(oBtnRight.onclick, 2000);
	}
}


function getByClass(oParent, sClass){
	var aResult=[];
	var aEle=document.getElementsByTagName('*');
	for (var i = 0; i < aEle.length; i++) {
		if(aEle[i].className==sClass){
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}


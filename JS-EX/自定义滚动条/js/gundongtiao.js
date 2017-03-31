window.onload=function(){
	var oParent=document.getElementById('parent');
	var oDiv1=document.getElementById('div1');
	var oDiv2=document.getElementById('div2');
	var oDiv3=document.getElementById('div3');
	var oDiv4=document.getElementById('div4');

	oDiv1.onmousedown=function(ev){
		var oEvent=ev||event;
		var disX=oEvent.clientX-oDiv1.offsetLeft;

		document.onmousemove=function(ev){
			var oEvent=ev||event;
			var l=oEvent.clientX-disX;

			if(l<0){
				l=0;
			}else if(l>oParent.offsetWidth-oDiv1.offsetWidth){
				l=oParent.offsetWidth-oDiv1.offsetWidth;
			}

			oDiv1.style.left=l+'px';
			var scale=l/(oParent.offsetWidth-oDiv1.offsetWidth);
			document.title=scale;
			//改变物体大小
			oDiv2.style.width=400*scale+'px';
			oDiv2.style.height=400*scale+'px';
			//改变物体透明度
			oDiv2.style.filter='alpha(opacity:'+scale*100+')';
			oDiv2.style.opacity=scale;
			//控制文字滚动
			oDiv4.style.top=-scale*(oDiv4.offsetHeight-oDiv3.offsetHeight)+'px';


		}

		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		}
	}
	
	return false;

}
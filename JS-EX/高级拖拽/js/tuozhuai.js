window.onload=function(){
	var oDiv1=document.getElementById('div1');
	var oDiv2=document.getElementById('div2');

	oDiv2.onmousedown=function(ev){

		var oEvent=ev||event;

		var disX=oEvent.clientX-oDiv2.offsetLeft;
		var disY=oEvent.clientY-oDiv2.offsetTop;

		if(oDiv2.setCapture){	//事件捕获，使所有事件加到oDiv2上
			//IE				//解决IE下文字选中问题	
			oDiv2.onmousemove=mouseMove;	//不用加（）

			oDiv2.onmouseup=mouseUp;

			oDiv2.setCapture();

		}else{	//FF,chrome
			document.onmousemove=mouseMove;

			document.onmouseup=mouseUp;
		}

		function mouseMove(ev){
			var oEvent=ev||event;
			var l=oEvent.clientX-disX;
			var t=oEvent.clientY-disY;

			//不拖出固定区域和磁性吸附
			if(l<20){
				l=0;
			}else if(l>oDiv1.offsetWidth-oDiv2.offsetWidth-20){
				l=oDiv1.offsetWidth-oDiv2.offsetWidth;
			}

			if(t<20){
				t=0
			}else if(t>oDiv1.offsetHeight-oDiv2.offsetHeight-20){
				t=oDiv1.offsetHeight-oDiv2.offsetHeight;
			}

			oDiv2.style.left=l+'px';
			oDiv2.style.top=t+'px';

		}

		function mouseUp(){
			this.onmousemove=null;
			this.onmouseup=null;

			if(oDiv2.releaseCapture){
				oDiv2.releaseCapture();
			}
		}
		
		return false;	//chrome,ff,IE9
	}

}
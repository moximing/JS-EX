window.onload=function(){
	var oDiv1=document.getElementById('div1');

	oDiv1.onmousedown=function(ev){

		var oEvent=ev||event;

		var disX=oEvent.clientX-oDiv1.offsetLeft;
		var disY=oEvent.clientY-oDiv1.offsetTop;

		//带虚框的拖拽
		var oBox=document.createElement('div');
		oBox.className='box';
		oBox.style.width=oDiv1.offsetWidth+'px';
		oBox.style.height=oDiv1.offsetHeight+'px';
		oBox.style.left=oDiv1.style.left;
		oBox.style.top=oDiv1.style.top;
		document.body.appendChild(oBox);

		if(oBox.setCapture){	//事件捕获，使所有事件加到oDiv2上
			//IE				//解决IE下文字选中问题	
			oBox.onmousemove=mouseMove;	//为什么不用加（）？
			oBox.onmouseup=mouseUp;
			oBox.setCapture();

		}else{	//FF,chrome
			document.onmousemove=mouseMove;
			document.onmouseup=mouseUp;
		}

		function mouseMove(ev){
			var oEvent=ev||event;
			var l=oEvent.clientX-disX;
			var t=oEvent.clientY-disY;

			oBox.style.left=l+'px';
			oBox.style.top=t+'px';

		}

		function mouseUp(){
			this.onmousemove=null;
			this.onmouseup=null;

			oDiv1.style.left=oBox.style.left;
			oDiv1.style.top=oBox.style.top;

			document.body.removeChild(oBox);

			if(oBox.releaseCapture){
				oBox.releaseCapture();
			}
		}
		
		return false;	//chrome,ff,IE9
	}

}
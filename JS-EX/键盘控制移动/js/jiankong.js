// 有停顿
document.onkeydown=function(ev){
	var oDiv1=document.getElementById('div1');
	var oDiv2=document.getElementById('div2');
	var oEvent=ev||event;

	if(oEvent.keyCode==37){
		oDiv1.style.left=oDiv1.offsetLeft-10+'px';
	}else if(oEvent.keyCode==39){
		startMove(oDiv1,{left:oDiv1.offsetLeft+10});
		// oDiv1.style.left=oDiv1.offsetLeft+10+'px';
	}else if(oEvent.keyCode==38){
		oDiv1.style.top=oDiv1.offsetTop-10+'px';
	}else if(oEvent.keyCode==40){
		oDiv1.style.top=oDiv1.offsetTop+10+'px';
	}else if(oEvent.keyCode==13){
		oDiv2.style.display='block';
		startMove(oDiv2,{top:-oDiv1.offsetTop});
		// oDiv2.style.top=-oDiv1.offsetTop+'px';
		oDiv2.style.top=0;
	}
}


// //解决停顿
// window.onload=function(){
// 	var left=false;
// 	var top=false;
// 	var right=false;
// 	var bottom=false;
// 	var enter=false;
// 	var oDiv1=document.getElementById('div1');
// 	var oDiv2=document.getElementById('div2');

// 	setInterval(function(){
// 		if(left){oDiv1.style.left=oDiv1.offsetLeft-10+'px';}
// 		else if(top){oDiv1.style.top=oDiv1.offsetTop-10+'px';}
// 		else if(right){oDiv1.style.left=oDiv1.offsetLeft+10+'px';}
// 		else if(bottom){oDiv1.style.top=oDiv1.offsetTop+10+'px';} 
// 		else if(enter){
// 		oDiv2.style.display='block';
// 		startMove(oDiv2,{top:-oDiv1.offsetTop});
// 		oDiv2.style.top=0;
// 		} 

// 	},30);

// 	document.onkeydown=function(ev){
// 		var oEvent=ev||event;
// 		var keyCode=oEvent.keyCode;
// 		switch(keyCode){
// 		case 37:left=true;break;
// 		case 38:top=true;break;
// 		case 39:right=true;break;
// 		case 40:bottom=true;break;
// 		case 13:enter=true;break;
// 		}
// 	}
// 	document.onkeyup=function(ev){
// 		var oEvent=ev||event;
// 		var keyCode=oEvent.keyCode;
// 		switch(keyCode){
// 		case 37:left=false;break;
// 		case 38:top=false;break;
// 		case 39:right=false;break;
// 		case 40:bottom=false;break;
// 		case 13:enter=false;break;
// 		}
// 	}
// }
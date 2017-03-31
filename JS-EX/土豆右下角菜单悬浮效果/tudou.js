window.onload=function(){
	var oBottom=document.getElementById('zns_bottom');
	var oBox=document.getElementById('zns_box');
	var oShow=document.getElementById('but');
	var oClose=document.getElementById('btn_close');

	oShow.onclick=function(){
		startMove(oBottom, 'right', 0, function(){
			oBox.style.display='block';
			startMove(oBox, 'bottom', 0);

		});
	}
	oClose.onclick=function(){
		startMove(oBox, 'bottom', -315, function(){
			oBox.style.display='none';
			startMove(oBottom, 'right', -165);
		});
	}
}
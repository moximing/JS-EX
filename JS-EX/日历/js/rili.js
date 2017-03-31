window.onload=function(){
	var nTd=document.getElementsByTagName('td');
	var nCon=document.getElementById('content');
	for (var i = 0; i < nTd.length; i++) {
		var a=['一月活动','二月活动','三月活动','四月活动','五月活动','六月活动','七月活动'
	,'八月活动','九月活动','十月活动','十一月活动','十二月活动'];
		nTd[i].index=i;
		nTd[i].onmouseover=function(){
			this.className='active';
			for (var i = 0; i < nTd.length; i++) {
				// nTd[i].className='';
				nCon.innerHTML='<h2>月份：'+(this.index+1)+'月</h2><p>活动：'+a[this.index]+'</p>';
			};
		}
		nTd[i].onmouseout=function(){
			this.className='';
		}
		
		
	};
	
}





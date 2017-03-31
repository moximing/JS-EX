window.onload=function(){
	new TabSwitch();
}

function TabSwitch(){
	var _this=this;
	this.aBtn=document.getElementsByTagName('button');
	this.aDiv=document.getElementsByTagName('div');
	for(var i=0;i<this.aBtn.length;i++){
		this.aBtn[i].index=i;

		this.aBtn[i].onclick=function(){
			_this.fnClick(this);
		}
	
	} 
}

TabSwitch.prototype.fnClick=function(oBtn){
	// alert(this);
	for (var i = 0; i <this.aBtn.length; i++) {
		this.aBtn[i].className='';
		this.aDiv[i].style.display='none';
	};

	oBtn.className='active';
	this.aDiv[oBtn.index].style.display='block';

}




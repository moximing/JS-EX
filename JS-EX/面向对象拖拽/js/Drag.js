function Drag(id){
	var _this=this;
	this.disX;
	this.disY;

	this.oDiv1=document.getElementById(id);
	this.scrollTop=document.documentElement.scrollTop||document.
	body.scrollTop

	this.oDiv1.onmousedown=function(ev){
		_this.fnDown(ev);
		return false;	//去掉选中
	};


}

Drag.prototype.fnDown=function (ev){
	var _this=this;
	var oEvent=ev||event;

	this.disX=oEvent.clientX-this.oDiv1.offsetLeft;
	this.disY=oEvent.clientY-this.oDiv1.offsetTop;
	
	document.onmousemove=function(ev){_this.fnMove(ev);};

	document.onmouseup=function(){_this.fnUp();};
}

Drag.prototype.fnMove=function (ev){
	var oEvent=ev||event;

	this.l=oEvent.clientX-this.disX;
	this.t=oEvent.clientY-this.disY;
	this.oDiv1.style.left=this.l+'px';
	this.oDiv1.style.top=this.t+'px';
}

Drag.prototype.fnUp=function (){
	document.onmousemove=null;
	document.onmouseup=null;
}
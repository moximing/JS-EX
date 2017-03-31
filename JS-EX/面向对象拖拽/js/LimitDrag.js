function LimitDrag(id){
	Drag.call(this,id);
}

for(var i in Drag.prototype){
	LimitDrag.prototype[i]=Drag.prototype[i];
}

LimitDrag.prototype.fnMove=function(ev){
	var oEvent=ev||event;

	this.l=oEvent.clientX-this.disX;
	this.t=oEvent.clientY-this.disY;
	
	if(this.l<0){
		this.l=0
	}else if(this.l>oEvent.clientX-this.oDiv1.offsetWidth){
		this.l=oEvent.clientX-this.oDiv1.offsetWidth;
	}
	this.oDiv1.style.left=this.l+'px';
	this.oDiv1.style.top=this.t+'px';

}
	
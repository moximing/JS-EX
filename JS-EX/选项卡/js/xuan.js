window.onload=function(){
	var Nbtn=document.getElementsByTagName('button');
	var Ndiv=document.getElementsByTagName('div');
	for (var i=0;i<Nbtn.length;i++){
		Nbtn[i].index=i;
		Nbtn[i].onclick=function(){
			for (var i = 0; i < Nbtn.length; i++) {
				Nbtn[i].className='';
				Ndiv[i].style.display='none';
		    };

			this.className='active';
			Ndiv[this.index].style.display='block';
		};
	}
}





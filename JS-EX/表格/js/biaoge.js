window.onload=function(){
	var oTab=document.getElementById('tab1');
	var aTr=oTab.tBodies[0].rows;
	var oBtn=document.getElementById('btn');
	var oName=document.getElementById('name');
	var oAge=document.getElementById('age');
	var oldColor;

	var oBtn2=document.getElementById('btn2');
	var oName2=document.getElementById('name2');

	var oBtn3=document.getElementById('btn3');
		
	function color(){//背景色
		for(var i=0;i<aTr.length;i++){
			aTr[i].onmouseover=function(){
				oldColor=this.style.background;
				this.style.background='#aaf';
			}
			aTr[i].onmouseout=function(){
				this.style.background=oldColor;
			}
			if(i%2){
				aTr[i].style.background='';
			}else{
				aTr[i].style.background='#ccc';
			}
		}
	}

	color();

	var num=aTr.length+1;
	oBtn.onclick=function(){//添加新信息
		
		// for (var i = 0; i < aTr.length; i++) {
		// 	var num=parseInt(aTr[i].cells[0].innerHTML);
		// };//获取最后一个编号的内容
		
		var oTr=document.createElement('tr');

		var oTd=document.createElement('td');
		
		oTd.innerHTML=num++;
		oTr.appendChild(oTd);

		var oTd=document.createElement('td');

		//验证??
		// function regex(){
		// 	if(oName.value!=''){return oName.value;}
		// 	else{return false;}
		// }

		oTd.innerHTML=oName.value;//regex();
		oTr.appendChild(oTd);

		var oTd=document.createElement('td');
		oTd.innerHTML=oAge.value;
		oTr.appendChild(oTd);

		var oTd=document.createElement('td');
		oTd.innerHTML='<a href="javascript:;">删除</a>';
		oTr.appendChild(oTd);
    	//删除添加信息
		oTd.getElementsByTagName('a')[0].onclick=function(){//oTr.get...也可以
			oTab.tBodies[0].removeChild(this.parentNode.parentNode);
			color();
		}

		oTab.tBodies[0].appendChild(oTr);
		color();
	}
	//删除原有信息
	var aA=document.getElementsByTagName('a');
	for (var i = 0; i < aA.length; i++) {
		aA[i].onclick=function(){
			oTab.tBodies[0].removeChild(this.parentNode.parentNode);
			color();
		}
	};

	oBtn2.onclick=function(){color();
		for (var i = 0; i < aTr.length; i++) {//模糊搜索
			var oNaVal=oName2.value.toLowerCase().split('');
			var aTrInner=aTr[i].cells[1].innerHTML.toLowerCase();
			for (var j = 0; j < oNaVal.length; j++) {
				if(aTrInner.search(oNaVal[j])!=-1){
					aTr[i].style.background='#f33';break;
					// aTr[i].style.display='block';break;			
				}else{
				oldColor=aTr[i].style.background;
				aTr[i].style.background='oldColor';
				// aTr[i].style.display='none';						
			}
			};
			// if(oNaVal==aTrInner){//非模糊搜索
			// aTr[i].style.background='#f33';break;
			// }else{
			// 	oldColor=color();
			// 	aTr[i].style.background='oldColor';
			// }
		};
	}

	oBtn3.onclick=function(){//排序
		var arr=[];
		for (var i = 0; i < aTr.length; i++) {
			arr[i]=aTr[i];
		};
		arr.sort(function(tr1,tr2){
			var n1=parseInt(tr1.cells[0].innerHTML);
			var n2=parseInt(tr2.cells[0].innerHTML);
			return (n1-n2);
		})
		for (var i = 0; i < aTr.length; i++) {
			oTab.tBodies[0].appendChild(arr[i]);//无tBodies的区别？
		};
		color();
	}
	
}


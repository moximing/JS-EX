//js工具文件，提供一系列属性、函数、类。

//验证指定元素内容是否为空
function validateEmpty(eleId){  //进行是否为空的验证
	var obj=document.getElementById(eleId);
	var spanObj=document.getElementById(eleId+"Span");
	if(obj!=null){
		if(obj.value==""){
			setFailureStyle(obj);
			return false;
		}else{
			setSuccesStyle(obj);
			return true;
		}
	}
	return false;
}
function validateRegex(eleId,regex){  //从外部传入正则
	if(validateEmpty(eleId)){
		var obj=document.getElementById(eleId);
		if(!regex.test(obj.value)){  //数据错误验证
			setFailureStyle(obj);
			return false;
		}else{
			setSuccesStyle(obj);
			return true;
		}
	}
	return false;
}
function validateEmail(eleId){  //在正则基础上的开发
	return validateRegex(eleId,/^\w+@\w+\.\w+$/);
}
function validateNumber(eleId){
	return validateRegex(eleId,/^\d+(\.\d+)?$/);
}
//src要比较的原始数据，dist要设置比较的字段ID
function validateRepeat(srcId,distId){
	if(validateEmpty(srcId) && validateEmpty(distId)){
		var srcObj=document.getElementById(srcId);
		var distObj=document.getElementById(distId);
		if(srcObj.value!=distObj.value){
			setFailureStyle(distObj);
			return false;
		}else{
			setSuccesStyle(distObj);
			return true;
		}
	}
	return false; 
}
function setSuccesStyle(obj){  //设置成功
	obj.className="success";
	var spanObj=document.getElementById(obj.id+"Span");
	if(spanObj!=null){	
			spanObj.innerHTML="<font color='green'>√</font>";
	}
}
function setFailureStyle(obj){  //设置失败
	obj.className="failure";
	var spanObj=document.getElementById(obj.id+"Span");
	if(spanObj!=null){	
			spanObj.innerHTML="<font color='red'>×</font>";
	}
}
function formStop(e){
	if(e&&e.preventDefault){
		e.preventDefault();
	}else{
		window.event.returnValue=false;
	}
}
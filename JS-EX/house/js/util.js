function changeColor(obj,color){
	obj.bgColor=color;
}

function ele(eleId){
	return document.getElementById(eleId);
}

function eleAll(eleId){
	return document.all(eleId);
}

function bind(eventType,obj,fun){
	return addEventListener(eventType,fun,false);
}

function validateEmpty(eleId){
	var obj=ele(eleId);
	if (obj!=""){
		if (obj.value!=""){
			setSuccessStyle(obj);
			return true;
		}
		else{
			setFailureStyle(obj);
			return false;
		}
	}else{return false;}
}

function setSuccessStyle(obj){
	if (obj!=""){
		obj.className="success";
		var spanObj=ele(ele.id+"Span");
		if(spanObj!=""){
			spanObj.innerHTML="√";
		}
	}
} 

function setFailureStyle(obj){
	if (obj!=""){
		obj.className="failure";
		var spanObj=ele(ele.id+"Span");
		if(spanObj!=""){
			spanObj.innerHTML="×";
		}
	}
} 

function validateRegex(eleId,regex){
	var obj=ele(eleId);
	if(validateEmpty(eleId)){
		if(regex.test(obj.value)){
			setSuccessStyle(obj);
			return true;}
	}else{
		setFailureStyle(obj);
		return false;
	}
}

function validateNumber(eleId){
	return validateRegex(eleid,/^\d$/)
}
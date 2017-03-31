window.onload=function(){
	var trObj=eleAll("divTr");
	for(var i=0;i<trObj.length;i++){
		bind("mouseover",trObj[i],function(){
			changeColor(this,'#FFFFFF');
		});
		bind("mouseout",trObj[i],function(){
			changeColor(this,'#F2F2F2');
		});

	}

	bind("blur",ele("cost"),function(){
		validateCost();
	});
	bind("blur",ele("rent"),function(){
		validateRent();
	});
	bind("blur",ele("charge"),function(){
		validateCharge();
	});
	bind("blur",ele("area"),function(){
		validateArea();
	});
	bind("blur",ele("loan"),function(){
		validateLoan();
	});

	bind("submit",ele("inputDiv"),function(e){
		if(validateDiv()){
			this.submit();  //提交表单
		}else{
			if(e&&e.preventDefault){  //现在是在W3C标准下执行
				e.preventDefault();  //阻止浏览器的动作
			}else{  //专门针对于IE浏览器的处理
				window.event.returnValue=false;
			}
		}
	});
}

function validateCost(){
	return validateRegex("cost");
}
function validateRent(){
	return validateRegex("rent");
}
function validateCharge(){
	return validateRegex("charge");
}
function validateArea(){
	return validateRegex("area");
}
function validateLoan(){
	return validateRegex("loan");
}
function validateDiv(){
	return validateCost()&&validateRent()&&validateCharge()&&validateArea()&&validateLoan();
}

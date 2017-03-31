window.onload=function(){
	//为表格的行增加动态处理效果
	var trObj=eleAll("empTr");
	for (var x=0;x<trObj.length;x++){
		bind("mouseover",trObj[x],function(){
			changeColor(this,'#FFFFFF');
		}); 
		bind("mouseout",trObj[x],function(){
			changeColor(this,'#F2F2F2');
		}); 
	}
	//设置empnum的验证操作
	bind("blur",ele("empnum"),function(){
		validateEmpnum();
	});
	bind("blur",ele("empjob"),function(){
		validateEmpjob();
	});
	bind("blur",ele("empname"),function(){
		validateEname();
	});
	bind("blur",ele("hiredate"),function(){
		validateHiredate();
	});
	bind("blur",ele("sal"),function(){
		validateSal();
	});
	bind("blur",ele("comm"),function(){
		validateComm();
	});
	//处理表单的绑定
	bind("submit",ele("empForm"),function(e){
		if(validateForm()){
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

function validateEmpnum(){
	return validateRegex("empnum",/^\d{4}$/);
}
function validateEname(){
	return validateEmpty("empname");
}
function validateEmpjob(){
	return validateEmpty("empjob");
}
function validateHiredate(){
	return validateDate("hiredate");
}
function validateSal(){
	return validateRegex("sal",/^\d{1,5}(\.\d{1,2})?$/);
}
function validateComm(){
	return validateRegex("comm",/^\d{1,5}(\.\d{1,2})?$/);
}
function validateForm(){
	return validateEmpnum()&&validateEname()&&validateHiredate()&&validateJob()&&validateSal()&&validateComm();
}


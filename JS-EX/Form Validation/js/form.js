window.onload=function(){
	document.getElementById('loginForm').addEventListener("submit",function(e){
			var emailObj=document.getElementById('email');
			if(emailObj.value==""){
				emailObj.className="failure";
				if(e&&e.preventDefault){  //现在是在W3C标准下执行
					e.preventDefault();  //阻止浏览器的动作
				}else{  //专门针对IE浏览器的处理
					window.event.returnValue=false;
				}
			}else{
				if(/^\w+@\w+\.\w+$/.test(emailObj.value)){
					this.submit();
				}else{
					emailObj.className="failure";
					if(e&&e.preventDefault){
					e.preventDefault();
				}else{
					window.event.returnValue=false;
				}
				}		
			}
		},false);
}

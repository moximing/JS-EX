window.onload=function(){
	document.getElementById('uid').addEventListener("blur",function(){
		validateUid();
	},false);
	document.getElementById('password').addEventListener("blur",function(){
		validatePassword();
	},false);
	document.getElementById('conf').addEventListener("blur",function(){
		validateConf();
	},false);
	document.getElementById("loginForm").addEventListener("submit",function(e){
		if(validateUid()&&validatePassword()){
			this.submit();
		}else{
			formStop(e);
		}
	},false);
}
function validateUid(){
	return validateEmail("uid");
}
function validatePassword(){
	return validateEmpty("password");
}
function validateConf(){
	return validateRepeat("password","conf");
}

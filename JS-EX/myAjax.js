function ajax(url,fnSucc,fnFail){
	//1.创建Ajax对象
	if(window.XMLHttpRequest){	//未定义的变量会报错，
								//未定义的属性返回undefined
		var oAjax=new XMLHttpRequest();	//非IE6
	}else{
		var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}

	//2. 连接服务器 open（方法,文件名,异步传输）
	oAjax.open('GET','url?t='new Date().getTime(),true);

	//3.发送请求
	oAjax.send();

	//4.接受返回
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){	//读取完成
			if(oAjax.status==200){	//读取成功
				fnSucc(oAjax.responseText);
			}else{
				if(fnFail){
					fnFail(oAjax.status); 
				}
			}
		}
	}

}


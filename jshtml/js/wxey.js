$(document).ready(function(){
	$("#check").click(function(){
		var www=$("#network").val()
		if(www==""){
			alert("域名不能为空！");
			return
		}
		function formatterDateTime() {
			var date=new Date()
			var month=date.getMonth() + 1
	        var datetime = date.getFullYear()
	                + ""// "年"
	                + (month >= 10 ? month : "0"+ month)
	                + ""// "月"
	                + (date.getDate() < 10 ? "0" + date.getDate() : date
	                        .getDate())
	                + ""
	                + (date.getHours() < 10 ? "0" + date.getHours() : date
	                        .getHours())
	                + ""
	                + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
	                        .getMinutes())
	                + ""
	                + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
	                        .getSeconds());
	        return datetime;
        }

		$.ajax({
		    type: 'post',
		    url: 'http://route.showapi.com/1501-1',
		    dataType: 'json',
		    data: {
		        "showapi_timestamp": formatterDateTime(),
		        "showapi_appid": '74291', //这里需要改成自己的appid
		        "showapi_sign": '858d3c3867674dc9833481f6523b280b',  //这里需要改成自己的应用的密钥secret
		        "url":"http://"+www
		
		    },
		
		    error: function(XmlHttpRequest, textStatus, errorThrown) {
		        alert("操作失败!");
		    },
		    success: function(result) {
		        console.log(result) //console变量在ie低版本下不能用
		        if (result.showapi_res_code.toString()=="0"){
			   	if(result.showapi_res_body.ret_code=="0"){
			   		$('#result').empty()
			   		if(result.showapi_res_body.state.toString()=="网址安全"){
			   		var li1=document.createElement('li');
			        li1.innerHTML='<p style="color:green">是否安全：<p>'+result.showapi_res_body.state.toString()
			        $('#result').append(li1);
			   		}
			   		else{
			   		var li1=document.createElement('li');
			        li1.innerHTML='<p style="color:red">是否安全：<p>'+result.showapi_res_body.state.toString();
			        $('#result').append(li1);
			   		}	   		
			   	}
			   	else{
			   		$('#result').empty()
			   		var li1=document.createElement('li');
			        li1.innerHTML='<p style="color:red;">输入域名错误</p>'
			        $('#result').append(li1)
			   	}	   	
			   }
			   else{
			   		$('#result').empty()
			   		var li1=document.createElement('li');
			        li1.innerHTML='<p style="color:red;">输入域名错误</p>'
			        $('#result').append(li1)
			   	}
		    }
		});


	})
      
});
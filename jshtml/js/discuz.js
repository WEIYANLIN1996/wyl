$(document).ready(function(){
	$("#check").click(function(){
		var www=$("#network").val()
		if(www==""){
			alert("网址不能为空！");
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
		    url: 'http://route.showapi.com/1253-1',
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
				   		var li1=document.createElement('li');
						var l2=document.createElement('li')
						var l3=document.createElement('li')
						var l4=document.createElement('li')
						var l5=document.createElement('li')
						var l6=document.createElement('li')
						var l7=document.createElement('li')
						var l8=document.createElement('li')
						var l9=document.createElement('li')
						var l10=document.createElement('li')
						var l11=document.createElement('li')
						var l12=document.createElement('li')
						var l13=document.createElement('li')
						var l14=document.createElement('li')
						var l15=document.createElement('li')
				        li1.innerHTML='<strong style="color:green">主题：</strong>'+result.showapi_res_body.list[0].childList[0].title.toString()+"---链接地址："+result.showapi_res_body.list[0].childList[0].link.toString();
	                    l2.innerHTML='<strong style="color:green">主题：</strong>'+result.showapi_res_body.list[0].childList[1].title.toString()+"---链接地址："+result.showapi_res_body.list[0].childList[1].link.toString();
	                    l3.innerHTML='<strong style="color:green">主题：</strong>'+result.showapi_res_body.list[0].childList[2].title.toString()+"---链接地址："+result.showapi_res_body.list[0].childList[2].link.toString();
	                    l4.innerHTML='<strong style="color:green">主题：</strong>'+result.showapi_res_body.list[0].childList[3].title.toString()+"---链接地址："+result.showapi_res_body.list[0].childList[3].link.toString();
	                    l5.innerHTML='<strong style="color:green">主题：</strong>'+result.showapi_res_body.list[0].childList[4].title.toString()+"---链接地址："+result.showapi_res_body.list[0].childList[4].link.toString();
	                    l6.innerHTML='<strong style="color:green">主题：</strong>'+result.showapi_res_body.list[0].childList[5].title.toString()+"---链接地址："+result.showapi_res_body.list[0].childList[5].link.toString();
	                    l7.innerHTML='<strong style="color:green">主题：</strong>'+result.showapi_res_body.list[0].childList[6].title.toString()+"---链接地址："+result.showapi_res_body.list[0].childList[6].link.toString();
	                    l8.innerHTML='<strong style="color:green">主题：</strong>'+result.showapi_res_body.list[0].childList[7].title.toString()+"---链接地址："+result.showapi_res_body.list[0].childList[7].link.toString();
	                    l9.innerHTML='<strong style="color:green">主题：</strong>'+result.showapi_res_body.list[0].childList[8].title.toString()+"---链接地址："+result.showapi_res_body.list[0].childList[8].link.toString();
	                    l10.innerHTML='<strong style="color:green">主题：</strong>'+result.showapi_res_body.list[0].childList[9].title.toString()+"---链接地址："+result.showapi_res_body.list[0].childList[9].link.toString();
	                    l11.innerHTML='<strong style="color:green">主题：</strong>'+result.showapi_res_body.list[0].childList[10].title.toString()+"---链接地址："+result.showapi_res_body.list[0].childList[10].link.toString();
	                    l12.innerHTML='<strong style="color:green">主题：</strong>'+result.showapi_res_body.list[0].childList[11].title.toString()+"---链接地址："+result.showapi_res_body.list[0].childList[11].link.toString();
	                    l13.innerHTML='<strong style="color:green">主题：</strong>'+result.showapi_res_body.list[0].childList[12].title.toString()+"---链接地址："+result.showapi_res_body.list[0].childList[12].link.toString();
	                    l14.innerHTML='<strong style="color:green">主题：</strong>'+result.showapi_res_body.list[0].childList[13].title.toString()+"---链接地址："+result.showapi_res_body.list[0].childList[13].link.toString();
	                    l15.innerHTML='<strong style="color:green">主题：</strong>'+result.showapi_res_body.list[0].childList[14].title.toString()+"---链接地址："+result.showapi_res_body.list[0].childList[14].link.toString();
	
				        $('#result').append(li1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l13,l14,l15)
			   			   		
			   	}
			   	else{
			   		$('#result').empty()
			   		var li1=document.createElement('li');
			        li1.innerHTML='<p style="color:red;">输入网址错误/或解析错误</p>'
			        $('#result').append(li1)
			   	}	   	
			   }
			   else{
			   		$('#result').empty()
			   		var li1=document.createElement('li');
			        li1.innerHTML='<p style="color:red;">输入网址错误/或解析错误</p>'
			        $('#result').append(li1)
			   	}
		    }
		});


	})
      
});
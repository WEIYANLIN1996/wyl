$(document).ready(function(){
	$("#check").click(function(){
		var www=$("#network").val()
		if(www==""){
			alert("ip不能为空！");
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
		    url: 'http://route.showapi.com/20-1',
		    dataType: 'json',
		    data: {
		        "showapi_timestamp": formatterDateTime(),
		        "showapi_appid": '74291', //这里需要改成自己的appid
		        "showapi_sign": '858d3c3867674dc9833481f6523b280b',  //这里需要改成自己的应用的密钥secret
		        "ip":www
		
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
				        li1.innerHTML='<p style="color:red">定位地址：<p>'+result.showapi_res_body.city.toString()
				        var li2=document.createElement('li');
				        li2.innerHTML='<p style="color:red">ip：<p>'+result.showapi_res_body.ip.toString()
				        var li3=document.createElement('li');
				        li3.innerHTML='<p style="color:red">isp:<p>'+result.showapi_res_body.isp.toString()
				        var li4=document.createElement('li');
				        li4.innerHTML='<p style="color:red">纬度：<p>'+result.showapi_res_body.lnt.toString()
				        var li5=document.createElement('li');
				        li5.innerHTML='<p style="color:red">经度<p>'+result.showapi_res_body.lat.toString()
				        $('#result').append(li1,li2,li3,li4,li5)
		
				   	}	   		
				   	else{
				   		$('#result').empty()
				   		var li1=document.createElement('li');
				        li1.innerHTML='<p style="color:red;">输入ip错误或无法定位</p>'
				        $('#result').append(li1)
				   	}	   	
			   }
			   else{
			   		$('#result').empty()
			   		var li1=document.createElement('li');
			        li1.innerHTML='<p style="color:red;">输入ip错误或无法定位</p>'
			        $('#result').append(li1)
			   	}
		    }
		});


	})
      
});
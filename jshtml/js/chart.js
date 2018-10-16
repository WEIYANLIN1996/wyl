//var result={"showapi_res_error":"","showapi_res_id":"56e43ffa2868494cb85c353dc09ab2f1","showapi_res_code":0,"showapi_res_body":{"ret_code":0,"data":{"detail_report":{"attack":{"score":100,"check_types":[{"in_service_required":false,"name":"攻击风险","check_items":[{"result":"<a href='http://ce.baidu.com/bsi/medial' target='_blank'><strong>影视音乐</strong></a>行业,目前安全等级<label>中危</label>","name":"行业攻击风险"},{"result":"safe","name":"网站集中风险"},{"result":"safe","name":"自身攻击风险"},{"result":"safe","name":"突发0Day漏洞"}]}],"score_delta":1.182},"realtime":{"score":100,"check_types":[{"in_service_required":false,"name":"网站恶意内容","check_items":[{"result":"safe","name":"虚假和欺诈等不良信息"},{"result":"safe","name":"挂马和恶意链接"},{"result":"safe","name":"黑链和恶意劫持"}]},{"in_service_required":false,"name":"网站安全威胁","check_items":[{"result":"safe","name":"应用威胁"},{"result":"safe","name":"服务威胁"}]},{"in_service_required":false,"name":"网站安全漏洞","check_items":[{"result":"safe","name":"服务器入侵"},{"result":"safe","name":"用户数据窃取"},{"result":"safe","name":"暴露站点目录结构"},{"result":"safe","name":"敏感信息泄露"},{"result":"safe","name":"管理后台暴露"},{"result":"safe","name":"其他"}]}],"score_delta":1.182},"env":{"score":50,"check_types":[{"in_service_required":false,"name":"网站服务","check_items":[{"result":"未检出","name":"Web应用"},{"result":"Tengine","name":"Web服务器"},{"result":"未检出","name":"开发语言"},{"result":"未检出","name":"安全服务"},{"result":"dns2.youku.com.","name":"DNS服务商"},{"result":"未检出","name":"跨地域负载均衡"},{"result":"未检出","name":"主机服务商"},{"result":true,"name":"其他服务"}]},{"in_service_required":false,"name":"网站表现","check_items":[{"result":"100%","color":"green","name":"最近30天网站可用率"},{"result":"-s","color":"green","name":"最近30天平均首屏时间"}]}],"score_delta":0.091},"history":{"score":100,"check_types":[{"in_service_required":false,"name":"网站历史安全","check_items":[{"result":"29天","color":"green","name":"持续安全时间"},{"result":"0天","color":"green","name":"安全响应时间"},{"result":"0次","color":"green","name":"安全事件次数"},{"result":"0种","color":"green","name":"安全事件种类"}]}],"score_delta":1.182}},"is_register":true,"industry":{"name":"影视音乐","score":45.83,"id":"MEDIAL"},"is_reachable":true,"score":{"detail":{"realtime":100,"attack":100,"env":50,"history":100},"synopsis":90,"rank":0},"is_in_service":true,"related_sites":{"count":519,"least_score":0},"updated_time":"2018-09-28 18:13:35"},"code":0}}

$(document).ready(function(){
	$("#title").fadeIn(3000);
	$("#seacher").animate({height:'300px'});
	$('img').animate({height:'300px'});
	$('#check1').click(function(){
		    var www=$("#network").val()
		    if(www==""){
		    	alert("网址不能为空！");
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
                url: 'http://route.showapi.com/1262-1',
                dataType: 'json',
                data: {
                    "showapi_timestamp": formatterDateTime(),
                    "showapi_appid": '74291', //appid
                    "showapi_sign": '858d3c3867674dc9833481f6523b280b',  //secret
                    "url":www

            },

            error: function(XmlHttpRequest, textStatus, errorThrown) {
                alert("操作失败!");
            },
            success: function(result) {
                console.log(result)
                console.log(typeof(result));
                //var result=jQuery.parseJSON(result);
                //$('#err').css('display','block');
                //$('#err').append(String(result));
                if (result.showapi_res_code.toString()=='0'){
                	if (String(result.showapi_res_body.code)=="0"){
                		$('#err').empty();
                		$("#safeinfo").css('display','block');
						var li1=document.createElement('li');
						var li2=document.createElement('li');
						var li3=document.createElement('li');
						var li4=document.createElement('li');
						var li5=document.createElement('li');
						li1.innerHTML="网址:"+$("#network").val()
						li2.innerHTML='所属行业:'+result.showapi_res_body.data.detail_report.attack.check_types[0].check_items[0].result.toString();
						li3.innerHTML='详情可前往百度云观测查看'
						li4.innerHTML='<p style="font-size:13px">百度云观测:http://ce.baidu.com/index/guance?</p>'
						if (result.showapi_res_body.data.score.synopsis>80){
							li5.innerHTML='<p style="color:green">指数评价：良好<p>'
						}
						else{
							if(result.showapi_res_body.data.score.synopsis<60){
								li5.innerHTML='<p style="color:red">指数评价：危险<p>'
							}
							else{
								li5.innerHTML='<p style="color:greenyellow">指数评价：一般<p>'
							}
						}
						$("#datawww").empty();
						$('#datawww').append(li1,li2,li3,li4,li5);	
						
						var l1=document.createElement('li')
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
						var l16=document.createElement('li')
						var l17=document.createElement('li')
						var l18=document.createElement('li')
						var l19=document.createElement('li')
						var l20=document.createElement('li')
						var l21=document.createElement('li')
						var l22=document.createElement('li')
						var l23=document.createElement('li')
						var l24=document.createElement('li')
						var l25=document.createElement('li')
						var l26=document.createElement('li')
						var l27=document.createElement('li')
						var l28=document.createElement('li')
						var l29=document.createElement('li')
						if (result.showapi_res_body.data.detail_report.realtime.check_types[0].check_items[0].result.toString()=="safe"){
							l1.innerHTML='<p style="color:green;">安全</p>'
						}
						else{
							l1.innerHTML='<p style="color:red;"">危险</p>'
						}
						if (result.showapi_res_body.data.detail_report.realtime.check_types[0].check_items[1].result.toString()=="safe"){
							l2.innerHTML='<p style="color:green;">安全</p>'
						}
						else{
							l2.innerHTML='<p style="color:red;">危险</p>'
						}
						if (result.showapi_res_body.data.detail_report.realtime.check_types[0].check_items[2].result.toString()=="safe"){
							l3.innerHTML='<p style="color:green;">安全</p>'
						}
						else{
							l3.innerHTML='<p style="color:red;">危险</p>'
						}
						if (result.showapi_res_body.data.detail_report.realtime.check_types[1].check_items[0].result.toString()=="safe"){
							l4.innerHTML='<p style="color:green;">安全</p>'
						}
						else{
							l4.innerHTML='<p style="color:red;">危险</p>'
						}
						if (result.showapi_res_body.data.detail_report.realtime.check_types[1].check_items[1].result.toString()=="safe"){
							l5.innerHTML='<p style="color:green;">安全</p>'
						}
						else{
							l5.innerHTML='<p style="color:red;">危险</p>'
						}
						if (result.showapi_res_body.data.detail_report.realtime.check_types[2].check_items[0].result.toString()=="safe"){
							l6.innerHTML='<p style="color:green;">安全</p>'
						}
						else{
							l6.innerHTML='<p style="color:red;">危险</p>'
						}
						if (result.showapi_res_body.data.detail_report.realtime.check_types[2].check_items[1].result.toString()=="safe"){
							l7.innerHTML='<p style="color:green;">安全</p>'
						}
						else{
							l7.innerHTML='<p style="color:red;">危险</p>'
						}
						if (result.showapi_res_body.data.detail_report.realtime.check_types[2].check_items[2].result.toString()=="safe"){
							l8.innerHTML='<p style="color:green;">安全</p>'
						}
						else{
							l8.innerHTML='<p style="color:red;">危险</p>'
						}
						if (result.showapi_res_body.data.detail_report.realtime.check_types[2].check_items[3].result.toString()=="safe"){
							l9.innerHTML='<p style="color:green;">安全</p>'
						}
						else{
							l9.innerHTML='<p style="color:red;">危险</p>'
						}
						if (result.showapi_res_body.data.detail_report.realtime.check_types[2].check_items[4].result.toString()=="safe"){
							l10.innerHTML='<p style="color:green;">安全</p>'
						}
						else{
							l10.innerHTML='<p style="color:red;">危险</p>'
						}
						if (result.showapi_res_body.data.detail_report.realtime.check_types[2].check_items[5].result.toString()=="safe"){
							l11.innerHTML='<p style="color:green;">安全</p>'
						}
						else{
							l11.innerHTML='<p style="color:red;">危险</p>'
						}
						l12.innerHTML=result.showapi_res_body.data.detail_report.history.check_types[0].check_items[0].result.toString()
						l13.innerHTML=result.showapi_res_body.data.detail_report.history.check_types[0].check_items[1].result.toString()
						l14.innerHTML=result.showapi_res_body.data.detail_report.history.check_types[0].check_items[2].result.toString()
						l15.innerHTML=result.showapi_res_body.data.detail_report.history.check_types[0].check_items[3].result.toString()
						l16.innerHTML=result.showapi_res_body.data.detail_report.env.check_types[0].check_items[0].result.toString()
						l17.innerHTML=result.showapi_res_body.data.detail_report.env.check_types[0].check_items[1].result.toString()
						l18.innerHTML=result.showapi_res_body.data.detail_report.env.check_types[0].check_items[2].result.toString()
						l19.innerHTML=result.showapi_res_body.data.detail_report.env.check_types[0].check_items[3].result.toString()
						l20.innerHTML=result.showapi_res_body.data.detail_report.env.check_types[0].check_items[4].result.toString()
						l21.innerHTML=result.showapi_res_body.data.detail_report.env.check_types[0].check_items[5].result.toString()
						l22.innerHTML=result.showapi_res_body.data.detail_report.env.check_types[0].check_items[6].result.toString()
						l23.innerHTML=result.showapi_res_body.data.detail_report.env.check_types[0].check_items[7].result.toString()
						l24.innerHTML='<p style="color:red;">暂时无法获得数据！</p>'
						l25.innerHTML='<p style="color:red;">暂时无法获得数据！</p>'
						l26.innerHTML=result.showapi_res_body.data.detail_report.attack.check_types[0].check_items[0].result.toString()
						if(result.showapi_res_body.data.detail_report.attack.check_types[0].check_items[1].result.toString()=="safe"){
							l27.innerHTML='<p style="color:green;">安全</p>'
						}
						else{
							l27.innerHTML='<p style="color:red;">危险</p>'
						}
						if(result.showapi_res_body.data.detail_report.attack.check_types[0].check_items[2].result.toString()=="safe"){
							l28.innerHTML='<p style="color:green;">安全</p>'
						}
						else{
							l28.innerHTML='<p style="color:red;">危险</p>'
						}
						if(result.showapi_res_body.data.detail_report.attack.check_types[0].check_items[3].result.toString()=="safe"){
							l29.innerHTML='<p style="color:green;">安全</p>'
						}
						else{
							l29.innerHTML='<p style="color:red;">危险</p>'
						}
						$("#dataitems").empty();
						$('#dataitems').append(l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,l20,l21,l22,l23,l24,l25,l26,l27,l28,l29); 
						
						var dom = document.getElementById("chart");
						var myChart = echarts.init(dom);
						var app = {};
						option = null;
						option = {
						        tooltip : {
						            formatter: "{a} <br/>{b} : {c}%"
						        },
						        toolbox: {
						            feature: {
						                restore: {},
						                saveAsImage: {}
						        }
						},
						        series: [
						        {
						            name: '业务指标',
						            type: 'gauge',
						            detail: {formatter:'{value}%'},
						            data: [{value: 50, name: '指数评价'}]
						        }
						        ]
						}; 
						
						setInterval(function () {
						    option.series[0].data[0].value =result.showapi_res_body.data.score.synopsis;
						    myChart.setOption(option, true);
						},2000);
						
						if (option && typeof option === "object") {
						            myChart.setOption(option, true);
						}
                    }
                	else{
                		if (result.showapi_res_body.code.toString()=="500"){
                		    $('#err').css('display','block');
                		    $('#err').empty();
                		    var mes=String(result.showapi_res_body.message)
                		    $('#err').append(mes);
                	    }
                	    else{
                		    alert("请检查网络或网址是否有错！");
                	    }
                	}

                }              
                else{
                	alert("获取失败，请检查网络或网址是否有错！");
                }
               
            }
            }); 

		})
		
	});
    
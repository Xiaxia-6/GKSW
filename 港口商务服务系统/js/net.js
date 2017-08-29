var IP = "http://localhost:8080";
var APP = IP + "/gksw";
var urlsConstant = {
	'LOGIN' : APP + "/user/login.json",
	'SHIP_DYNAMIC' : APP + '/ship/getShipDynamic.json',
	'CREATE_SHIP_DATA' : APP + '/ship/createShipData.json',
	'SHIP_WORK_DYNAMIC' : APP + '/ship/getShipWorkDynamic.json',
	'TRAIN_WORK_DYNAMIC' : APP + '/train/getTrainWorkDynamic.json'
}

var page = 0;
var num = 20;

function common_error() {
	alert("网络异常or数据提交错误")
}

function login(username, password, identity) {
	$.ajax({
		url:urlsConstant.LOGIN,
		dataType:'json',
		type:'post',
		async:true,
		data: {
			'username':username,
			'password':password,
			'identity':identity
		},
		success:function(response) {
			if(response.data > 0) {
				if(identity = 1) {
				location.href = "../CZFW/CZFW.html";
				} else {
				location.href = "../HZFW/HZFW.html";
					
				}

			} else {
				alert('user not exist');
			}
		},
		error:common_error
	});
}

function getTrainWorkDynamic(HCCC) {
	$.ajax({
		url:urlsConstant.TRAIN_WORK_DYNAMIC,
		dataType:'json',
		type:'post',
		async:true,
		data:{
			'HCCC':HCCC
		},
		success:function(response) {
			var content = '<tr><th>执行合同编号</th><th>到港时间</th><th>开始时间</th><th>结束时间</th><th>离港时间</th><th>实际顿</th><th>车皮数</th><th>车卡清单</th><th>发车时间</th>'+
			'<th>理货票编号</th><th>备注</th><th>火车车次</th><th>作业完毕标志</th><th>货物运单编号</th><th>装卸类别编码</th></tr>';
			if(typeof(response.data) != 'undefined' && response.data != null) {
				var data = response.data;
					content += '<tr><td>'+data.zxhtbh+'</td>'+
					'<td>'+data.dgsj+'</td>'+
					'<td>'+data.kssj+'</td>'+
					'<td>'+data.jssj+'</td>'+
					'<td>'+data.lgsj+'</td>'+
					'<td>'+data.sjd+'</td>'+
					'<td>'+data.cps+'</td>'+
					'<td>'+data.fcsj+'</td>'+
					'<td>'+data.lhpbh+'</td>'+
					'<td>'+data.bz+'</td>'+
					'<td>'+data.hccc+'</td>'+
					'<td>'+data.zywbbz+'</td>'+
					'<td>'+data.hwydbh+'</td>'+
					'<td>'+data.zxlbbm+'</td></tr>';
			}
			$('#train_dynamic').html(content);
		},
		error:common_error
	});
}


function getShipWorkDynamic(CBBH) {
	$.ajax({
		url:urlsConstant.SHIP_WORK_DYNAMIC,
		dataType:'json',
		type:'post',
		async:true,
		data:{
			'CBBH':CBBH
		},
		success:function(response) {
			var content = '<tr><th>船舶编号</th><th>航次</th><th>合同编号清单</th><th>泊位编码</th><th>装卸类别编码</th><th>来港代码</th><th>往港代码</th><th>内外贸</th><th>进出口</th>'+
			'<th>抵锚时间</th><th>靠泊日期</th><th>吃水</th><th>允许作业通知时间</th><th>靠泊联检开始时间</th><th>靠泊联检结束时间</th><th>生产部通知作业时间</th><th>开工变开始</th><th>完工时间</th>'+
			'<th>计划离港时间</th><th>离港联检开始时间</th><th>离港联检结束时间</th><th>允许离港时间</th><th>生产部通知离港时间</th><th>船舶离港时间</th><th>备注</th></tr>';
			if(typeof(response.data) != 'undefined' && response.data != null) {
					var data = response.data;
					content += '<tr><td>'+data.cbdt+'</td>'+
					'<td>'+data.cbbh+'</td>'+
					'<td>'+data.hc+'</td>'+
					'<td>'+data.htbhqd+'</td>'+
					'<td>'+data.bwbm+'</td>'+
					'<td>'+data.zxlbbm+'</td>'+
					'<td>'+data.lgdm+'</td>'+
					'<td>'+data.wgdm+'</td>'+ 
					'<td>'+data.nwm+'</td>'+ 
					'<td>'+data.jck+'</td>'+ 
					'<td>'+data.dmsj+'</td>'+ 
					'<td>'+data.kbrq+'</td>'+ 
					'<td>'+data.cs+'</td>'+ 
					'<td>'+data.yxzytzsj +'</td>'+ 
					'<td>'+data.kbljkssj+'</td>'+ 
					'<td>'+data.kbljjssj+'</td>'+ 
					'<td>'+data.kbkssj+'</td>'+ 
					'<td>'+data.kbjssj+'</td>'+ 
					'<td>'+data.scbtzzysj+'</td>'+ 
					'<td>'+data.kssj+'</td>'+ 
					'<td>'+data.wgsj+'</td>'+ 
					'<td>'+data.jhlgsj+'</td>'+ 
					'<td>'+data.lgljkssj+'</td>'+
					 '<td>'+data.lgljjssj+'</td>'+ 
					'<td>'+data.yxlgsj+'</td></tr>';
			}
			$('#ship_dynamic').html(content);
		},
		error:common_error
	});
}

function getShipDynamic(CBBH) {
	$.ajax({
		url:urlsConstant.SHIP_DYNAMIC,
		dataType:'json',
		type:'post',
		async:true,
		data:{
			'CBBH':CBBH
		},
		success:function(response) {
			var content = '<tr><th>船舶状态编码</th><th>船代编码</th><th>预抵日起</th><th>往港名称</th><th>来港名称</th><th>泊位名称</th><th>装卸类别名称</th><th>船舶状态名称</th><th>船代名称</th></tr>';
			if(typeof(response.data) != 'undefined' && response.data != null) {
				var data = response.data;
					content += '<tr><td>'+data.cbztbm+'</td>'+
					'<td>'+data.cdbm+'</td>'+
					'<td>'+data.ydrq+'</td>'+
					'<td>'+data.wgmc+'</td>'+
					'<td>'+data.lgmc+'</td>'+
					'<td>'+data.bwmc+'</td>'+
					'<td>'+data.zxlbmc+'</td>'+
					'<td>'+data.cbztmc+'</td>'+
					'<td>'+data.cdmc+'</td></tr>';
			}
			$('#ship_dynamic').html(content);
		},
		error:common_error
	});
}

function createShipData(CBBH,CBHH,CBZWMC,
CBYWMC,
SSCGS,
JZRQ,
LXDH,
CJDM,
CJ,
CZ,
CCC,
CX,
ZD,
JD,
ZZD,
CC,
DGFS,
CK,
GD,
SD,
XS,
GCJD,
CR,
CKS,
CCS,
CGZL,
MZWCS,
MZSCS,
KZWCS,
KZSCS,
DGFH,
DGLX,
DSRL,
CZBM,
CDBM,
CDMC,
DGYW,
SHZSYXRQ) {
	$.ajax({
		url:urlsConstant.CREATE_SHIP_DATA,
		dataType:'json',
		type:'post',
		async:true,
		data:{
			'CBBH':CBBH,
			'CBHH':CBHH,
			'CBZWMC':CBZWMC,
			'CBYWMC':CBYWMC,
			'SSCGS':SSCGS,
			'JZRQ':JZRQ,
			'LXDH':LXDH,
			'CJDM':CJDM,
			'CJ':CJ,
			'CZ':CZ,
			'CCC':CCC,
			'CX':CX,
			'ZD':ZD,
			'JD':JD,
			'ZZD':ZZD,
			'CC':CC,
			'DGFS':DGFS,
			'CK':CK,
			'GD':GD,
			'SD':SD,
			'XS':XS,
			'GCJD':GCJD,
			'CR':CR,
			'CKS':CKS,
			'CCS':CCS,
			'CGZL':CGZL,
			'MZWCS':MZWCS,
			'MZSCS':MZSCS,
			'KZWCS':KZWCS,
			'KZSCS':KZSCS,
			'DGFH':DGFH,
			'DGLX':DGLX,
			'DSRL':DSRL,
			'CZBM':CZBM,
			'CDBM':CDBM,
			'CDMC':CDMC,
			'DGYW':DGYW,
			'SHZSYXRQ':SHZSYXRQ
		},
		success:function(response) {
			
			if(typeof(response.data) != 'undefined' && response.data != null && parseInt(response.data) > 0) {
				alert('提交成功');
			}
			alert('提交失败，请检查输入是否错误');
		},
		error:common_error
	});
}
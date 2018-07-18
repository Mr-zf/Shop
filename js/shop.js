$(function() {
	/*Tab切换*/
	$(".center-bottom h3 ol li").click(function() {
		$(this).addClass("opt").siblings().removeClass("opt");
		var _index = $(this).index();
		$(".pitch-up").hide().eq(_index).show();
	});
});
/*改变颜色*/
$(function() {
	$(".tinct ul li").click(function() {
		var _deserve = $(this).attr("nature");
		$("p .color-changing").html(_deserve);
		var index = 0;
		var $index = $(this).index();
		index = $index;
		$(".center-top .in-figure").eq($index).show().siblings().hide();
		$(".main-center h4 img").eq($index).show().siblings().hide();
	});
});
/*获取尺寸*/
$(function() {
	$(".measure span").click(function() {
		$(".meas").html($(this).html());
	});
});
/*总价*/
$(function() {
		$(".amount").change(function() {
			var $value = $(this).val();
			var $price = $("p .red").text();
			var $ride = $value * $price;
			$(".total").html($ride);
		});
});
	/*联动效果*/
$(function() {
	function getAjax() {
		$.ajax({
			type: "get",
			url: "json/a.txt",
			async: true,
			dataType: 'json',
			success: function(data) {
				province = data.p;
				city = data.c;
				county = data.a;
				$.each(province, function(i, val) {
					var str = "<option>" + val + "</option>";
					$("#province").append(str);
				});
			}
		});
	}
	getAjax();
	$("#province").change(function() {
		$("#city").html("<option value='0'>请选择市</option>");
		$("#county").html("<option value='0'>请选择区/县</option>");
		var $val = $("#province").val();
		$.each(city[$val], function(j, value) {
			$("#city").append("<option>" + value + "</option>");
		})
	});
	$("#city").change(function() {
		$("#county").html("<option value='0'>请选择区/县</option>");
		var $_val = $("#province").val() + "-" + $("#city").val();
		$.each(county[$_val], function(j, _value) {
			$("#county").append("<option>" + _value + "</option>");
		});
	});
});
/*提交订单*/
$(function(){
	var $product = $(".main-right");
	$("#cart").click(function(){
		var pro_name = $product.find("h5").text();
		var pro_meas = $product.find("p .meas").text();
		var pro_num = $product.find("p .amount").val();
		var pro_color = $product.find("p .color-changing").text();
		var pro_address = $product.find("#province").val()+"-"+
		                  $product.find("#city").val()+"-"+
		                  $product.find("#county").val();
		                  console.log(pro_address);
		var pro_price = $product.find("p .total").text();
/*		var orderForm= "感谢的您的购买。\n您购买的\n"+
					"产品是:"+pro_name+";\n"+
					"尺寸是:"+pro_meas+";\n"+
					"数量是:"+pro_num+"件;\n"+
					"颜色是:"+pro_color+";\n"+
					"收货地址:"+pro_address+";\n"+
					"总价格:"+pro_price+"元;\n";*/
		var $show = $(".shopping-show .presentation ul li span");
			$show.eq(0).html(pro_name);
			$show.eq(1).html(pro_meas);
			$show.eq(2).html(pro_num);
			$show.eq(3).html(pro_color);
			$show.eq(4).html(pro_price);
			$show.eq(5).text(pro_address);
		$("body .obstruct").show();
		$("body .shopping-show").show();
//		if(confirm(orderForm)){
			
//		}
		return false;
	});
	/*关闭订单列表*/
	$(".shopping-show h4 b").click(function(){
		$("body .obstruct").hide();
		$("body .shopping-show").hide();
	});
	/*取消*/
	$(".click-me .abolish").click(function(){
		$("body .obstruct").hide();
		$("body .shopping-show").hide();
	});
	/*确定订单列表*/
	$(".click-me .ensure").click(function(){
		$("body .obstruct").hide();
		$("body .shopping-show").hide();
		alert("亲:您已经下单了！");	
	});
	/*评分标准*/
	$(function(){
		$(".grade ul li").click(function(){
			if($(this).index()<2){
				$(this).parent().css("background-position","0-"+16*($(this).index()+1)+"px");				
			}else{
				$(this).parent().css("background-position","0-"+(16*($(this).index()+1)+80)+"px");
			}
			alert("您给此商品的评价是:"+($(this).index()+1)+"分");
		});
	});
});
/*放大镜*/
$(function(){
		var  $middleDiv = $(".main-center h4");
		$middleDiv.mousemove(function(e){
			$(".mask").show();
			$(".max").show();
			/*鼠标跟随*/
			$divOffset = $middleDiv.offset();
			var x = e.pageX -$divOffset.left-$(".mask").width()/2;
			var y = e.pageY -$divOffset.top-$(".mask").height()/2;
			if(x<=0){
				x=0;
			}else if(x>=$middleDiv.width()-$(".mask").width()){
				x = $middleDiv.width()-$(".mask").width();
			}
			if(y<=0){
				y=0;
			}else if(y>=$middleDiv.height()-$(".mask").height()){
				y = $middleDiv.height()-$(".mask").height();
			}
			var percenttagX = x/($middleDiv.width()-$(".mask").width());
			var percenttagY = y/($middleDiv.height()-$(".mask").height());
			$(".mask").css({
				'left':x+'px',
				'top':y+'px'
			});
			$(".max img").css({
				'left':-percenttagX*(800-$(".max").width()),
				'top':-percenttagY*(800-$(".max").width())
			});
		});
		$middleDiv.mouseout(function(){
			$(".mask").hide();
			$(".max").hide();
		});
});
/*更换大图*/
$(function(){
			/*小图*/
		$(".center-top .in-figure li img").click(function(){
		var imgUrl = $(this).attr("src");
		var $str = /.jpg/gi;
		var $res = "_small.jpg";
		var newUrl = imgUrl.replace($str,$res);
		$(".main-center h4 img").attr("src",newUrl);
		/*大图*/
		var small = $(".main-center h4 img").attr("src");
		var small_str = /small/gi;
		var big_str = "big";
		var bigUrl = small.replace(small_str,big_str);
		$(".main-center .max img").attr("src",bigUrl);		
	});
	
	/*看大图*/
	$(".main-center .look-big").click(function(){
		var a =$(".main-center .max img").attr("src");
		$(".big-ceng").show();
		$(".big-img").show();
	});
	$(".big-img").click(function(){
		$(".big-ceng").hide();
		$(".big-img").hide();
	});
});

$(function(){
	/*搜索框*/
	$(".header .text").keypress(function(){
		alert("回车提交表单！");
	});
	$(".bg1").click(function(){
		$(this).addClass("active1");
		$(".bg2").removeClass("active2");
		$(".bg3").removeClass("active3");
		$(".bg4").removeClass("active4");
		$(".bg5").removeClass("active5");
		$(".bg6").removeClass("active6");
		$(".nav,.main-left h1").css({background:"#b0d400"});
	});
	$(".bg2").click(function(){
		$(this).addClass("active2");
		$(".bg1").removeClass("active1");
		$(".bg3").removeClass("active3");
		$(".bg4").removeClass("active4");
		$(".bg5").removeClass("active5");
		$(".bg6").removeClass("active6");
		$(".nav,.main-left h1").css({background:"#fbab0d"});
	});
	$(".bg3").click(function(){
		$(this).addClass("active3");
		$(".bg1").removeClass("active1");
		$(".bg2").removeClass("active2");
		$(".bg4").removeClass("active4");
		$(".bg5").removeClass("active5");
		$(".bg6").removeClass("active6");
		$(".nav,.main-left h1").css({background:"#08bece"});
	});
	$(".bg4").click(function(){
		$(this).addClass("active4");
		$(".bg1").removeClass("active1");
		$(".bg2").removeClass("active2");
		$(".bg3").removeClass("active3");
		$(".bg5").removeClass("active5");
		$(".bg6").removeClass("active6");
		$(".nav,.main-left h1").css({background:"#e11355"});
	});
	$(".bg5").click(function(){
		$(this).addClass("active5");
		$(".bg1").removeClass("active1");
		$(".bg2").removeClass("active2");
		$(".bg4").removeClass("active4");
		$(".bg3").removeClass("active3");
		$(".bg6").removeClass("active6");
		$(".nav,.main-left h1").css({background:"#be46d8"});
	});
	$(".bg6").click(function(){
		$(this).addClass("active6");
		$("bg5").removeClass("active5");
		$("bg4").removeClass("active4");
		$("bg3").removeClass("active3");
		$("bg2").removeClass("active2");
		$("bg1").removeClass("active1");
		$(".nav,.main-left h1").css({background:"#3f5e9f"})
	});
	/*导航栏*/
	$(".nav ol").hide();
	$(".pull-down").mousemove(function(){
		$(this).siblings("ol").css("display","block");
	});
	$(".pull-down").mouseout(function(){
		$(this).siblings("ol").css("display","none");
	});
	/*轮播图*/
	//获取按钮
	var $aBtn = $(".top-left ol li");
	var $oLi = $(".top-left ul li");
	var $oUi = $(".top-left ul");
	var $imgWidth = $(".top-left ul li").eq(0).width();
	var num = 0;
	var timer=null;
	$aBtn.click(function(){
		//给按钮换色
		$(this).addClass("active").siblings().removeClass("active");
		//获取按钮的索引值
		var _index = $(this).index();
		num = _index;
		//计算偏移量
		var offset = _index*$imgWidth;
		$oUi.animate({'left':-offset});
	});
	timer = setInterval(Play,1000);
	function Play(){
		//递增
		num++;
		if(num == $aBtn.length){
			num = 0;
		}
		if(num==-1){
			num = 4;
		}
		$aBtn.eq(num).addClass("active").siblings().removeClass("active");
		$oUi.animate({'left':-num*$imgWidth});
	}
	$(".top-left").mousemove(function(){
		clearInterval(timer);
	});
	$(".top-left").mouseout(function(){
		timer = setInterval(Play,1000);
	});
	/*TAB切换*/
	$(".mian-bottom h2 ul li").click(function(){
		$(this).addClass("active-tab").siblings().removeClass("active-tab");
		var _index = $(this).index();
		$(".bottom-low").hide().eq(_index).show();
	});
	/*让他滚*/
	var timera = null;
	$(".right-bottom ul li").hover(function(){
		clearInterval(timera);
	},function(){
		timera = setInterval(function(){
			$(".right-bottom ul li:first").animate({
				'height':'0'
			},'slow',function(){
				$(this).removeAttr("style").insertAfter(".right-bottom ul li:last");
			})
		},2000);
	});
	/*鼠标跟随事件*/
	var x = 10;
	var y = 20;
	$(".right-bottom a.tooltip").mouseover(function(e){
		this.myTitle = this.title;
		this.title="";
		var $tooltip = "<div id='tooltip'>"+this.myTitle+"</div>";
		console.log($tooltip);
		$(".right-bottom").append($tooltip);
		$('#tooltip').css({
			'top':(e.pageY+y)+'px','left':(e.pageX+x)+'px'
		});
	}).mouseout(function(){
		this.title = this.myTitle;
		$("#tooltip").remove();
	}).mousemove(function(e){
		$('#tooltip').css({
			'top':(e.pageY+y)+'px','left':(e.pageX+x)+'px'
		});
	});
});

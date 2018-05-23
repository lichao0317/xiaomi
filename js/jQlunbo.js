
$(function(){
	//设置初始值
	var num = 0;
	function run(){
		num++;
		if(num==6){
			num = 0
		}
		$(".banner-box img").eq(num).fadeIn(300).siblings("img").fadeOut(300)
		$("#ul .ul_li").eq(num).css({background: "#ffffff"}).siblings(".ul_li").css({background:"#ccc"})
	}
	var timer = setInterval(run,1000)

	$(".banner-box").mouseover(function(){
		clearInterval(timer);
	})
	$(".banner-box").mouseout(function(){
		timer = setInterval(run,1000)
	})

	//左点击
	$("#click_left").click(function(){
		num--;
		if (num<0) {
			num=6
		}
		$(".banner-box img").eq(num).fadeIn(300).siblings("img").fadeOut(300)
		$("#ul .ul_li").eq(num).css({background: "#ffffff"}).siblings(".ul_li").css({background:"#ccc"})
	})

	//右点击
	$("#click_right").click(function(){
		num++;
		if (num==6) {
			num=0
		}
		$(".banner-box img").eq(num).fadeIn(300).siblings("img").fadeOut(300)
		$("#ul .ul_li").eq(num).css({background: "#ffffff"}).siblings(".ul_li").css({background:"#ccc"})
	})

	//li点击
	$("#ul .ul_li").mouseover(function(){
		var xuhao = $(this).index();
		num = xuhao;
		$(".banner-box img").eq(num).fadeIn(300).siblings("img").fadeOut(300)
		$("#ul .ul_li").eq(num).css({background: "#ffffff"}).siblings(".ul_li").css({background:"#ccc"})
	})

	
})
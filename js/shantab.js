$(function(){

	// 搜索框
	$('#search').focus(function(){
		$(this).css({border:'1px solid #ff6700'})
		$('.inputbox').fadeIn();
		$('.mi').fadeOut();
		$('.submit').css({border:'1px solid #ff6700'})
	})
	$('#search').blur(function(){
		$(this).css({border:'1px solid #e0e0e0'})
		$('.inputbox').fadeOut();
		$('.mi').fadeIn();
		$('.submit').css({border:'1px solid #e0e0e0'})

	})


//小米闪购切换
	//右点击
	$('.xm-box #right').click(function(){
		// alert()
		var num = 0;
		var len = $(this).parents('.box-hd').siblings('.xm-shop').length
		console.log(len);
		num++
		if(num>len){
			num=len
		}
		$(this).parents('.box-hd').siblings('.xm-shop').stop().animate({'left':num*-1226+'px'},500)
		$(this).css({'color':'#b0b0b0'})
		$(this).siblings().css({'color':'black'})
	}) 

	//左点击
	$('.xm-box #left').click(function(){
		// alert()
		var num = 0;
		var len = $(this).parents('.box-hd').siblings('.xm-shop').find('li').length
		num--
		if(num<0){
			num=0
		}
		$(this).parents('.box-hd').siblings('.xm-shop').stop().animate({'left':num*-1226+'px'},500)
		$(this).css({'color':'#b0b0b0'})
		$(this).siblings().css({'color':'black'})
	}) 


// 为你推荐
	$('.clickRight').click(function(){
		var num = 0;
		num++
		var len = $(this).parents('.box-hd').siblings('.shop').length
		if(num>len){
			num=len
		}
		$(this).parents('.box-hd').siblings('.shop').stop().animate({'left':num*-1226+'px'},500)
		$(this).css({'color':'#b0b0b0'})
		$(this).siblings().css({'color':'black'})
	})
	$('.clickLeft').click(function(){
		var num = 0;
		num--
		if(num<0){
			num=0
		}
		$(this).parents('.box-hd').siblings('.shop').stop().animate({'left':num*-1226+'px'},500)
		$(this).css({'color':'#b0b0b0'})
		$(this).siblings().css({'color':'black'})
	})


})
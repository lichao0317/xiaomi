$(function(){
	//定义初始值
	var num =0;
	//给contList添加鼠标移动事件
	$('.contList').mouseenter(function(){
		//循环小圆点(吧li拆分出来)
		$(this).find('.pagesBox ul .radius').each(function(){
			if($(this).hasClass('active')){
				var xunhao = $(this).index();
				num = xunhao;
				// console.log(num)
			}
		})
	})
	//右点击
	$('.rightcourse').click(function(){
		var len = $(this).siblings('.pagesBox').find(" ul .radius").length;
		// console.log(len);
		num++;
		if (num>len-1) {
			num=len-1;
		}
		$(this).siblings('.carousel').find('#Img').stop().animate({'left':num*-(216+39)+'px'})
		$(this).siblings('.pagesBox').find('ul .radius').eq(num).addClass('active').siblings('.radius').removeClass('active');
	})

	//左点击事件
	$('.leftcourse').click(function(){
		num--;
		if(num<0){
			num=0
		}
		$(this).siblings('.carousel').find("#Img").stop().animate({'left':num*-(216+39)+'px'})
		$(this).siblings('.pagesBox').find('ul .radius').eq(num).addClass('active').siblings('.radius').removeClass('active');
	})

	//li鼠标点击事件
	$('ul .radius').click(function(){
		var xunhao = $(this).index();
		num = xunhao;
		$(this).addClass('active').siblings('.radius').removeClass('active');
		$(this).parents('.pagesBox').siblings('.carousel').find('#Img').stop().animate({'left':num*-(216+39)+'px'})
	})
})
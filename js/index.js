$(function(){
	//banner描述右侧划出
	var $p = $(".b_d_content").parent();
	$("body").css({
		"overflow-x":"hidden"
	});
	$(".b_d_content").css({
		"position":"absolute",
		"top":"-250px",
		"right":"-350px"
	}).animate({
		"position":"absolute",
		"top":$p.offset().top+"px",
		"right":$p.offset().left+"px"
		},800,function(){
			$(this).css({
				"position":"static",
				"top":"0",
		        "right":"0"
			});
		});
		//slide 轮播商品列表
		var first=true;
		$(".page a:first").click(function(){
			//$(".ul_con").stop(true);//停止动画
			if(first){
			 $(".ul_con ul:last").prependTo($(".ul_con"));
			 $(".ul_con").css("margin-left","-1000px");
			}
			$(".ul_con").animate({
				"margin-left":"0px"
		    },2000,function(){
			  first=false;
			$(".ul_con ul:last").prependTo($(".ul_con"));
			 $(".ul_con").css("margin-left","-1000px");
			});
			
		});
				
			
		
		$(".page a:last").click(function(){
			
			next();
		});
		
		//自动滚动
		var timer = setInterval(function(){
			next();
		},3000);
			
		//左右翻动获得或失去焦点时，停止或重新开始定时器
		$(".page a:first,.page:last").hover(function(){
			clearInterval(timer);
		},function(){
	     timer = setInterval(function(){
	     next();
		},3000);
		
		});
		
		//显示隐藏backtop
		$(window).scroll(function(){
			var winHeight = $(window).height();//获得浏览器的可视窗口高度
			var scrollTop =$(window).scrollTop();//获得滚动条位置
			if(winHeight>scrollTop){
				$(".backtop").hide();
			}else{
				$(".backtop").show();
			}
		});
		//回到顶部
		$(".backtop").click(function(){
			$("html,body").animate({"scrollTop":"0px"},500)
		});
		
});
/*下翻*/
function next(){
	$(".ul_con").animate({
				"margin-left":"-1000px"
			},2000,function(){
				$(".ul_con").find("ul:first").appendTo($(".ul_con"));
			    $(".ul_con").css({
			    	"margin-left":"0px"
			    });
			});
	
}
		
		

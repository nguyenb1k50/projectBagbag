
$(document).ready(function(){
	var character = "dtPosition";
	$(window).on("scroll",function(){	
		//xử lý cho promo prices	
		var scrollPosition = $(window).scrollTop();
		// console.log(scrollPosition);
		var dtPosition = $('.promo').position();
		var onlytxtPosition = dtPosition.top;
		// console.log(onlytxtPosition);
		
		if(scrollPosition >= onlytxtPosition - 500){
			if(character == "dtPosition"){
				character = "trendtPosition";
				$('.promo .text-center .section_subtitle').addClass('lefttoright');
				$('.promo .text-center .section_title').addClass('righttoleft');
			}		
			
		}
		else if(scrollPosition < onlytxtPosition - 480){
			if(character == "trendtPosition"){
				character = "dtPosition";
				$('.promo .text-center .section_subtitle').removeClass('lefttoright');
				$('.promo .text-center .section_title').removeClass('righttoleft');	
			}
					
		}

		//xử lý cho new arrivals
		var dt2Position = $(".arrivals").position();
		var arrivalsPosition = dt2Position.top;
		// console.log(arrivalsPosition);	

		if(scrollPosition >= arrivalsPosition -445){
				$(".arrivals .text-center .section_subtitle").addClass("toptobot");
				$(".arrivals .text-center .section_title").addClass("bottotop");
		}
		else if(scrollPosition <= arrivalsPosition - 544){
			
				$(".arrivals .text-center .section_subtitle").removeClass("toptobot");
				$(".arrivals .text-center .section_title").removeClass("bottotop");
			
		};
	});

	//xử lý hover cho categories
	var list = document.querySelectorAll('.main_nav li')[1];
	// console.log(list);

	//hover there are two animations
	$(list).mouseenter(function(){
		$(".header .main_nav ul .list-group a").slideDown(400);
	})
	$(list).mouseleave(function(){
		$(".header .main_nav ul .list-group a").slideUp(350);
	})
	
	
});







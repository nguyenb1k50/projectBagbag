
$(document).ready(function(){
	//hover appear product details
	var pro = document.getElementsByClassName("product_image");
	// console.log(pro);
	var col = $(".product_grid .product");
	var bagmain = $(".product .bagmain");
	// console.log(bagmain);
	// console.log(col);
	// console.log(pro);
	$(pro).each(function(){	
		$(this).click(function(){
			$(this).toggleClass("active");
		})		
			// vitrihientaiar vitrihientai = this;			
			// for (var i = 0; vitrihientai = vitrihientai.previousElementSibling; i++) {
			// 	// console.log(i);				
			// }	
			// console.log(i);	
			// $(pro[i]).toggleClass("active");	
	});	
	//hover there are two animations
	var list = document.querySelectorAll('.main_nav li')[1];
	$(list).mouseenter(function(){
		$(".header .main_nav ul .list-group a").slideDown(400);
	})
	$(list).mouseleave(function(){
		$(".header .main_nav ul .list-group a").slideUp(350);
	})
	
});
	


	
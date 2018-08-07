

$(document).ready(function(){
	//xử lý sự kiện hover cho bags for man
	var hover = $(".title p");
	var opa = $(".overproducts .row");
	// console.log(product);

	// console.log(hover);
	$(hover).each(function(){
		$(this).click(function(){
			$(hover).each(function(){
				$(this).removeClass("happening");
			});
			$(this).addClass("happening");
			var vitrihientai = this;
			// console.log(vitrihientai);
			for (var vitri = 0;vitrihientai=vitrihientai.previousElementSibling; vitri++){};
			$(opa).each(function(i){
				$(opa[i]).removeClass("opa");
			})
			$(opa[vitri]).addClass("opa");
		});
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

	//sự kiện hover hiện nguồn gốc sản phẩm
	//for man
	var product1 = $(".opa .product_grid .btn");
	console.log(product1);
	var productimg = $(".product .product_image");
	var content = $(".product_image .contentpro");
	var content1 = $(".product_image .contentpro1");
	
	$(product1).each(function(){
		$(this).click(function(){
			var morecurrent = this;
			for (var i = 0;morecurrent=morecurrent.previousElementSibling; i++) {}
			// console.log(i);
			$(content[i]).slideDown("slow");

			$(this).css("opacity","0.2");
				$(productimg[i]).click(function(){
					// console.log(this);
					$(content[i]).slideUp("slow");
					$(product1[i]).css("opacity","1");
					
				});
		});
	});

	//for woman
	var product2 = $(".product_grid .womaninfo .btn");
	$(product2).each(function(){
		$(this).click(function(){
			var morecurrent = this;
			for (var i = 0;morecurrent=morecurrent.previousElementSibling; i++) {}
			$(content1[i]).slideDown("slow");
			$(this).css("opacity","0.2");
				$(content1[i]).click(function(){
					// console.log(this);
					$(this).slideUp("slow");
					$(product2[i]).css("opacity","1");
					
				});
		});
	});

});
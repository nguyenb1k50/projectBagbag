/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Image
5. Init Quantity


******************************/

$(document).ready(function () {
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var menuActive = false;
	var menu = $('.menu');
	var burger = $('.burger_container');

	setHeader();

	$(window).on('resize', function () {
		setHeader();
	});

	$(document).on('scroll', function () {
		setHeader();
	});

	initMenu();
	initImage();
	initQuantity();

	/* 

	2. Set Header

	*/

	function setHeader() {
		if ($(window).scrollTop() > 100) {
			header.addClass('scrolled');
		} else {
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu() {
		if ($('.menu').length) {
			var menu = $('.menu');
			if ($('.burger_container').length) {
				burger.on('click', function () {
					if (menuActive) {
						closeMenu();
					} else {
						openMenu();

						$(document).one('click', function cls(e) {
							if ($(e.target).hasClass('menu_mm')) {
								$(document).one('click', cls);
							} else {
								closeMenu();
							}
						});
					}
				});
			}
		}
	}

	function openMenu() {
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu() {
		menu.removeClass('active');
		menuActive = false;
	}

	/* 

	4. Init Image

	*/

	function initImage() {
		var images = $('.product_image_thumbnail');
		var selected = $('.product_image_large img');

		images.each(function () {
			var image = $(this);
			image.on('click', function () {
				var imagePath = new String(image.data('image'));
				selected.attr('src', imagePath);
			});
		});
	}

	/* 

	5. Init Quantity

	*/

	function initQuantity() {
		// Handle product quantity input
		if ($('.product_quantity').length) {
			var input = $('#quantity_input');
			var incButton = $('#quantity_inc_button');
			var decButton = $('#quantity_dec_button');

			var originalVal;
			var endVal;

			incButton.on('click', function () {
				originalVal = input.val();
				endVal = parseFloat(originalVal) + 1;
				input.val(endVal);
			});

			decButton.on('click', function () {
				originalVal = input.val();
				if (originalVal > 0) {
					endVal = parseFloat(originalVal) - 1;
					input.val(endVal);
				}
			});
		}
	}

	/*fUNCTION XU LY LAY COMMENT*/
	document.getElementById('frmCmt').onsubmit = function () {
		var feedbackList = [];
		var name = document.getElementById("txtYourName").value;
		var email = document.getElementById("txtYourEmail").value;
		var comment = document.getElementById("txtYourComment").value;
		var valueToStore = {
			name: name,
			email: email,
			comment: comment
		};
		if (localStorage['feedback'] !== undefined) {
			feedbackList = JSON.parse(localStorage['feedback']);
		}
		feedbackList.push(valueToStore);
		localStorage.setItem("feedback", JSON.stringify(feedbackList));
		location.reload();
	}

	document.getElementById('btnClr').onclick = function () {
		window.localStorage.clear();
		location.reload();
	}


	function post_comment() {
		try {
			var userInfoList = $.parseJSON(localStorage['feedback']);
			if (userInfoList !== undefined) {
				var outputHTML = "<ul>";
				for (var i = 0; i < userInfoList.length; i++) {
					var userInfo = userInfoList[i];
					var name = userInfo.name;
					var email = userInfo.email;
					var comment = userInfo.comment;
					outputHTML += '<li class="review clearfix">';
					outputHTML += '<div class="review_image">';
					outputHTML += '<img src="images/review_' + i + '.jpg" alt="">'
					outputHTML += '</div>';
					outputHTML += '<div class="review_content">';
					outputHTML += '<div class="review_name">';
					outputHTML += '<a href="#">' + name + '</a>';
					outputHTML += '</div>';
					outputHTML += '<div class="review_text">';
					outputHTML += '<p>' + comment + '</p></div>';
					outputHTML += '</div></li>';
				}
				outputHTML += "</ul>";
				var allCommentContainer = $("#idreviews_container");
				allCommentContainer.html(outputHTML);
			}
		} catch (err) {
			console.log('error =', err);
		}
	}
	post_comment();

});
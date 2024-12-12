(function ($) {

	"use strict";





	//Header Search Form

	if ($(".search-trigger").length) {

		$(".search-trigger").on("click", function () {

			$("body").addClass("search-active");

		});

		$(".close-search, .search-back-drop").on("click", function () {

			$("body").removeClass("search-active");

		});

	}



	// Mobile Menu



	$(".navbar-toggler").on("click", function () {

		$(this).toggleClass("active");

	});



	$(".navbar-nav li a").on("click", function () {

		$(".sub-nav-toggler").removeClass("active");

	});



	var subMenu = $(".navbar-nav .sub-menu");



	if (subMenu.length) {

		subMenu

			.parent("li")

			.children("a")

			.append(function () {

				return '<button class="sub-nav-toggler"> <i class="las la-angle-down"></i> </button>';

			});



		var subMenuToggler = $(".navbar-nav .sub-nav-toggler");



		subMenuToggler.on("click", function () {

			$(this).parent().parent().children(".sub-menu").slideToggle();

			return false;

		});

	}



	// data-backround 



	$("[data-background").each(function () {

		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");

	});





	//jQuery Sticky Area

	$(".sticky-area").sticky({

		topSpacing: 0,

	});



	//jQuery Animation

	new WOW().init();



	// Nice select

	$('select').niceSelect();



	//Counter Up



	$(".counter-number span").counterUp({

		delay: 10,

		time: 1000,

	});



	//Magnific Pop-up



	$(".video-play-btn").magnificPopup({

		type: "iframe",

	});



	// Circle Progress



	$("#circle_progress").circleProgress({

		value: 0.9,

		thickness: 3,

		size: 122,

		fill: '#061815',

	});



	$("#circle_progress_two").circleProgress({

		value: 0.5,

		thickness: 3,

		size: 122,

		fill: '#061815',

	});



	$("#circle_progress_three").circleProgress({

		value: 0.7,

		thickness: 3,

		size: 122,

		fill: '#061815',

	});



	// Hero Area Slider



	$('.homepage-slides').owlCarousel({

		items: 1,

		dots: true,

		nav: false,

		loop: true,

		autoplay: false,

		autoplayTimeout: 5000,

		smartSpeed: 2000,

		slideSpeed: 600,

		navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],

		responsive: {

			0: {

				items: 1,

				nav: false,

				dots: false,



			},

			600: {

				items: 1,

				nav: false,

				dots: false,



			},

			768: {

				items: 1,



			},

			1100: {

				items: 1,

			}

		}

	});



	$(".homepage-slides").on("translate.owl.carousel", function () {

		$(".single-slide-item h3")

			.removeClass("animated fadeInUp")

			.css("opacity", "1");

		$(".single-slide-item h1")

			.removeClass("animated fadeInDown")

			.css("opacity", "1");

		$(".single-slide-item p")

			.removeClass("animated fadeInUp")

			.css("opacity", "1");

		$(".single-slide-item .main-btn")

			.removeClass("animated fadeInDown")

			.css("opacity", "1");

	});



	$(".homepage-slides").on("translated.owl.carousel", function () {

		$(".single-slide-item h3")

			.addClass("animated fadeInUp")

			.css("opacity", "1");

		$(".single-slide-item h1")

			.addClass("animated fadeInDown")

			.css("opacity", "1");

		$(".single-slide-item p")

			.addClass("animated fadeInUp")

			.css("opacity", "1");

		$(".single-slide-item .main-btn")

			.addClass("animated fadeInDown")

			.css("opacity", "1");

	});





	// Testimonial Two 



	$('.testimonial-carousel').owlCarousel({

		items: 1,

		dots: true,

		nav: false,

		loop: true,

		autoplay: false,

		autoplayTimeout: 5000,

		smartSpeed: 2000,

		slideSpeed: 600,

		margin: 30,

		navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],

		responsive: {

			0: {

				items: 1,



			},

			600: {

				items: 1,



			},

			768: {

				items: 1,



			},

			1100: {

				items: 2,

			}

		}

	});





	// Testimonial slider

	$('.testimonial-slider-wrap').slick({

		slidesToShow: 1,

		slidesToScroll: 1,

		arrows: false,

		dots: true,

		fade: true,

		asNavFor: '.testimonial-author-wrap'

	});



	$('.testimonial-author-wrap').slick({

		slidesToShow: 4,

		slidesToScroll: 1,

		asNavFor: '.testimonial-slider-wrap',

		arrows: false,

		dots: false,

		centerMode: true,

		focusOnSelect: true,

		prevArrow: '<button type="button" class="slick-prev"></button>',

		nextArrow: '<button type="button" class="slick-next"></button>',

		centerPadding: 0,

		autoplay: false,

		autoplaySpeed: 2000,

		responsive: [

			{

				breakpoint: 1024,

				settings: {

					slidesToShow: 3,

					slidesToScroll: 3,

					infinite: true,

					dots: false,

				}

			},

			{

				breakpoint: 600,

				settings: {

					slidesToShow: 1,

					slidesToScroll: 1,

					infinite: true,

				}

			},

			{

				breakpoint: 480,

				settings: {

					slidesToShow: 1,

					slidesToScroll: 1,

					infinite: true,

				}

			}

			// You can unslick at a given breakpoint now by adding:

			// settings: "unslick"

			// instead of a settings object

		]

	});



	$(".instragram-inner").owlCarousel({

		items: 1,

		dots: true,

		nav: false,

		loop: true,

		autoplay: false,

		responsiveClass: true,

		margin: 20,

		responsive: {

			0: {

				items: 2,

				nav: false,

				dots: false,

			},



			530: {

				items: 3,

				nav: false,

				dots: false,

			},



			767: {

				items: 3,

				nav: false,

				dots: false,

			},



			930: {

				items: 4,

				loop: true,

			},



			1100: {

				items: 5,

				loop: true,

			},

			1200: {

				items: 6,

				dots: true,

				loop: true,

			},

		},

	});





	// Contact Form JS



	$("#contactForm").on("submit", function (e) {

		e.preventDefault();



		var $action = $(this).prop("action");

		var $data = $(this).serialize();

		var $this = $(this);



		$this.prevAll(".alert").remove();



		$.post(

			$action,

			$data,

			function (data) {

				if (data.response == "error") {

					$this.before(

						'<div class="alert alert-danger">' + data.message + "</div>"

					);

				}



				if (data.response == "success") {

					$this.before(

						'<div class="alert alert-success">' + data.message + "</div>"

					);

					$this.find("input, textarea").val("");

				}

			},

			"json"

		);

	});



	// Active & Remove Class 



	$(".sub-menu ul li").on("click", function () {

		$(".sub-menu").removeAttribute("style");

		$(this).addClass("active");

	});





	$("a.nav-link").on("mouseover", function () {

		$("a.nav-link").removeClass("active");

		$(this).addClass("active");

	});



	//Hide Loading Box (Preloader)

	function handlePreloader() {

		if ($(".preloader").length) {

			$(".preloader").delay(200).fadeOut(500);

		}

	}



	$(window).on("load", function () {

		handlePreloader();

	});



	// Mouse Custom Cursor

	function itCursor() {

		var myCursor = jQuery(".mouseCursor");

		if (myCursor.length) {

			if ($("body")) {

				const e = document.querySelector(".cursor-inner"),

					t = document.querySelector(".cursor-outer");

				let n,

					i = 0,

					o = !1;

				(window.onmousemove = function (s) {

					o ||

						(t.style.transform =

							"translate(" + s.clientX + "px, " + s.clientY + "px)"),

						(e.style.transform =

							"translate(" + s.clientX + "px, " + s.clientY + "px)"),

						(n = s.clientY),

						(i = s.clientX);

				}),

					$("body").on("mouseenter", "button, a, .cursor-pointer", function () {

						e.classList.add("cursor-hover"), t.classList.add("cursor-hover");

					}),

					$("body").on("mouseleave", "button, a, .cursor-pointer", function () {

						($(this).is("a", "button") &&

							$(this).closest(".cursor-pointer").length) ||

							(e.classList.remove("cursor-hover"),

								t.classList.remove("cursor-hover"));

					}),

					(e.style.visibility = "visible"),

					(t.style.visibility = "visible");

			}

		}

	}

	itCursor();







}(window.jQuery));


function confirmRedirect(event) {
	const confirmation = confirm("Are you sure you want leave this website?");
	if (!confirmation) {
		event.preventDefault();
	}
	return confirmation;
}


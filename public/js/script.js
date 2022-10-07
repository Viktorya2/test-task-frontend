	$(document).ready(function(){
			
		$(".double__bottom").on('click' ,function(e){
			e.preventDefault();
			$(this).toggleClass("disabled__double");
		});


		$(".edit__comment>a").on('click' ,function(e){
			e.preventDefault();
			$(this).closest('.edit__comment').find('.edit__dropdown').fadeIn(300);
		});


		$(".comment__reply>textarea").on("input" ,function(e){
			if ($(this).val().length != 0) {
				$(".comment__reply .reply__controls").fadeIn(300);
			} else{
				$('.comment__reply .reply__controls').fadeOut(300);
			}
		});

		$(".buttons__prev>a").on('click' ,function(e){
			e.preventDefault();
			$(this).closest(".buttons__prev").find('a').removeClass("active__buttons");
			$(this).addClass("active__buttons");
			if ($(this).attr("data-prev") == "preview__slider") {
				$('.tool__inner--preview>.progress__tooltip').fadeIn(300);
				$(".tool__inner--preview .preview__image").fadeIn(300);
				$('.tool__inner--preview .preview__slider').fadeIn(300);
				$('.comments__preview').css("display" , "none");
				$(".tag__errors.tag__block").css("display" , "none");
				$(".tag__errors.summary__block").css("display" , "none");
				$(".tooltip__content .tooltip__preview .preview__slider .inner__preview--slider").slick("reinit");
			}
			if ($(this).attr("data-prev") == "comment__preview") {
				$('.tool__inner--preview>.progress__tooltip').css("display" , "none");
				$(".tool__inner--preview .preview__image").css("display" , "none");
				$('.tool__inner--preview .preview__slider').css("display" , "none");
				$('.comments__preview').fadeIn(300);
				$(".tag__errors.tag__block").css("display" , "none");
				$(".tag__errors.summary__block").css("display" , "none");
			}
			if ($(this).attr("data-prev") == "tag__preview") {
				$('.tool__inner--preview>.progress__tooltip').css("display" , "none");
				$(".tool__inner--preview .preview__image").css("display" , "none");
				$('.tool__inner--preview .preview__slider').css("display" , "none");
				$('.comments__preview').css("display" , "none");
				$(".tag__errors.tag__block").fadeIn(300);
				$(".tag__errors.summary__block").css("display" , "none");
			}

			if ($(this).attr("data-prev") == "summary__preview") {
				$('.tool__inner--preview>.progress__tooltip').css("display" , "none");
				$(".tool__inner--preview .preview__image").css("display" , "none");
				$('.tool__inner--preview .preview__slider').css("display" , "none");
				$('.comments__preview').css("display" , "none");
				$(".tag__errors.tag__block").css("display" , "none");
				$(".tag__errors.summary__block").fadeIn(300);
			}
		});

		$(".elem__comment--lang>div").on('click' ,function(e){
			e.preventDefault();
			if ($(this).find("input").prop("checked") == true) {
				$(this).find("input").prop('checked' ,false);
			} else{
				$(this).find("input").prop('checked' ,true);
			}
		});


		$('.lang__comment').on('click' ,function(e){
			e.preventDefault();
			$(this).closest('.lang__list').fadeOut(300);
			$(".comment__lang[data-more="+ $(".more__lang>a[data-more="+ $(this).closest(".lang__list").attr("data-more") +"]").attr("data-more") +"]").fadeIn(300);
			$(".comment__lang[data-more="+ $(".more__lang>a[data-more="+ $(this).closest(".lang__list").attr("data-more") +"]").attr("data-more") +"]").css({"top"  : $(".more__lang>a[data-more="+ $(this).closest(".lang__list").attr("data-more") +"]").offset().top + "px" , "left" : $(".more__lang>a[data-more="+ $(this).closest(".lang__list").attr("data-more") +"]").offset().left + "px"});
		});

		$(".more__lang").each(function(index,elem){
			$(".float__block").append($(elem).find(".lang__list"));
			$(".float__block").append($(elem).find(".comment__lang"));
		});
		$(".more__lang>a").on("click" ,function(e){
			e.preventDefault();
			$(".more__lang>a").removeClass("active__lang--button");
			$(this).addClass("active__lang--button");
			$(".lang__list").css("display" ,"none");
			$(".lang__list[data-more=" + $(this).attr("data-more") + "]").fadeIn(300);
			$(".lang__list[data-more=" + $(this).attr("data-more") + "]").css({"top"  : $(this).offset().top + "px" , "left" : $(this).offset().left + "px"});
		});


		if ($(window).width() > 1640) {
			$(window).on("resize" ,function(){
				$('.full__bottom .controls__left').each(function(index,elem){
					$(elem).css("margin-left" , +$(elem).closest('.full__translation').find('.full__top-left>.full__left--left').css('width').slice(0 , -2) + 40 + "px");
				});
			});
		}

		$('.translate__details>a').on("click",function(e){
			e.preventDefault();
			if ($(this).parent().hasClass("details__active")) {
				$(this).parent().removeClass("details__active");
				$(this).text("Show more");
				$(this).closest(".full__bottom").find(".translate__suggestions").slideUp(300);
				$(this).closest(".full__bottom").find('.history__wrapper').slideUp(300)
				$(this).closest(".full__bottom").find(".concordance__wrapper").slideUp(300);
				$(this).closest(".full__bottom").find(".qa__block").slideUp(300);
				$(this).closest(".full__bottom").find(".suggestions__table").slideUp(300);
				$(this).closest(".full__bottom").find(".term__wrapper").slideUp(300);
				$(this).closest(".full__bottom").find(".symbols__wrapper").slideUp(300);
			} else {
				$(this).parent().addClass("details__active");
				$(this).text("Show less");
				$(this).closest(".full__bottom").find(".translate__suggestions").slideDown(300);
				$(this).closest('.full__bottom').find(".translate__suggestions .active__suggestion").removeClass("active__suggestion");
			}
		});


		$(".tooltip__menu--small a").on('click' ,function(e){
			e.preventDefault();
			$(this).toggleClass('active__tooltip');
			if ($(this).hasClass("active__tooltip")) {
				$('.tooltip__menu').slideDown(300);
			} else{
				$('.tooltip__menu').slideUp(300);
			}
		});


		$('.lang__info .lang__button').on("mouseenter" ,function(e){
			e.preventDefault();
			$(this).closest('.lang__button').find(".lang__placeholder").fadeIn(100);
		});

		$('.lang__info .lang__button').on("mouseleave" ,function(e){
			e.preventDefault();
			$(this).closest('.lang__button').find(".lang__placeholder").fadeOut(100);
		});

		$(".double__arrow").on("mouseenter" ,function(e){
			e.preventDefault();
			$(this).find(".double__placeholder").fadeIn(100);
		});

		$(".double__arrow").on("mouseleave" ,function(e){
			e.preventDefault();
			$(this).find(".double__placeholder").fadeOut(100);
		});


		$('.search__replace>a').on('mouseenter' ,function(e){
			e.preventDefault
			$(this).closest('.search__replace').find('.replace__tooltip').fadeIn(300);
		});

		$('.search__replace>a').on('mouseleave' ,function(e){
			e.preventDefault
			$(this).closest('.search__replace').find('.replace__tooltip').fadeOut(300);
		});


		var NewTimer;

		$(".small__tag>a").on("mouseenter" ,function(e){
			e.preventDefault();
			clearTimeout(NewTimer);
			NewTimer = setTimeout(function(){
				$(".tag__float").css("display" ,"none");
			}, 5000);
			$(".small__tag .tag__float").css("display" , 'none');
			$(this).closest(".small__tag").find(".tag__float").fadeIn(200);
		});
		$('.small__tag').on("mouseleave" ,function(e){
			e.preventDefault();
			clearTimeout(NewTimer);
			$('.tag__float').css("display" , "none");
		});
		$(".tag__float").on("mouseenter" ,function(e){
			$(this).css("display" , "block");
		});

			$(".replace__form .replace__field>input").on("input" ,function(e){
				e.preventDefault();
				if ($(this).val().length != 0) {
					$(this).closest(".replace__form").addClass("replace__field--filled");
					$(this).closest(".replace__form").find("input[type='submit']").removeAttr("disabled");
				} else {
					$(this).closest(".replace__form").removeClass("replace__field--filled");
					$(this).closest(".replace__form").find("input[type='submit']").attr("disabled" ,"disabled");
				}
			});

			$(".search__replace>a").on('click' ,function(e){
				e.preventDefault();
				if ($(this).hasClass("active__replace--button")) {
					$(this).removeClass("active__replace--button");
					$(this).closest(".search__table--wrapper").find(".search__droppable").slideUp(300);
				} else {
					$(this).addClass("active__replace--button");
					$(this).closest(".search__table--wrapper").find(".search__droppable").slideDown(300);
				}
			});

		$(".search__filter>a").on('click' ,function(e){
			e.preventDefault();
			$(this).closest(".search__filter").addClass('active__search');
			$(this).closest('.search__filter').find(".search__dropdown").fadeIn(300);
		});
		$('.search__filter .search__dropdown ul li a').on("click" ,function(e){
			e.preventDefault();
			if ($(this).closest('.search__filter')) {}
			$(this).closest('.search__filter').find(".search__dropdown").fadeOut(300);
		});
		$('.check__droppable ul li a').on('click' ,function(e){
			e.preventDefault();
			if ($(this).find("input").prop("checked") == false) {
				$(this).find("input").addClass("current__input");
				$(this).closest(".check__droppable").find("input").each(function(index,elem){
					if (!$(elem).hasClass("current__input")) {
						$(elem).prop("checked" , false);
						$(elem).closest("li").removeClass("check__active");
					} else{
						$(elem).closest(".check__droppable").find("li").removeClass("check__active");
						$(elem).prop("checked" ,true);
						$(elem).closest('li').addClass("check__active");
						if ($(elem).closest("a").attr('data-check') == "search__field") {
							$('.tooltip__table--wrapper').css("display" , "none");
							$(".search__table--wrapper").fadeIn(200);
						} else {
							$('.tooltip__table--wrapper').fadeIn(200);
							$(".search__table--wrapper").css("display" , "none");
						}
						$(elem).removeClass('current__input');
					}
				});
		} else {
				$(this).find("input").prop("checked" , false);
				$('.tooltip__table--wrapper').fadeIn(200);
				$(".search__table--wrapper").css("display" , "none");
			}
		});


		$('.search__dropdown ul li a').on('click' ,function(e){
			e.preventDefault();
			if ($(this).find("input").prop("checked") == false) {
				$(this).closest("li").addClass("search__active--filter");
				$(this).closest(".search__dropdown").find("input").each(function(index,elem){
					if (!$(elem).closest("li").hasClass("search__active--filter")) {
						$(elem).prop("checked" , false);
					} else{
						$(elem).prop("checked" ,true);
						$(elem).closest("li").removeClass('search__active--filter');
					}
				});
			} else {
				$(this).find("input").prop("checked" , false);
			}
		});

		$(".check__picker a").on("click" ,function(e){
			$(this).closest(".droppable__sub").find("input").prop("checked" ,false);
			$(this).closest(".droppable__sub").find(".active__picker").removeClass('active__picker');
			$(this).closest("li").addClass("active__picker");
			$(this).find("input").prop("checked" ,true);
			if ($(this).closest("ul").hasClass('show__page')) {
				if ($(this).find("input").val() == "horizontal") {

				}

				if ($(this).find("input").val() == "vertical") {
					$('.tooltip__content .tooltip__preview .tool__inner--preview .progress__tooltip').css({"left" : "90px" , "width" : "calc(100% - 90px)"});
					$(".tooltip__content .tooltip__preview .preview__image .preview__left").css({"width" : "calc(100% - 90px)" , "margin-right" : "0px"});
					$('.tooltip__content .tooltip__preview .preview__slider').css({"width" : "90px" , "height" : "calc(100% - 33px)" , "margin-left" : "0px" , "opacity" : "1" , "pointer-events" : "auto"});
					$(".tooltip__content .tooltip__preview .preview__slider .elem__slider .slider__info").css('min-width:0px;')
					$(".tooltip__content .tooltip__preview .preview__image").css({"width" : "calc(100% - 90px)" , "margin-left" : "auto" , "opacity" : '1' , "pointer-events" : "auto"});
					$('.tooltip__content .tooltip__preview .preview__slider .elem__slider .slider__info').css({"min-width" : "0px" , "height" : "60px"});
					$(".tooltip__content .tooltip__preview .preview__slider .elem__slider .slider__info p").css("font-size" , "10px");
					$(".inner__preview--slider").css({"height" : "auto" , 'max-width' : "100%"});
					$(".inner__preview--slider").slick('unslick');
					$(".inner__preview--slider").slick({
						vertical: true,
						verticalSwiping: true,
						slidesToShow:1,
						infinite:false,
						// variableWidth:true
					})
				}

				if ($(this).find("input").val() == "horizontal") {
					$(".tooltip__content .tooltip__preview .preview__image .preview__left").css({"width" : "100%" , "margin-right" : "auto"});
					$('.tooltip__content .tooltip__preview .tool__inner--preview .progress__tooltip').css({"left" : "0px" , "width" : "100%"});
					$('.tooltip__content .tooltip__preview .preview__slider').css({"width" : "100%" , "height" : "auto" , "margin-left" : "0px" , "opacity" : "1" , "pointer-events" : "auto"});
					$(".tooltip__content .tooltip__preview .preview__slider .elem__slider .slider__info").css('min-width:130px;')
					$(".tooltip__content .tooltip__preview .preview__image").css({"width" : "auto" , "margin-left" : "auto" , "opacity" : "1" , "pointer-events" : "auto"});
					$('.tooltip__content .tooltip__preview .preview__slider .elem__slider .slider__info').css({"min-width" : "130px" , "height" : "75px"});
					$(".tooltip__content .tooltip__preview .preview__slider .elem__slider .slider__info p").css("font-size" , "14px");

					$(".inner__preview--slider").css({"height" : "auto" , 'max-width' : "100%"});
					$(".inner__preview--slider").slick('unslick');
					$(".inner__preview--slider").slick({
						slidesToShow:1,
						infinite:false,
						variableWidth:true
					})
				}

				if ($(this).find("input").val() == "page__only") {
					$(".tooltip__content .tooltip__preview .preview__image .preview__left").css({"width" : "100%" , "margin-right" : "auto"});
					$('.tooltip__content .tooltip__preview .tool__inner--preview .progress__tooltip').css({"left" : "0px" , "width" : "100%"});
					$('.tooltip__content .tooltip__preview .preview__slider').css({"width" : "100%" , "height" : "auto" , "margin-left" : "0px" , "opacity" : "0" , "pointer-events" : "none"});
					$(".tooltip__content .tooltip__preview .preview__slider .elem__slider .slider__info").css('min-width:130px;')
					$(".tooltip__content .tooltip__preview .preview__image").css({"width" : "auto" , "margin-left" : "auto" , "opacity" : "1" , "pointer-events" : "auto"});
					$('.tooltip__content .tooltip__preview .preview__slider .elem__slider .slider__info').css({"min-width" : "130px" , "height" : "75px"});
					$(".tooltip__content .tooltip__preview .preview__slider .elem__slider .slider__info p").css("font-size" , "14px");

					$(".inner__preview--slider").css({"height" : "auto" , 'max-width' : "100%"});
					$(".inner__preview--slider").slick('unslick');
					$(".inner__preview--slider").slick({
						slidesToShow:1,
						infinite:false,
						variableWidth:true
					})
				}

				if ($(this).find("input").val() == "thumbnail__only") {
					$(".tooltip__content .tooltip__preview .preview__image .preview__left").css({"width" : "100%" , "margin-right" : "auto"});
					$('.tooltip__content .tooltip__preview .tool__inner--preview .progress__tooltip').css({"left" : "0px" , "width" : "100%"});
					$('.tooltip__content .tooltip__preview .preview__slider').css({"width" : "100%" , "margin-left" : "0px" , "opacity" : "1" , "pointer-events" : "auto"});
					$(".tooltip__content .tooltip__preview .preview__slider .elem__slider .slider__info").css('min-width:130px;')
					$(".tooltip__content .tooltip__preview .preview__image").css({"width" : "auto" , "margin-left" : "auto" , "opacity" : "0" , "pointer-events" : "none"});
					$('.tooltip__content .tooltip__preview .preview__slider .elem__slider .slider__info').css({"min-width" : "130px" ,  "height" : "75px"});
					$(".tooltip__content .tooltip__preview .preview__slider .elem__slider .slider__info p").css("font-size" , "14px");

					$(".inner__preview--slider").css({"height" : "auto" , "max-width" : "100%" , "margin-left" : "auto" , "margin-right" : "auto"});
					$(".inner__preview--slider").slick('unslick');
					$(".inner__preview--slider").slick({
						// vertical: true,
						// verticalSwiping: true,
						slidesToShow:1,
						infinite:false,
						// variableWidth:true
					})
				}
			}
			 if ($(this).closest("ul").hasClass("position__picker")) {
			 	if ($(this).find("input").val() == "right") {
			 		$('.preview__more .droppable__sub').css({"right" : "100%" , "left" : "auto"});
			 		$('.tool__main--').split().destroy();
			 		$(".tooltip__main--container").css({ "margin-left" : "20px"});
			 		$('.tooltip__main--container').insertBefore(".tooltip__preview");
			 		$(".tooltip__content .tooltip__main .tooltip__table--wrapper").css("width" , "calc(100%)");
			 		$(".tooltip__content .tooltip__main .progress__tooltip").css("width" , "calc(100%)");
			 		
			 		var position = $(window).width() - 376 + "px";
			 		$('.tool__main--').split({
				      orientation:'vertical',
				      position:position,
				      limit: 340,
				      onDrag: function(event) {
				      	if ($(".tooltip__table").css("width").slice(0 , -2) > 1200) {
	      		$('.full__bottom .controls__left').each(function(index,elem){
					$(elem).css("margin-left" , +$(elem).closest('.full__translation').find('.full__top-left>.full__left--left').css('width').slice(0 , -2) + 40 + "px");
				});
	      	} else{
	      		$('.tooltip__content .tooltip__main .tooltip__table table tr td .translate__controls .controls__left').css({"margin-left" : "0px" , "margin-right" : "50px"});
	      		$(".tooltip__content .tooltip__main .tooltip__table table tr td .translate__controls").css("justify-content" , 'flex-end');
	      	}
				      	$(".inner__preview--slider").slick('reinit');
				    }
				    });
				    $(".tooltip__preview.right_panel").css("margin-left" , "20px");
				    $('.vsplitter').css('margin-left' ,"20px");
			 	}
			 	if ($(this).find("input").val() == "left") {
			 		$(".tooltip__main--container").css("padding-left" , "0px");
			 		$('.preview__more .droppable__sub').css({"right" : "auto" , "left" : "100%"});
			 		$('.tool__main--').split().destroy();
			 		$('.tooltip__preview').insertBefore(".tooltip__main--container");
			 		// $(".tooltip__content .tooltip__main .tooltip__table--wrapper").css("width" , "calc(100% - 20px)");
			 		// $(".tooltip__content .tooltip__main .progress__tooltip").css("width" , "calc(100% - 20px)");

			 		$('.tool__main--').split({
				      orientation:'vertical',
				      position:'350px',
				      limit: 340,
				      onDrag: function(event) {
				      	if ($(".tooltip__table").css("width").slice(0 , -2) > 1200) {
	      		$('.full__bottom .controls__left').each(function(index,elem){
					$(elem).css("margin-left" , +$(elem).closest('.full__translation').find('.full__top-left>.full__left--left').css('width').slice(0 , -2) + 40 + "px");
				});
	      	} else{
	      		$('.tooltip__content .tooltip__main .tooltip__table table tr td .translate__controls .controls__left').css({"margin-left" : "0px" , "margin-right" : "50px"});
	      		$(".tooltip__content .tooltip__main .tooltip__table table tr td .translate__controls").css("justify-content" , 'flex-end');
	      	}
				      	$(".inner__preview--slider").slick('reinit');
				    }

				    });
				    $(".tooltip__main--container").css({"padding-left" : "0px" , "margin-left" : "0px"});
					$(".tooltip__preview.left_panel").css("margin-left" , "0px");
				    $('.vsplitter').css('margin-left' ,"0px");
			 	}
			 }
		});

		$('.controls__more>a').on("click" ,function(e){
			e.preventDefault();
			$(".float__block>.float__more." + $(this).attr("data-preview")).fadeIn(300);
			$(".float__block>.float__more." + $(this).attr("data-preview")).css({"top"  : $(this).offset().top + "px" , "left" : $(this).offset().left + "px"});
		});

		$('.translate__info').each(function(index,elem){
			if ($(elem).find(".double__arrow").length) {
				var firstEl = $(elem).find('.double__arrow').css("height").slice(0 , -2);				
			}
			if ($(elem).find(".status__translate").length) {
				var secEl = $(elem).find(".status__translate").css("height").slice(0 , -2);
			}
			$(elem).css("min-height" , +firstEl + +secEl + +12 + "px");
		});
		$('.tooltip__table table .translate__info .translate__details>a').on('click' , function(e){
			if ($(this).parent().hasClass("details__active")) {
				$(this).parent().removeClass("details__active");
				$(this).text("Show more");
				$(this).closest(".translate__info").find(".translate__suggestions").slideUp(300);
				$(this).closest(".translate__info").find('.history__wrapper').slideUp(300)
				$(this).closest(".translate__info").find(".concordance__wrapper").slideUp(300);
				$(this).closest(".translate__info").find(".qa__block").slideUp(300);
				$(this).closest(".translate__info").find(".suggestions__table").slideUp(300);
				$(this).closest(".translate__info").find(".term__wrapper").slideUp(300);
				$(this).closest(".translate__info").find(".symbols__wrapper").slideUp(300);
			} else {
				$(this).parent().addClass("details__active");
				$(this).text("Show less");
				$(this).closest(".translate__info").find(".translate__suggestions").slideDown(300);
				$(this).closest('.translate__info').find(".translate__suggestions .active__suggestion").removeClass("active__suggestion");
			}
		});


		$('.hotkeys__tab>.elem__tab').on("click" ,function(e){
			e.preventDefault();
			$(this).closest(".hotkeys__tab").find(".current__tab").removeClass("current__tab");
			$(this).addClass("current__tab");
			$(this).closest(".hotkeys__wrapper").find('.hotkeys__container').css("display" , 'none');
			$(this).closest(".hotkeys__wrapper").find(".hotkeys__container." + $(this).attr("data-tab")).fadeIn(300);
		});

		$(".qa__switcher").on('click' ,function(e){
			if ($(this).find("input").prop("checked") == true) {
				$(this).find("input").prop("checked" ,false);			
			} else{
				$(this).find("input").prop("checked" ,true);			
			}
		})

		// $(".symbols__wrapper , .suggestions__table , .qa__block , .term__wrapper").each(function(index,elem){
		// 	$(elem).css("width" , "calc(100% + "+ (+$(elem).closest("td").next().width() + 77) + "px");
		// });
		// $(".qa__block , .concordance__wrapper").each(function(index,elem){
		// 	$(elem).css("width" , "calc(100% + "+ (+$(elem).closest("td").next().width() + 87) + "px");
		// });
	// 	$(window).on("resize" ,function(){
	// 		$(".symbols__wrapper , .suggestions__table , .qa__block , .term__wrapper").each(function(index,elem){
	// 			$(elem).css("width" , "calc(100% + "+ (+$(elem).closest("td").next().width() + 95) +"px");
	// 		});
	// 	});
	// 	$(window).on("resize" ,function(){
	// 		$(".qa__block , .concordance__wrapper ,  .concordance__wrapper , .history__wrapper").each(function(index,elem){
	// 			$(elem).css("width" , "calc(100% + "+ (+$(elem).closest("td").next().width() + 105) +"px");
	// 		});
	// 	});

	// var biggestUl = 0
	// $(".translate__suggestions>ul").each(function(index,elem){
	// 	if ($(elem).css("width").slice(0 , -2) > biggestUl) {
	// 		biggestUl = $(elem).css("width").slice(0 , -2);

	// 	}
	// });
	// biggestUl = biggestUl*2 + 60 + 65;
	// $('.tooltip__content .tooltip__main .tooltip__table table').css("min-width" , biggestUl + "px");
	// $(".search__table--wrapper >.search__head , .search__table--wrapper>.search__droppable , .search__table--wrapper>.content__search--result").css("min-width" , biggestUl + 'px');
	$('.controls__save .controls__drop ul li a').on("click" ,function(e){
		e.preventDefault();
		$(this).closest("td").find(".status__translate>img").attr("src" , $(this).attr("data-src"));
		$(this).closest("td").find(".status__translate>.status__info>p").text($(this).attr("data-text"));
		$(this).closest(".controls__drop").fadeOut(300);
	});


	$(".status__translate").on("mouseenter" ,function(e){
		e.preventDefault();
		$(this).find('.status__info').fadeIn(100);
	});
	$(".status__translate").on("mouseleave" ,function(e){
		e.preventDefault();
		$(this).find('.status__info').fadeOut(100);
	});

	$(".status__info").on("mouseenter" ,function(e){
		e.preventDefault();
		$(this).find('.status__float').fadeIn(100);
	});
	$(".status__info").on("mouseleave" ,function(e){
		e.preventDefault();
		$(this).find('.status__float').fadeOut(100);
	});

	$(".tooltip__menu .droppable__menu>a").on("click" ,function(e){
		e.preventDefault();
		if ($(this).hasClass("current__drop--menu")) {
			$(this).removeClass("current__drop--menu");
			$(this).closest(".droppable__menu").find(".droppable__box").fadeOut(300);	
		} else {
			$(".current__drop--menu").removeClass("current__drop--menu");
			$(".droppable__box").css("display" , "none");
			$(this).addClass("current__drop--menu");
			$(this).closest(".droppable__menu").find(".droppable__box").fadeIn(300);	
		}
	});


	$('.controls__save .droppable__controls').on("click" ,function(e){
		e.preventDefault();
		$(this).addClass("active__controls");
		$(this).closest('.controls__save').find(".controls__drop").fadeIn(300);
	});


	$(".shortcut__button").on("click" ,function(e){
		e.preventDefault();
		$(this).toggleClass("active__shortcut");
		if ($(this).hasClass("active__shortcut")) {
			$(this).closest(".short__wrapper").find(".hotkeys__wrapper").fadeIn(300);
		} else{
			$(this).closest(".short__wrapper").find(".hotkeys__wrapper").fadeOut(300);
		}
	});

	 if ($(window).width() > 991) {
	 	$('.tool__main--').split({
	      orientation:'vertical',
	      position:'350px',
	      limit: 340,
	      onDrag: function(event) {
	      	if ($(".tooltip__table").css("width").slice(0 , -2) > 1200) {
	      		$('.full__bottom .controls__left').each(function(index,elem){
					$(elem).css("margin-left" , +$(elem).closest('.full__translation').find('.full__top-left>.full__left--left').css('width').slice(0 , -2) + 40 + "px");
				});
	      	} else{
	      		$('.tooltip__content .tooltip__main .tooltip__table table tr td .translate__controls .controls__left').css({"margin-left" : "0px" , "margin-right" : "50px"});
	      		$(".tooltip__content .tooltip__main .tooltip__table table tr td .translate__controls").css("justify-content" , 'flex-end');
	      	}
	      	$(".inner__preview--slider").slick('reinit');
	    }

	    });
	 }

	$(".tooltip__table tr").on('click' ,function(e){
		e.preventDefault();
		if (!$(this).hasClass("active__translate")) {

			var currentActive = $(this).closest(".tooltip__table").find(".active__translate");
			$(currentActive).find(".concordance__wrapper").css("display" , 'none');
			$(currentActive).find(".history__wrapper").css("display"   , "none");
			$(currentActive).find(".qa__block").css("display" , 'none');
			$(currentActive).find(".suggestions__table").css("display" , 'none');
			$(currentActive).find(".term__wrapper").css("display" , 'none');
			$(currentActive).find(".symbols__wrapper").css("display" , 'none');

			$(this).closest(".tooltip__table").find(".active__translate").removeClass("active__translate");
			$(this).addClass('active__translate');
			if ($(window).width() > 1640) {
				$('.full__bottom .controls__left').each(function(index,elem){
					$(elem).css("margin-left" , +$(elem).closest('.full__translation').find('.full__top-left>.full__left--left').css('width').slice(0 , -2) + 40 + "px");
				});
			}
			// if ($(this).closest(".tooltip__table").find(".active__translate").find(".controls__errors").length) {
			// 	$(this).closest(".tooltip__table").find('.active__translate').find(".translate__suggestions").css("margin-top", $(this).closest('.tooltip__table').find(".active__translate").find(".controls__errors").css("height"));
			// }
			$(".symbols__wrapper , .suggestions__table , .qa__block , .term__wrapper").each(function(index,elem){
				$(elem).css("width" , "calc(100% + "+ (+$(elem).closest("td").next().width() + 95) + "px");
			});
			$(".qa__block , .concordance__wrapper , .history__wrapper").each(function(index,elem){
				$(elem).css("width" , "calc(100% + "+ (+$(elem).closest("td").next().width() + 105) + "px");
			});
			$('.tooltip__table tr').each(function(index,elem){
				if (!$(elem).hasClass("active__translate")) {
					$(elem).find(".symbols__wrapper").css("display" , 'none');
				}
			});
			var activeTab = $('.active__translate  .translate__suggestions ul li.active__suggestion a').attr("data-switcher");
			$(".active__translate").find("." + activeTab).fadeIn(300);
			// $('.translate__info').each(function(){
			//     var $div = $(this);
			//     $($div).css("height" ,"auto");
			//     setTimeout(function(){
		 //    		$div.height($div.closest('td').height());
			//     }, 50);
			// });


			$(".float__border").each(function(index,elem){
				var commonHeight = 0;
				if ($(elem).closest('.active__translate').find("td:nth-child(3)>.translate__main>span").length) {
					commonHeight+= +$(elem).closest('.active__translate').find("td:nth-child(3)>.translate__main>span").css("height").slice(0, -2);
				}
				if ($(elem).closest('.active__translate').find("td:nth-child(3)>.translate__main>p").length) {
					commonHeight+= +$(elem).closest('.active__translate').find("td:nth-child(3)>.translate__main>p").css("height").slice(0, -2);
				}
				if ($(elem).closest('.active__translate').find("td:nth-child(3)>.translate__main>.translate__controls").length) {
					commonHeight+= +$(elem).closest('.active__translate').find("td:nth-child(3)>.translate__main>.translate__controls>.controls__left").css("height").slice(0, -2);
				}
				commonHeight = commonHeight + 20 + "px";
				$(elem).css("height" , commonHeight);
				commonHeight = 0;
			});
		}
	});


	$(".translate__suggestions ul li a").on("click" ,function(e){
		e.preventDefault();
		$(this).closest(".full__bottom").find(".history__wrapper").css("display" , "none");{}
		$(this).closest(".full__bottom").find(".concordance__wrapper").css("display" , "none");
		$(this).closest(".full__bottom").find(".qa__block").css("display" , "none");
		$(this).closest(".full__bottom").find(".suggestions__table").css("display" , "none");
		$(this).closest(".full__bottom").find(".term__wrapper").css("display" , "none");
		$(this).closest(".full__bottom").find(".symbols__wrapper").css("display" , "none");
		if ($(this).closest("li").hasClass("active__suggestion")) {
			$(this).closest("li").removeClass("active__suggestion");
			$(this).closest(".full__bottom").find(".concordance__wrapper").css("display" , "none");
			$(this).closest(".full__bottom").find(".qa__block").css("display" , "none");
			$(this).closest(".full__bottom").find(".suggestions__table").css("display" , "none");
			$(this).closest(".full__bottom").find(".term__wrapper").css("display" , "none");
			$(this).closest(".full__bottom").find(".symbols__wrapper").css("display" , "none");
		} else {
			$(this).closest('.translate__suggestions').find(".active__suggestion").removeClass("active__suggestion");
			$(this).closest("li").addClass("active__suggestion");
			$(this).closest("tr").find(".translation__info").css("display" , 'none');
			$(this).closest("tr").find("." + $(this).attr("data-switcher")).fadeIn(300);
		}
		
		// setTimeout(function(){
		// 	$('.translate__info').each(function(){
		// 	    var $div = $(this);
		// 	    $($div).css("height" ,"auto");
		// 	    $div.height($div.closest('td').height());
		// 	});
		// }, 300);
	});
	$('.prev__buttons .prev__button').on("click" ,function(e){
		$(".inner__preview--slider .slick-prev").click();
	});
	$('.next__buttons .next__right').on("click" ,function(e){
		$(".inner__preview--slider .slick-next").click();
	});
	$('.prev__buttons .start__left').on("click" ,function(e){
		$('.inner__preview--slider').slick('slickGoTo', 0);
	});
	$('.next__buttons .end__next').on("click" ,function(e){
		$('.inner__preview--slider').slick('slickGoTo', $('.inner__preview--slider .slick-slide').length - 1);
	});

	if ($(".preview__slider").length) {
		$(".inner__preview--slider").on("init", function(event, slick){
			$('.counter__controls .current__preview').text(slick.currentSlide + 1);
			$('.counter__controls .all__preview').text(slick.slideCount);
		});

		$(".inner__preview--slider").on("afterChange", function(event, slick, currentSlide){
		    $('.counter__controls .current__preview').text(slick.currentSlide + 1);
		    $('.preview__image .preview__elem').css("display"  ,"none")
		    $(".preview__image .preview__elem[data-preview="+ $(".preview__slider .inner__preview--slider .slick-current").attr("data-preview") +"]").fadeIn(300);
			$('.counter__controls .all__preview').text(slick.slideCount);
			if ((slick.currentSlide + 1) > 1) {
				$('.prev__buttons .disabled__button').removeClass("disabled__button");
			} else{
				$('.prev__buttons>a').addClass("disabled__button");
			}
		});
		$(".inner__preview--slider").slick({
			slidesToShow:1,
			infinite:false,
			variableWidth:true
		});		
	}

	$('.preview__more>a').on("click" ,function(e){
		e.preventDefault();
		$(this).closest(".preview__more").find('.more__dropdown').fadeIn(300);
	});

	// $('.translate__info').each(function(){
	//     var $div = $(this);
	//     $($div).css("height" ,"auto");
	//     $div.height($div.closest('td').height());
	// });
	// $(window).on("resize" ,function(){
	// 	$('.translate__info').each(function(){
	// 	    var $div = $(this);
	// 	    $($div).css("height" ,"auto");
	// 	    $div.height($div.closest('td').height());
	// 	});
	// });
	$(document).click(function(event) { 
	  var $target = $(event.target);
	  if (!$target.closest(".edit__comment").length) {
	  	$(".edit__comment .edit__dropdown").fadeOut(300);
	  }
	  if (!$target.closest(".more__lang").length && !$target.closest('.lang__list').length) {
	  	$(".more__lang>a").removeClass("active__lang--button");
	  	$(".lang__list").fadeOut(300);
	  }
	  if (!$target.closest(".search__filter").length) {
	  	$('.search__dropdown').fadeOut(300)
	  	$('.search__filter').removeClass("active__search");
	  }
	  if(!$target.closest('.float__more ').length && !$target.closest(".controls__more>a").length) {
		$('.float__more').fadeOut(200);  	
	  }   
	  if(!$target.closest('.controls__save').length) {
	  	$('.controls__drop').fadeOut(300);
	  	$('.droppable__controls').removeClass('active__controls');
	  }     
	  if(!$target.closest('.droppable__box').length && !$target.closest(".droppable__menu>a").length) {
	    $('.droppable__box').fadeOut(300);
	    $(".current__drop--menu").removeClass("current__drop--menu");
	  }       
	  if(!$target.closest('.short__wrapper').length) {
	    $(".short__wrapper .hotkeys__wrapper").fadeOut(300);
	    $('.short__wrapper .shortcut__button').removeClass("active__shortcut");
	  }       
	  if(!$target.closest('.preview__more').length) {
	    $(".preview__more .more__dropdown").fadeOut(300);
	  }        
	});
	$(".float__border").each(function(index,elem){
		var commonHeight = 0;
		if ($(elem).closest('.active__translate').find("td:nth-child(3)>.translate__main>span").length) {
			commonHeight+= +$(elem).closest('.active__translate').find("td:nth-child(3)>.translate__main>span").css("height").slice(0, -2);
		}
		if ($(elem).closest('.active__translate').find("td:nth-child(3)>.translate__main>p").length) {
			commonHeight+= +$(elem).closest('.active__translate').find("td:nth-child(3)>.translate__main>p").css("height").slice(0, -2);
		}
		if ($(elem).closest('.active__translate').find("td:nth-child(3)>.translate__main>.translate__controls").length) {
			commonHeight+= +$(elem).closest('.active__translate').find("td:nth-child(3)>.translate__main>.translate__controls>.controls__left").css("height").slice(0, -2);
		}
		commonHeight = commonHeight + 20 + "px";
		$(elem).css("height" , commonHeight);
		commonHeight = 0;
	});

	$('.tooltip__preview.left_panel').css("width" , "350px");

});
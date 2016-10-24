$(document).ready(function() {

	var minHeight = $('.sidebar_inner').height();
	$('.container').css({'min-height' : minHeight});


	// textarea
	autosize($('textarea'));


	$('.corusel').owlCarousel({
    	items:1,
	    margin:0,
	    autoHeight:true,
	    nav:true
	});


	$('.burger').on('click', function () {
		if($(this).hasClass('active')) { 
			$('.mob-menu-close, .mob-menu-bg, .menu').fadeOut(300);
			$(this).removeClass('active');
		} else {
			$('.mob-menu-close, .mob-menu-bg, .menu').fadeIn(300);
			$(this).addClass('active');
		};
		return false;
	});
	$('.mob-menu-close, .mob-menu-bg').on('click', function () {
		$('.mob-menu-close, .mob-menu-bg, .menu').fadeOut(300);
		$('.burger').removeClass('active');
		return false;
	});

	// corusel
	$('.products__slider').owlCarousel({
    	items:4,
    	loop:true,
	    margin:0,
	    autoHeight:false,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:2
	        },
	        990:{
	            items:4
	        }
	    }
	});
	$('.buy__slider').owlCarousel({
    	items:3,
    	loop:true,
	    margin:0,
	    autoHeight:false,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:2
	        },
	        990:{
	            items:3
	        }
	    }
	});








	// submenu left
	$('.submenu .active > a').on('click', function () {
		if($(this).parent('li').hasClass('open')) { 
			$(this).next('ul').slideUp(300);
			$(this).parent('li').removeClass('open');
		} else {
			$(this).next('ul').slideDown(300);
			$(this).parent('li').addClass('open');
		};
		return false;
	});

	// persona detals open
	$('.persona__detals-lnk a').on('click', function () {
		if($(this).parent().hasClass('active')) { 
			$(this).parent().next('div').slideUp(300);
			$(this).parent().removeClass('active');
		} else {
			$(this).parent().next('div').slideDown(300);
			$(this).parent().addClass('active');
		};
		return false;
	});

	// Center Modal
	function centerModal() {
	  $(this).css('display', 'block');
	  var $dialog = $(this).find(".modal-dialog");
	  var offset = ($(window).height() - $dialog.height()) / 2;
	  $dialog.css("margin-top", offset);
	  $(this).css('display', 'none');
	};
	$('.modal').on('show.bs.modal', centerModal);
	$(window).on("resize", function () {
	    $('.modal').each(centerModal);
	});

	// select style
	$('.select-st').selectize({
	    sortField: 'text'
	});

	// slider
	$('.owl-carousel-big').owlCarousel({
    	items:1,
	    margin:0,
	    autoHeight:true,
	    nav:true
	});
	$('.owl-carousel-min').owlCarousel({
    	items:3,
	    margin:16,
	    autoHeight:true,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        992:{
	            items:2
	        }
	    }

	});

	$('.partners__list').owlCarousel({
    	items:3,
	    margin:16,
	    autoHeight:true,
	    nav:true,
	    responsive:{
	        0:{
	            items:2
	        },
	        992:{
	            items:3
	        }
	    }
	});


	$('.advantages').owlCarousel({
    	items:5,
	    margin:16,
	    autoHeight:true,
	    nav:true,
	    responsive:{
	    	0:{
	            items:1
	        },
	        767:{
	            items:5
	        }
	    }
	});

	// mobile menu
	$('.menu-btn').on('click', function () {
		$('.head__menu-wrap, .mob-menu-bg').fadeIn();
		$('.menu-btn-close').show();
		return false;
	});
	$('.menu-btn-close, .mob-menu-bg').on('click', function () {
		$('.head__menu-wrap, .mob-menu-bg').fadeOut();
		$('.menu-btn-close').hide();
		return false;
	});

	$('.lnk-sub').on('click', function () {
		if($(window).width() < 992) {
			if($(this).hasClass('active')) { 
				$(this).next().slideUp(300);
				$(this).removeClass('active');
			} else {
				$(this).next().slideDown(300);
				$(this).addClass('active');
			};
			return false;
		}
	});


	// fancybox
	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '100%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		padding     : 40
	});


	// about text
	$('.about__open-show').on('click', function () {
		$('.about__open-show').hide();
		$('.about__open-hide').show();
		$('.about__wrap').addClass('active');
		return false;
	});
	$('.about__open-hide').on('click', function () {
		$('.about__open-show').show();
		$('.about__open-hide').hide();
		$('.about__wrap').removeClass('active');
		return false;
	});

	footerHeight()


})

function footerHeight() {
	$('.footer-padding').css({'height' : $('.footer').height() + 61});
}
$(window).load(function() {

	footerHeight();

});

$(window).resize(function() {

	footerHeight();

});



//  REMOVE
$('body').append(
	'<div style="position: fixed; z-index: 9999; bottom: 0; right: 0; background: #fff; border: solid 1px #000; width: 200px; font-size: 13px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px;position:relative;z-index:20; text-decoration:none" onclick="$(this).parent().hide()">Закрыть X</a> \
	<ol style="padding: 9px 0 7px 30px; margin: 0"> \
		<li style="margin: 0 0 5px;"><a href="index.html">Index</a></li> \
		<li style="margin: 0 0 5px;"><a href="typography.html">Typography</a></li> \
	</ol> \
</div>');
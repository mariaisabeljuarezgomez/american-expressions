//-----------------------------------------------------------------------------------------
//
//
// Variables
//
//
//-----------------------------------------------------------------------------------------
//
//-----------------------------------------------------------
//
// SVG
//
//-----------------------------------------------------------
//
var SVG = {
	'arrow-left-mobile':  '<svg class="svg-arrow-mobile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 37.414"><path class="svg-colored" fill="none" stroke="#000" stroke-width="3" d="m27.5 36.707-18-18 18-18"/></svg>',
	'arrow-right-mobile': '<svg class="svg-arrow-mobile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 37.414"><path class="svg-colored" fill="none" stroke="#000" stroke-width="3" d="m9.5 36.707 18-18-18-18"/></svg>',
	'arrow-left-chevron':  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 37.414"><path class="svg-colored" fill="none" stroke="#000" stroke-width="2" d="m27.5 36.707-18-18 18-18"/></svg>',
	'arrow-right-chevron': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 37.414"><path class="svg-colored" fill="none" stroke="#000" stroke-width="2" d="m9.5 36.707 18-18-18-18"/></svg>',
	'arrow-left-chevron-square':  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path class="svg-colored" fill="none" stroke="#000" stroke-width="2" d="M37 37H1V1h36Z"/><path class="svg-colored" fill="none" stroke="#000" stroke-width="2" d="m24.539 28.693-11.077-9.734 11.077-9.651"/></svg>',
	'arrow-right-chevron-square': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path class="svg-colored" fill="none" stroke="#000" stroke-width="2" d="M37 37H1V1h36Z"/><path class="svg-colored" fill="none" stroke="#000" stroke-width="2" d="m13.462 28.693 11.077-9.734-11.077-9.651"/></svg>',
	'arrow-left-arrow-square':  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path class="svg-colored" fill="none" stroke="#000" stroke-width="2" d="M1 1h36v36H1zm36 18H10.551"/><path class="svg-colored" fill="none" stroke="#000" stroke-width="2" d="m16.408 24.896-5.857-5.939L16.408 13"/></svg>',
	'arrow-right-arrow-square': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path class="svg-colored" fill="none" stroke="#000" stroke-width="2" d="M1 1h36v36H1zm0 18h26.45"/><path class="svg-colored" fill="none" stroke="#000" stroke-width="2" d="m21.594 13 5.86 5.943-5.86 5.96"/></svg>',
	'arrow-left-chevron-curve':  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 38.828"><path class="svg-colored" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="m26.408 37.414-14.22-14.22a5.762 5.762 0 0 1 0-8.149l6.174-6.174 7.456-7.457"/></svg>',
	'arrow-right-chevron-curve': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 38.828"><path class="svg-colored" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="m10.5 1.414 14.22 14.22a5.762 5.762 0 0 1 0 8.149l-6.174 6.174-7.46 7.457"/></svg>',
	'arrow-left-arrow':  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 36"><path class="svg-colored" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="M37 18.407H1"/><path class="svg-colored" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" stroke-linejoin="round" d="M13.217 30.814 1 18.426 13.217 6"/></svg>',
	'arrow-right-arrow': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 36"><path class="svg-colored" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="M1 18.407h36"/><path class="svg-colored" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" stroke-linejoin="round" d="M24.787 6 37 18.386 24.787 30.814"/></svg>',
	'arrow-left-chevron-circle':  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><g class="svg-colored" fill="none" stroke="#000" stroke-width="2" transform="translate(-753 -326)"><circle cx="18" cy="18" r="18" transform="translate(754 327)"/><path d="m774.302 339.488-5.6 5.6 5.6 5.6"/></g></svg>',
	'arrow-right-chevron-circle': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><g class="svg-colored" fill="none" stroke="#000" stroke-width="2" transform="translate(-816 -328)"><circle cx="18" cy="18" r="18" transform="translate(817 329)"/><path d="m832.698 352.512 5.6-5.6-5.6-5.6"/></g></svg>'
};
//-----------------------------------------------------------------------------------------
//
//
// Helper Functions
//
//
//-----------------------------------------------------------------------------------------
//
//-----------------------------------------------------------
//
// Debounce
//
//-----------------------------------------------------------
//
function _debounce(func, wait, immediate) {
	var timeout;
	return function () {
		var context = this, args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

//-----------------------------------------------------------
//
// Is IE Version
//
//-----------------------------------------------------------
//
function _isIEVersion() {
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf('MSIE ');
	var trident = ua.indexOf('Trident/');

	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	return false;
}

//-----------------------------------------------------------
//
// Is Mobile Devices
//
//-----------------------------------------------------------
//
function _isMobileDevices() {
	if (is.mobile() || is.tablet()) {
		return true;
	} else {
		return false;
	}
}

//-----------------------------------------------------------
//
// Is Minimum Browser Width
//
//-----------------------------------------------------------
//
function _isMinBrowserWidth(width) {

	// Return Boolean
	//
	return window.matchMedia("(min-width: " + width + "px)").matches;
}

//-----------------------------------------------------------
//
// Is Maximum Browser Width
//
//-----------------------------------------------------------
//
function _isMaxBrowserWidth(width) {

	// Return Boolean
	//
	return window.matchMedia("(max-width: " + width + "px)").matches;
}

//-----------------------------------------------------------
//
// Has URL Query
//
//-----------------------------------------------------------
//
function _hasUrlQuery(uri) {
	return uri.indexOf("?") > 0;
}

//-----------------------------------------------------------
//
// Remove URL Query
//
//-----------------------------------------------------------
//
function _removeUrlQuery(uri) {
	return uri.substring(0, uri.indexOf("?"));
}

//-----------------------------------------------------------
//
// Get URL Query
//
//-----------------------------------------------------------
//
function _getUrlQuery() {
	var vars = [], hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
}

//-----------------------------------------------------------
//
// Get File Extension from String
//
//-----------------------------------------------------------
//
function _getFileExtension(file) {
	return file.substr((file.lastIndexOf('.') + 1));
}

//-----------------------------------------------------------
//
// Convert Extension to File Type
//
//-----------------------------------------------------------
//
function _convertFileExtensionToFileType(extension) {
	if (typeof extension !== 'string') {
		return console.log('The parameter for _convertFileExtensionToFileType() function is not a string');
	}

	var ext = extension.toLowerCase();

	switch (ext) {
		case 'png':
		case 'jpg':
		case 'jpeg':
		case 'gif':
		case 'webp':
		case 'heic':
		case 'heif':
			return 'image';
		case 'txt':
			return 'txt';
		case 'pdf':
			return 'pdf';
		case 'xls':
		case 'xlsx':
			return 'excel';
		case 'doc':
		case 'docx':
			return 'word';
		case 'ppt':
		case 'pptx':
			return 'powerpoint';
		case 'mp4':
		case 'mov':
		case 'wmv':
		case 'flv':
		case 'avi':
		case 'avchd':
			return 'video';
		default:
			return 'unknown';
	}
}

//-----------------------------------------------------------------------------------------
//
//
// Init
//
//
//-----------------------------------------------------------------------------------------
//
//-----------------------------------------------------------
//
// Init ScrollMagic Controller
//
//-----------------------------------------------------------
//
var SMController = new ScrollMagic.Controller();


//-----------------------------------------------------------------------------------------
//
//
// Morweb Modifications
//
//
//-----------------------------------------------------------------------------------------
//
//-----------------------------------------------------------
//
// Fix "._overflow-hidden" class ajax issue on <body>
//
//-----------------------------------------------------------
//
$(document).ajaxComplete(function(event, request, settings) {
	$('body').removeClass('_overflow-hidden');
});


//-----------------------------------------------------------------------------------------
//
//
// Theme Functions
//
//
//-----------------------------------------------------------------------------------------
//
// -----------------------------------------------------------
//
// Root CSS
//
//-----------------------------------------------------------
//
function handleRootCSS() {

	setRootCSS();

	$(window).on('resize', _debounce(function () {
		setRootCSS();
	}, 250));

	$(document).on('click', '._js-reset-root-css', function () {
		setRootCSS();
	});

	$(document).ajaxComplete(function (event, request, settings) {
		setRootCSS();
	});

	function setRootCSS() {
		$('html').attr('style',
			'--vh:'           + ($(window).innerHeight() * 0.01).toFixed(2) + 'px;' +
			'--header-height:' + $('.header-wrap').outerHeight() + 'px;' +
			'--header-main-height:' + $('.header-main').outerHeight() + 'px;'
		);
	}
}

//-----------------------------------------------------------
//
// Browser Version
//
//-----------------------------------------------------------
//
function handleBrowserVersion() {

	// Check browser compatibility
	//
	if (_isIEVersion() !== false && _isIEVersion() < 10) {
		$('html').addClass('_outdated-browser');
	}

	if (is.ie()) {
		$('html').addClass('is-ie');
	}

	if (is.edge()) {
		$('html').addClass('is-edge');
	}

	if (is.desktop()) {
		$('html').addClass('is-desktop');
	}

	if (is.mobile()) {
		$('html').addClass('is-mobile');
	}

	if (is.tablet()) {
		$('html').addClass('is-tablet');
	}

	if (is.touchDevice()) {
		$('html').addClass('is-touch-device');
	}
}

//-----------------------------------------------------------
//
// Scroll To Top
//
//-----------------------------------------------------------
//
function handleScrollTop() {
	$("._js-scroll-top").on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 'slow');
	});
}

//-----------------------------------------------------------
//
// Image Popup
//
//-----------------------------------------------------------
//
function handleImagePopup() {
	init();

	$(document).ajaxComplete(function () {
	    init();
	});

	function init() {
		$('._js-img-popup').magnificPopup({
			type: 'image',
			closeBtnInside: false,
			closeOnContentClick: false,
			image: {
				verticalFit: true,
				titleSrc: 'title'
			},
			gallery: {
				enabled: true
			}
		});
	}
}

//-----------------------------------------------------------
//
// Video Popup
//
//-----------------------------------------------------------
//
function handleVideoPopup() {
	init();

	$(document).ajaxComplete(function () {
		init();
	});

	function init() {
		$('._js-video-popup').magnificPopup({
			type: 'iframe',
			preloader: false,
			closeBtnInside: false,
			fixedContentPos: false,
			closeOnContentClick: false,
			disableOn: 700,
			removalDelay: 160
		});
	}
}

//-----------------------------------------------------------
//
// Handle Form
//
//-----------------------------------------------------------
//
function handleForm() {

	convertAsterisk();

	$(document).ajaxComplete(function (event, request, settings) {
		convertAsterisk();
	});

	function convertAsterisk() {
		if ($("table.Dialog tr th .asterisk").length || $("table.Dialog tr td label .asterisk").length || $("table.Dialog tr td .icon .asterisk").length) {
			return;
		}

		$("table.Dialog tr th:contains('*'), table.Dialog tr td label:contains('*'), table.Dialog tr td .icon:contains('*')").html(function (index, html) {
			return html.replace(/(\*)/g, '<span class="asterisk">$1</span>');
		});
	}
}

//-----------------------------------------------------------
//
// Toggle Form todo
//
// Usage Case:
// <input type='radio' data-toggle-form='#target-id'/>
//
//-----------------------------------------------------------
//
function handleToggleForm() {

	$('[data-toggle-form-hidden]').hide();
	$('[data-toggle-form-hidden-reverse]').show();

	//--------------------------------
	// Toggle Forms
	//--------------------------------
	//
	$(document).on('change', '[data-toggle-form]', function() {
		if ($(this).is('input:radio')) {
			$($(this).attr('data-toggle-form')).toggle(!!$(this).is(':checked'));
			return false;
		} else if ($(this).is('input:checkbox')) {
			$($(this).attr('data-toggle-form')).toggle(!!$(this).is(':checked'));
			return false;
		} else if ($(this).is('select:not([multiple])')) {
			var val = $(this).val().toLowerCase();
			var valTarget = $(this).attr('data-toggle-form-val').toLowerCase();
			$($(this).attr('data-toggle-form')).toggle(val === valTarget);
			return false;
		}
	});

	//--------------------------------
	// Toggle Forms Reverse
	//--------------------------------
	//
	$(document).on('change', '[data-toggle-form-reverse]', function() {
		if ($(this).is('input:radio')) {
			$($(this).attr('data-toggle-form-reverse')).toggle(!$(this).is(':checked'));
			return false;
		} else if ($(this).is('input:checkbox')) {
			$($(this).attr('data-toggle-form-reverse')).toggle(!$(this).is(':checked'));
			return false;
		} else if ($(this).is('select:not([multiple])')) {
			var val = $(this).val().toLowerCase();
			var valTarget = $(this).attr('data-toggle-form-val').toLowerCase();
			$($(this).attr('data-toggle-form-reverse')).toggle(val !== valTarget);
			return false;
		}
	});

	//--------------------------------
	// Multiselect
	//--------------------------------
	//
	$(document).on('click', '[data-toggle-form][multiple] option', function() {
		var $this = $(this);
		var $parent = $this.closest('select');
		var $target = $($parent.attr('data-toggle-form'));
		var val = $this.val().toLowerCase();
		var valTarget = $parent.attr('data-toggle-form-val').toLowerCase();

		if (val === valTarget) {
			$target.toggle($this.is(':selected'));
		}
	});
}

//-----------------------------------------------------------
//
// Input Mask
//
//-----------------------------------------------------------
//
function handleInputMask() {

	// via data-inputmask attribute
	//
	$(":input").inputmask();

	// Options
	//
	var phoneOption = {"mask": "(999) 999-9999"};
	var dateOption = {"alias": "datetime", "inputFormat": "mm/dd/yyyy"};
	var emailOption = {"alias": "email"};

	// Selectors
	//
	var phoneSelectors = [
		'input[placeholder="(999) 999-9999"]'
	].join(', ');

	var dateSelectors = [
		'input[placeholder="mm/dd/yyyy"]'
	].join(', ');

	// Phone
	//
	$(phoneSelectors).inputmask(phoneOption);

	// Date
	//
	$(dateSelectors).inputmask(dateOption);
}

//-----------------------------------------------------------
//
// Accordion
//
//-----------------------------------------------------------
//
function handleAccordion() {
	$('._js-accordion').each(function () {
		var $this = $(this);
		var $content = $('.accordion-content', $this);

		if ($this.hasClass('active')) {
			$content.show();
		}
	});

	$(document).on('click', '._js-accordion .accordion-btn', function () {
		var $btn = $(this);
		var $parent = $btn.closest('.accordion');
		var $content = $('.accordion-content', $parent);

		if ($parent.hasClass('active')) {
			$content.slideUp(500);
			$parent.removeClass('active');
		} else {
			$parent.addClass('active');
			$content.slideDown(500);
		}

		// Fix for Slick Slider
		// $(".slider .sliderWrap").slick("refresh");
	});
}

//-----------------------------------------------------------
//
// Tabs
//
//-----------------------------------------------------------
//
function handleTabs() {
	$('._js-tabs').each(function () {
		var $tabs = $(this);
		var $navs = $('.tabs-nav', $tabs);
		var $panes = $('.tabs-pane', $tabs);

		$navs.first().addClass('active');
		$panes.first().addClass('active');
	});

	$(document).on('click', '._js-tabs .tabs-nav', function () {
		var $nav = $(this);
		var $parent = $nav.closest('.tabs');
		var $navs = $('.tabs-nav', $parent);
		var $panes = $('.tabs-pane', $parent);
		var INDEX = $navs.index(this);

		$navs.removeClass('active');
		$panes.hide().removeClass('active');

		$nav.addClass('active');
		$panes.eq(INDEX).show().addClass('active');
	});
}

//-----------------------------------------------------------
//
// Sidebar Mobile
//
//-----------------------------------------------------------
//
function handleSidebarMobile() {

	$('._js-sidebar').each(function () {

		//--------------------------------
		// Selectors
		//--------------------------------
		//
		var $el = $(this);
		var $body = $('body');
		var $openBtn = $('.sidebar-open-btn', $el);
		var $closeBtn = $('.sidebar-close-btn', $el);
		var $sidebarInner = $('.sidebar-side .sidebar-inner', $el);

		//--------------------------------
		// Open Sidebar
		//--------------------------------
		//
		$openBtn.on('click', function (e) {
			e.preventDefault();

			$el.addClass('active');
			$sidebarInner.fadeIn(400);
			$body.addClass('_overflow-hidden');

			// Accessibility
			//
			$openBtn.attr('aria-disabled', true);
			$closeBtn.attr('aria-disabled', false);
		});

		//--------------------------------
		// Close Sidebar
		//--------------------------------
		//
		$closeBtn.on('click', function (e) {
			e.preventDefault();
			$body.removeClass('_overflow-hidden');
			$sidebarInner.fadeOut(400, function () {
				$el.removeClass('active');
			});

			// Accessibility
			//
			$openBtn.attr('aria-disabled', false);
			$closeBtn.attr('aria-disabled', true);
		});

		//--------------------------------
		// Resize
		//--------------------------------
		//
		$(window).on('resize', _debounce(function () {
			if (_isMinBrowserWidth(992)) {
				$el.removeClass('active');
				$sidebarInner.css({'display': ''});
				$body.removeClass('_overflow-hidden');
			}
		}, 250));
	});
}

//-----------------------------------------------------------
//
// Sticky Sidebar
//
//-----------------------------------------------------------
//
function handleStickySidebar() {
	var $stickySidebar = $('._js-sticky-sidebar');

	//--------------------------------
	// Exit if no sticky sidebar
	//--------------------------------
	//
	if (!$stickySidebar.length) return false;

	//--------------------------------
	// Sticky Sidebar
	//--------------------------------
	//
	$stickySidebar.each(function () {

		// Parameters
		//
		var OFFSET = 15;

		// Selectors
		//
		var $header = $('.header-wrap');
		var $el = $(this);
		var $main = $('.sidebar-main-wrap', $el);
		var $sidebar = $('.sidebar-side-wrap', $el);

		// Init scroll scene
		//
		var scene = new ScrollMagic.Scene({
			triggerElement: $sidebar,
			triggerHook: 0
		})
			.setPin($sidebar, {pushFollowers: false})
			.setClassToggle($el, "_stuck")
			.addTo(SMController);

		// Set scroll scene offset and duration
		//
		scene.offset(getOffset());
		scene.duration(getDuration());

		// Resize
		//
		$(window).on('resize', _debounce(function () {

			// Re-calculate scroll scene offset and duration
			//
			scene.offset(getOffset());
			scene.duration(getDuration());
		}, 250));

		// Get Offset Function
		//
		function getOffset() {
			return -($header.height() + OFFSET);
		}

		// Get Duration Function
		//
		function getDuration() {
			return $main.height() - $sidebar.height();
		}
	});
}

//-----------------------------------------------------------
//
// Multiple Select Input
//
//-----------------------------------------------------------
//
function handleMultipleSelect() {

	//--------------------------------
	// Disable preselect
	//--------------------------------
	//
	$("select[multiple] option").prop("selected", false);
}

//-----------------------------------------------------------
//
// Handle Modal
//
//-----------------------------------------------------------
//
function handleModal() {
	$(document).on('click', '._js-modal .modal-btn', function () {
		var $body = $('body');
		var $btn = $(this);
		var $parent = $btn.closest('._js-modal');
		var $container = $('.modal-container', $parent);
		var $dialog = $('.modal-dialog', $parent);

		$body.addClass('_overflow-hidden');
		$container.fadeIn(400);
		$dialog.fadeIn(400, function () {
			$parent.addClass('active');
		});
	});

	$(document).on('click', '._js-modal .modal-close-btn', function () {
		var $body = $('body');
		var $closeBtn = $(this);
		var $parent = $closeBtn.closest('._js-modal');
		var $container = $('.modal-container', $parent);
		var $dialog = $('.modal-dialog', $parent);

		$body.removeClass('_overflow-hidden');
		$parent.removeClass('active');
		$container.fadeOut(400);
		$dialog.fadeOut(400);
	});

	$(document).on('click', '._js-modal .modal-container', function (e) {

		if (e.target !== this) {
			return;
		}

		var $body = $('body');
		var $container = $(this);
		var $parent = $container.closest('._js-modal');
		var $dialog = $('.modal-dialog', $parent);

		if ($parent.hasClass('is-fullscreen')) {
			return;
		}

		$body.removeClass('_overflow-hidden');
		$parent.removeClass('active');
		$container.fadeOut(400);
		$dialog.fadeOut(400);
	});
}

//-----------------------------------------------------------
//
// Video Player
//
//-----------------------------------------------------------
//
function handleVideoPlayer() {
	$(document).on('click', '._js-video-player', function () {
		const $this = $(this);
		const $video = $('video', $this);

		$this.addClass('active');
		$video[0].play();
	});
}

//-----------------------------------------------------------
//
// Count Up
//
//-----------------------------------------------------------
//
function handleCountUp() {
	$('._js-count-up').each(function () {

		//--------------------------------
		// Selectors
		//--------------------------------
		//
		var $this = $(this);
		var $num = $('.count-up-num', $this);
		var count = {val: 0};
		var originalNum = $num.text();
		var newNum = parseFloat(originalNum.replaceAll(',', ''));

		//--------------------------------
		// Check if the "newNum"
		// is a number
		//--------------------------------
		//
		if (is.not.number(newNum)) {
			console.log('the counter is not a number, please make sure you are using a number.');
			return;
		}

		//--------------------------------
		// Set the number to 0
		//--------------------------------
		//
		$num.text(0);

		//--------------------------------
		// Animation
		//--------------------------------
		//
		var tl = gsap.to(count, 2, {
			val: newNum, roundProps: "val", onUpdate: function () {
				$num.text(function () {
					if (originalNum.indexOf(",") >= 0) {
						return count.val.toLocaleString();
					} else {
						return count.val;
					}
				});
			}
		});

		//--------------------------------
		// Scrolling
		//--------------------------------
		//
		new ScrollMagic.Scene({
			triggerElement: $this,
			triggerHook: 0.8
		})
			.setTween(tl)
			.addTo(SMController);
	});
}

//-----------------------------------------------------------
//
// Count Up New
//
//-----------------------------------------------------------
//
/*function handleCountUp() {

	var $countUp = $('._js-video-player');
	var ANIME_DURATION = 2000;
	var options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.3
	};

	function initNumberAnimation() {
		$($countUp).find(".number").each(function() {
			$(this).prop('CounterOriginalValue', $(this).text().replace(",", ""));
		});

		$($countUp).find(".year").each(function() {
			$(this).prop('CounterOriginalValue', $(this).text().replace(",", ""));
		});
	}

	function commaSeparateNumber(val){
		while (/(\d+)(\d{3})/.test(val.toString())){
			val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		}
		return val;
	}

	function applyAnimationStep(el, now) {
		if($(el).prop('CounterOriginalValue').indexOf(".") === -1) {
			$(el).text(commaSeparateNumber(Math.round(now)));
		} else {
			$(el).text(now.toFixed(1));
		}
	}

	function applyYearAnimationStep(el, now) {
		$(el).text(Math.round(now));
	}

	function callback(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				$countUp.find(".count-up-num").each(function() {
					$(this).prop('Counter',0).animate({
						Counter: $(this).prop('CounterOriginalValue')
					}, {
						duration: ANIME_DURATION,
						easing: 'linear',
						step: function (now) {
							applyAnimationStep(this, now);
						},
						complete:function(){
							applyAnimationStep(this, $(this).prop('CounterOriginalValue'));
						}
					});
				});

				$countUp.find(".year").each(function() {
					$(this).prop('Counter',0).animate({
						Counter: $(this).prop('CounterOriginalValue')
					}, {
						duration: ANIME_DURATION,
						easing: 'linear',
						step: function (now) {
							applyYearAnimationStep(this, now);
						},
						complete:function(){
							applyYearAnimationStep(this, $(this).prop('CounterOriginalValue'));
						}
					});
				});
			} else {
				$countUp.find(".count-up-num").each(function() {
					$(this).prop('Counter',0);
					$(this).stop();
				});

				$countUp.find(".year").each(function() {
					$(this).prop('Counter',0);
					$(this).stop();
				});
			}
		});
	}

	initNumberAnimation();
	const observer = new IntersectionObserver(callback, options);
	observer.observe(document.getElementsByClassName('_js-count-up'));
}*/

//-----------------------------------------------------------
//
// Anchor Link
//
//-----------------------------------------------------------
//
function handleAnchorLink() {
	$(document).on('click','._js-anchor-link', function (e) {
		var $this = $(this);
		var $target = $this.attr('href');

		if ($target.length > 1 && $target.charAt(0) === '#') {
			e.preventDefault();

			$('html, body').animate({
				scrollTop: $($target).offset().top - $('.header-wrap').height()
			});
		}
	});
}

//-----------------------------------------------------------
//
// External URL
//
//-----------------------------------------------------------
//
function handleExternalURL() {
	replaceWithExternalLink();

	$(document).ajaxComplete(function(event, request, settings) {
		replaceWithExternalLink();
	});

	function replaceWithExternalLink() {
		$('._js-external-link').each(function () {
			var $this = $(this);
			var EXT_LINK = $this.attr('data-external-link');

			if (EXT_LINK.length) {
				$this.attr('href', EXT_LINK );
				$this.attr('target', '_blank');
			}
		});
	}
}

//-----------------------------------------------------------
//
// Detect if a string has a file extension and
// replace it with "Please Add a Title"
//
//-----------------------------------------------------------
//
function handleReplaceFileTitle() {
	replaceFileTitle();

	$(document).ajaxComplete(function(event, request, settings) {
		replaceFileTitle();
	});

	function replaceFileTitle() {
		$('._js-replace-file-title').each(function () {
			var $this = $(this);
			var STR = $this.text();
			var EXTS = [".txt", ".jpg", ".jpeg", ".png", ".gif", ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx"];
			var EXT = STR.substr(STR.lastIndexOf(".")).toLowerCase();
			if (EXTS.indexOf(EXT) !== -1) {
				$this.text('Please Add a Title');
			}
		});
	}
}




















//-----------------------------------------------------------------------------------------
//
//
// Execute JS
//
//
//-----------------------------------------------------------------------------------------
//
handleBrowserVersion();

$(document).ready(function () {
	handleRootCSS();
	handleScrollTop();
	handleImagePopup();
	handleVideoPopup();
	handleForm();
	handleToggleForm();
	handleInputMask();
	handleAccordion();
	handleTabs();
	handleSidebarMobile();
	handleStickySidebar();
	handleMultipleSelect();
	handleModal();
	handleVideoPlayer();
	handleCountUp();
	handleAnchorLink();
	handleExternalURL();
	handleReplaceFileTitle();
});
AOS.init()


// jQuery アコーディオンメニュー
$(function(){
$("#acMenu dt").on("click", function() {
$(this).next().slideToggle();
});
});



// ハンバーガーメニュー
const ham = $('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
const nav = $('#js-nav'); //js-navの要素を取得し、変数navに格納
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
	ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
	nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
});


$('#nav-items a[href]').on('click', function(event) {
	$('#js-hamburger').trigger('click');
});


$(function(){
	// #で始まるアンカーをクリックした場合に処理
	$('.s_01 a[href^="#"]').click(function(){
	  // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
	var adjust = 0;
	  // スクロールの速度
	  var speed = 400; // ミリ秒
	  // アンカーの値取得
	var href= $(this).attr("href");
	  // 移動先を取得
	var target = $(href == "#" || href == "" ? 'html' : href);
	  // 移動先を調整
	var position = target.offset().top + adjust;
	  // スムーススクロール
	$('body,html').animate({scrollTop:position}, speed, 'swing');
	return false;
	});
});



// swiper
const swiper = new Swiper('.swiper-container', {

	loop: true,
    slidesPerView: "auto",
	centeredSlides : true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: true
	},
});


// フォーム送信

$(document).ready(function () {

	$('#form').submit(function (event) {
	var formData = $('#form').serialize();
	$.ajax({
		url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdX10RCAlVzcGp5L5dObqIsbvB3mTUDM3mKLXvlvkXaigSGuA/formResponse?embedded=true",
		data: formData,
		type: "POST",
		dataType: "xml",
		statusCode: {
		0: function () {
			$(".end-message").slideDown();
			$(".submit-button").fadeOut();
			//window.location.href = "thanks.html";
		},
		200: function () {
			$(".false-message").slideDown();
		}
		}
	});
	event.preventDefault();
	});

});

// フォームチェック必須
$(document).ready(function () {

	const $submitBtn = $('#js-submit')
	$('#form input,#form textarea').on('change', function () {
	if (
		$('#form input[type="text"]').val() !== "" &&
		$('#form input[type="email"]').val() !== "" &&
		$('#form input[type="checkbox"]').val() !== "" &&
		$('#form #privacyCheck').prop('checked') === true
	) {
		$submitBtn.prop('disabled', false);

	} else {
		$submitBtn.prop('disabled', true);
	}
	});

});
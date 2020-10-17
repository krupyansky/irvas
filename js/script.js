function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}else{
		document.querySelector('body').classList.add('no-webp');
	}
});

$(document).ready(function(){
	$('div.product__types-first').on('click', 'div:not(.product__type_active)', function() {
        $(this)
          .addClass('product__type_active').siblings().removeClass('product__type_active')
          .closest('div.container').find('div.product__types-second').removeClass('product__types-second_active').eq($(this).index()).addClass('product__types-second_active');
    });
});

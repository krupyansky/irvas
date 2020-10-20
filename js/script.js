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

    $('div.decoration__tabs').on('click', 'div:not(.decoration__tab_active)', function() {
        $(this)
          .addClass('decoration__tab_active').siblings().removeClass('decoration__tab_active')
          .closest('div.container').find('div.decoration__type').removeClass('decoration__type_active').eq($(this).index()).addClass('decoration__type_active');
    });

    $('div.decoration__type-content-first').on('click', 'img:not(.decoration__type-content-first-img_active)', function() {
        $('img.decoration__type-content-first-img_active').removeClass('decoration__type-content-first-img_active');
        $(this).addClass('decoration__type-content-first-img_active');
    });

    $('div.decoration__type-content-colors').on('click', 'span:not(.decoration__type-content-color_active)', function() {
        $('span.decoration__type-content-color_active').removeClass('decoration__type-content-color_active');
        $(this).addClass('decoration__type-content-color_active');
    });

    //Modal
    @@include('modal.js');
    //Modal

    // Validate
    @@include('validate.js');

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
            }
        });
    };

    validateForms('#order-form-1');
    validateForms('#order-form-2');
    validateForms('#order-form-3');
    validateForms('#consultation form');
    validateForms('#order form');
    // Validate

    // MaskedInput
    @@include('maskedinput.js');
    $('input[name=phone]').mask("+7 (999) 999-99-99");
    // MaskedInput

    // PageUp
    @@include('pageup.js');
    // PageUp
});

// Timer
@@include('timer.js');
// Timer

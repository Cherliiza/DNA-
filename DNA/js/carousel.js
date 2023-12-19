$(document).ready(function(){

	$(".b-carousel-button-right").click(function(){ // при натисканні на праву кнопку запускаємо наступну функцію:
		$(".h-carousel-items").animate({left: "-327px"}, 200); // виробляємо анімацію: блок з набором картинок поїде вліво на 222 пікселі (це ширина одного елемента, що прокручується) за 200 мілісекунд.
		setTimeout(function () { // встановлюємо затримку часу перед виконанням таких функцій. Затримка потрібна, т.к. ці функції повинні запуститися тільки після завершення анімації.
			$(".h-carousel-items .b-carousel-block").eq(0).clone().appendTo(".h-carousel-items"); 
			$(".h-carousel-items .b-carousel-block").eq(0).remove(); 		
			$(".h-carousel-items").css({"left":"0px"}); 
		}, 300);
	});
	
	$(".b-carousel-button-left").click(function(){ 	
		$(".h-carousel-items .b-carousel-block").eq(-1).clone().prependTo(".h-carousel-items"); 
		$(".h-carousel-items").css({"left":"-327px"}); 		
		$(".h-carousel-items").animate({left: "0px"}, 200); 
		$(".h-carousel-items .b-carousel-block").eq(-1).remove(); 
	});
	
});

/* Carousel 2 */

$(document).ready(function(){

	$(".b-carousel-button-right-two").click(function(){ 
		$(".h-carousel-items-two").animate({left: "-515px"}, 200); 
		setTimeout(function () { 
			$(".h-carousel-items-two .b-carousel-block-two").eq(0).clone().appendTo(".h-carousel-items-two"); 
			$(".h-carousel-items-two .b-carousel-block-two").eq(0).remove(); 	
			$(".h-carousel-items-two").css({"left":"0px"}); 
		}, 300);
	});
	
	$(".b-carousel-button-left-two").click(function(){ 		
		$(".h-carousel-items-two .b-carousel-block-two").eq(-1).clone().prependTo(".h-carousel-items-two"); 	
		$(".h-carousel-items-two").css({"left":"-470px"}); 
		$(".h-carousel-items-two").animate({left: "0px"}, 200); 
		$(".h-carousel-items-two .b-carousel-block-two").eq(-1).remove(); 
	});
	
});

/* Carousel 3 */

$(document).ready(function(){

	$(".b-carousel-button-right-three").click(function(){ // при клике на правую кнопку запускаем следующую функцию:
		$(".h-carousel-items-three").animate({left: "-326px"}, 200); // производим анимацию: блок с набором картинок уедет влево на 222 пикселя (это ширина одного прокручиваемого элемента) за 200 милисекунд.
		setTimeout(function () { // устанавливаем задержку времени перед выполнением следующих функций. Задержка нужна, т.к. эти ффункции должны запуститься только после завершения анимации.
			$(".h-carousel-items-three .b-carousel-block-three").eq(0).clone().appendTo(".h-carousel-items-three"); // выбираем первый элемент, создаём его копию и помещаем в конец карусели
			$(".h-carousel-items-three .b-carousel-block-three").eq(0).remove(); // удаляем первый элемент карусели		
			$(".h-carousel-items-three").css({"left":"0px"}); // возвращаем исходное смещение набора набора элементов карусели
		}, 300);
	});
	
	$(".b-carousel-button-left-three").click(function(){ // при клике на левую кнопку выполняем следующую функцию:		
		$(".h-carousel-items-three .b-carousel-block-three").eq(-1).clone().prependTo(".h-carousel-items-three"); // выбираем последний элемент набора, создаём его копию и помещаем в начало набора	
		$(".h-carousel-items-three").css({"left":"-326px"}); // устанавливаем смещение набора -222px		
		$(".h-carousel-items-three").animate({left: "0px"}, 200); // за 200 милисекунд набор элементов плавно переместится в исходную нулевую точку
		$(".h-carousel-items-three .b-carousel-block-three").eq(-1).remove(); // выбираем последний элемент карусели и удаляем его
	});
	
});

/* Carousel 4 */

$(document).ready(function(){

	$(".b-carousel-button-right-four").click(function(){ // при клике на правую кнопку запускаем следующую функцию:
		$(".h-carousel-items-four").animate({left: "-327px"}, 200); // производим анимацию: блок с набором картинок уедет влево на 222 пикселя (это ширина одного прокручиваемого элемента) за 200 милисекунд.
		setTimeout(function () { // устанавливаем задержку времени перед выполнением следующих функций. Задержка нужна, т.к. эти ффункции должны запуститься только после завершения анимации.
			$(".h-carousel-items-four .b-carousel-block-four").eq(0).clone().appendTo(".h-carousel-items-four"); // выбираем первый элемент, создаём его копию и помещаем в конец карусели
			$(".h-carousel-items-four .b-carousel-block-four").eq(0).remove(); // удаляем первый элемент карусели		
			$(".h-carousel-items-four").css({"left":"0px"}); // возвращаем исходное смещение набора набора элементов карусели
		}, 300);
	});
	
	$(".b-carousel-button-left-four").click(function(){ // при клике на левую кнопку выполняем следующую функцию:		
		$(".h-carousel-items-four .b-carousel-block-four").eq(-1).clone().prependTo(".h-carousel-items-four"); // выбираем последний элемент набора, создаём его копию и помещаем в начало набора	
		$(".h-carousel-items-four").css({"left":"-327px"}); // устанавливаем смещение набора -222px		
		$(".h-carousel-items-four").animate({left: "0px"}, 200); // за 200 милисекунд набор элементов плавно переместится в исходную нулевую точку
		$(".h-carousel-items-four .b-carousel-block-four").eq(-1).remove(); // выбираем последний элемент карусели и удаляем его
	});
	
});
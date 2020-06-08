window.onload = () => {
	console.log("Страница загружена")
	function _sendEmail(){
		const forms = document.querySelectorAll('.form')
		forms.forEach(form => {
			form.onsubmit()
		});
	}
	// $("#callBackContent").submit(function (e) {
	// 	//устанавливаем событие отправки для формы
	// 	e.preventDefault();
	// 	var form_data = $(this).serialize(); //собераем все данные из формы
	// 	$.ajax({
	// 		type: "POST", //Метод отправки
	// 		url: "/send.php", //путь до php фаила отправителя
	// 		data: form_data,
	// 		success: function success() {
	// 			//код в этом блоке выполняется при успешной отправке сообщения
	// 			alert("Ваше сообщение отправлено!");
	// 			$(".callBackContentInput").val("");
	// 		}
	// 	});
	// });
	// $(".catalogLink").click(function () {
	// 	$("#popupCatalog").fadeIn();
	// });
	// $(".popupCatalog__exit").click(function () {
	// 	$("#popupCatalog").fadeOut();
	// });
}
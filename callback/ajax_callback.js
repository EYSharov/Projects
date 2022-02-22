$( document ).ready(function() {
    $("#submit_tel").click(
		function(){
			sendCallbackForm('result_form', 'callback_form', 'action_callback_form.php');
			return false; 
		}
	);
}); 
function sendCallbackForm(result_form, callback_form, url) {
    $.ajax({
        url:      "action_callback_form.php", 
        type:     "POST", //Method sends
        dataType: "html", //Type send
        data: $("#"+callback_form).serialize(),  // Serialize  (преобразуем обьект в одну строку)
        success: function(response) { //Send succes
        	result = $.parseJSON(response);   
        	 $('#result_form').html('Здравствуйте '+result.name+'<br> '+result.answer);     	
		},
    	error: function(response) { // Send error
            $('#result_form').html('Ошибка. Данные не отправленны.');
    	}
 	});
}
 
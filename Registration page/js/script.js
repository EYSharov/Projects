$( document ).ready(function() {
    $("#submit_tel").click(
		function(){
			sendCallbackForm('result_form', 'test_form', 'action.php');
			return false; 
		}
	);
}); 

function sendCallbackForm(result_form, test_form, url) {
    $.ajax({
        url:      "action.php", 
        type:     "POST", //Method sends
        dataType: "html", //Type send
        data: $("#"+test_form).serialize(),  // Serialize  (преобразуем обьект в одну строку)
        success: function(response) { //Send succes
        	result = $.parseJSON(response);   
        	 $('#result_form').html('Здравствуйте, '+result.name+'<br> '+result.answer);     	
		},
    	error: function(response) { // Send error
            $('#result_form').html('Ошибка. Анкета не отправлена');
    	}
 	});
}
 
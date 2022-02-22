<?php
 if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['tel'])) {
  $name = strip_tags($_POST['name']); 
  $tel = strip_tags($_POST['tel']); /*Преобразование в массив без tel, email и name */
  $email = strip_tags($_POST['email']);
 }
 if (empty($name)) {
 $result = array('name' => "!",    	
		         'answer' => "Пожалуйста введите свое имя!" ); 
    echo json_encode($result); 
	exit;
}

if (empty($email)) {
$result = array('name' => $name."!",    	
            'answer' => "Пожалуйста введите свой email!" ); 
   echo json_encode($result); 
 exit;
}

else {
  if (stripos ($email , "@")===false )
  {
    $result = array('name' => $name."!" , 
    'answer' => "Пожалуйста введите свой email!" );	
    echo json_encode($result); 
   exit;
  }
}

 if (empty($tel)) {
 $result = array('name' => $name."!" , 
                 'answer' => "Пожалуйста введите свой телефон!" );	
    echo json_encode($result); 
	exit;
}
 
/*Send*/
   
elseif (!empty($tel))
{
$to = "baa@1cab.ru"; 
$headers = "Content-type: text/plain; charset = utf-8";
$headers .= 'From: webmaster@example.com' . "\r\n" .
$subject = "Заказ обратного звонка на сайте \n";
$message = "Посетитель $name заказал обратный звонок! \n Телефон: $tel \n Почта: $email ";
$send = mail ($to, $subject, $message, $headers);
}
if ($send=='true'){
$result = array(	
    	'name' => $name."!",    	
		'answer' => "Ваш телефон .$tel и адрес электронной почты $email </br> Мы перезвоним Вам в течении 15 минут!"
    ); 
    echo json_encode($result); /*Отправляем массив в аякс */
	exit;
}	
	
?>




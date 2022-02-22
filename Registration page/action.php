<?php
 if (isset($_POST['name']) && isset($_POST['password']) && isset($_POST['tel']) && isset($_POST['job'])){
  $name = strip_tags($_POST['name']); 
  $tel = strip_tags($_POST['tel']); 
  $tel = str_replace(["(", ")", "+"], "", $tel);
  $password = strip_tags($_POST['password']);
  $job = strip_tags($_POST['job']);
  
 }
 if (empty($name)) {
 $result = array('name' => "!",    	
		         'answer' => "Пожалуйста придумайте Имя!" ); 
    echo json_encode($result); 
	exit;
}

if (empty($tel)) {
    $result = array('name' => $name."!" , 
                    'answer' => "Пожалуйста введите свой телефон!" );	
       echo json_encode($result); 
       exit;
   }

if (empty($password)) {
    $result = array('name' => $name."!",    	
                'answer' => "Пожалуйста придумайте пароль" ); 
       echo json_encode($result); 
     exit;
    }
if (empty($job)) {
    $result = array('name' => $name."!",    	
                'answer' => "Пожалуйста выберите работу" ); 
       echo json_encode($result); 
     exit;
    }

    if ($password && $name && $tel && $job) {
        $result = array('name' => $name."!",    	
                'answer' => "Анкета отправлена. Спасибо!" ); 
       echo json_encode($result); 
     exit;
    }
    
?>
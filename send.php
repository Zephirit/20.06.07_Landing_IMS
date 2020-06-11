<?php
$_POST = json_decode(file_get_contents("php://input"), true);
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&(isset($_POST['email'])&&$_POST['email']!="")){
     //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'degray848484@gmail.com'; //Почта получателя
        $subject = 'Консультация'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Почта: '.$_POST['email'].'</p>
                    </body>
                </html>'; //Текст сообщения 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>
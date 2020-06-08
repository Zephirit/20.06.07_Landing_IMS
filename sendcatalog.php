<?php
if((isset($_POST['catName'])&&$_POST['catName']!="")&&(isset($_POST['catPhone'])&&$_POST['catPhone']!="")&&(isset($_POST['catEmail'])&&$_POST['catEmail']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'info@get-protect.com'; //Почта получателя

        $subject = 'Запрос на каталог'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['catName'].'</p>
                        <p>Телефон: '.$_POST['catPhone'].'</p>   
                        <p>Почта: '.$_POST['catEmail'].'</p>                       
                    </body>
                </html>'; //Текст сообщения 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>
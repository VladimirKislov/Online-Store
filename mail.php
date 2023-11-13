<?php

$recepient = "testvk@internet.ru";
$siteName = "SitDownPls";

$name = trim($_POST["name"]);
$phone = trim($_POST["tel"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nТелефон: $phone \nE-mail: $email";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

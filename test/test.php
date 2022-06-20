<?php

if(isset($_POST['envoi'])){
    $message = $_POST['envoi'];
    echo $message;
}else{
    echo 'Pas de données de formulaire a traîter';
}
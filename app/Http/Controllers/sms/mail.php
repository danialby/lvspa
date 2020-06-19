<?php
    $toEmail = "danialby@gmail.com";
    $mailHeaders = "From: " . $_POST["fullName"] . "<". $_POST["Email"] .">\r\n";
    if(mail($toEmail, $_POST["subject"], $_POST["content"], $mailHeaders)) {
        print "<p class='success'>Mail Sent.</p>";
    } else {
        print "<p class='Error'>Problem in Sending Mail.</p>";
    }
?>

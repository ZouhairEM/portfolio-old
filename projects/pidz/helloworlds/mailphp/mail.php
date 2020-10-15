<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

$inlognaam = 'zouhairelmariami@gmail.com'; // Gebruikersnaam voor smtp-server.
$wachtwoord = 'wachtwoord';      // Het wachtwoord van de smtp-server
$doelnaam = 'Naam ontvanger';    // Naam van de ontvanger.
$doeladres = 'highaeonkratex@gmail.com'; // Adres van de ontvanger.
$onderwerp = 'Onderwerp';        // Onderwerp van het bericht.

if (isset($_POST['submit'])) {
  if(empty($inlognaam)
        or empty($wachtwoord)
        or empty($doelnaam)
        or empty($doeladres)
        or empty($onderwerp)
        or empty($_POST['naam'])
        or empty($_POST['email'])
        or empty($_POST['bericht'])) {
        // HTML5-validatie heeft niet gefunctioneerd, een of meer gegevens
        // zijn leeg. Voeg hier zelf goede, nette foutafhandeling toe
  }
  versturen($doelnaam,$doeladres,$_POST['naam'],$_POST['email'],$_POST['bericht'],$onderwerp,$inlognaam,$wachtwoord);
}

function versturen ($doelnaam,$doeladres,$zendnaam,$zendadres,$bericht,$onderwerp,$inlognaam,$wachtwoord){
  $mail = new PHPMailer(true);
  try {
    //Server settings
    $mail->SMTPDebug = 0;             // Toon debug-informatie. 0 = stil, 1 = basis en 2 = uitgebreid.
    $mail->isSMTP();                  // Gebruik een smtp-server en niet de webserver.
    $mail->Host = 'smtp.vevida.com';  // smtp-server.
    $mail->SMTPAuth = true;           // Authenticatie inschakelen.
    $mail->Username = $inlognaam;     // Gebruikersnaam.
    $mail->Password = $wachtwoord;    // Wachtwoord.
    $mail->SMTPSecure = 'tls';        // Encryptie via TLS.
    $mail->Port = 25;                 // Poort van de smtp-server.

    // Ontvangers
    $mail->setFrom($zendadres, $zendnaam);     // Afzender
    $mail->addAddress($doeladres, $doelnaam);  // Ontvanger
    // $mail->addCC('cc@example.com');         // Eventueel CC-adres
    // $mail->addBCC('bcc@example.com');       // Eventueel BCC-adres

    // Inhoud
    $mail->isHTML(true);       // Schakel HTML-mail in.
    $mail->Subject = $onderwerp;
    $mail->Body    = $bericht;
    $mail->AltBody = strip_tags($bericht);
    $mail->send();
    // Het bericht is verstuurd. Zet hier een gereedmelding.
  }
  catch (Exception $e) {
    // Het bericht kon niet verstuurd worden.
    // Roep de waarde van $mail->ErrorInfo aan om te kijken wat er verkeerd ging.
  }
}
?>
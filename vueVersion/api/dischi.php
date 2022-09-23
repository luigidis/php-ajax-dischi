<?php

include __DIR__ . "/../db/dischi.php";



$res = [
    'success' => true,
    'response' => $discs
];

//settiamo il content type
header('Content-Type: application/json');

//stampiamo in json
echo json_encode($res);
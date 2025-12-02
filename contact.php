<?php
header('Content-Type: text/html; charset=UTF-8');

$host = "sql211.infinityfree.com";
$dbname = "if0_38972839_mycontacts";
$username = "if0_38972839";
$password = "2210213581";

$response = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    if (empty($name) || empty($email) || empty($message)) {
        $response['error'] = "Please fill in all fields.";
    } elseif (strlen($name) < 3) {
        $response['error'] = "Name must be at least 3 characters long.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['error'] = "Invalid email format.";
    } else {
        $conn = new mysqli($host, $username, $password, $dbname);

        if ($conn->connect_error) {
            $response['error'] = "Connection failed: " . $conn->connect_error;
        } else {
            $conn->set_charset("utf8mb4");

            $stmt = $conn->prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $name, $email, $message);

            if ($stmt->execute()) {
                $response['success'] = "Message sent successfully!";
            } else {
                $response['error'] = "Error: " . $stmt->error;
            }

            $stmt->close();
            $conn->close();
        }
    }
} else {
    $response['error'] = "Invalid request.";
}

echo json_encode($response);
?>

<?php
// send_email.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize input
    $errors = [];
    
    $name = filter_input(INPUT_POST, 'from_name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'from_email', FILTER_SANITIZE_EMAIL);
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    
    // Validation
    if (empty($name)) {
        $errors[] = "Name is required";
    }
    
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Valid email is required";
    }
    
    if (empty($message)) {
        $errors[] = "Message is required";
    }
    
    // If no errors, send email
    if (empty($errors)) {
        $to = "info@mgcbookings.online"; // Replace with your email
        $email_subject = "New Contact Form Submission: $subject";
        $email_body = "You have received a new message from your website contact form.\n\n".
                      "Name: $name\n".
                      "Email: $email\n".
                      "Subject: $subject\n".
                      "Message:\n$message";
        
        // Set headers
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        // Send email
        if (mail($to, $email_subject, $email_body, $headers)) {
            echo "<script>alert('Message sent successfully!'); window.location.href = 'contact.html';</script>";
        } else {
            echo "<script>alert('Failed to send message. Please try again later.'); window.history.back();</script>";
        }
    } else {
        // Display errors
        echo "<script>alert('Please fix the following errors:\\n- " . implode("\\n- ", $errors) . "'); window.history.back();</script>";
    }
} else {
    // Not a POST request, redirect to contact page
    header("Location: contact.html");
    exit;
}
?>
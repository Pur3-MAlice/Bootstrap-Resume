function sendMail(contactForm) {
    var templateParams = {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value,
        };
        
    emailjs.send('gmail', 'template_f5bd9v8', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });

    return false;
}

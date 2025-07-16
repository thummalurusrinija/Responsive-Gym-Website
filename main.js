// mails

function sendEmail() {
    // Get the email entered by the user
    var userEmail = document.getElementById("contact-user").value;

    // Use the SMTP.js library to send the email
    Email.send({
        SecureToken: "your_smtpjs_secure_token", // Replace with your secure token from SMTP.js
        To: userEmail,
        From: "fitnation43@gmail.com",
        Subject: "Welcome to FitNation!",
        Body: "Thank you for subscribing to FitNation! We're excited to have you with us."
    })
    .then(function (message) {
        alert("A welcome email has been sent to " + userEmail);
    })
    .catch(function (error) {
        console.error("Email sending failed: ", error);
        alert("Failed to send the email. Please try again.");
    });
}
const calculateForm = document.getElementById('calculate-form');
const calculateCm = document.getElementById('calculate-cm');
const calculateKg = document.getElementById('calculate-kg');
const calculateMessage = document.getElementById('calculate-message');

calculateForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (calculateCm.value === '' || calculateKg.value === '') {
    calculateMessage.classList.remove('color-green');
    calculateMessage.classList.add('color-red');
    calculateMessage.textContent = 'Please fill in both Height and Weight';
    setTimeout(() => {
      calculateMessage.textContent = '';
    }, 3000);
  } else {
    const heightInMeters = calculateCm.value / 100;
    const weightInKg = calculateKg.value;
    const bmi = Math.round(weightInKg / (heightInMeters * heightInMeters));

    // Health status
    let message;
    if (bmi < 18.5) {
      message = `Your BMI is ${bmi} and you are Underweight`;
    } else if (bmi < 25) {
      message = `Your BMI is ${bmi} and you are Normal`;
    } else if (bmi < 30) {
      message = `Your BMI is ${bmi} and you are Overweight`;
    } else {
      message = `Your BMI is ${bmi} and you are Obese`;
    }

    calculateMessage.classList.add('color-green');
    calculateMessage.textContent = message;

    // Clear the input fields
    calculateCm.value = '';
    calculateKg.value = '';

    // Remove message after four seconds
    setTimeout(() => {
      calculateMessage.textContent = '';
    }, 6000);
  }
});
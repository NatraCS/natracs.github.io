/* function validateName() {
        
    var name = document.getElementById('contact-name').value;

    if(name.length == 0) {

      producePrompt('Name is required', 'name-error' , 'red')
      return false;

  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

      producePrompt('First and last name, please.','name-error', 'red');
      return false;

  }

  producePrompt('Valid', 'name-error', 'green');
  return true;

}

function validatePhone() {

var phone = document.getElementById('contact-phone').value;

if(phone.length == 0) {
    producePrompt('Phone number is required.', 'phone-error', 'red');
    return false;
}

if(phone.length != 10) {
    producePrompt('Include area code.', 'phone-error', 'red');
    return false;
}

if(!phone.match(/^[0-9]{10}$/)) {
    producePrompt('Only digits, please.' ,'phone-error', 'red');
    return false;
}

producePrompt('Valid', 'phone-error', 'green');
return true;

}

function validateEmail () {

var email = document.getElementById('contact-email').value;

if(email.length == 0) {

  producePrompt('Email Invalid','email-error', 'red');
  return false;

}

if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

  producePrompt('Email Invalid', 'email-error', 'red');
  return false;

}

producePrompt('Valid', 'email-error', 'green');
return true;

}

function validateMessage() {
var message = document.getElementById('contact-message').value;
var required = 30;
var left = required - message.length;

if (left > 0) {
  producePrompt(left + ' more characters required','message-error','red');
  return false;
}

producePrompt('Valid', 'message-error', 'green');
return true;

}

function validateForm() {
if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
  jsShow('submit-error');
  producePrompt('Please fix errors to submit.', 'submit-error', 'red');
  setTimeout(function(){jsHide('submit-error');}, 2000);
  return false;
}
else {

}
}

function jsShow(id) {
document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
document.getElementById(id).style.display = 'none';
}


function producePrompt(message, promptLocation, color) {

document.getElementById(promptLocation).innerHTML = message;
document.getElementById(promptLocation).style.color = color;

}
 */

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }

  // Defining a function to validate form
  function validateForm() {
    // Retrieving the values of form elements
    var name = document.form.name.value;
    var email = document.form.email.value;
    var phone = document.form.phone.value;
    var inquiry = document.form.inquiry.value;
    var subject = document.form.subject.value;
    var textarea = document.form.textarea.value;


    // Defining error variables with a default value
    let nameError = emailError = phoneError = inquiryError = subjectError = textareaError = true;

    // Validate name
    if (!name) {
      printError("nameError", "Please enter your name");
    } else {
      if (!name.trim()) {
        printError("nameError", "Please enter a valid name");
      } else {
        printError("nameError", "");
        nameError = false;
      }
    }

    // Validate email address
    if (email == "") {
      printError("emailError", "Please enter your email address");
    } else {
      // Regular expression for basic email validation
      var regex = /^\S+@\S+\.\S+$/;
      if (regex.test(email) === false) {
        printError("emailError", "Please enter a valid email address");
      } else {
        printError("emailError", "");
        emailError = false;
      }
    }

    // Validate mobile number
    if (!phone) {
      printError("phoneError", "Please enter your phone number");
    } else {
      var regex = /^[1-9]\d{9}$/;
      if (regex.test(phone) === false) {
        printError(
          "phoneError",
          "Please enter a valid 10 digit phone number"
        );
      } else {
        printError("phoneError", "");
        phoneError = false;
      }
    }

    // Validate inquiry
    if (inquiry == "Select") {
      printError("inquiryError", "Please select your type of inquiry");
    } else {
      printError("inquiryError", "");
      inquiryError = false;
    }

    // Validate subject
    if (subject.trim() == "") {
      printError("subjectError", "Please enter your subject");
    } else {
      printError("subjectError", "");
      subjectError = false;
    }

    // Validate textarea
    if (textarea.trim() == "") {
      printError("textareaError", "Please Specific details about your inquiry");
    } else {
      printError("textareaError", "");
      textareaError = false;
    }

    // Prevent the form from being submitted if there are any errors
    if (
      (nameError || emailError || phoneError || inquiryError || subjectError || textareaError) ==
      true
    ) {
      return false;
    }
    
  }
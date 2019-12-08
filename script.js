//Use RegEx to validate form

function validate(){
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var phoneNumber = document.getElementById('phone-number').value;
    var emailAddress = document.getElementById('email-address').value;
    var phoneRGEX = /^[0-9]8/;
    var emailAdressRGEX = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    var phoneResult = phoneRGEX.test(phoneNumber);
    var emailAdressResult = emailAddressRGEX.test(emailAddress);
 
if(phoneResult == false)
{
alert('Please enter a valid phone number');
return false;
}
 
if(emailAddressResult == false)
{
alert('Please enter a valid email address');
return false;
}
 
  return true;
}
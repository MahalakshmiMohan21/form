document.getElementById("myForm").addEventListener("submit", function(event){
  event.preventDefault(); 
  
  
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  
  
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<h2>Entered Information:</h2>" + 
                        "<p>First Name: " + firstName + "</p>" +
                        "<p>Last Name: " + lastName + "</p>" +
                        "<p>Email: " + email + "</p>" +
                        "<p>Phone: " + phone + "</p>";
  
 
  document.getElementById("myForm").reset();
});

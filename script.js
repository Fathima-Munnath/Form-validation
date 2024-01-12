function validate() {
    var firstName = document.getElementById("txtFirstName").value;
    if (firstName.length < 3) {
        alert("Please enter a valid First Name");
        return false;
    }

    var lastName = document.getElementById("txtLasttName").value;
    if (lastName.length < 3) {
        alert("Please Enter valid Last Name..!");
        return false;
    }

    var dob = document.getElementById("Dob").value;
    if (dob == "") {
        alert("Date of Birth is required")
    }
    
    var employeeId = document.getElementById("EmployeeID").value;
    if (employeeId == "") {
        alert("Please Enter EmployeeID..!");
        return false;
    }
    
    var phoneNumber = document.getElementById("PhoneNumber").value;
    if (phoneNumber.length < 10) {
        alert("Please Enter valid Phone Number..!");
        return false;
    }
    
    var email = document.getElementById("txtemail");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address");
        return false;
    }

}









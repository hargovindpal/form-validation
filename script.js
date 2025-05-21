var missingField = "";
var errorMessage = "";
var successMessage = "";

//Email Regular Expression
function isMail(Email){
    var regex = /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/; 
    return regex.test(Email);

}

// Mobile Number Regular Expression
function isMobile(contact){
    var mobileregExp = /^\d{10}$/;  
    return mobileregExp.test(contact);
}

// Allow only digits and limit to 10
$("#contact").on("input", function () {
  this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10); 
});


// Password Regular Expression
function isPassword(password){
    var passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;  
    return passwordRegExp.test(password);
}


// Check for Missing and Errors of from

$("#submitBtn").click(function(){

    $("#missingField").html("");
    $("#errorMessage").html("");
    $("#successMessage").html("");

        missingField = "";
        errorMessage = "";
        successMessage = "";

    if($("#name").val() ==""){
        missingField +="<p>Name not filled</p>";
        $("#missingField").html(missingField);
    }

// checking Email Field
    if($("#Email").val() ==""){
        missingField +="<p>Email not filled";
        $("#missingField").html(missingField);
    }
    else if(isMail($("#Email").val()) == false){
        errorMessage += "<p>Email is  not valid</p>";
        $("#errorMessage").html(errorMessage);
    }


// checking Contact Field
    if($("#contact").val() ==""){
        missingField +="<p>Contact not filled</p>";
        $("#missingField").html(missingField);
    }

    else if(isMobile($("#contact").val()) == false){
        errorMessage += "<p>Contact Number is  not valid</p>";
        $("#errorMessage").html(errorMessage);
    }


// checking Password Field
    if($("#password").val() ==""){
        missingField +="<p>Password not filled</p>";
        $("#missingField").html(missingField);
    }
    if($("#confirmPassword").val() ==""){
        missingField +="<p>Confirm Password not filled</p>";
        $("#missingField").html(missingField);
    }

//Checking Confirm Password Field
    else if($("#password").val() != $("#confirmPassword").val()){
        errorMessage += "<p>Password is  not Matched with Confirm Password</p>";
        $("#errorMessage").html(errorMessage);
    }
    else if(isPassword($("#password").val()) == false){
        errorMessage += "<p>Password is not matched to Minimum Requirement,  Please Choose a tough Password</p>";
        $("#errorMessage").html(errorMessage);
    }

// Success Message
if($("#errorMessage").html() ==="" && $("#missingField").html() === ""){
        successMessage="You are registered successfully";
        $("#successMessage").html(successMessage);
    }

});


// Show-Hide the password
$("#togglePassword").click( function(){
    if($("#password").attr("type")=== "password"){
        $("#password").attr("type","text");
    }
    else{
         $("#password").attr("type", "password");
    }
})
$("#toggleConfirmPassword").click( function(){
    if($("#confirmPassword").attr("type")=== "password"){
        $("#confirmPassword").attr("type","text");
    }
    else{
         $("#confirmPassword").attr("type", "password");
    }
})

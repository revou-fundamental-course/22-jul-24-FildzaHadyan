
function validateForm() {
    const name= document.forms["message-form"]["full-name"].value;
    const email= document.forms["message-form"]["email"].value;
    const password= document.forms["message-form"]["password"].value;
    
    if (name == "" || email == "" || password == "") {
    alert("Tidak boleh kosong");
    return false;
    }
    
    setSenderUI(name, email, password);
    
    return false;
    }
    
    function setSenderUI(name, email, password) {
    document.getElementByID("sender-full-name").innerHTML = name;
    document.getElementByID("sender-email").innerHTML = email;
    document.getElementByID("sender-password").innerHTML = password;
    }
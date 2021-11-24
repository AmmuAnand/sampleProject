function submitvalue(){
//take all values from html form
    const firstName = document.getElementById('firstName');
    if(document.getElementById('lastName')!=''){
        const lastName = document.getElementById('lastName');
    }
    const email = document.getElementById('email');
    const password = document.getElementById('password')
    
    // This variable data stores all the html form values.
    let data = 
    '\r Name: ' + firstName.value +' ' + lastName.value +' \r\n ' + 
    'email: ' + email.value + ' \r\n ' + 
    'password: ' + password.value;

    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click()

}
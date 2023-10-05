const validate = () => {
    let username = document.Student.username.value;
    let mobile=document.Student.mobile.value;
    let email=document.Student.email.value;
    let userstat =mobilestat=rollstat=mailstat= false;
    let alphaExp=/^[A-Za-z]+$/
    let alphanumExp=/^[A-Za-z0-9]+$/
    let numExp= /^[0-9]+$/
    let mailExp= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

    if (username === "") {
        document.getElementById('usernote').innerHTML = "Please enter your name"
        userstat=false;
    }
    else{
        if(username.match(alphaExp)) {
            document.getElementById('usernote').innerHTML = ""
            userstat=true;
        }
        else{
            document.getElementById('usernote').innerHTML = "Enter alphabets only."
            userstat=false;
        }
    }


    if(mobile===""){
        document.getElementById('mobilenote').innerHTML="Enter your phone numner"
        mobilestat=false;
    }
    else{
        if(mobile.match(numExp)){
            if(mobile.length==10){
                document.getElementById('mobilenote').innerHTML="" 
                mobilestat=true;
            }
            else{
                document.getElementById('mobilenote').innerHTML="Enter 10 digits"
                mobilestat=false;
            }
        }
        else{
            document.getElementById('mobilenote').innerHTML="Enter digits only"
            mobilestat=false;
        }  
    }



    if(email===""){
        document.getElementById('mailnote').innerHTML="Enter your email"
        mailstat=false;
    }
    else{
        if(email.match(mailExp)){
            document.getElementById('mailnote').innerHTML="Enter your email"
            mailstat=true;
        }
        else{
            document.getElementById('mailnote').innerHTML="Enter valid email"
            mailstat=false;
        }
    }

    if (userstat === true && rollstat=== true && mobilestat===true && mailstat===true) {
        return true;
    }
    else {
        return false
    }

}
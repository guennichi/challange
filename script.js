function store(){
    var Name = document.getElementById('Name');
    var LastName = document.getElementById('LastName');
    var Email = document.getElementById('Email');
    var pw = document.getElementById('pw');
    var confpw = document.getElementById('confpw')

    if(Name.value.length == 0){
        alert('Please write your Name');

    }else if(LastName.value.length == 0){
        alert('Please write your LastName');   
    }
    if(Email.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');
    }
    if(pw.value.length != confpw.value.length ){
        alert('error');

    }else if( LastName.value.length == 0 && Name.value.length == 0 && Email.value.length == 0 && pw.value.length == 0  ){
        alert('Please enter your personal data');

    

    }else{
        localStorage.setItem('Name', Name.value);
        localStorage.setItem('LastName ', LastName .value);
        localStorage.setItem('Email', Email.value);
        localStorage.setItem('pw', pw.value);
        localStorage.setItem('confpw', confpw.value);
        alert('Your account has been created');
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('Email');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}
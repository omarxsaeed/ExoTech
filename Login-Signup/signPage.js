
// decleare variables (for Sign In form)
var signIn_form = document.querySelector(".signIn_form");
var signIn_userName = document.querySelector(".signIn_userName");
var signIn_password = document.querySelector(".signIn_password");
var signIn_general_error = document.querySelector(".signIn_general_error");
var signIn_sucsses_logIn_message = document.querySelector(".signIn_sucsses_logIn_message");



// decleare variables (for Sign Up form)
var signUp_form = document.querySelector(".signUp_form");
var signUp_userName=document.getElementById("signUp_userName");
var signUp_email=document.getElementById("signUp_email");
var signUp_password=document.querySelector(".signUp_password");
var signUp_password_2=document.querySelector(".signUp_password_2");
var signUp_sucsses_register_message=document.getElementById("signUp_sucsses_register_message");
var signUp_userName_error=document.querySelector(".signUp_userName_error");
var signUp_email_error=document.querySelector(".signUp_email_error");
var signUp_password1_error=document.querySelector(".signUp_password1_error");
var signUp_password2_error=document.querySelector(".signUp_password2_error");


var data;
var password_flag=0;
var arr=[];

var new_account; 

var userName_reg_expr = /^[a-zA-Z]+([_]?[a-zA-Z0-9])*$/;
var password_reg_expr = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// console.log(userName_reg_expr.test("aly")) //true username
// console.log(userName_reg_expr.test("1aly")) //false username
// console.log(password_reg_expr.test("123@ly")) //true username
// console.log(password_reg_expr.test("1aly")) //false username


data=JSON.parse(localStorage.getItem("data"));
console.log(data);


function logIn (){
    console.log("true");
        for (let index = 0; index < data.length; index++) {
   
            data=JSON.parse(localStorage.getItem("data"));
            console.log("false");
                if((data[index].user===signIn_userName.value|| data[index].email===signIn_userName.value)&& data[index].password===signIn_password.value){
                    
                    signIn_sucsses_logIn_message.style.display="block";
                    signIn_sucsses_logIn_message.innerText="Welcome " + data[index].user;
                    setTimeout(function (){
                        signIn_sucsses_logIn_message.style.display="none";
                        signIn_password.value="";
                        signIn_userName.value="";
                        open("products.html" ,"","");
                    },2000);
                    break;
                    
                }
                else
                {
                    signIn_general_error.style.display="block";
                    if(signIn_userName.value=="")
                    {
                        signIn_general_error.innerText="Sorry "+"you should enter Username or email";
                        break;

                    }
                    else
                    {
                        signIn_general_error.innerText="Sorry " + "'"+ signIn_userName.user +"'"+ " invaled Username or Password";
                        break;

                    }
                    
                }
                /*
                else
                {
                    if(signIn_userName.value=="")
                    {
                        signIn_general_error.innerText="Sorry "+"you should enter Username or email";
                    }
                    else
                    {
                        signIn_general_error.innerText="Sorry " + "'"+ data[index].user +"'"+ " invaled Username or Password";
                    }
                }*/
            }
           
    }






 function saveData_goTo_signIn(){
    if(userName_reg_expr.test(signUp_userName.value) && password_reg_expr.test(signUp_password.value) && password_flag==1)
    {
       console.log("true")
       
       new_account={
        user:signUp_userName.value,
        email:signUp_email.value,
        password:signUp_password.value,
    };
       arr.push(new_account);
       localStorage.setItem("data",JSON.stringify(arr));
       signUp_sucsses_register_message.style.display="block";
       setTimeout(() => {
        signUp_form.style.display="none";
        signIn_form.style.display="block";
        signUp_sucsses_register_message.style.display="none";
       }, 2000);
       password_flag=0;
       signUp_userName.value="";
       signUp_email.value="";
       signUp_password.value="";
       signUp_password_2.value="";
    //    signUp_sucsses_register_message.innerText="";
       
    }
 };




function goTo_signUp (){
    signIn_form.style.display="none";
    signUp_form.style.display="block";
}

function goTo_signIn(){
    signUp_form.style.display="none";
    signIn_form.style.display="block";
    
}


function check_userName(){
    if(userName_reg_expr.test(signUp_userName.value))
    {
        signUp_userName_error.style.display="none";
    }
    else
    {
        signUp_userName_error.style.display="block";

    }
}

function check_password(){
    if(password_reg_expr.test(signUp_password.value))
    {
        signUp_password1_error.style.display="none";
    }
    else 
    {
        signUp_password1_error.style.display="block";
    }
}

function check_password_matched(){
    if(signUp_password.value==signUp_password_2.value)
    {
        signUp_password2_error.style.display="none";
        password_flag=1;
    }
    else{
        signUp_password2_error.style.display="block";
    }
}
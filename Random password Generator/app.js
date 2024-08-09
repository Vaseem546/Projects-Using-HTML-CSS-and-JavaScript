const passwordBox=document.getElementById("pass");

const length=12;

const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxys";
const numbers="12345667890"
const symbols="@#$&*()_-+{}[]<>/";
const allChars= uppercase+ lowercase+ numbers+ symbols;
function createPassword(){
    password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];
    while(length>password.length){
        password+=allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value=password;
}
const btn=document.getElementById("btn");

btn.addEventListener('click' ,()=> {
    createPassword();
});
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
const copy=document.getElementById("copy");
copy.addEventListener('click' ,()=> {
    copyPassword();
});


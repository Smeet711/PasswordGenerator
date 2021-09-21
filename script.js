const empty = "";
const ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lcase = "abcdefghigklmnopqrstuvwxyz";
const num = "0123456789";
const sym = "$#";

const plength = document.getElementById("p-length");
const iupper = document.getElementById("i-upper");
const ilower = document.getElementById("i-lower");
const inum = document.getElementById("i-num");
const isym = document.getElementById("i-sym");
const sbtbtn = document.getElementById("submit");
const pass = document.getElementById("password");


sbtbtn.addEventListener("click",() => {

let initpass = empty;
(iupper.checked) ? initpass += ucase : "";
(ilower.checked) ? initpass += lcase : "";
(inum.checked) ? initpass += num : "";
(isym.checked) ? initpass += sym : "";


pass.value = generatepassword(plength.value, initpass)


});

function generatepassword(len,initialpass){
    let pass = "";
for(let i =0;i<len;i++){
    pass += initialpass.charAt(Math.floor(Math.random() * initialpass.length));
}

return pass;


}


// copy button


const copy = document.getElementById("copy");

copy.addEventListener("click",() => {

if(pass.value == ""){
    alert("Please Generate Password First !!")
}else{
    pass.select();
    document.execCommand("copy");
    alert("Password Copied to Clipboard :) ")
}


});






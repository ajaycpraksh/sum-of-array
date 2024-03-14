function sum(){
    let number =document.getElementById("number").value;

   let num= number.split("+").map(Number);
  let sum = 0;

for (let i = 0; i < num.length; i++ ) {
  sum += num[i];
}
document.getElementById("result").innerHTML="sum="+sum;
}


let a="naman";
let b="";

for(let i=a.length-1; i>=0; i--) {
  b=b+a[i]
}
if(b==a) {
   console.log("It is a palindrome");
}
else {
   console.log("It is not a palindrome");
  
}
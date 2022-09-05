let str="naman";
let l=str.length-1
let rev="";
for(let i=l;i>=0;i--)
{
    rev+=str[i];
}

if(str===rev)
{
    console.log("palindrom");
}
else{
    console.log("not palindrom");
}
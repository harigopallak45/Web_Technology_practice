// var num1=prompt("Eneter a num1");
// var num2=prompt("Eneter a num2");
// if(num1>num2)
//     console.log("Num 1 is greater");
// else
//     console.log("Num 2 is greater");

// for(i=0;i<10;i++){
//     var hh=prompt("Eneter a hour in 24h")
//     var value="AM"
//     if (hh>24)
//         console.log("Num Should Be less then 24");
//     else 
//         if (hh<0){
//             console.log("Num should be greater than 0");
//         }
//     else {
//         if (hh>=12){
//             value="PM"
//             if(hh>=13)
//                 hh-=12;
//         }
//         if (hh==0)
//             hh=12    
//     }
//     if (hh>0 && hh<24)
//         console.log(hh+":"+"00"+value);
// }

// var num1=prompt("Eneter a num1");
// if (num1%2==0)
//     console.log(num1+": It is even Num");
// else
//     console.log(num1+": It is odd num");

// enter num btw 10 to 20
// var num=prompt("enter num btw -20 to 20")
// if (num>=0){
//     console.log("It is Positive Number");
//     if (num%2==0)
//         console.log(num+": It is even Num");
//     else
//         console.log(num+": It is odd num");
// }
// else if (num<0){
//     console.log("It is Negative Number");
//     if (num%2==0)
//         console.log(num+": It is even Num");
//     else
//         console.log(num+": It is odd num");
// }


// WAP to print FIZZ If it is multiple of 2 puzz if it is multiple of 3 fizzpuzz  if it is multiple of 2 and 3 range is 0 to  100

var num=prompt("enter num  btw 0 to 100")
if (num>=0){
    console.log("It is Positive Number");
    if (num%2==0 && num%3==0)
        console.log("FIZZPUZZ");
    else if (num%3==0)
        console.log("PUZZ");
    else if (num%2==0)
        console.log("FIZZ");
    else {
        console.log(num+": It is not multiple of 2 or 3");
    }
}
else if (num<0){
    console.log("It is Negative Number and it should be btw 0 to 100");
}
else {
    console.log("The num should be btw 0 to 100");
}

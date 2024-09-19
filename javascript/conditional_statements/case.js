// var day=prompt("Enter the index of the day");
// day=Number(day);
// switch(day){
//     case 0: console.log("Sunday");
//     break;
//     case 1: console.log("Monday");
//     break;
//     case 2: console.log("Tuesday");
//     break;
//     default:console.log("Enter num Btw 0 to 6");
//     case 3: console.log("Wednesday");
//     break;
//     case 4: console.log("Thursday");
//     break;
//     case 5: console.log("Friday");
//     break;
//     case 6: console.log("Saturday");
//     break;
// }
// 
// var num1=prompt("Enter the value of Num1");
// var num2=prompt("Enter the value of Num2");
// num1=Number(num1);
// num2=Number(num2);
// var op = prompt("Enter the operation to be performed");
// 
// switch(op){
    // case "add":console.log(num1+num2);
    // break;
    // case "sub":console.log(num1-num2);
    // break;
    // case "mul":console.log(num1*num2);
    // break;
    // case "div":console.log(num1/num2);
    // break;
    // case "mod":console.log(num1%num2);
    // break;
    // case "exp":console.log(num1**num2);
    // break;
    // // default :console.log("Enter the first 3 letter for the operator in lower case");
// }


// WAP that a takes a num and check weather num is pos neg or zero if pos find even or odd 
// var num=prompt("enter num btw -20 to 20")
// num=Number(num)
// if (num>=0){
    // console.log("It is Positive Number");
    // if (num%2==0)
        // console.log(num+": It is even Num");
    // else
        // console.log(num+": It is odd num");
// }
// else if (num<0){
    // console.log("It is Negative Number");
    // if (num%2==0)
        // console.log(num+": It is even Num");
    // else
        // console.log(num+": It is odd num");
// }
// 
// 


// WAP which takes num and check if the num is palindrom
// var num=prompt("Enter the num");
// num=Number(num);
// sum=1
// t=num
// while (num>0){
//     temp=num%10;
//     sum=sum*10+temp;
//     num=Math.floor(num/10);
// }
// if (sum==t)
//     console.log("this is palindrome num");
// else
//     console.log("This is not a palindrome num");




// WAP whcih takes a year is leap or not
// var num=prompt("Enter the year")
// num=Number(num)
// if (num%4==0 && num%100!=0 || num%400==0)
//     console.log("This is a leap year");
// else
//     console.log("This is not a leap year");

// wap which check if a given sstr is palindrom or not
// var str1=prompt("Enter a string")
// str1=str1.toLowerCase();
// var str2=""
// for (i=str1.length-1;i>=0;i--)
//     {
//         str2+=str1[i];
//     }

// if (str1==str2)
//     console.log("This is a palindrome string");
// else
//     console.log("This is not a palindrome string");

// WAP to calculate factorial of a given num by using for loop
// var num=prompt("enter the num");
// num=Number(num);
// sum=1;
// for (i=num;i>0;i--){
//     sum*=i;
// }
// console.log(sum);   


// var tab=prompt("Enter the num for mul tab");
// document.getElementById("heading").innerHTML="The multiplication table for "+tab;
// for (i=1;i<=10;i++){
//     console.log(tab+"*"+i+"="+tab*i);
//     document.getElementById("table").innerHTML+=i+"*"+tab+"="+tab*i+"<br>";
// }



// var tab=prompt("Enter the num for mul tab");
// document.getElementById("heading").innerHTML="The multiplication table for "+tab;
// i=1
// while(i<=10){
//     console.log(tab+"*"+i+"="+tab*i);
//     document.getElementById("table").innerHTML+=i+"*"+tab+"="+tab*i+"<br>";
//     i++
// }


var pin=12345
var userpin
do{
    userpin=prompt("Enter the pin")
} while(userpin != pin)
alert("Pass Correct")
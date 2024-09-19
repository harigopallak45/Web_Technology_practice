// var str=prompt("Enter the string")
// document.getElementById("para").innerHTML="U entered ";
// for (i=0;i<str.length;i++){
//     document.getElementById("para").innerHTML+=str[i];
// }

// var str=prompt("Enter the string")
// document.getElementById("para").innerHTML=str;


// var str =`this is java script class which is 
// not easy to understand the elelment like "onclick" 
// id's `
// console.log( str);

// var num=prompt("Enter the Num");
// for (i=1;i<=10;i++){
//     document.getElementById("para").innerHTML+=`${num}x${i}=${num*i}<br>`
// }

var car=prompt("Enter the Car Name");
var color=prompt("Enter the Car Color");
document.getElementById("head").innerHTML=`I like <span style="color:  ${color} ;">${color}</span> color <span style="color:  ${color} ;"> ${car} </span>car`
document.getElementById("im").innerHTML=`<img src="../../assets/images/${car}" alt="">`
console.log("This is in JavaScript");
// console.error("Error");
document.getElementById("head").innerHTML="This is HariHaran"
document.getElementById("para").innerText="unknown0173"

// document.writeln("This is one  <br>")
// document.writeln("this is two")
var checkBox = document.getElementById("check_box");
var checkButton = document.getElementById("check_button");

checkButton.addEventListener("click", function() {
    if (checkBox.checked) {
        window.alert("Checked");
    } else {
        window.alert("Not Checked");
    }
});


document.getElementById("table").innerHTML="<table > <tr><td>Name</td><td>Sam</td></tr><tr><td>LastName</td><td>Sung</td></tr></table>"
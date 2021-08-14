
var print = function (msg) {
    document.getElementById('result').innerHTML = "Word length is " + msg;
}

// document.getElementById('btnCalculate').onclick = function (event) {
//     print(document.getElementById('str').value.length );

// }

function calculate () {
    print(document.getElementById('str').value.length );

    

}

function reset() {
    document.getElementById('result').innerHTML = "";
    document.getElementById('str').value = '';
}



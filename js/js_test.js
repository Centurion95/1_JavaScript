//important, by this way you can add an eventListener dinamically..
// window.addEventListener("load", handleEventLoadExample);
// document.getElementById("btnSubmit").addEventListener("click", handleButtonClick);

var str_name = prompt("Please enter your name:");
main_menu(str_name);

function main_menu(str_name) {

    var str_main_menu = "Hello " + str_name + ", please enter a number from 1 to 5 \r\n " +
        "1. Addition \r\n " +
        "2. Subtraction \r\n " +
        "3. Multiplication \r\n " +
        "4. Division \r\n " +
        "\r\n " +
        "5. 'For' loop \r\n " +
        "\r\n " +
        "0. Exit";

    var str_option = 999;

    while (str_option != 0) {
        str_option = parseInt(prompt(str_main_menu));
        while (isNaN(str_option)) {
            str_option = parseInt(prompt("(not a valid number)" + str_main_menu));
        }

        if (str_option >= 1 && str_option <= 4) {

            var str_number_one = parseInt(prompt("Enter number one"));
            while (isNaN(str_number_one)) {
                str_number_one = parseInt(prompt("Enter (a valid) number one"));
            }

            var str_number_two = parseInt(prompt("Enter number two"));
            while (isNaN(str_number_two)) {
                str_number_two = parseInt(prompt("Enter (a valid) number two"));
            }

            var result;
            switch (str_option) {
                case 1:
                    // result = str_number_one + str_number_two;
                    result = addition(str_number_one, str_number_two);
                    break;
                case 2:
                    result = subtraction(str_number_one, str_number_two);
                    break;
                case 3:
                    result = multiplication(str_number_one, str_number_two);
                    break;
                case 4:
                    result = division(str_number_one, str_number_two);
                    break;
                // default:
                //     break;
            }
            alert("The result is: " + result);
        } else if (str_option == 5) {
            var str_number_for = parseInt(prompt("Enter number 'FOR'"));
            while (isNaN(str_number_for)) {
                str_number_for = parseInt(prompt("Enter (a valid) number 'FOR'"));
            }

            for (var i = 1; i <= str_number_for; i++) {
                alert("Count: " + i);

                if (i == 10) {
                    alert("Exiting at i:10");
                    break;
                }
            }
        }
    }
    alert("Goodbye! :)");
}

function addition(num1, num2) {
    try {
        if (num1 < 0 || num2 < 0) {
            throw "Number can't be negative!";
        }
        return num1 + num2;
    }
    catch (err) {
        alert("Error: " + err);
    }
}

function subtraction(num1, num2) {
    try {
        if (num1 < 0 || num2 < 0) {
            throw "Number can't be negative!";
        }
        return num1 - num2;
    }
    catch (err) {
        alert("Error: " + err);
    }
}

function multiplication(num1, num2) {
    try {
        if (num1 < 0 || num2 < 0) {
            throw "Number can't be negative!";
        }
        return num1 * num2;
    }
    catch (err) {
        alert("Error: " + err);
    }
}

function division(num1, num2) {
    try {
        if (num1 < 0 || num2 < 0) {
            throw "Number can't be negative!";
        }
        return num1 / num2;
    }
    catch (err) {
        alert("Error: " + err);
    }
}

function handleMouseOverEvent(x) {
    x.style.color = "red";
    x.innerHTML = "Now, mouse out Me";
}

function handleMouseOutEvent(x) {
    x.style.color = "black";
    x.innerHTML = "Mouse Over Me";
}

function calculate(operation) {
    var num1 = parseInt(document.calcForm.num1.value);
    var num2 = parseInt(document.calcForm.num2.value);
    var result = document.calcForm.result;

    //we add validation!
    if (isNaN(num1) || num1 < 1) {
        alert("Please enter number 1");
        document.calcForm.num1.focus();
        return;
    }
    if (isNaN(num2)) {
        alert("Please enter number 2");
        document.calcForm.num2.focus();
        return;
    }

    switch (operation) {
        case "+":
            result.value = addition(num1, num2);
            break;
        case "-":
            result.value = subtraction(num1, num2);
            break;
        case "*":
            result.value = multiplication(num1, num2);
            break;
        case "/":
            result.value = division(num1, num2);
            break;
    }

}

// function calcAddition() {
//     var num1 = parseInt(document.calcForm.num1.value);
//     var num2 = parseInt(document.calcForm.num2.value);
//     var result = document.calcForm.result;
//     result.value = addition(num1, num2);
// }

// function calcSubtraction() {
//     var num1 = parseInt(document.calcForm.num1.value);
//     var num2 = parseInt(document.calcForm.num2.value);
//     var result = document.calcForm.result;
//     result.value = subtraction(num1, num2);
// }

// function calcMultiplication() {
//     var num1 = parseInt(document.calcForm.num1.value);
//     var num2 = parseInt(document.calcForm.num2.value);
//     var result = document.calcForm.result;
//     result.value = multiplication(num1, num2);
// }

// function calcDivision() {
//     var num1 = parseInt(document.calcForm.num1.value);
//     var num2 = parseInt(document.calcForm.num2.value);
//     var result = document.calcForm.result;
//     result.value = division(num1, num2);
// }



function handleOnChangeEvent(bg_color) {
    document.bgColor = bg_color;
}

function handleOnload() {
    alert("event: onload");

    // document.getElementById("lblDateInfo").innerHTML = "Date: " + new Date();
    document.getElementById("lblDateInfo").innerHTML = "Date: " + new Date().toLocaleString();

    myArrayTest();
    get_navigator_properties();
    objectFunction();
}


function stringProperties() {
    var txtTexto = document.stringForm.txt_text.value;
    document.stringForm.txtLength.value =
        "Length: " + txtTexto.length +
        ", index of o: " + txtTexto.indexOf("o") +
        ", lastIndex of o: " + txtTexto.lastIndexOf("o") +
        ", to lowerCase: " + txtTexto.toLowerCase() +
        ", to upperCase: " + txtTexto.toUpperCase() +
        ", Replace: " + txtTexto.replace("Hello", "Goodbye") +
        ", Replace: " + txtTexto.replace("H", "*")
        ;

}


function myArrayTest() {
    var arr1 = new Array(2, 4.56, "asd");

    document.arraysForm.txtArrays.value =
        "Array: " + arr1 +
        ", Lenght: " + arr1.length +
        ", arr1[0]: " + arr1[0] +
        ", arr1[1]: " + arr1[1] +
        ", arr1[2]: " + arr1[2]
        ;

    var arr2 = [2, 4.56, "asd"];
    document.arraysForm.txtArrays2.value =
        "Array: " + arr2 +
        ", Lenght: " + arr2.length +
        ", arr2[0]: " + arr2[0] +
        ", arr2[1]: " + arr2[1] +
        ", arr2[2]: " + arr2[2]
        ;

    var arr3 = new Array();
    arr3[0] = 2;
    arr3[1] = 4.56;
    arr3[2] = "asd";
    document.arraysForm.txtArrays3.value =
        "Array: " + arr3 +
        ", Lenght: " + arr3.length +
        ", arr3[0]: " + arr3[0] +
        ", arr3[1]: " + arr3[1] +
        ", arr3[2]: " + arr3[2]
        ;

}


function handleRemove() {
    var parent = document.getElementById("div1");
    var child = document.getElementById("p1");

    parent.removeChild(child);
}

function handleCreate() {
    var parent = document.getElementById("div1");

    var child = document.createElement("p");
    var node_text = document.createTextNode("I'm a new node..");
    child.appendChild(node_text);
    parent.appendChild(child);
}

function get_navigator_properties() {


    document.navigatorForm.txtNavigator.value =
        "appName: " + navigator.appName +
        ", appCodeName: " + navigator.appCodeName +
        ", cookieEnabled: " + navigator.cookieEnabled +
        ", javaEnabled: " + navigator.javaEnabled
        ;

    var txt_navigator;
    for (x in navigator) {
        txt_navigator += x + ", ";
    }

    document.navigatorForm.txtNavigator2.value = txt_navigator;
}



function objectFunction() {
    var blogPost = new Object();
    blogPost.tittle = "Title";
    blogPost.text = "Text";
    blogPost.category = "Category";

    document.objectForm.txtObject.value =
        "tittle: " + blogPost.tittle +
        ", text: " + blogPost.text +
        ", category: " + blogPost.category
        ;
}
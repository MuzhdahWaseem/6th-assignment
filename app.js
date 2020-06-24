// ===== Chapter 21-25 =====
// Q:1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + lastName;
// alert(fullName + "\nWelcome in JS Land");

// Q:2

// var mobileName = prompt("Enter Your Mobile Model");
// document.write("My favourite Mobile is: " + mobileName , "<br>");
// document.write("Length of String: " + mobileName.length , "<br>");

// Q:3

// var word = "Pakistani"
// document.write("String: " + word , "<br>");
// document.write("Index of 'n': " + word.indexOf("n"));

// Q:4

// var word = "Hello World";
// document.write("String: " + word , "<br>");
// document.write("Last index of: " + word.lastIndexOf("l"));

// Q:5

// var firstName = "Pakistani";
// var firstChar = firstName.charAt(3);
// document.write("Srting: " + firstName , "<br>");
// document.write("Character at index 3: " + firstChar);

// Q:6

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + lastName;
// alert(firstName.concat(" " , lastName , "\nHello World!"));

// Q:7

// var city = "Hyderabad"
// document.write("City: " + city , "<br>");
// document.write("After Replacement: " + city.replace("Hyder" , "Islam"))

// Q:8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message.replace(new RegExp("and", "g"), "&"));

// Q:9
// var a = "427"
// document.write("Value: " + a , "<br>" , "Type: " + "String" + "<br>");
// document.write("Value: " + parseFloat(a), "<br>" , "Type:" + "Number");

// Q:10

// var str = prompt("Enter Any word");
// var b = str.toUpperCase()
// document.write("User Input: " + str + "<br>");
// document.write("UpperCase: " + b);

// Q:11

// var str = prompt("Enter any word");
// var b = str[0].toLocaleUpperCase() + str.slice(1);
// document.write("User Input: " + str + "<br>");
// document.write("UpperCase: " + b);

// Q:12

// var num = 35.36;
// var str = num.toString();
// document.write("Number: " + num , "<br>");
// document.write("String: " + str)

// Q:13

// var name = prompt("Enter User Name:");
// for (var i = 0; name < name.length; i++) {
//     if (CharAT(i) === 33) {
//         alert("Please Enter a Valid Usename!");
//         break;
//   }
// }
// for (var i = 0; name < name.length; i++) {
//     if (CharAT(i) === ",") {
//         alert("Please Enter a Valid Usename!");
//         break;
//   }     
// }
// for (var i = 0; name < name.length; i++) {
//     if (CharAT(i) === ".") {
//         alert("Please Enter a Valid Usename!");
//         break;
//   }      
// }
// for (var i = 0; name < name.length; i++) {
//     if (CharAT(i) === "@") {
//         alert("Please Enter a Valid Usename!");
//         break;
//     }     
// }

// Q:14

// var items = ["cake" , "apple pie" , "cookie" , "chips"  ,"patties"];
// var search = prompt("Welcome to ABC Bakery! What do you want to order?");
// if (search <= items[0]) {
//     alert(items[0] + " "  + "is savailible at the 0 index of our bakery");
// }
//      if (searh <= items[1]) {
//     alert(items[1] + "availible at the 1 index of our bakery");
// }
//      if (search <= items [2]) {
//     alert(items[2] + "availible at the 2 index of our bakery");
// }
//     if (search <= items[3]) {
//     alert(items[3] + "availible at the 3 index of our bakery")
// }
//     if (search <= items[4]) {
//     alert(items[4] + "availible at the 4 index of our bakery")
// }
// else {
//     alert("We are Sorry!" + search + "is not availibe in our bakery");
// }

// Q:15



// Q:16

// var str = "University of Karachi";
// var arr = str.split(" ");
// document.write(arr , "<br>")

// Q:17



// Q:18
// var str = "The quick brown fox jumps over the lazy dog";


// ======= Chapter # 2 ========

// Q:1

// var num = prompt("Enter possitive integer");
// var roundValue = Math.round(num);
// var floorValue = Math.floor(num);
// var cielValue = Math.ceil(num);
// document.write("Number: " + num , "<br>");
// document.write("Round od value: " + roundValue , "<br>");
// document.write("Floor value: " + floorValue , "<br>");
// document.write("Ciel value: " + cielValue , "<br>")

// Q:2

// var num = prompt("Enter negetive integer");
// var roundValue = Math.round(num);
// var floorValue = Math.floor(num);
// var cielValue = Math.ceil(num);
// document.write("Number: " + num , "<br>");
// document.write("Round od value: " + roundValue , "<br>");
// document.write("Floor value: " + floorValue , "<br>");
// document.write("Ciel value: " + cielValue , "<br>")

// Q:3

// var num = prompt("Enter value:");
// var absValue = Math.absolute

// Q:4

// var randomNumber = Math.random( );
// document.write("Random value of dice: " + randomNumber , "<br>");
// var randomNumber = Math.random( );
// document.write("Random value of dice: " + randomNumber)


// Q:5

// var toss1 = prompt("Enter your coin");
// var toss2 = prompt("Enter your coin");
// var randomValue = Math.random

// Q:6

// var num = Math.random(1-100);
// document.write("Random number between 1-100: " + num)

// Q:7

// Q:8

// var currentAge = prompt("Enter your age.");
// var yearsEligibleToVote = currentAge - 18;

// ====== Chapter # 3 ======

// Q:1

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write("Date: " + now )

// Q:2

// var d = new Date();
// var b = d.toString();
// var c = b.slice(4,8)
// alert("Crurrent Month: " + c)

// Q:3

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert("Today is " + nameOfToday);

// Q:4

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if (theDay >= [5]) {
//     alert("Its Fun Day");
// }
// else if (theDay >= [6]) {
//     alert("Its Fun Day")
// }

// Q:5

// var date = new Date();
// var currentDate = date.getDate();
// if (currentDate <= 16) {
//     alert("First Fifteen Days of the Month");
// }
// else {
//     alert("Last Days of the Month ")
// }

// Q:6

// var date = new Date();
// var milli = date.getTime()
// var minutes  = date.getTime() / 1000 * 60 *60 * 24 * 30 * 12 
// document.write("Current Date: " + date , "<br>");
// document.write("Elapsed millisecond since January 1, 1970: " + milli , "<br>")
// document.write("Elapsed minutes since January 1, 1970: " + minutes)

// Q:7

// var hours = new Date();
// var crurrentHrs = hours.getHours();
// if ( crurrentHrs >=12) {
//     alert("Its PM");
// }
// else {
//     alert("Its AM")
// }

// Q:8

// var laterDate = new Date("Dec 31 , 2020");
// document.write("Later Date: " + laterDate)

// Q:9

// var date = new Date("June 18, 2015");
// var pastDays = date.getDay();
// document.write(pastDays)

// Q:10

// Q:11

// var d = new Date();
// document.write("Time: " + d , "<br>" )
// var time = d.setHours(20);
// document.write("1hour ago, it was: " + d , "<br>");

// Q:12

// var d = new Date();
// document.write("Time: " + d , "<br>" )
// var time = d.setFullYear(1920);
// document.write("100 years back, it was: " + d , "<br>");

// Q:13
// var dob = new Date(prompt("Enter your date of birth" , "Dec 19, 1991"));
// var dobMilli = dob.getTime();
// var today = new Date();
// var todayMilli = today.getTime();
// var diff = todayMilli - dobMilli;
// var diffYear = diff / (1000* 60 * 60 * 24 * 30 * 12);
// var accuAge = Math.floor(diffYear);
// document.write("Your age is: " +  accuAge , "<br>");
// document.write("Your date of birth is: " +  dob);


// ====== Chapter 4 ======

// Q:1

// function time(){
//     var now = new Date();
//     document.write(now)
// }
// time()

// Q:2

// function greeting(){
//     var firstName = prompt("Enter your first name:");
//     var lastName = prompt("Enter your last name:");
//    var fullName = firstName + lastName;
//    return fullName;
// }

// var printName = greeting();
// document.write("Hello" + " " + printName);

// Q:3

// function add(){
//     var firstNum = +prompt("Enter your first number:");
//     var secondNum = +prompt("Enter your second number:");
//    var result = firstNum + secondNum;
//    return result;
// }

// var printValue = add();
// alert(printValue);

// Q:4

// function calculator(){
//     var Num1 = +prompt("Enter your first number:");
//     var operator = prompt("Enter operator");
//     var Num2 = +prompt("Enter your second number:");
//     var opr1 = "+";
//     var opr2 = "-";
//     var opr3 = "*";
//     var opr4 = "/";
//     var opr5 = "%";
//     if (operator === opr1) {
//         var result = Num1 + Num2;
//         return result;
//         // document.write(Num1 , "<br>" , "+" + Num2);
// }
// else if(operator === opr2) {
//     var result = Num1 - Num2;
//     return result;
// }
// else if (operator === opr3) {
//     var result = Num1 * Num2;
//     return result;
// }
// else if (operator === opr4) {
//     var result = Num1 / Num2;
//     return result;
// }
// else if (operator === opr5) {
//     var result = Num1 / Num2 * 100
// }
// }

// var output = calculator()
// document.write(output);


// Q:5

// function factorial(n){
//     0! = 1, 1! = 1
//     if(n > 0 && n <= 1) {
//     return 1;
//     }
//     else {
//         return n * factorial(n-1);
//     }
// }
// console.log(factorial(5))

// Q:8

// function calculateHypotenuse() {
//     var base = 7
//     var perpendicular = 9;
//     function calculateSquare() {
//         var baseSquare = base * base
//         var perpendicularSquare = perpendicular * perpendicular
//         var hypotenuse = baseSquare + perpendicularSquare
//         return hypotenuse  
//     }
//     var result = calculateSquare();
//     document.write(result)
// }
// calculateHypotenuse();

// Q:9

// function area(width , height){
//     var resultOfArea = width * height;
//     return resultOfArea
// }
// var finalResult = area(5,8);
// document.write(finalResult)

// Q:10

// function isPalindrom(){
//     var word = prompt("Enter your word");
//     var check = "";
//     for(var i = word.lenght -1; i >= 0; i--){
//         check += word[i];
//     }

//     if(word === check) {
//         alert(word +  " " + "is a palindrom");
//     }

//     else{
//         alert(word + " " + "is not a palindrom")
//     }

// }
// isPalindrom()

// Q:11

function titleCase(str){
    var arr = str.split(" ");
    var result = sr.map(
        function(val){

        });
    return result;

}
titleCase("a quick brown fox jumps over the lazy dog")
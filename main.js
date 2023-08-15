// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// day 8
// if statement and switch



// if statement 
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let number = 2;
// if (number > 0){
//     // code
// }
// else{
//     // code
// }

// let number2 = -2;
// if (number > 0){
//     // code
// }
// else{
//     // code
// }
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let names="farah";
// let age= 15;
// if (age < 12 && names == "farah"){
//     console.log("welcome to javascript");
// } else if( number > 90){        // I can add nonending else if
//     console.log("yes 90");
// }else{     // else is the last thing to put in if statement
//     console.log("no")
// }
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// challenge
// let score=prompt("what is your score? ");
// if(score > 100){
//     alert("your score should be under 100")
// } else if (score >= 95){
//     alert("A+");
// }else if( score >= 90){
//     alert("A");
// }else if( score >= 85){
//     alert("B+");
// }else if( score >= 80){
//     alert("B");
// }else if( score >= 70){
//     alert("C");
// }else if( score >= 60){
//     alert("D");
// }else if( score >= 50){
//     alert("F");
// }else{
//     alert("no score found");
// }
// end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//practice
// let speed= prompt("كم سرعتك ؟");
// let speedlimit=60;

// let message= speed > speedlimit ? "انت تقود بسرعه زائدة":"انت تقود بأمان";

// alert(message);
// end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>







// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// switch
// 1- case can be any type of data
// 2- break cuts and stops the interpreter from going all over every case


// 1
let monthnumber = 6;
let monthname;    // introduced here so it can be used without finding "undefined" 

// using case number
switch (monthnumber) {
    case 1:
        monthname="january"
        break;
    case 2:
        monthname="febreury"
        break;
    case 3:
        monthname="march"
        break;
    case 4:
        monthname="april"
        break;
    case 5:
        monthname="may"
        break;
    case 6:
        monthname="june"
        break;
    case 7:
        monthname="july"
        break;
    case 8:
        monthname="august"
        break;
    case 9:
        monthname="september"
        break;
    case 10:
        monthname="october"
        break;
    case 11:
        monthname="november"
        break;
    case 12:
        monthname="december"
        break;

    
    default:
        monthname="not valid"
        break;
}

console.log("monthname: " + monthname + " " + "monthnumber: " + monthnumber);


// 2
let monthnumbers= "f"
let monthnames;  // introduced here so it can be used without finding "undefined" 

// using case string
switch (monthnumbers) {
    case "a":
        monthname="january"
        break;
    case "b":
        monthname="febreury"
        break;
    case "c":
        monthname="march"
        break;
    case "d":
        monthname="april"
        break;
    case "e":
        monthname="may"
        break;
    case "f":
        monthname="june"
        break;
    case "g":
        monthname="july"
        break;
    case "h":
        monthname="august"
        break;
    case "i":
        monthname="september"
        break;
    case "j":
        monthname="october"
        break;
    case "k":
        monthname="november"
        break;
    case "l":
        monthname="december"
        break;

    default:
        monthname="not valid"
        break;
}

console.log("monthname: " + monthnames + " " + "monthnumber: " + monthnumbers);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// comparison betweem value only
console.log( 23 == 23);
console.log( 23 == "23");
// comparison between type and value
console.log( 23 === 23);
console.log( 23 === "23");
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let isloggedin=false;

// if statement moves to the second code only and only if the first statement comes out as false!
if(!isloggedin){
    console.log("please register");  // whether what is written inside the string is correct or not the interpreter doesn't care it only see whether statement 1 is true and in this case ! changed the value from false to true
}else{
    console.log("welcome back!")
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// end of day8
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>






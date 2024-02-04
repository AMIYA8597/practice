// let str = " r u mad?"
// console.log`${str}`;


// function test (person, public, politics) {
//     this.person = person;
//     this.public = public;
//     this.politics = politics; 
// }
// let john = new test("John", "Yes", "Conservative");
// let mark = new test("Mark", "No", "Independent");

// // console.log(john);

// if (john.public === 'Yes'){
//     console.log(`${john.person} is a public figure.`);
//     } else if (mark.public === 'Yes'){
//         console.log(`${mark.person} is also a public figure.`)}
//         else {
//             console.log('Nobody is a public figure at the moment.');
//         };
        
//         // Accessing object properties using dot notation:
//         console.log(`${john.person}'s political views are ${john.politics}.`);
//         // Using bracket notation to access property:
//         console.log(`${mark['person']} has ${mark['politics']}
//         as their political views.`);
//         function checkPoliticalViews(obj){
//             return `${obj.person}'s political views are ${obj.politics}.`;
//         }
//         console.log(checkPoliticalViews(mark));


// function test (string , channel , person) {
//     console.log(string, channel, person);
// }
// let utubechannel= 'amiyacoder';
// let name = 'amiya'

// test `subscribe to ${utubechannel} run by ${name}!`;



// let str = "hello i am amiya"
// // console.log("here string length is : ",str.length)
// console.log(str[4]);
// console.log((str.charAt(4)));




// // modifying string 

let greeting = "Hello i am amiya , Hello !";

console.log("before replace method : =>",greeting);
console.log("after replace method : =>",greeting.replace("Hello", "oye"));   //here replace method will change only first instance of that character or words .
console.log("after replaceAll method : =>",greeting.replaceAll("Hello", "oye"));    //here replaceAll method will change all instance of that character or words .



// // search using string 

let search = "Hello i am amiya !";
console.log( "using searching method",search.indexOf("a"));

// // // extract substrings :
//  let myStr ="This is a sample sentence.";
//  console.log(`using subString method "${myStr.substring(7,-1)}".`);  
//  console.log(`using slice mehod "${myStr.slice(7,-1)}".`);  



//  // converting string 

let myStr = 55;
console.log("converting to string",String(myStr))

// // convert object to string

let objStr = { name : "amiya", description: "i love coding"} ;
console.log("convert Object to String",JSON.stringify(objStr));

 // //checking ASCII characters

//  let capitalCharAscii = 'A';
//  let smallCharAscii = 'a';

//  console.log('ASCII value of', capitalCharAscii, 'is', capitalCharAscii.charCodeAt());
//  console.log('ASCII value of', smallCharAscii, 'is', smallCharAscii.charCodeAt());



// // string comparison
let str1= "I Love Coding" ;
let str2="I Love eating" ;
let str3= "I Love Coding" ;

console.log( "compareing string using localeCompare methods",str1.localeCompare(str2));
console.log( "compareing string using localeCompare methods",str1.localeCompare(str3));


// // string includes methods 

let srch = "Hello World";
let text = "Welcome Hello World , Welcome to the world of programming";

console.log("Check if \"Hello World\" is present in \"Welcome Hello World Welcome to the world of programming\": ",text.includes(search));
if (text.includes(search)) {
    console.log ("'",search,"' is found in the text");
} else{
   console.log ("'",search,"' is not found in the text");  
}

// // character at method

let charAtText = "Hello World";
console.log("character at position 4", charAtText.charAt(4));

// // indexOf and lastIndexOf

let findTheWord ="World";
let myString = "Hello World Welcome to the world of programming";

let indexPos =myString.indexOf(findTheWord);
console.log("index of word 'World' is ",indexPos)




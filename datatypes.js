
console.log("hello world this is javascript")
 
var number = 5; // in-line comment

console.log(number)

/*this is a multi-line comment*/

var sum = 10 + 10;

console.log(sum)

var difference = 40 - 30;

console.log(difference)

var myvar = 10;

myvar ++;

console.log(myvar)

var myvar = 11;

myvar --;

console.log(myvar)

var product = 2.0 * 4.9;

console.log(product)

var remainder;
remainder = 11 % 3;
console.log(remainder)

var a = 3;
var b = 17;
var c = 12;

//only modified code below this line

console.log(a = a + 12)
b = 9 + b;
console.log(c += 13)

var myStr = "i am a \"double quoted\" string inside \"double quotes\""
console.log(myStr) 

var ourstr = "i come first. "

ourstr += "i come second."

console.log(ourstr)

var firstName = "Ada"

firstLetterOfFirstName = firstName[0];

console.log(firstLetterOfFirstName)


var lastName = "lovelace"

lastLetterOfLastName = lastName[lastName.length - 1];

console.log(lastLetterOfLastName)

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){

    var result = "";
    result += "The " + myAdjective +" " + myNoun +" "+ myVerb +" "+ "to the store " + myAdverb

    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"))



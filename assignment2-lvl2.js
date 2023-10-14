// 1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another");

// 2
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\" by Mother Teresa");

// 3
const str = '10';
if (typeof str !== 'num') {
  str = parseInt(str);
}

// 4
const str1 = '9.8';
if (parseFloat(str1) !== 10) {
  str1 = 10;
}

// 5
const pythonStr = 'python';
const jargonStr = 'jargon';
const Oncontainer = pythonStr.includes('on') && jargonStr.includes('on');

// 6
const sen = "I hope this course is not full of jargon.";
const containsJargon = sentence.includes('jargon');

// 7
const rndmNum1 = Math.floor(Math.random() * 101); 

// 8
const rndmNum2 = Math.floor(Math.random() * 51) + 50; 

// 9
const rndmNum3 = Math.floor(Math.random() * 256); 

// 10
const rndmIndex = Math.floor(Math.random() * challenge.length);
const rndmChar = challenge.charAt(rndmIndex);

// 11
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// 12
const ToSlice = "You cannot end a sentence with because because because is a conjunction";
const slicedPhrase = ToSlice.substr(ToSlice.indexOf('because') + 8, 7);
console.log(slicedPhrase);

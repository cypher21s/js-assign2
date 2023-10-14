// 1
const sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const countl = (sentence.match(/love/gi) || []).length; 
console.log(`The word 'love' appears ${countl} times in the sentence.`);

// 2
const sentence1 = 'You cannot end a sentence with because because because is a conjunction';
const countBecause = (sentence1.match(/because/g) || []).length;
console.log(`The word 'because' appears ${countBecause} times in the sentence.`);

// 3
const sentence3 = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
const cleanedSentence = sentence3.replace(/[^a-zA-Z ]/g, ''); 
const words = cleanedSentence.split(/\s+/); 
const wordFrequency = {};
let mostFrequentWord = '';
let maxFrequency = 0;

for (const word of words) {
  const lowercaseWord = word.toLowerCase();
  wordFrequency[lowercaseWord] = (wordFrequency[lowercaseWord] || 0) + 1;
  if (wordFrequency[lowercaseWord] > maxFrequency) {
    maxFrequency = wordFrequency[lowercaseWord];
    mostFrequentWord = lowercaseWord;
  }
}

console.log(`The most frequent word is '${mostFrequentWord}' with a frequency of ${maxFrequency}.`);

// 4


const text4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const numbers = text4.match(/\d+/g);
let totalIncome = 0;

if (numbers) {
  for (const number of numbers) {
    totalIncome += parseInt(number);
  }
}

console.log(`The total annual income is ${totalIncome} euros.`);


const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const numbers = text.match(/\d+\s*(euro)?\s*(per month|annual)/g);
let totalAnnualIncome = 0;

if (numbers) {
  for (const item of numbers) {
    if (item.includes("per month")) {
      const monthlyIncome = parseInt(item);
      totalAnnualIncome += monthlyIncome * 12; 
    } else {
      totalAnnualIncome += parseInt(item);
    }
  }
}

console.log(`The total annual income is ${totalAnnualIncome} euros.`);

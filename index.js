// const singleDigits = [
//   "zero", "one", "two", "three", "four", 
//   "five", "six", "seven", "eight", "nine", "dot"
//   ]; 

// ConvertToString = (testNum) => {
//   for (i = 0; i < singleDigits.length; i++) {
//     if (testNum === i) {
//       // return singleDigits[i];
//       console.log(singleDigits[i]);
//     }
//   }
// };

// ConvertToNumber = (numWord) => {
//   for (i = 0; i < singleDigits.length; i++) {
//     if (numWord === singleDigits[i]) {
//       // return singleDigits[i];
//       console.log(i);
//     }
//   }
// }

const numObject = {
  '0' : 'zero',
  '1' : 'one',
  '2' : 'two',
  '3' : 'three',
  '4' : 'four',
  '5' : 'five',
  '6' : 'six',
  '7' : 'seven',
  '8' : 'eight',
  '9' : 'nine',
  '.' : 'dot'
};

let string = '';

ConvertDecToString = (testNum) => {
  const numString = testNum.toString();
  console.log(numString);
  const numArray = numString.split('');
  numArray.forEach((testNum) => {
    string += `${numObject[testNum]} `;
    });
    console.log(string);
  }

// convert1to9 = () => {
//   for (i = 0; i < 10; i++) {
//     ConvertToString(i);
//   }
// }

// convert1to9();

// TestCase1= () => {
//     //Arrange
//     var testNum = 3;
//     //Act
//     var result = ConvertToString(testNum);
//     //Assert
//     if(result == "three"){
//         console.log("Test Passed");
//     } else {
//         console.log("Test Failed");
//     }
// }

// TestCase1();
// ConvertToString(5);
// ConvertToNumber('one');
ConvertDecToString(2.0);
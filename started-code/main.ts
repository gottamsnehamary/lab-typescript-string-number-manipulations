import { StringManipulationService } from "./main-service";
import { NumberManipulationService } from "./main-service";
let str1: string = "Type";
let str2: string = "Script";
class StringManipulations implements StringManipulationService {
  public print(word: string): void {
    //Display the given string without any modifications (use console.log to print)
    console.log("AS it is : " + word);

    //Display the given string in uppercase.
    console.log("Lowercase : " + word.toUpperCase());

    //Display the given string in lowercase.
    console.log("Uppercase : " + word.toLowerCase());

    //Display the character at a particular position in a given string.
    console.log("Character At 3 : " + word.charAt(3));

    //Find the length of the given string.
    console.log("Length : " + word.length);

    //Concatenate the given string with another string.
    console.log("Combined Result : " + str1.concat(str2));

    //Slice the given string and display.
    console.log("SLICEDWORD : " + word.slice(1, -2));
  }

  printWithSpace(sentence: string): void {}

  //method should take string as input and display the number of vowels in a given string.
  findVowel(str: string): void {
    var vowelsCount = 0;
    var string = str.toString();
    for (var i = 0; i <= string.length - 1; i++) {
      if (
        string.charAt(i) == "a" ||
        string.charAt(i) == "e" ||
        string.charAt(i) == "i" ||
        string.charAt(i) == "o" ||
        string.charAt(i) == "u"
      ) {
        vowelsCount += 1;
      }
    }
    console.log(" Numbers of vowesl in a string : " + vowelsCount);
  }

  //method  checks whether the given number is a prime number or not.
  findPrime(num: number): void {
    {
      if (num == 1) {
        console.log(" NUMBER IS NOT A PRIME NUMBER ");
      } else if (num === 2) {
        console.log(" NUMBER IS  A PRIME NUMBER ");
      } else {
        for (var x = 2; x < num; x++) {
          if (num % x === 0) {
            console.log(" NUMBER IS NOT A PRIME NUMBER ");
          }
        }
        console.log(" NUMBER IS  A PRIME NUMBER ");
      }
    }
  }

  //method checks whether the given number is a magic number
  findMagic(num: number): void {
    {
      if (num % 9 == 1) console.log("Magic Number");
      else console.log("Not a Magic Number");
    }
  }
}
let p = new StringManipulations();
p.print("sneha");
p.findVowel("StringManipulations");
p.findPrime(37);
p.findMagic(199);

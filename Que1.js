// Write a function that accepts a string as input and swaps the case of each character.
//  For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

//input the string here
const str = 'The Quick Brown Fox'; 
const findLetter = (char = '') => {
    //determines the case of a character and swaps it
   if(char.toLowerCase() === char.toUpperCase){
      return char;
   }else if(char.toLowerCase() === char){
      return char.toUpperCase();
   }else{
      return char.toLowerCase();
   };
}
const swapCase = (str = '') => {
   let res = '';
   //iterates through each character in the input string
   for(let i = 0; i < str.length; i++){
      const el = str[i];
    //calls the findLetter function to swap the case
      res += findLetter(el);
   };
   return res;
};
//logs the new string
console.log(swapCase(str));
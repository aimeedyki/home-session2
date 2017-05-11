'use strict';

let words = (sentence) => {
	sentence = sentence.replace(/[\t]/g," ");
	sentence = sentence.replace(/[\n]/g," ");
	sentence = sentence.replace(/  +/g, ' ');
  let output= sentence.split(" ");
let singleWord=[];
let count= [];
let jsonObject = {};
let number= 0;
for (let counter = 0; counter < output.length; counter++) {
    singleWord[counter]=output[counter];
    count[counter] = number;
     for (let j = 0; j < singleWord.length; j++){
	     if (singleWord[j] === output[counter]) 
	    {
	      count[counter]+= 1;
	    }	
	   
     }
      jsonObject[output[counter]] = count[counter] ;
	}

return jsonObject;
}


module.exports = {
    words: words
};


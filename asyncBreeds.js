// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callBackFn) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) callBackFn(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};


//  Needs to funcction the console log as callback
const printBreed = breed => {
  console.log('Return Value: ', breed);
};
// => will NOT print out details, instead we will see undefined!
// we try to get the return value
breedDetailsFromFile('Bombay', (data) => console.log(data));


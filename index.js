const {fetchBreedDescription} = require ('./breedFetcher');

const breedName = process.argv[2];
console.log(breedName);

fetchBreedDescription (breedName, (error, desc) => {
  if (error) {
    console.log("error details:", error);
  } else {
    console.log(desc)
  }
})
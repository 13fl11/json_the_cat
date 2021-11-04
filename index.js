const {breedFetcherDescription} = require ('./breedFetcher');

const breedName = process.argv[2];
console.log(breedName);

breedFetcherDescription (breedName, (error, desc) => {
  if (error) {
    console.log("error details:", error);
  } else {
    console.log(desc)
  }
})
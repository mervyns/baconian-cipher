/**
 * ===================================
 * Bacon Encoder/Decoder
 * ===================================
 */
const bacon_library = {
  a: "aaaaa",
  b: "aaaab",
  c: "aaaba",
  d: "aaabb",
  e: "aabaa",
  f: "aabab",
  g: "aabba",
  h: "aabbb",
  i: "abaaa",
  j: "abaaa",
  k: "abaab",
  l: "ababb",
  m: "ababb",
  n: "abbaa",
  o: "abbab",
  p: "abbba",
  q: "abbbb",
  r: "baaaa",
  s: "baaab",
  t: "baaba",
  u: "baabb",
  v: "baabb",
  w: "babaa",
  x: "babab",
  y: "babba",
  z: "babbb"
};

const baconCipher = () => {
  let crypted = "";
  const input = process.argv[3].toLowerCase();
  for (i in input) {
    let currChar = input.charAt(i);
    if (currChar == " ") {
      crypted += " ";
    } else {
      crypted += bacon_library[currChar];
    }
  }
  console.log(crypted);
};

const baconDecipher = () => {
  let decrypted = "";
  const string = process.argv[3].toLowerCase();
  const splitString = string.split(" ");

  for (i in splitString) {
    let currWord = splitString[i];
    let count = 0;
    let currStr = "";
    for (j in currWord) {
      currStr += currWord.charAt(j);
      if (count < 4) {
        count++;
      } else if (count === 4) {
        for (key in bacon_library) {
          if (bacon_library[key] === currStr) {
            decrypted += key;
            currStr = "";
            count = 0;
          }
        }
      }
    }
  }
  console.log(decrypted);
};

if(process.argv[2] === "baconCipher"){
	console.log("Welcome to baconEncoder");
	console.log(process.argv[3]);
	baconCipher();
}
if(process.argv[2] === "baconDecipher"){
	console.log("Welcome to baconDecoder");
	console.log(process.argv[3]);
	baconDecipher();
}

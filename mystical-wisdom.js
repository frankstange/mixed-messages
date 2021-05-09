//The wisdomSafe object contains the individual sentence elements
const wisdomSafe = {
  part1: [
    'Lern to ',
    'Think forward to ',
    'You can ',
    'You are able to ',
    'You have the power to ',
    'Your wife ',
    'Your dog ',
  ],
  part2: [
    'laugh, ',
    'cry, ',
    'run, ',
    'join, ',
    'drive, ',
    'create, ',
    'think, ',
    'ponder, ',
  ],
  part3: [
    'to get ',
    'to loose ',
    'to win ',
    'to conquer ',
    'to find ',
    'to check ',
  ],
  part4: [
    'the price.',
    'the cup.',
    'the job.',
    'the girl.',
    'the car.',
    'the fancy cake.',
  ],
};

//The randomGen function delivers a random element of a transferred array
const randomGen = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

//The nice presentation of the mystical wisdom
console.log('Hear the mystical wisdom:');
console.log(
  randomGen(wisdomSafe.part1) +
    randomGen(wisdomSafe.part2) +
    randomGen(wisdomSafe.part3) +
    randomGen(wisdomSafe.part4)
);

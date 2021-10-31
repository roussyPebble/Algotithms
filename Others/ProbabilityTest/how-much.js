import Chance from 'chance';

const generateUniqueNumbre = (x, max) => {
    const nums = new Set();
    while (nums.size !== x) {
        nums.add(Math.floor(Math.random() * max) + 1);
    }
    return nums;
};

const chance = new Chance();
console.log('How much time it take to an event occurred.');
const probability = 36000;
const repetitions = 10000;
let succeed = false, attempt = 0;
do {
    const secret = chance.natural({min: 1, max: probability});
    const  sets = generateUniqueNumbre(10, probability);
    succeed = sets.has(secret);
    //console.log(`The secret is ${secret}`);
    // const limit = 100;
    // let tries = 0, guess;
    // do {
    //     guess = chance.natural({min: 1, max: probability});
    // } while (++tries < limit && guess !== secret);
    //console.log(`The last guess was ${guess}`);
    //console.log(`Number of guest was ${tries}`);
    //succeed = guess === secret;
} while (++attempt < repetitions && !succeed);
console.log(`Number of attempts was ${attempt} - succeed = ${succeed} `);
//console.log(`Moyen for ${repetitions} attemps is ${sum / repetitions}`);
//console.log(`${(1 - Math.pow(1 - 1 / probability, 36000)) * 100}%`);

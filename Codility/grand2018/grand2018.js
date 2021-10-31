//https://app.codility.com/demo/take-sample-test/grand2018/
import {TestExt} from '../../test';

function solution(s) {
    const len = s.length;
    let result = 0;
    let chars = {};
    let balanced = 0;
    let lastChar = '';
    let previousChar = '';
    let nbOfChars = 0;

    const checkBalanced = () => {
        for (let [, values] of Object.values(chars)) {
            if (values !== balanced) return false;
        }
        return true;
    };
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            if (Object.keys(chars).indexOf([s[j]]) === -1) {
                if (nbOfChars === 2) {
                    delete chars[previousChar];
                    previousChar = lastChar;
                    chars[previousChar].counter = chars[previousChar].consequetif;
                    chars[previousChar].consequetif = 0;
                    lastChar = s[j];
                    chars[lastChar].consequetif = 1;
                    chars[lastChar].counter = 1;
                    continue;
                } else {
                    previousChar = lastChar;
                    if (previousChar) {
                        chars[previousChar].counter = chars[previousChar].consequetif;
                        chars[previousChar].consequetif = 0;
                    }
                    lastChar = s[j];
                    chars[lastChar] = {};
                    chars[lastChar].consequetif = 1;
                    chars[lastChar].counter = 1;
                    balanced = Math.max(balanced, 1);
                    nbOfChars += 1;
                }
            } else {
                if (s[j] === lastChar) {
                    chars[lastChar].consequetif += 1;
                    chars[lastChar].counter += 1;
                } else {
                    previousChar = lastChar;
                    if (previousChar) {
                        chars[previousChar].counter = chars[previousChar].consequetif;
                        chars[previousChar].consequetif = 0;
                    }
                    lastChar = s[j];
                    chars[lastChar].consequetif = 1;
                    chars[lastChar].counter += 1;
                }
                balanced = Math.max(balanced, chars[lastChar].counter);
                if (j % balanced || nbOfChars < 2) continue;
                if (checkBalanced()) result = Math.max(result, j);
            }
        }
        chars = [];
        balanced = 0;
    }
    return result;
}


const test = [
    {in: ['abababa'], expected: 6, show: true},
    {in: ['cabbacc'], expected: 4, show: true},
    {in: ['aaaaaaa'], expected: 0, show: true},
    {in: ['aaaaasdrternsdlfkgnsamsdljirsdfgsrosdfhgsdgfkadkfagwegasdgjdgfgdjhsgdjhfgsjdgfjsdlroipoaa'], expected: 0, show: true},
    {in: ['b'], expected: 0, show: true}
];

//TestExt(test, solution);
TestExt([test[3]], solution);
/*
https://app.codility.com/programmers/task/replacing_books/

There are N obligatory books in a school program syllabus. The program also defines the order in which books should be read. Each book comes from a specific age, such as the enlightenment or the baroque period. The more books in a row the students read from any given age, the more they learn about it. Moreover, if they read a book from a different age, they will get distracted.

Teachers are allowed to replace K books from the program with alternatives. They want students to learn as much as possible from a single age (although they have not picked a particular specific age). The amount learned can be measured by the number of consecutive books from the same age read by the students. What is the maximum number of consecutive books from the same age after replacing at most K of them?

Note that the new books (after replacement) can be any books from the chosen age. They do not need to be listed in the syllabus, so the teacher can always find K books from the same age.

Write a function:

    function solution(A, K);

that, given an array of integers A of length N, representing the ages of consecutive books from the school program syllabus, and an integer K, returns the maximum number of consecutive books from the same age after replacing at most K of them.

Examples:

1. Given A = [1, 1, 3, 4, 3, 3, 4] and K = 2, the function should return 5. Teachers can replace books from age 4 with books from age 3.

2. Given A = [4, 5, 5, 4, 2, 2, 4] and K = 0, the function should return 2. Teachers are not allowed to replace any books.

3. Given A = [1, 3, 3, 2] and K = 2, the function should return 4. Teachers can replace all the books from other ages with books from age 3.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..100,000];
        K is an integer within the range [0..N];
        each element of array A is an integer within the range [1..100,000].


 */
import {TestExt} from '../../test';
var solution = function solution(a, k){
    const s = `${a.join(' ')} `;
    let pattern = '((:?x )+|\\d )';
    for (let i = 0; i < k ; i++){
        pattern += '(:?\\d+ )(?:x )*';
    }
    let max = 0;
    [...new Set(a)].forEach((e) => {
        const currentPattern = pattern.replace(/x/g, e);
        const reg = new RegExp(currentPattern, 'g');
        let result = reg.exec(s);
        while (result) {
            if ( e === 3) console.log(result);
            max = Math.max(result[0].trim().split(' ').length, max);
            result = reg.exec(s);
        }
    });
    return max;
};


const test = [
    {in: [[0, 1, 1, 3, 4, 3, 3, 5, 2, 3],  3], expected: 5, show: true},
    {in: [[4, 5, 5, 4, 2, 2, 4], 0], expected: 2, show: true},
    {in: [[1, 3, 3, 2], 2], expected: 4, show: true},
    {in: [[4, 5, 5, 4, 2, 2, 4, 4, 5, 8, 5, 5, 5, 5], 0], expected: 4, show: true},
    {in: [[1, 1, 3, 4, 3, 3],  2], expected: 5, show: true},
    {in: [[5, 5, 5, 5, 4, 2, 2, 4, 4, 5, 8, 5, 5, 5], 0], expected: 4, show: true},
    {in: [[1, 5, 5, 5, 5, 4, 2, 2, 4, 4, 5, 8, 5, 5], 0], expected: 4, show: true},
    {in: [[1, 11], 0], expected: 1, show: true},
];
TestExt([test[0]], solution);
//TestExt(test, solution);

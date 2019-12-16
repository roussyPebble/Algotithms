/*
https://leetcode.com/problems/sudoku-solver/submissions/
Runtime: 744 ms, faster than 5.53% of JavaScript online submissions for Sudoku Solver.
Memory Usage: 40.6 MB, less than 100.00% of JavaScript online submissions for Sudoku Solver.
*/

import solution from  "./sudoku";
export const test1="53..7....6..195....98....6.8...6...34..8.3..17...2...6.6....28....419..5....8..79";
export const test2=[["53..7...."],["6..195..."],[".98....6."],["8...6...3"],["4..8.3..1"],["7...2...6"],[".6....28."],["...419..5"],["....8..79"]];
export const test3=[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
 
export function doIt(board){
    let a=board.join('').replace(/,/g,'').replace(/\./g,'0');
    let r = solution(a);
    return r;
   
}

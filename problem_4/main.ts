// Problem 4: Three ways to sum to n

// Solution 1: iteration
// Time complexity: O(n)
// Space complexity: O(1)
function sumToNIterative(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Solution 2: mathematical formula
// 1 + 2 + 3 + ... + n = n * (n + 1) / 2
// Time complexity: O(1)
// Space complexity: O(1)
// NOTE: This is the most efficient solution
function sumToNFormula(n: number): number {
    return (n * (n + 1)) / 2;
}

// Solution 3: recursion
// 1 + 2 + 3 + ... + (n - 2) + (n - 1) + n = n + (n - 1) + (n - 2) + ... + 1
// f(n) += n + f(n - 1)
// Time complexity: O(n)
// Space complexity: O(n)
// NOTE: This is not the good solution when n is large due to exceeding the call stack limit
const CALL_STACK_LIMIT = 9000; // approximately call stack limit in JS
function sumToNRecursive(n: number): number {
    if (n > CALL_STACK_LIMIT) {
        throw new Error(`Call stack limit exceeded for n = ${n}`);
    }
    if (n === 0) {
        return 0;
    }
    return n + sumToNRecursive(n - 1);
}


function testSumToN(n: number): void {
    if (n <= 0) {
        throw new Error(`n must be greater than 0`);
    }
    console.log(`Sum to ${n}:`);
    console.log(`Iterative: ${sumToNIterative(n)}`);
    console.log(`Formula: ${sumToNFormula(n)}`);
    console.log(`Recursive: ${sumToNRecursive(n)}`);
}

testSumToN(1000);
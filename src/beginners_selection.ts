import { readLines } from 'https://deno.land/std/io/mod.ts'; // Deno

// Deno read input // not in use
// const readStdin = async (num: number): Promise<string[]> => {
//   let input: string[] = [];
//   let i: number = 0;
//   for await (let line of readLines(Deno.stdin)) {
//     input.push(line);
//     if ((++i) >= num) { break; }
//   }
//   return input;
// }

export const greet = (name: string): string => `Hello, ${name}!`;

export const welcomeToAtCoder = (input: string[]): string => {
  // const input = require('fs').readFileSync("/dev/stdin", "utf8").split("\n"); // Node.js

  const a: number = parseInt(input[0]);
  const [b, c]: number[] = Array.from(input[1].split(" "), Number);
  const s: string = input[2];
  const ans: number = a + b + c;

  // console.log(`${ans} ${s}`); // Node.js
  return `${ans} ${s}`; // Deno test
}

export const product = (input: string[]): string => {
  // const input = require('fs').readFileSync("/dev/stdin", "utf8").split("\n"); // Node.js

  const [a, b]: number[] = Array.from(input[0].split(" "), Number);
  const ans: string = a * b % 2 === 0 ? 'Even' : 'Odd';

  // console.log(`${ans}`); // Node.js
  return `${ans}`; // Deno test
}

export const placingMarbles = (input: string[]): string => {
  // const input = require('fs').readFileSync("/dev/stdin", "utf8").split("\n"); // Node.js

  const numbers: number[] = Array.from(input[0].split(""), Number);
  const ans: number = numbers.reduce((a, b) => a + b);

  // console.log(`${ans}`); // Node.js
  return `${ans}`; // Deno test
}

export const shiftOnly = (input: string[]): string => {
  // const input = require('fs').readFileSync("/dev/stdin", "utf8").split("\n"); // Node.js

  const a: number[] = Array.from(input[1].split(" "), Number);

  // 手順通りに解く方法
  // const len: number = Number(input[0]);
  // let ans: number = 0;
  // let flag: boolean = false;
  // while (true){
  //   flag = false;
  //   for(let i = 0; i < len; i++){
  //     flag = (a[i] % 2 === 1);
  //     if (flag){
  //       break;
  //     }
  //   };
  //   if (flag){
  //     break;
  //   }
  //   for(let i = 0; i < len; i++){
  //     a[i] = (a[i] / 2);
  //   };
  //   ans += 1;
  // }

  // 線形探索で解く方法
  let ans: number = 10000
  a.forEach(b => {
    let c: number = 0;
    while(b % 2 === 0) {
      b /= 2;
      c += 1;
    }
    if(ans > c) {
      ans = c;
    }
  });

  // ２進法で解く方法
  // const ans: number = a.map(b => b.toString(2).split('').reverse().join('').indexOf('1')).reduce((x,y) => Math.min(x, y));

  // console.log(`${ans}`); // Node.js
  return `${ans}`; // Deno test
}

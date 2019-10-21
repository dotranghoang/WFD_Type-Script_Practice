//Array

const list: number[] =[1,2,3,4];

const categories:Array<string> = ["Sport","IT","Car"];

console.log("list");

list.forEach((num) =>
    console.log(parseInt(num.toFixed(2)))
);

console.log("categories");

categories.forEach((str) =>
    console.log(str.includes('a'))
);

// Chuyển đổi mảng từ dạng này sang dạng khác

const listSquare = list.map(num => num * num);
console.log(listSquare);

// Lọc các phần tử thỏa mãn

const result = categories.filter(str => str.length >2 );
console.log(result);

let x: [string, number];
x = ["hello", 10];
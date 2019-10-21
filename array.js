//Array
var list = [1, 2, 3, 4];
var categories = ["Sport", "IT", "Car"];
console.log("list");
list.forEach(function (num) {
    return console.log(parseInt(num.toFixed(2)));
});
console.log("categories");
categories.forEach(function (str) {
    return console.log(str.includes('a'));
});
// Chuyển đổi mảng từ dạng này sang dạng khác
var listSquare = list.map(function (num) { return num * num; });
console.log(listSquare);
// Lọc các phần tử thỏa mãn
var result = categories.filter(function (str) { return str.length > 2; });
console.log(result);
var x;
x = ["hello", 10];

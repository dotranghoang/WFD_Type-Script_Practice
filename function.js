function square(num) {
    return num * num;
}
;
console.log(square(10));
var squareFE = function (num) {
    return num * num;
};
function add(a) {
    return function (b) {
        return a + b;
    };
}
var addWith = add(5);
console.log(addWith);
console.log(addWith(3));
console.log(addWith(15));

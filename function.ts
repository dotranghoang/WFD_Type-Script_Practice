function square(num:number):number {
    return num*num;
};

console.log(square(10));

const squareFE = function (num:number):number {
    return num*num;
};

function add(a:number): Function {
    return function (b:number):number {
        return a + b;
    }
}

const addWith = add(5);
console.log(addWith);
console.log(addWith(3));
console.log(addWith(15));
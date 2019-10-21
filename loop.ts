let count : number = 50;
if(count > 0) {
    count--;
} else {
    count = 0;
}

console.log(count);

//for
console.log("For Loop");

const keys : string = "abcdef";
for(let i:number = 0; i < keys.length ; ++i){
    console.log(keys[i]);
}

console.log("while loop");

let i:number = 0;

while (i < keys.length){
    console.log(keys[i]);
    i++;
}

console.log("Do-While Loop");

i = 0;
do {
    console.log(keys[i]);
    i++;
} while (i < keys.length);

console.log("For-Of Loop");

for(const key of keys) {
    console.log(key);
}

console.log("For-in Loop");
const user = {
    name : "Bob",
    age: 55
};

for(const key in user) {
    console.log(`${key}:${user[key]}`);
}
var count = 50;
if (count > 0) {
    count--;
}
else {
    count = 0;
}
console.log(count);
//for
console.log("For Loop");
var keys = "abcdef";
for (var i_1 = 0; i_1 < keys.length; ++i_1) {
    console.log(keys[i_1]);
}
console.log("while loop");
var i = 0;
while (i < keys.length) {
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
for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
    var key = keys_1[_i];
    console.log(key);
}
console.log("For-in Loop");
var user = {
    name: "Bob",
    age: 55
};
for (var key in user) {
    console.log(key + ":" + user[key]);
}

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
map1.set('d', 4);
map1.set('e', 5);
map1.set('f', 6);

// console.log(map1.get('b'));
for(const [key, value] of map1){ //Use this syntax for Map printing in your appropriate manner, coz it's prints in array's structure
    console.log(key, ':- ', value);
}
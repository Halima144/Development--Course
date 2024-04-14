//                              Object De-Structure 
const course={
    course_name:"js",
    price:"999",
    course_constructure:"codergayan"
}
// const {course_constructure}=course;
const {course_constructure:instructore}=course;
console.log(instructore);
//                              Map Object
// let myMap = new Map();

// myMap.set('a', 1);
// myMap.set('b', 2);
// myMap.set('c', 3);

// console.log(myMap); // Output: Map(3) {"a" => 1, "b" => 2, "c" => 3}

// console.log(myMap.get('b')); // Output: 2

// myMap.delete('a');

// console.log(myMap); // Output: Map(2) {"b" => 2, "c" => 3}
//                            Set Object 
    let myArray = [1, 2, 3, 1, 2, 4];
let uniqueValues = new Set(myArray);
console.log([...uniqueValues]); // Output: [1, 2, 3, 4]


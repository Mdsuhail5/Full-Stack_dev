function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);





//example
//strings to objects
const users = `{
  "name":"harkirat",
  "age":"24",
  "gender":"male"}`
console.log(users["name"])

const user = JSON.parse(users)
console.log(user["gender"])

//object to strings1
const users1 = {
  name: "harkirat",
  age: 24,
  gender: "male"
}

const users2 = JSON.stringify(users1)
console.log(users2)
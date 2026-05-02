const jwt = require('jsonwebtoken')


const value = {
    name: "harkirat",
    date: '20-08-2009'
}

const token = jwt.sign(value, "secret")
console.log(token)

const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJkYXRlIjoiMjAtMDgtMjAwOSIsImlhdCI6MTc1NDQ3OTMzNn0.RHjTQYFK4VgP2nkTQSSmGwucQ07oJ8xy0H9MkY-vjng", "pass");
console.log(token)
//output invalid signature
//here the secret was not known as the token can be with anyone but the backend has their own password or secret to verify the token


const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJkYXRlIjoiMjAtMDgtMjAwOSIsImlhdCI6MTc1NDQ3OTMzNn0.RHjTQYFK4VgP2nkTQSSmGwucQ07oJ8xy0H9MkY-vjng", "secret");
console.log(token)
//output { name: 'harkirat', date: '20-08-2009', iat: 1754479336 }

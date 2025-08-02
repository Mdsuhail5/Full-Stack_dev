const zod = require('zod');

function validate(arr) {
    const schema = zod.array(zod.number());
    const response = schema.safeParse(arr);

    console.log(response);

}

validate([1, 2, 3]);



// const schema=zod.object{
//     "email": zod.string().email(),
//     "pass": zod.string().min(8)
// }
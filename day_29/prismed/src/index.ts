import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


// async function insertUser(email: string, firstName: string, lastName: string, password: string) {
//     const res = await prisma.user.create({
//         data: {
//             email,
//             firstName,
//             lastName,
//             password
//         },
//         select: {
//             id: true,
//             firstName: true
//         }
//     });
//     console.log(res);
// }

// insertUser("john.doe@example.com", "John", "Doe", "password123");

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, { firstName, lastName }: UpdateParams) {
    const res = await prisma.user.update({
        where: { email: username },
        data: { firstName, lastName },
    })
    console.log(res);
}

updateUser("john.doe@example.com", { firstName: "Johnny", lastName: "Doey" });
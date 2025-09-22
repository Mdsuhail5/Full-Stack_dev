"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function insertUser(email, firstName, lastName, password) {
    const res = await prisma.user.create({
        data: {
            email,
            firstName,
            lastName,
            password
        },
        select: {
            id: true,
            firstName: true
        }
    });
    console.log(res);
}
//# sourceMappingURL=index.js.map
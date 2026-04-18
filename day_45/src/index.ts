import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import pg from "pg"

const connectionString = "postgresql://postgres:mysecretpassword@localhost:5433/postgres"
const pool = new pg.Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })


interface UpdateParams {
    fname: string;
    lname: string;
}

async function updateUser(username: string, {
    fname,
    lname
}: UpdateParams) {
    const updateduser = await prisma.users.update({
        where: { username },
        data: {
            fname,
            lname
        }
    })
    console.log(updateduser);
}

updateUser("admin1", {
    fname: "rocket",
    lname: "Singh"
})
async function insertUser(username: string, password: string, fname: string, lname: string) {
    const user = await prisma.users.create({
        data: {
            username,
            password,
            fname,
            lname
        }
    })
    console.log(user);
}

insertUser('admin2', 'tes2', 'raj', 'kumar').catch(e => console.error(e)).finally(() => prisma.$disconnect());


async function finding(fname: string) {
    const founded = await prisma.users.findFirst({
        where: { fname }
    })
    console.log(founded);
}

finding("raj")
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Problem - Create a function insert data(email, password, firstname)

async function insertData(username: String, password: String, firstName: String) {
    const user = await prisma.user.create({
        data: {
            username: 'sparshyadavmrt@gmail.com',
            password: '12345',
        },
    })
}

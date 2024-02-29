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

    console.log(user);
}

insertData("Sparshyadav@gmail.com", "1243", "Sparsh");

let data = [
    {
        username: "SparshYadav",
        password: "12345",
        firstname: "Sparsh"
    },
    {
        username: "SwetaShreya",
        password: "98765",
        firstname: "Sweta"
    },
    {
        username: "BuddhuBacchi",
        password: "75543",
        firstname: "SwetaShreya"
    }
];

interface obj {
    username: string,
    password: string,
    firstname: string
}

async function insertManyData(data: obj[]) {
    const createMany = await prisma.user.createMany({
        data: data
    });
}
insertManyData(data);

async function findUnique(num: number) {
    // By unique identifier
    const user = await prisma.user.findUnique({
        where: {
            id: num
        }
    });
}
findUnique(99);

async function findMany(str: string) {
    const users = await prisma.user.findMany({
        where: {
            username: {
                endsWith: str,
            },
        },
    })
}
findMany("Yadav");

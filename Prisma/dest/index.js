"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Problem - Create a function insert data(email, password, firstname)
function insertData(username, password, firstName) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.create({
            data: {
                username: 'sparshyadavmrt@gmail.com',
                password: '12345',
            },
        });
        console.log(user);
    });
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
function insertManyData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const createMany = yield prisma.user.createMany({
            data: data
        });
    });
}
insertManyData(data);
// async function findUnique(username: string) {
//     // By unique identifier
//     const user = await prisma.user.findUnique({
//         where: {
//             username: username,
//         },
//     })
// }
// findUnique("SparshYadav");

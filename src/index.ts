import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName
        }
    })
    console.log(res)
}

// insertUser("saurav.sayana@gmail.com", "sauravsay", "Saurav", "Sayana")

interface UpdateParams {
    firstName: string,
    lastName: string
}

async function updateUser(username: string, updatedObject: UpdateParams) {
    const res = await prisma.user.update({
        where: { username },
        data: {
            firstName: updatedObject.firstName,
            lastName: updatedObject.lastName
        }
    })
}

// updateUser("saurav.sayana@gmail.com", { firstName: "sayana", lastName: "saurav" })

async function getUser(username: string) {
    const res = await prisma.user.findFirst({
        where: { username }
    })
    console.log(res)
}

getUser("saurav.sayana@gmail.com")
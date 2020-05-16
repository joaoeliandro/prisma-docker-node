const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


// async function main() {
//     const user = await prisma.user.create({
//         data: {
//             name: 'Teste',
//             email: 'teste@gmail.com',
//             Post: {
//                 create: [
//                     { title: 'Post 1' },
//                     { title: 'Post 2' }
//                 ]
//             }
//         }
//     });
// }



async function main() {
    const allUsers = await prisma.user.findMany({
        include: {
            Post: true,
        },
    });
    console.log(allUsers);
}

main().catch(e => {
    throw e;
}).finally(async () => {
    await prisma.disconnect();
});


// prisma.user.create({
//     data: {
//         name: 'Eliandro',
//         email: 'eliandrogermano2@hotmail.com'
//     },
// }).then(() => {
//     console.log('Cadastrado!');
// });
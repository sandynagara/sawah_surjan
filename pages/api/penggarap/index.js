import prisma from "../PrismaInstance";

export default async function handler(req, res) {
    const namaPenggrap = await prisma.sawahsurjandemo.findMany({
        distinct: ['penggarap'],
        select:{
            penggrap:true
        },
        take:10
    });
    res.status(200).send({namaPenggrap})
}
  
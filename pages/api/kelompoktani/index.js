import prisma from "../PrismaInstance";

export default async function handler(req, res) {
    const kelompokTani = await prisma.sawahsurjandemo.findMany({
        distinct: ['kel_tani'],
        select:{
            kel_tani:true
        },
        take:10
    });
    res.status(200).send({kelompokTani})
}
  
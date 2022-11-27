import prisma from "../PrismaInstance";

export default async function handler(req, res) {
    const namaTanaman = await prisma.sawahsurjandemo.findMany({
        distinct: ['pemilik'],
        select:{
            pemilik:true
        },
        take:10
    });
    res.status(200).send({namaTanaman})
}
  
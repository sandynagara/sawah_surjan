import prisma from "../PrismaInstance";

export default async function handler(req, res) {
    const namaTanaman = await prisma.sawahsurjandemo.findMany({
        distinct: ['jenis'],
        select:{
            jenis:true
        },
        take:10
    });
    res.status(200).send({namaTanaman})
}
  
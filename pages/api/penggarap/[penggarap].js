import prisma from "../PrismaInstance";

export default async function handler(req, res) {
    const { penggarap } = req.query
    var namaPenggarap = []
    if(penggarap == "Semua"){
        namaPenggarap = await prisma.sawahsurjandemo.findMany({
            distinct: ['penggarap'],
            select:{
                penggarap:true
            },
            take:10
        });
    }else{
        namaPenggarap = await prisma.sawahsurjandemo.findMany({
            where: {penggarap:{
                contains: penggarap,
                mode: 'insensitive'
              }},
            distinct: ['penggarap'],
            select:{
                penggarap:true
            },
            take:10
        });
    }
    namaPenggarap.push({"penggarap":"Semua"})
    res.status(200).send({"data":namaPenggarap} )
}
  
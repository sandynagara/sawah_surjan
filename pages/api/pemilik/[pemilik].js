import prisma from "../PrismaInstance";

export default async function handler(req, res) {
    const { pemilik } = req.query
    var namaPemilik = []
    if(pemilik == "Semua"){
        namaPemilik = await prisma.sawahsurjandemo.findMany({
            distinct: ['pemilik'],
            select:{
                pemilik:true
            },
            take:10
        });
    }else{
        namaPemilik = await prisma.sawahsurjandemo.findMany({
            where: {pemilik:{
                contains: pemilik,
                mode: 'insensitive'
              }},
            distinct: ['pemilik'],
            select:{
                pemilik:true
            },
        
            take:10
        });
    }
    namaPemilik.push({"pemilik":"Semua"})
    res.status(200).send({"data":namaPemilik} )
}
  
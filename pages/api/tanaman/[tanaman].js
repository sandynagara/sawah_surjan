import prisma from "../PrismaInstance";

export default async function handler(req, res) {
    const { tanaman } = req.query
    var namaTanaman = []
    if(tanaman == "Semua"){
        namaTanaman = await prisma.sawahsurjandemo.findMany({
            distinct: ['jenis'],
            select:{
                jenis:true
            }
        });
    }else{
        namaTanaman = await prisma.sawahsurjandemo.findMany({
            where: {jenis:{
                contains: tanaman,
                mode: 'insensitive'
              }},
            distinct: ['jenis'],
            select:{
                jenis:true
            }
        });
    }
    
    namaTanaman.push({"jenis":"Semua"})
    res.status(200).send({"data":namaTanaman} )
}
  
import prisma from "../PrismaInstance";

export default async function handler(req, res) {
    const { kelompoktani } = req.query
    var namaKelompok = []
    if(kelompoktani == "Semua"){
        namaKelompok = await prisma.sawahsurjandemo.findMany({
            distinct: ['kel_tani'],
            select:{
                kel_tani:true
            },
            take:10
        });
    }else{
        namaKelompok = await prisma.sawahsurjandemo.findMany({
            where: {kel_tani:{
                contains: kelompoktani,
                mode: 'insensitive'
              }},
            distinct: ['kel_tani'],
            select:{
                kel_tani:true
            },
            take:10
        });
    }
    namaKelompok.push({"kel_tani":"Semua"})
    res.status(200).send({"data":namaKelompok} )
}
  
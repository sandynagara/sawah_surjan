
import prisma from "./PrismaInstance";

export default async function handler(req, res) {
    var periodeTanam = await prisma.sawahsurjandemo.findMany({
        distinct: ['mt'],
        select:{
            mt:true
        },
    });
    const newArray = [{"mt":"Semua"}].concat(periodeTanam)
    res.status(200).send({"data":newArray} )
}
  
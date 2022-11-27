-- CreateTable
CREATE TABLE "sawahsurjandemo" (
    "id" INTEGER NOT NULL,
    "fid" TEXT NOT NULL,
    "no" TEXT,
    "no_2" TEXT,
    "pemilik" TEXT,
    "penggarap" TEXT,
    "kel_tani" TEXT,
    "jenis" TEXT,
    "mt" TEXT,
    "surveyor" TEXT,
    "geom" geometry NOT NULL,

    CONSTRAINT "sawahsurjandemo_pkey" PRIMARY KEY ("id")
);

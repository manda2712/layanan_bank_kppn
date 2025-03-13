const express = require('express')
const app = express()
const port = 3000

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//userAuth
const userAuthController = require("./auth/userAuth.controller");
app.use("/api/auth", userAuthController)

//user
const userController = require("./user/user.controller")
app.use("/api/user", userController)

//retur
const returController = require("./returSp2d/returSp2d.controller")
app.use("/api/retur", returController)

//penerbitan Bukti
const penerbitanController = require("./penerbitanBukti/penerbitanBukti.controller")
app.use("/api/penerbitanBukti", penerbitanController)

//penerbitan Nota
const penerbitanNotaController = require("./penerbitanNota/penerbitanNota.controller")
app.use("/api/nota", penerbitanNotaController)

//pengajuan Nota
const pengembalianPnBpController = require("./pengembalianPnbp/pengembalianPnBp.controller")
app.use("/api/pengembalianPnbp", pengembalianPnBpController)

//penerimaan Koreksi
const koreksiPenerimaanController = require("./koreksiPenerimaan/koreksiPenerimaan.controller")
app.use("/api/koreksiPenerimaan", koreksiPenerimaanController)

//pengajuan Void
const pengajuanVoidController = require("./pengajuanVoid/pengajuanVoid.controller")
app.use("/api/pengajuanVoid", pengajuanVoidController)

//pembukaan Rekening
const pembukaanRekeningController = require("./pembukaanRekening/pembukaanRekening.controller")
app.use("/api/pembukaanRekening", pembukaanRekeningController)
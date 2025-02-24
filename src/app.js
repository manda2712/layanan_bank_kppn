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
const express = require("express")
const app = express()
var cors = require('cors');

app.use(cors())
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs")

const userRouter = require("./routes/users")

app.use("/users", userRouter)

app.listen(3000)

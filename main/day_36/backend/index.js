const express = require("express")
const cors = require('cors')
const { mainRouter } = require("./routes")
const bodyParser = require("body-parser")

app.use(cors())
const app = express()
app.use(express.json())


app.use('/api/v1', mainRouter)




app.listen(3000)
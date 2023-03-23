const express =  require('express')
const app = express()
const bodyParser = require('body-parser')

app.set("view engine","ejs")

app.use(bodyParser.urlencoded({extended:true}))
app.use('/',require("./routes/index"))





app.listen(process.env.PORT || 3000)
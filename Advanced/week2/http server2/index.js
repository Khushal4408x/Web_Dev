const express = require('express')
const bodyParser=require("body-parser");
const app = express()
const port = process.env.PORT ||3001
//middlewares
app.use(bodyParser.json());

app.post ('/', (req, res) => {
  console.log(req.body)
  res.send('hi there Harsh');

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

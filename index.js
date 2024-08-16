
import 'dotenv/config' 
import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/abhay', (req,res)=>{
    res.send("Hello Abhay")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
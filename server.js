const express = require('express')
const bodyParser = require('body-parser')
const fs =require('fs')
path = require('path')
const app = express()
let noteList=[]
const { v4: uuidv4 } = require('uuid');
const req = require('express/lib/request')

const port = process.env.PORT || 3001

app.use(express.static("public"))

app.get('/api/notes',(req,res)=>{
    res.sendFile('/Users/ndubuisiazi/Desktop/Bootcamp/Challenge 11/11/public/api/db.json')
    // res.send('/Users/ndubuisiazi/Desktop/Bootcamp/Challenge 11/11/public/api/db.json','utf-8')
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/api/notes',(req,res)=>{
    let id =uuidv4()
    noteList.push(
        {"title":req.body.title,
        "text":req.body.text,
        "id":id})
        app.delete('/api/notes/'+id,(res,req)=>{
console.log(req)
        })
    console.log(id)
    console.log(noteList)


    fs.writeFileSync("./public/api/db.json",JSON.stringify(noteList))
    res.end()
})


app.get('/notes',(req,res)=>{
    res.sendFile('/Users/ndubuisiazi/Desktop/Bootcamp/Challenge 11/11/public/notes.html')
})

app.post('/notess',(req,res)=>{
    res.sendFile('/Users/ndubuisiazi/Desktop/Bootcamp/Challenge 11/11/public/notes.html')
})


   

app.listen(port,()=>{console.log('server is running')})


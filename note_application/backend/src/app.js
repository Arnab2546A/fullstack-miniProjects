const express=require('express')
const connectDB=require('./config/db')
const notesRoute=require('./routes/note.route')
const cors=require('cors')
const app=express();
app.use(express.json())
app.use(cors())
connectDB();
app.get('/',(req,res)=>{
    res.send('done')
})

app.use('/notes',notesRoute)
module.exports=app;
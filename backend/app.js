const express= require  ("express")
const connectDB= require('./config/connection.js')
const app = express()
connectDB();
app.use (express.json())
app.use ('/api/contacts',require('./Routes/contactRoute.js'))
const port =5000
app.listen(port,()=>console.log(`server connecterd on port ${port}`))
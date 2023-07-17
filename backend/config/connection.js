const mongoose = require('mongoose')
 require('dotenv').config()

const connectDB= async()=>{
    try { await mongoose.connect (process.env.connect);
    console.log("database connected")
        
    } catch (error) { console.log('database not connected')
        
    }
}
module.exports= connectDB

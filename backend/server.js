import 'dotenv/config';  
import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js'; 
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminroute.js';


//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()


// middlewares
app.use(express.json())
app.use(cors())


//api endpoints
app.use('/api/admin',adminRouter)


app.get('/', (req, res) => {
    res.send('Api working chahna')
});

app.listen(port, () => console.log(`Server started`,port))

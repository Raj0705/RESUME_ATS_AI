const express = require('express');



const app = express();
const PORT = 4000;

require('./conn');

app.use(express.json());// jo bhi date aayega json formate me uske convert ya read kr skega


const UserRoutes = require('./Routes/user');
const ResumeRoutes = require('./Routes/resume');

app.use('/api/user',UserRoutes);
app.use('/api/resume',ResumeRoutes)

app.listen(PORT,()=>{
    console.log("backend is running on port",PORT)
})
const express=require('express')
const globalroute=require('./Router/globalRoute')
const app=express();
const port =5000;

app.use(express.urlencoded());
app.use(express.json());


app.use("/",globalroute);



app.listen(port,()=>{
    console.log(`server is runnig on port ${port}`)
});
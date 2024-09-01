import express from "express";
import http from "http";
import cors from "cors";
import routes from "../routes/route.js";

import "./db/connection.js";

const app = express();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use('',routes);
app.get('/test',(req,res)=>{
    // res.sendStatus(200);
    // res.setHeader("content-type","text/html");
    res.send("Hello!");
})

server.listen(PORT,()=>{
    console.log(`server running on port:${PORT}`);
});

const http=require("http");
const express=require("express");
const path=require("path");
const { Server } = require('socket.io');

const app=express();
const server=http.createServer(app);
const io=new Server(server);


app.use(express.static(path.resolve("./public")));
app.get("/",(req,res)=>{
    res.sendFile("/public/index.html");
});
// socket connection
// io.on("connection",(socket)=>{
//     console.log("User connected");
// });
io.on('connection', (socket) => {
 socket.on('give the message', (message) => {
    console.log('Received message from client:', message)
    io.emit("message",message)
})});


server.listen(5000,()=>{ console.log("Server is running on port 5000"); })
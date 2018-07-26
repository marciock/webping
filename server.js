const app=require('http').createServer(index);
const io=require('socket.io').listen(app);
const fs=require('fs');
const proc=require('child_process').spawn;




app.listen(3000,()=>{
    console.log('Server running');
})

function index(req,res){
    fs.readFile(__dirname + '/index.html',(err,data)=>{
        res.writeHead(200);
        res.end(data);
        
    });
};

let ping=proc("ping",["www.sanepar.com.br"])
let tmp=""

ping.stdout.on('data',(data)=>{
    console.log(data);
    tmp +=data;
})
   

io.on('connection',(socket)=>{
        
       
    
    socket.emit('ping',tmp);

 //   socket.broadcast.emit('ping',tmp);

   // socket.on('disconnect',()=>{
     // tmp="finalizado";

       // socket.broadcast.emit('message',tmp);
    //});
});

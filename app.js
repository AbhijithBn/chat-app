var express=require('express');
var app=express();
var socket=require('socket.io');

//EJS
app.set('views', __dirname + '/public');
app.set('view engine','ejs');

//rendering static files like CSS
app.use(express.static(__dirname + '/public'));

//routing
app.get('/',function(req,res){
    res.render('index.ejs')
})

//server
var server=app.listen(4000,function(){
    console.log("Server on port 4000");
})

//socket setup
var io=socket(server);

io.on('connection',function(socket){    //here connection is an event
    console.log('Connection established',socket.id);

    socket.on('chat',function(data){
        io.sockets.emit('chat',data)
    })
})


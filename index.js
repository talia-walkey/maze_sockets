const port = process.env.PORT || 10001;
const server = require('http').Server();

var io = require('socket.io')(server);

var allnames = [];
io.on('connection', function(socket){
    console.log('user has connected');
    
    socket.on('uname', function(data){
        console.log('new user is '+ data);
        
        allnames.push(data);
        console.log(allnames);
        
        io.emit('allnames', allnames);
    })
    
    socket.on('disconnect', function(){
        console.log('user has disconnected')
    })
});

server.listen(port, (err)=>{
    if(err){
        console.log(err);
        return false;
    }
console.log('Port is running');
})

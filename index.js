const port = process.env.PORT || 10001;
const server = require('http').Server();

var io = require('socket.io')(server);

var allnames = [];
var chosenFruit = '';
var theWinner = '';

io.on('connection', function(socket){
    console.log('user has connected');
    
    socket.on('uname', function(data){
        console.log('new user is '+ data);
        
        allnames.push(data);
        console.log(allnames);
        
        io.emit('allnames', allnames);
    })
    
    socket.on('chosenF', function(data){
        console.log('new fruit is '+ data);
        
        chosenFruit = data;
        
        console.log('chosen fruit is '+chosenFruit);
        
        io.emit('chosenFruit', chosenFruit);
    })
    
    socket.on('playerF', function(data){
        console.log('players fruit is '+ data);
        
        chosenFruit = data;
        
        console.log('chosen fruit is '+chosenFruit);
        
        io.emit('chosenFruit', chosenFruit);
    })
    
    socket.on('theWin', function(data){
        console.log('the winner is '+ data);
        
        theWinner = data;
        
        console.log('chosen fruit is '+theWinner);
    
        io.emit('theWinner', theWinner);
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

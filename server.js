let express = require('express');
let socket = require('socket.io')

let app = express();
// const port = process.env.PORT;
var port = process.env.PORT || '3000';
app.set('port', port);

let server = app.listen(port);

app.use(express.static('public'))

io = socket(server)

io.sockets.on('connection', function(socket){
  console.log("New Connection to: " + socket.id)

  socket.on('clientDraw', mouseMessage)

  function mouseMessage(e){
    console.log(e)
    socket.broadcast.emit('serverDraw', e); //Sends to all other sockets but not the one it is receiving from
    // io.sockets.emit('mouse', data) This would send to all socket including THIS.

  }

})

var socket;

function setup(){
  createCanvas(400,400)
  background(100)
  //Connect to server via socket
  socket = io()
  socket.on('serverDraw', newDrawing)
}

function draw(){
}

function mouseDragged(){
  fill(255)
  noStroke()
  ellipse(mouseX,mouseY, 10,10)
  console.log(mouseX + "," + mouseY)
  var data = {
    x: mouseX,
    y: mouseY
  }
  //Sends out the message via the socket. Give the message the name 'mouse'
  socket.emit('clientDraw', data)

}

function newDrawing(data){
  noStroke()
  fill(250,0,0)
  ellipse(data.x,data.y, 10,10)
}

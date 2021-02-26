import app from './app';

app.socketio.on('connection', socket => {
    console.log("Conexão ativa!!");

    socket.on('disconnect', socket => {
        console.log("Conexão finalizada!!");
    });
});


app.shttp.listen(3333);
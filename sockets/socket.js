const {io} = require('../index');

//Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');
    
    client.on('disconnect', () => { 
        console.log('Cliente desconectado');
    } );

    client.on('mensaje', (payload) => {
        console.log('Mensaje', payload);
        
        io.emit('mensaje', { admin: 'Nuevo mensaje' }); //Esto emite el mensaje a todos los clientes conectados

    
    }) //Esta es la configuracion de "escucha", 'mensaje' debe llamarse igual que en index cuando hacemos el socket.emit
  });
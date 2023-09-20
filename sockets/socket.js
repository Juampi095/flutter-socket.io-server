const {io} = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');

const bands = new Bands();

bands.addBand(new Band('Queen'));
bands.addBand(new Band('Bon Jovi'));
bands.addBand(new Band('Héroes del Silencio'));
bands.addBand(new Band('Metallica'));

console.log(bands);



//Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');

    client.emit('active-bands', bands.getBands()); //Se emite el msj unicamente al cliente que se esta conectando
    
    client.on('disconnect', () => { 
        console.log('Cliente desconectado');
    } );

    client.on('mensaje', (payload) => {
        console.log('Mensaje', payload);
        
        io.emit('mensaje', { admin: 'Nuevo mensaje' }); //Esto emite el mensaje a todos los clientes conectados

        client.on('emitir-mensaje', (payload) => {
            //io.emit('nuevo-mensaje',payload); //Emite a todos!
            client.broadcast.emit('nuevo-mensaje',payload); //Emite a todos menos al que lo emitio
        });

 

    
    }) //Esta es la configuracion de "escucha", 'mensaje' debe llamarse igual que en index cuando hacemos el socket.emit
  });

  
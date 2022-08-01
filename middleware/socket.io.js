var order = require('../api/orders/socketOneMatch');

module.exports = function(io) {
    io.on('connection', (socket) => {
        console.log("Connected to Socket!!"+ socket.id);
        // buy request
        socket.on('order', (data) => {
            order.addOrder(data, io);
        });
    });
}

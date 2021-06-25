const Websocket = require('ws');
const webSocketServer= new Websocket.Server({port: 8080})
webSocketServer.on('connection', webSocket => {
    console.log('connected server')
    webSocket.on('message', message => {
        console.log('Receivied: ', message)
        broadcast(message)
    })
})
function broadcast(data) {
    webSocketServer.clients.forEach(client => {
        if( client.readyState === Websocket.OPEN){
            client.send(data)
        }
    })
}
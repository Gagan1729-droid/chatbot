let name2;
window.onload= function() {
    var url= document.location.href,
    params= url.split("?n=")[1];
    var x= params.split("%20");
    var name=""
    x.forEach(element => {
        name= name+element+" ";
    });
    document.getElementById('h1').innerHTML="Welcome "+name;
    name2=name;
}

const connection= new WebSocket('ws://localhost:8080')
connection.onopen= () => {
    console.log('connected');
}
connection.onclose= () => { console.error('disconnected')}
connection.onerror= () => { console.error('!!!failed to connect', error)}

connection.onmessage= event => {
    console.log('received: ', event.data.split("%!%@$#")[1])
    let li= document.createElement('li')
    let name=event.data.split("%!%@$#")[0]
    if(name2 == name)
    name="You ";
    li.innerText= name+":        "+event.data.split("%!%@$#")[1];
    document.querySelector('#chat').append(li)
}
    document.querySelector('form').addEventListener('submit', event => {
        event.preventDefault()
        let message= document.querySelector('#message').value;
        message= name2+"%!%@$#"+message
        connection.send(message)
        document.querySelector('#message').value=''
    })

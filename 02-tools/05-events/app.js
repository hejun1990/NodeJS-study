const EventEmitter = require('events')

class MyEventEmitter extends  EventEmitter{}

const event = new MyEventEmitter()

event.on('play', value=>{
    console.log(value)
})

event.once('play2', value=>{
    console.log(value)
})

event.emit('play', 'music')
event.emit('play2', 'movie')
event.emit('play2', 'movie')
event.emit('play2', 'movie')
event.emit('play', 'music')
import App from './App.svelte';
import SocketClient from 'socket.io-client'

const fruits = ['apple', 'banana', 'orange', 'strawberry', 'coconut'];

const io = SocketClient('127.0.0.1:3000')

io.on('connection', (socket) => {
	console.log('connected socket')
})

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		surname: 'musk',
		fruits: fruits
	}
});

export default app;
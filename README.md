# be-wary-of-websockets
A Google Chrome extension that alerts of websocket usage, inspired by [Browser-in-the-Middle](https://link.springer.com/article/10.1007/s10207-021-00548-5) attacks

Browser-in-the-Middle is a sort of Man-in-the-Middle using websockets to relay information to a remote server that is fooling the user into thinking he is accessing a Truly Authentic® webpage.
A remote server is available for access through Virtual Network Computing, and a specially crafted webpage uses websocket to access the server through VNC and render whatever the remote server is rendering there.
The remote server can be headless. The victim is then fooled by thinking that he is simply entering credentials to access his Twitter account, but he is also being spied upon unknowingly.
The attacker can hijack the session easily, and it works perfectly with multi factor authentication.

This extension uses a service_worker and a content script to monkey patch `WebSocket.prototype.send` and can then confirm with the user whenever something is being sent from the possible victim to the possible attacker.
The idea is that a confirm box showing the user password could help him identify that something malicious is going on.

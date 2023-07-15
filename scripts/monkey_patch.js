wsSend = window.WebSocket.prototype.send;
window.sockets = [];
window.WebSocket.prototype.send = function(...args) {
  const yes = window.confirm('you are sending information through a websocket' + '\n' + args);
  if (window.sockets.indexOf(this) === -1) {
    window.sockets.push(this);
  }
  if (yes) {
    return wsSend.call(this, ...args);
  }
};

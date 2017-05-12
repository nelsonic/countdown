console.log('client.js');

setInterval(function() {
  var time = countdown(Date.now(), new Date(2017, 7, 5) ).toString();
  document.getElementById('time').innerHTML = time;
}, 500)


  document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var form = event.target;
    var url = form.action;
    var data = new FormData(form);

    fetch(url, {
      method: 'POST',
      body: data
    }).then(function(response) {
      return response.text();
    }).then(function(text) {
      var responseDiv = document.getElementById('response');
      responseDiv.innerHTML = '';

      var responseBox = document.createElement('div');
      responseBox.classList.add('response-box');

      var responseP = document.createElement('p');
      responseP.innerText = text;
      responseBox.appendChild(responseP);

      responseDiv.appendChild(responseBox);
    });
  });

(function(){
  'use strict'
    /*****************************
    *                            *
    *   Insertar aquí script de  *
    * inicialización de Firebase *
    *                            *
    ******************************/

    function addMessage(message, author){
      var html =
        '<div class="col s12 m6 offset-m3 ">'+
          '<div class="card-panel light-blue darken-3 hoverable">'+
            '<span class="white-text">'+ author + ' dijo: ' + message +
            '</span>'+
          '</div>'+
        '</div>';
      var div = document.createElement('div');
      div.innerHTML = html;
      var msgElement = div.firstChild;
      var messageBox = document.getElementsByClassName('message-box')[0];
      messageBox.appendChild(msgElement);
    }

    // Listen for the starred status.
    var starredStatusRef = firebase.database().ref('mensajes/')
    starredStatusRef.on('value', function(snapshot) {
      console.log(snapshot.val());
      data = snapshot.val();
    });

    starredStatusRef.on('child_added', function(data) {
      addMessage(data.val().texto, data.val().usuario);
    });


})();

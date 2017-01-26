/* globals window, $ */

(function(window) {

  const output = $('#output');

  $('#get_user').click(e => {


    //1
    $.get('/api/user.json', (data) => {
      output.html(data.friends[0]);

      //2
      const friendId = data.friends[0];

      //3
      $.get(`/api/friend/${friendId}.json`, (friend) => {

        //create img tag with src friend.picture
        const friendPicture = $('<img>', {
          src: friend.picture,  //4
          id: 'friendPhoto',
          class: 'pictures'
        });

        //5
        output.append(friendPicture);
      });

    });

  });



}(window));
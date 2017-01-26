(function(window) {

  const output = $('#output');

  $('#get_user').click(e => {

    $.get('/api/user.json', (data) => {
      output.html(data.friends[0]);

      const friendId = data.friends[0];

      $.get(`/api/friend/${friendId}.json`, (friend) => {
        output.html(friend.name);
      });

    });

  });



}(window));
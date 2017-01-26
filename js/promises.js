(function(window){
  const output = $('#output');


$('#get_user').click( e => {


// 1. get user by id
  $.get('/api/user.json')
    .then( user => {
      console.log(user);

      // 2. get first of friend ids
      const friendId = user.friends[0];

      // 3. get friend from api
      return $.get(`/api/friend/${friendId}.json`);
    })

    // 4. get image for friend
    .then( friend => {
      const friendPhoto = $('<img>', {
        src: friend.picture,
      });

      // 5. render image to page
      output.append(friendPhoto);

    });


});

}(window));
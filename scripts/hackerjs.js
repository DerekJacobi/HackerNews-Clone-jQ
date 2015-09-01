$( document ).ready(function() {

    var createStories = function(data){
      $.getJSON( "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty", function( data ) {
      for (var i = 30 * page; i > 30 * page - 30; i--) {
        var number = 30 * page;
          $.getJSON( "https://hacker-news.firebaseio.com/v0/item/" + data[i] + ".json?print=pretty", function( data ) {
            story = '<div class=indivstory>' + '<p class=storytop>' + '<span>' + number + '</span>' + ". " + '<img src="./images/uparrow.gif"></img>' + " " + data.title + '<span>' + " (" + '<a href=' + data.url + '>' + data.url.replace(/^https?:\/./,'').replace(/\/.*$/,'') + '</a>' + ")" + '</span>' + '</p>';
            story += '<p class=storybottom>' + data.score + " points by " + data.by + " | " + " discuss "  +'</p>' + '</div>';
            $(story).prependTo(".newstories");
            number --;
          });
        };
      })
    };

    var page = 1;
    $("#more").click(function() {
      page ++;
      $('.newstories').empty();
        createStories();
      });

    createStories();
});

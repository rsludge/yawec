var sendMessage = function(channel, message){
    if(message.length){
        channel.send("message", {
            content: message,
            username: $('.username_box').text()
        })
    }
}

var setName = function(channel){
    $('.name_form').on('submit', function(e){
        e.preventDefault();
        var username = $('.name_form .username_input').val();
        if(username.length){
            $('.username_box').text(username);
            closePopup();
        }
    })
}

var closePopup = function(){
    $('.popup').hide();
    $('.overlay').hide();
}

$(function(){
    var socket = new Phoenix.Socket("ws://" + location.host + "/ws")

    socket.join("chat", "", {}, function(channel){
        setName(channel);

        channel.on("message", function(message){
            $('.messages').append('<div class="message"><span class="nickname">' + message.username + ':</span>' + message.content + '</div>');
        });

        $('.user_message').on('submit', function(e){
            e.preventDefault();
            sendMessage(channel, $('.message_input').val());
            $('.message_input').val('');
        });
    })
})

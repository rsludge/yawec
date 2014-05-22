sendMessage = function(channel, message){
    channel.send("message", {
        content: message
    })
}

$(function(){
    var socket = new Phoenix.Socket("ws://" + location.host + "/ws")

    socket.join("chat", "", {}, function(channel){
        channel.on("message", function(message){
            $('.messages').append(message.content + '<br/>');
        });

        $('.send_message').on('click', function(e){
            e.preventDefault();
            sendMessage(channel, $('.message_input').val());
            $('.message_input').val('');
        });
    })
})

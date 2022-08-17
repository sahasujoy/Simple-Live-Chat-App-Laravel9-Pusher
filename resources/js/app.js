import './bootstrap';

$(document).ready(function () {
    $(document).on('click', '#send_message', function (e) {
        e.preventDefault();

        let username = $(`#username`).val();
        let message = $(`#message`).val();

        if (username == '' || message == '')
        {
            alert('Please enter both username and message');
            return false;
        }

        // alert(username+message);
        $.ajax({
            method: 'post',
            url: '/send_message',
            data: {username: username, message:message},
            success:function (response) {

            }
        });
    });
});

window.Echo.channel('livechat')
    .listen('.message', (e)=>{
        $('#messages').append('<p><strong>'+e.username+'</strong>: '+e.message+'</p>');
        $('#message').val();
    });

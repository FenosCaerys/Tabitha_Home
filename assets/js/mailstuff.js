$(document).ready(function(){
    //send mail with ajax (jQuery req)
$('#send_email').click(function(e){
    e.preventDefault();
    var data = {
        email: $('#email').val(),
        name: $('#name').val(),
        object: $('#object').val(),
        message: $('#message').val()
    };
    //AJAX
    $.ajax({
        url: "assets/php/mail.php",
        type: 'POST',
        data: data,
        success: function(data){
            $('#js_alert_success').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_success').css({'display' : 'none'});
                $('#email').val("");
                $('#name').val("");
                $('#object').val("");
                $('#message').val("")
            }, 3000);
        },
        error: function(data){
            $('#js_alert_danger').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_danger').css({'display' : 'none'})
            }, 3000);
        }
    });
});
});
// var request = new XMLHttpRequest();

$(function() {
  var $request = $('#request');
  var $output = $('#output');
  var url_api = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous'
  var api_key = {'X-Mashape-Key': '3cS3DxZIBxmshgXLCNq5Ne8RgV4op1yB6lxjsn4W1BePhGbg0Z'}
  // var api_type = 'application/x-www-form-urlencoded'

  $request.on('click', function(e) {
    // alert('test');
    e.preventDefault();
    console.log('clicked');

    $.ajax({
        url: url_api,
        dataType: 'json',
        // content_Type: api_type,
        headers: api_key,


        // data: {'application/x-www-form-urlencoded'}


        // type: 'GET',

        // data: {
        // sentence: $output.val()

        // dataType: 'html',
        // beforeSend: function(xhr) {
        //   $loader.show();
        //   xhr.setRequestHeader('X-Mashape-Key', '5YLQrzUFnSmshxGAypr5wO73X8Uzp1BoNthjsnXFYT8XutFo0x')
        // },

      }).done(successFunction)
        .fail(failFunction)
        .always(alwaysFunction);
    //
  });

  function successFunction(responseText, textStatus, request) {
    $output.text('Quote: ' + responseText.quote + ' ' + 'By: ' + responseText.author);
    // $loader.hide();
    //
  }
  //
  function failFunction(request, textStatus, errorThrown) {
    $output.text("an error occured during your request: " + request.status + '' + textStatus + '' + errorThrown);
  }
});

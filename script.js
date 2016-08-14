$(function() {
  var $request = $('#request');
  var $output = $('#output');
  var url_api = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous';
  var api_key = {'X-Mashape-Key': '3cS3DxZIBxmshgXLCNq5Ne8RgV4op1yB6lxjsn4W1BePhGbg0Z'};
  // var api_type = 'application/x-www-form-urlencoded'

  $request.on('click', function(e) {
    // alert('test');
    e.preventDefault();
    console.log('clicked');

    $.ajax({
        url: url_api,
        dataType: 'json',
        headers: api_key,
      }).done(successFunction)
        .fail(failFunction)
        .always(alwaysFunction);
  });

  function successFunction(responseText, textStatus, request) {
    $output.text('Quote: ' + responseText.quote + ' ' + 'By: ' + responseText.author);
    // $loader.hide();
  }

  function failFunction(request, textStatus, errorThrown) {
    $output.text("an error occured during your request: " + request.status + '' + textStatus + '' + errorThrown);
  }

  function alwaysFunction() {
  }
});

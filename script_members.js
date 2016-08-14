console.log('Test Members');
$(function() {

var memberapi = "https://crossorigin.me/https://servingapi.herokuapp.com/members";
var $members = $('#members');

var memberName;
var memberEmail;
var memberColor;

  function getMembers() {
    $.ajax({
      url: memberapi,
      dataType: 'json',
    }).done(successFunction)
      .fail(failFunction)
      .always(alwaysFunction);
  }
  getMembers();

  function successFunction(responseText, textStatus, request) {
    for (var i = 0; i < responseText.length; i++) {
        memberName = responseText[i].name;
        memberEmail = responseText[i].email;
        memberColor = responseText[i].favcolor;
        $members.append("<p>" + memberName + " " + memberEmail + " " + memberColor + "</p>");
      }
    // $members.text(memberName + " " + memberEmail + " " + memberColor);
  }

  function failFunction(request, textStatus, errThrown) {
    $members.text('An error has occured during your request' + request.status + ' ' + textStatus + ' ' + errThrown);
  }

  function alwaysFunction(){

  }
});

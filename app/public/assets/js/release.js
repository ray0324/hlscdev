$(function () {
  $('#submit').on('click', function () {
    var env = $('#env').val();
    var system = $('#system').val();
    var version = $('#version').val();
    var date = $('#date').val();
    var url = $('#url').val();
    var desc = $('#desc').val();
    $.post('/release', {
      env: env,
      system: system,
      version: version,
      date: date,
      url: url,
      desc: desc
    }).then(function (res) {
      alert(res)
    })

  })

})
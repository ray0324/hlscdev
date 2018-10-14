$(function () {
  $('#submit').on('click', function () {
    var env = $('#env').val();
    var system = $('#system').val();
    var version = $('#version').val();
    var date = $('#date').val();
    var url = $('#url').val();
    console.log({
      env: env,
      system: system,
      version: version,
      date: date,
      url:url
    })
    $.post('/release', {
      env: env,
      system: system,
      version: version,
      date: date,
      url: url
    }).then(function (res) {
      console.log(res);
    })

  })

})
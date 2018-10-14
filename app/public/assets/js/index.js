$(function () {
  function mkqrcode(env,system) {

    var qrDom = document.querySelector('#' + env + ' .' + system+'-qr-latest');
    var qrcode = new QRCode(qrDom, {
      width: 100,
      height: 100
    });

    $.get('/latest?env='+env+'&system='+system).then(function (res) {
      qrcode.makeCode(res.url);
      $('#' + env + ' .' + system + ' .qr-version').text(res.version);
      $('#' + env + ' .' + system + ' .qr-date').text(res.date);
      $('#' + env + ' .' + system + ' .qr-desc').text(res.desc);
    })
  }

  mkqrcode('dev','android');
  mkqrcode('dev', 'ios');

  mkqrcode('test', 'android');
  mkqrcode('test', 'ios');
});
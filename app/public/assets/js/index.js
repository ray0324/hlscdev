function queryList(env, system) {
  $.get('/query?env=' + env + '&system=' + system).then(function (res) {
    if (res.length < 1) return;
    var str = res.data.map(function (item) {
      return '<option value="' + btoa(JSON.stringify(item)) + '">' + item.date + '</option>';
    }).join('');

    $('#' + system + '-' + env + '').html(str);
    var qrDom = document.querySelector('#' + system + '-' + env + '-qr');
    var qrcode = new QRCode(qrDom, { width: 140, height: 140 });
    qrcode.makeCode(res.data[0].url);

    var desc = res.data[0].version + '<br>' + res.data[0].system + '<br>' + (res.data[0].desc||'');

    $('#' + system + '-' + env + '-desc').html(desc);

    $('#' + system + '-' + env + '').on('change', function (e) {
      var item = JSON.parse(atob(e.target.value));
      var desc = item.version + '<br>' + item.system +'<br>'+ (item.desc||'');
      $('#' + system + '-' + env + '-desc').html(desc);
      qrcode.makeCode(item.url);
    })
  })
}

$(document).ready(function () {
  queryList('test', 'android');
  queryList('test', 'ios');
  queryList('prod', 'android');
  queryList('prod', 'ios');
})
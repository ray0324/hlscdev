$(function () {

  $.get('/latest?env=dev&system=android').then(function (res) {
    console.log(res)
  })

  // 上传文件
  $('#post').on('click', function () {
    let file = $('#exampleInputFile')[0].files[0];
    let data = new FormData();
    data.append('pic', file);
    $.ajax({
      url: '/upload',
      type: 'POST',
      cache: false,
      data: data,
      processData: false,
      contentType: false,
      dataType: 'json'
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    });
  });

});

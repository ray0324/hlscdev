$(function () {
  $('#post').on('click', function () {
    let file = $('#exampleInputFile')[0].files[0];
    let data = new FormData();
    data.append('file', file);
    $.ajax({
      url: '/upload',
      type: 'POST',
      cache: false,
      data: data,
      processData: false,
      contentType: false,
      dataType: 'json'
    }).then(res=>{
      alert('????')
    }).catch(err=>{
      console.log(err);
    });
  });

});

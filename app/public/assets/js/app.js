$(function () {
  $('#post').on('click', function () {
    // console.log(typeof );

    let file = $('#exampleInputFile')[0].files[0];
    let data = new FormData();

    data.append('pic', file);
    data.append('name', 'mypic');
    // console.log(file);

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

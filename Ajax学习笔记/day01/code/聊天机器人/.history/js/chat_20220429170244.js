$(function () {
  // 初始化右侧滚动条
  // 这个方法定义在scroll.js中
  resetui()

  $('#btnsend').click(function () {
    alert('123')
    var content = $('content').trim()
    $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>' +
      content.val() + '</span+></li>')
    content.val('')
  })
})
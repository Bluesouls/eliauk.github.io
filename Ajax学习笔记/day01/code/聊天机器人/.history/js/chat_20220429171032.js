$(function () {
  // 初始化右侧滚动条
  // 这个方法定义在scroll.js中
  resetui()

  //为发送按钮绑定鼠标点击事件
  $('#btnsend').click(function () {
    // alert('123')
    var content = $('#content').val().trim()
    if (content == '') return $('#content').val('')
    //如果用户输入了聊天内容，则将聊天内容追加到页面上显示
    $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>' +
      content + '</span+></li>')
    $('#content').val('')
    //重置滚动条位置
    resetui()
  })
})
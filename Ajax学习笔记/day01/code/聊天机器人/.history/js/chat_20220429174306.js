$(function () {
  // 初始化右侧滚动条
  // 这个方法定义在scroll.js中
  resetui()

  //为发送按钮绑定鼠标点击事件
  var content = $('#content').val().trim()
  $('#btnsend').click(function () {
    // alert('123')
    if (content.length <= 0) return $('#content').val('')
    //如果用户输入了聊天内容，则将聊天内容追加到页面上显示
    $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>' +
      content + '</span+></li>')
    $('#content').val('')
    //重置滚动条位置
    resetui()
  })


  //获取聊天机器人发送过来的聊天记录
  function getMsg(text) {
    $.ajax({
      method: 'GET',
      url: 'http://www.liulongbin.top:3006/api/robot',
      data: {
        spoken: text
      },
      success: function (res) {
        // console.log(res)
        if (res.message == 'success') {
          var msg = res.data.info.text
          $('#talk_list').append('<li class="left_word"><img src="img/person01.png" /> <span>' +
            msg + '</span></li>')
          resetui()
        }
      }

    })
  }

  getMsg(content)
})
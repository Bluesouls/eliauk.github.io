$(function () {

  function getCmtList() {
    $.get("http://www.liulongbin.top:3006/api/cmtlist", function (res) {
      // console.log(res)
      if (res.status !== 200) {
        return alert('获取评论列表失败')
      }
      var rows = []
      $.each(res.data, function (i, item) {
        rows.push('<li class="list-group-item">' + item.content +
          '<span class="badge" style="background-color: #f0ad4e;">评论时间：' + item.time +
          '</span><span class="badge" style="background-color: #5bc0de;">评论人：' + item.username + '</span> </li>')
      })
      $('#cmt-list').empty().append(rows.join(''))

    })
  }

  getCmtList()

  $('#formAddCmt').submit(function (e) {
    e.preventDefault() // 阻止表单的默认提交行为
    // 获取表单中所有的元素（需要为每个表单元素添加 name 属性）
    // 调用结果 username = '' & content = '',将其赋值给变量 data,并将 data 作为参数传递到后台
    var data = $(this).serialize()
    $.post("http://www.liulongbin.top:3006/api/addcmt", data, function (res) {
      console.log(res)
      if (res.status !== 201) return alert('发表评论失败')
      getCmtList()
      $('#formAddCmt')[0].reset()

    })
  })


})
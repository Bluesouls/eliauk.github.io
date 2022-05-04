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

  $('#formAddCmt').submit(funciton(e) {})


})
$(function () {

  function getCmtList() {
    $.get("http://www.liulongbin.top:3006/api/cmtlist", function (res) {
      // console.log(res)
      if (res.status === 200) {

      }
    })
  }

  getCmtList()
})
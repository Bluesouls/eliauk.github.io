function resolveData(data) {
  var arr = []
  for (key in data) {
    arr.push(key + '=' + data[key])
  }
  return arr.join('&')
}

function myAjax(options) {
  // 创建 XHR 对象
  var xhr = new XMLHttpRequest()
  var gs = resolveData(options.data)
  if (options.method.toUpperCase() === 'GET') {
    xhr.open(options.method, options.url + '?' + gs)
    xhr.send()
  } else if (options.method.toUpperCase() === 'POST') {
    xhr.open(options.method, options.url)
    xhr.setRequestHeader('Content-Type', 'application/x-www-from-urlencoded')
    xhr.send(gs)
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var info = JSON.parse(xhr.responseText)
      options.success(info)
    }
  }
}
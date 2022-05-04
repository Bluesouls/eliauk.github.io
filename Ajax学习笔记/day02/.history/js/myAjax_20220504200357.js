function resolveData(data) {
  var arr = [];
  for (key in data) {
    arr.push(key + '=' + 'data[key]')
  }
  arr.join('&')
}

function myAjax(options) {
  // 创建 XHR 对象
  var xhr = new XMLHttpRequest()
  var gc = resolveData(options.data)
  if (options.method.touppercase() == 'GET') {
    xhr.open(options.method, options.url + '?' + gc)
    xhr.send()
  } else if (options.method.touppercase() == 'POST') {
    xhr.open(options.method, options.url)
    xhr.setRequestHeader('Content-Type', 'application/x-www-from-urlencoded')
    xhr.send(gc)
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var info = xhr.responseText
      options.sucess(info)
    }
  }
}
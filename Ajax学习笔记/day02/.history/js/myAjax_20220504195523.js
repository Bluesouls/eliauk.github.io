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
    xhr.open(options.method, options.url + '?')
    xhr.send()
  }
}
function resolveData(data) {
  var arr = [];
  for (key in data) {
    arr.push(key + '=' + 'data[key]')
  }
  arr.join('&')
}
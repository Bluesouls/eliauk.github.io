## 一、客户端与服务器

### 1.1、服务器

上网过程中，负责存放和对外提供资源的电脑，叫做服务器。

### 1.2、客户端

上网过程中，负责获取和消费资源的电脑，叫做客户端。

![image-20220423152358667](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Ajax/202204301132122.png)

## 二、URL 地址

### 2.1、概念

URL 中文叫统一资源定位符，用于标识互联网上每个资源的唯一存放位置。浏览器只有通过URL地址，才能正确定位资源的存放位置，从而成功访问到对应的资源。

### 2.2、URL 地址的组成部分

① 客户端与服务器之间的通信协议

② 存有该资源的服务器名称

③ 资源在服务器上具体的存放位置

![image-20220423153450319](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Ajax/202204301132123.png)

## 三、客户端与服务器的通信过程

### 3.1、图解客户端与服务器的通信过程

![image-20220423154046508](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Ajax/202204301132125.png)

注意：

① 客户端与服务器之间的通信过程，分为 请求 – 处理 – 响应 三个步骤。

② 网页中的每一个资源，都是通过 请求 – 处理 – 响应 的方式从服务器获取回来的。

## 四、向服务器请求资源

### 4.1、网页中如何请求数据

数据，也是服务器对外提供的一种资源。只要是资源，必然要通过 请求 – 处理 – 响应 的方式进行获取。

![image-20220423155823475](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Ajax/202204301132126.png)

如果要**在网页中请求服务器上的数据资源**，则需要用到 XMLHttpRequest 对象。

XMLHttpRequest（简称 xhr）是浏览器提供的 js 成员，通过它，可以请求服务器上的数据资源。

最简单的用法 var xhrObj = new XMLHttpRequest()

### 4.2、资源的请求方式

客户端请求服务器时，请求的方式有很多种，最常见的两种请求方式分别为 **get** 和 **post** 请求。

- get 请求通常用于**获取服务端资源**（向服务器要资源）

  例如：根据 URL 地址，从服务器获取 HTML 文件、css 文件、js文件、图片文件、数据资源等

- post 请求通常用于**向服务器提交数据**（往服务器发送资源）

  例如：登录时向服务器提交的登录信息、注册时向服务器提交的注册信息、添加用户时向服务器提交的用户信息等各种数据提交操作

## 五、介绍接口调用方式 —— 原生 Ajax

原生ajax 指的是 XMLHttpRequest（XHR）

基于jQuery的ajax是 jQuery对原生ajax的进一步封装

fetch则是通过而是es6 JavaScript Promisess设计的Ajax的替代品但是它不是对原本Ajax的封装 ，它本来就是原生而且比Ajax更加简化

axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，本质上也是对原生Ajax的封装，只不过它是Promise的实现版本（Vue中常用它）

### 5.1、什么是 Ajax

AJAX（Asynchronous Javascript And XML）AJAX 不是一门的新的语言，AJAX代表异步JavaScript和XML（XML是扩展标记语言，能够用一系列简单的标记描述数据）。它是一组用于异步显示数据的相关技术。换句话说，它在不重新加载网页的情况下发送和检索数据。

简单来说AJAX是基于web标签的xhtml+css ，可以使用dom进行动态的显示和交互 ，使用XML和XSLT(是一种用于将XML文档转换任意文本的描述语言) 进行数据的交换和操作 ，并使用XMLHttpRequest进行异步的数据查询和检索等操作……

AJAX的本质：能在HTTP协议的基础上以异步的方式通过XMLHttpRequest对象与服务器进行通信。

AJAX的作用：可以在页面不刷新的情况下，请求服务器，局部更新页面的数据。

### 5.2、Ajax 的优缺点

##### Ajax 的优点：

1. 最大的一点是页面无刷新，用户的体验非常好。
2. 使用异步方式与服务器通信，具有更加迅速的响应能力。
3. 可以把以前一些服务器负担的工作转嫁到客户端，利用客户端闲置的能力来处理，减轻服务器和带宽的负担，节约空间和宽带租用成本。并且减轻服务器的负担，ajax的原则是“按需取数据”，可以最大程度的减少冗余请求，和响应对服务器造成的负担。
4. 基于标准化的并被广泛支持的技术，不需要下载插件或者小程序。

##### Ajax 的缺点：

1. ajax不支持浏览器back按钮。
2. 安全问题 AJAX暴露了与服务器交互的细节。
3. 对搜索引擎的支持比较弱。
4. 破坏了程序的异常机制。
5. 不容易调试。

### 5.3、Ajax的实现流程是怎样的

（1）创建XMLHttpRequest对象，也就是创建一个异步调用对象

（2）创建一个新的Http请求，并指定该http请求的方法，URL及验证信息

（3）设置响应Http请求状态变化的函数

（4）发送http请求

（5）获取异步调用返回的数据

（6）使用JavaScript和DOM实现局部刷新

步骤一: 创建XMLHttpRequest对象

```js
（不考虑IE）XMLHttpRequest request=new XMLHttpRequest();
```

步骤二: 创建新的Http请求

```js
XMLHttprequest.open(method,url,flag,name,password);
```

步骤三: 设置响应Http请求变化的函数

```js
XMLHttprequest.onreadystatechange=getData;

function getData(){

    if(XMLHttprequest.readyState==4){

        //获取数据

    }

  }
```

步骤四: 发送Http请求

```js
XMLHttprequest.send(data);
```

步骤五: 获取异步调用返回的对象

```js
function(data){

//异步提交后，交互成功，返回的data便是异步调用返回的对象，该对象是一个string类型的

}
```

步骤六: 使用js,DOM实现局部刷新

```js
myDiv.innerHTML="这是刷新后的数据"
```

完整示例：

```js
<script type="text/javascript">
var HTTPRequest;
function checkUsername() {
//创建 XMLHTTPRequest 对象
if(window.XMLHTTPRequest) {
//在 IE6 以上的版本以及其他内核的浏览器(Mozilla)等
HTTPRequest = new XMLHTTPRequest();
}else if(window.ActiveXObject) {
//在 IE6 以下的版本
HTTPRequest = new ActiveXObject();
}
//创建 HTTP 请求
HTTPRequest.open("POST", "Servlet1", true);
//因为我使用的是 post 方式，所以需要设置消息头
HTTPRequest.setRequestHeader("Content-type",
"application/x-www-form-urlencoded");
//指定回调函数
HTTPRequest.onreadystatechange = response22;
//得到文本框的数据
var name = document.getElementById("username").value;
//发送 HTTP 请求，把要检测的用户名传递进去
HTTPRequest.send("username=" + name);
}
//接收服务器响应数据
function response22() {
//判断请求状态码是否是 4【数据接收完成】
if(HTTPRequest.readyState==4) {
//再判断状态码是否为 200【200 是成功的】
if(HTTPRequest.status==200) {
//得到服务端返回的文本数据
var text = HTTPRequest.responseText;
//把服务端返回的数据写在 div 上
var div = document.getElementById("result");
div.innerText = text;
}
}
}
</script>

```

### 5.4、ajax几种请求方式？他们的优缺点？

常用的post,get,delete。不常用copy、head、link等等。

区别：

(1)post比get安全 (因为post参数在请求体中。get参数在url上面)

(2)get传输速度比post快 根据传参决定的。(post通过请求体传参，后台通过数据流接收。速度稍微慢一些。而get通过url传参可以直接获取)

(3)post传输文件大理论没有限制 get传输文件小大概7-8k ie4k左右

(4)get获取数据 post上传数据(上传的数据比较多 而且上传数据都是重要数据。所以不论在安全性还是数据量级 post是最好的选择)

### 5.5、AJAX有哪些安全问题？

- AJAX源代码是可读的
- 攻击者可以将脚本插入系统

### 5.6、同步和异步请求有什么区别？

同步请求会阻止用户，直到检索到响应，而异步不会阻止用户。

### 5.7、Ajax包含下列技术：

基于web标准（standards-basedpresentation）HTML/XHTML+CSS 这些技术用于显示内容和样式；

使用 DOM（Document ObjectModel）进行动态显示及数据交互；

使用 XML 和 XSLT 与服务器进行数据交换及相关操作；

使用 XMLHttpRequest 客户端和服务器进行异步数据查询、检索；

使用 JavaScript 用于客户端验证；

### 5.8、AJAX技术体系的组成部分有哪些。

HTML，css，dom，xml，xmlHttpRequest，javascript

### 5.9、请介绍一下XMLHttpRequest对象。

Ajax的核心是 JavaScript 对象 XmlHttpRequest(简称 xhr)。该对象是浏览器内建对象，它是一种支持异步请求的技术。简

而言之，XmlHttpRequest 使您可以使用 JavaScript 向服务器提出请求并处理响应，而不阻塞用户。通过

XMLHttpRequest对象，Web开发人员可以在页面加载以后进行页面的局部更新。

#### 5.9.1、介绍一下XMLHttpRequest对象的常用方法和属性。

- open(“method”,”URL”) 建立对服务器的调用，第一个参数是HTTP请求 方式可以为GET，POST或任何服务器所支持的您想调用的方式。第二个参数是请求页面的URL。

- send()方法，发送具体请求

- abort()方法，停止当前请求

- readyState属性 请求的状态 有5个可取值（0=未初始化 ，1=正在加载，2=以加载，3=交互中，4=完成）

  - XMLHttpRequest 对象的 readyState 属性，用来表示**当前** **Ajax** **请求所处的状态**。每个 Ajax 请求必然处于以下状态中的一个：

    <img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202205011737399.png" alt="image-20220501173658851" style="zoom:67%;" />

- responseText 属性 服务器的响应，表示为一个串

- reponseXML 属性 服务器的响应，表示为XML

- status 服务器的HTTP状态码，200对应ok 400对应not found

#### 5.9.2、使用 xhr 发起 GET 请求

步骤：

- 创建 xhr 对象
- 调用 xhr.open() 函数
- 调用 xhr.send() 函数
- 监听 xhr.onreadystatechange 事件

```js
// 1. 创建 XHR 对象
var xhr = new XMLHttpRequest()
// 2. 调用 open 函数，指定 请求方式 与 URL地址
// GET 向服务器传递参数时，在 URL 的后面使用 ？ 拼接查询字符串
xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks')
// 3. 调用 send 函数，发起 Ajax 请求
xhr.send()
// 4. 监听 onreadystatechange 事件
xhr.onreadystatechange = function() {
    // 4.1 监听 xhr 对象的请求状态 readyState ；与服务器响应的状态 status
    if (xhr.readyState === 4 && xhr.status === 200) {
        // 4.2 打印服务器响应回来的数据
        console.log(xhr.responseText)
    }
}
```

#### 5.9.3、使用 xhr 发起带参数的 GET 请求

使用 xhr 对象发起带参数的 GET 请求时，只需在调用 xhr.open 期间，为 URL 地址指定参数即可：

`xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks?id=1')`

这种在 URL 地址后面拼接的参数，叫做**查询字符串**。

#### 5.9.4、查询字符串和 URL 编码与解码

##### ① 什么是查询字符串

定义：查询字符串（URL 参数）是指在 URL 的末尾加上用于向服务器发送信息的字符串（变量）。

格式：将英文的 **?** 放在URL 的末尾，然后再加上 **参数＝值** ，想加上多个参数的话，使用 **&** 符号进行分隔。以这个形式，可以将想要发送给服务器的数据添加到 URL 中。

```js
// 不带参数的 URL 地址
http://www.liulongbin.top:3006/api/getbooks
// 带一个参数的 URL 地址
http://www.liulongbin.top:3006/api/getbooks?id=1
// 带两个参数的 URL 地址
http://www.liulongbin.top:3006/api/getbooks?id=1&bookname=西游记
```

##### ② GET 请求携带参数的本质

无论使用 $.ajax()，还是使用 $.get()，又或者直接使用 xhr 对象发起 GET 请求，当需要携带参数的时候，本质上，都是直接将参数以查询字符串的形式，追加到 URL 地址的后面，发送到服务器的。

```js
$.get('url', {name: 'zs', age: 20}, function() {})
// 等价于
$.get('url?name=zs&age=20', function() {})

$.ajax({ method: 'GET', url: 'url', data: {name: 'zs', age: 20}, success: function() {} })
// 等价于
$.ajax({ method: 'GET', url: 'url?name=zs&age=20', success: function() {} })
```

##### ③  什么是 URL 编码

URL 地址中，只允许出现英文相关的字母、标点符号、数字，因此，在 URL 地址中不允许出现中文字符。

如果 URL 中需要包含中文这样的字符，则必须对中文字符进行**编码**（转义）。

**URL编码的原则**：使用安全的字符（没有特殊用途或者特殊意义的可打印字符）去表示那些不安全的字符。

URL编码原则的通俗理解：使用英文字符去表示非英文字符。

```http
http://www.liulongbin.top:3006/api/getbooks?id=1&bookname=西游记
// 经过 URL 编码之后，URL地址变成了如下格式：
http://www.liulongbin.top:3006/api/getbooks?id=1&bookname=%E8%A5%BF%E6%B8%B8%E8%AE%B0
```

##### ④ 如何对 URL 进行编码与解码

浏览器提供了 URL 编码与解码的 API，分别是：

- encodeURI() 编码的函数
- decodeURI() 解码的函数

```js
encodeURI('黑马程序员')
// 输出字符串  %E9%BB%91%E9%A9%AC%E7%A8%8B%E5%BA%8F%E5%91%98
decodeURI('%E9%BB%91%E9%A9%AC')
// 输出字符串  黑马
```

##### ⑤ URL 编码的注意事项

由于浏览器会自动对 URL 地址进行编码操作，因此，大多数情况下，程序员不需要关心 URL 地址的编码与解码操作。

更多关于 URL 编码的知识，请参考如下博客：

https://blog.csdn.net/Lxd_0111/article/details/78028889

#### 5.9.5、使用 xhr 发起 POST 请求

步骤：

① 创建 xhr 对象

② 调用 xhr.open() 函数

③ **设置** **Content-Type** **属性**（固定写法）

④ 调用 xhr.send() 函数，**同时指定要发送的数据**

⑤ 监听 xhr.onreadystatechange 事件

```js
// 1. 创建 xhr 对象
var xhr = new XMLHttpRequest()
// 2. 调用 open()
xhr.open('POST', 'http://www.liulongbin.top:3006/api/addbook')
// 3. 设置 Content-Type 属性（固定写法）post 请求需要设置消息头
// 必须写在 xhr.open() 函数之后
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
// 4. 调用 send()，同时将数据以查询字符串的形式，提交给服务器
//  向服务器传递参数时，调用 send() 函数来提供参数
xhr.send('bookname=水浒传&author=施耐庵&publisher=天津图书出版社')
// 5. 监听 onreadystatechange 事件
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText)
    }
}
```



### 5.10、数据交换格式

#### 5.10.1、什么是数据交换格式

数据交换格式，就是服务器端与客户端之间进行数据传输与交换的格式。

前端领域，经常提及的两种数据交换格式分别是 XML 和 JSON。其中 XML 用的非常少，所以，我们重点要学习的数据交换格式就是 JSON。

<img src="Ajax%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20220504163606037.png" alt="image-20220504163606037" style="zoom:50%;" />

#### 5.10.2、XML

##### 什么是 XML

XML 的英文全称是 E**X**tensible **M**arkup **L**anguage，即**可扩展标记语言**。因此，XML 和 HTML 类似，也是一种标记语言。

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202205041638443.png" alt="image-20220504163750805" style="zoom:67%;" />

##### XML 和 HTML 的区别

XML 和 HTML 虽然都是标记语言，但是，它们两者之间没有任何的关系。

- HTML 被设计用来描述网页上的**内容**，是网页内容的载体
- XML 被设计用来**传输和存储数据**，是数据的载体

![image-20220504164019227](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202205041640037.png)

##### XML 的缺点

① XML 格式臃肿，和数据无关的代码多，体积大，传输效率低

② 在 Javascript 中解析 XML 比较麻烦

#### 5.10.3、JSON

概念：JSON 的英文全称是 JavaScript Object Notation，即”JavaScript 对象表示法“。简单来讲，JSON 就是 Javascript 对象和数组的字符串表示法，它使用文本表示一个 JS 对象或数组的信息，因此，JSON 的本质是字符串。

作用：JSON 是一种轻量级的文本数据交换格式，在做用上类似于 XML，专门用于存储和传输数据，但是 JSON 比 XML 更小、更快、更易解析。

现状：JSON 是在 2001 年开始被推广和使用的数据格式，到现今为止，JSON 已经成为了主流的数据交换格式。

##### JSON 的两种结构

JSON 就是用字符串来表示 Javascript 的对象和数组。所以，JSON 中包含**对象**和**数组**两种结构，通过这两种结构的相互嵌套，可以表示各种复杂的数据结构。

**对象结构**：对象结构在 JSON 中表示为 { } 括起来的内容。数据结构为 { key: value, key: value, … } 的键值对结构。其中，key 必须是使用英文的双引号包裹的字符串，value 的数据类型可以是数字、字符串、布尔值、null、数组、对象6种类型。

```json
{
    "name": "zs",
    "age": 20,
    "gender": "男",
    "address": null,
    "flag": true,
    "hobby": ["吃饭", "睡觉", "打豆豆"]
}
```

**数组结构**：数组结构在 JSON 中表示为 [ ] 括起来的内容。数据结构为 [ "java", "javascript", 30, true … ] 。数组中数据的类型可以是数字、字符串、布尔值、null、数组、对象6种类型。

```json
[ "java", "python", "php" ]
[ 100, 200, 300.5 ]
[ true, false, null ]
[ { "name": "zs", "age": 20}, { "name": "ls", "age": 30} ]
[ [ "苹果", "榴莲", "椰子" ], [ 4, 50, 5 ] ]
```

##### JSON 语法注意事项

① 属性名必须使用双引号包裹

② 字符串类型的值必须使用双引号包裹

③ JSON 中不允许使用单引号表示字符串

④ JSON 中不能写注释

⑤ JSON 的最外层必须是对象或数组格式

⑥ 不能使用 undefined 或函数作为 JSON 的值

JSON 的作用：在计算机与网络之间存储和传输数据。

JSON 的本质：用字符串来表示 Javascript 对象数据或数组数据

##### JSON 和 JS 对象的关系

JSON 是 JS 对象的字符串表示法，它使用文本表示一个 JS 对象的信息，本质是一个字符串。例如：

```js
//这是一个对象
var obj = {a: 'Hello', b: 'World'}

//这是一个 JSON 字符串，本质是一个字符串
var json = '{"a": "Hello", "b": "World"}' 
```

##### JSON 和 JS 对象的互转

要实现从 JSON 字符串转换为 JS 对象，使用 JSON.parse() 方法：

```js
var obj = JSON.parse('{"a": "Hello", "b": "World"}')
//结果是 {a: 'Hello', b: 'World'}
```

要实现从 JS 对象转换为 JSON 字符串，使用 JSON.stringify() 方法：

```js
var json = JSON.stringify({a: 'Hello', b: 'World'})
//结果是 '{"a": "Hello", "b": "World"}'
```

##### 序列化和反序列化

把数据对象转换为字符串的过程，叫做**序列化**，例如：调用 JSON.stringify() 函数的操作，叫做 JSON 序列化。

把字符串转换为数据对象的过程，叫做**反序列化**，例如：调用 JSON.parse() 函数的操作，叫做 JSON 反序列化。

### 5.11、封装自己的 Ajax 函数

myAjax() 函数是我们自定义的 Ajax 函数，它接收一个配置对象作为参数，配置对象中可以配置如下属性：

```html
<!-- 1. 导入自定义的ajax函数库 -->
<script src="./myAjax.js"></script>

<script>
    // 2. 调用自定义的 myAjax 函数，发起 Ajax 数据请求
    myAjax({
        method: '请求类型',
        url: '请求地址',
        data: { /* 请求参数对象 */ },
        success: function(res) { // 成功的回调函数
            console.log(res)     // 打印数据
        }
    })
</script>

```

需要把 data 对象，转化成查询字符串的格式，从而提交给服务器，因此提前定义 resolveData 函数如下：

```js
/**
 * 处理 data 参数
 * @param {data} 需要发送到服务器的数据
 * @returns {string} 返回拼接好的查询字符串 name=zs&age=10
 */
function resolveData(data) {
  var arr = []
  for (var k in data) {
    arr.push(k + '=' + data[k])
  }
  return arr.join('&')
}
```

定义 myAjax() 函数：

在 myAjax() 函数中，需要创建 xhr 对象，并监听 onreadystatechange 事件；

不同的请求类型，对应 xhr 对象的不同操作，因此需要对请求类型进行 if … else … 的判断；

```js
function myAjax(options) {
  var xhr = new XMLHttpRequest()
  // 拼接查询字符串
  var gs = resolveData(options.data)
  if (options.method.toUpperCase() === 'GET') {
      // 发起 GET 请求
    xhr.open(options.method, options.url + '?' + gs)
    xhr.send()
  } else if (options.method.toUpperCase() === 'POST') {
      // 发起 POST 请求
    xhr.open(options.method, options.url)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(gs)
  }
    // 监听请求状态改变的事件
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var info = JSON.parse(xhr.responseText)
      options.success(info)
    }
  }
}
```



### 5.10、Ajax 的典型应用场景

用户名检测：注册用户时，通过 ajax 的形式，动态检测用户名是否被占用

![image-20220423163111446](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Ajax/202204301132127.png)

搜索提示：当输入搜索关键字时，通过 ajax 的形式，动态加载搜索提示列表

![image-20220423163132940](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Ajax/202204301132128.png)

数据分页显示：当点击页码值的时候，通过 ajax 的形式，根据页码值动态刷新表格的数据

![image-20220423163202243](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Ajax/202204301132129.png)

数据的增删改查：数据的添加、删除、修改、查询操作，都需要通过 ajax 的形式，来实现数据的交互

![image-20220423163257355](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Ajax/202204301132130.png)

## 六、jQuery 中的 Ajax

### 了解 jQuery 中的 Ajax

浏览器中提供的 XMLHttpRequest 用法比较复杂，所以 jQuery 对 XMLHttpRequest 进行了封装，提供了一系列 Ajax 相关的函数，极大地降低了 Ajax 的使用难度。

jQuery 中发起 Ajax 请求最常用的三个方法如下：

- $.get()

- $.post()

- $.ajax()

## 七、接口

### 7.1、接口的概念

使用 Ajax 请求数据时，被请求的 URL 地址，就叫做数据接口（简称接口）。同时，每个接口必须有请求方式。

例如：

http://www.liulongbin.top:3006/api/getbooks 获取图书列表的接口(GET请求)

http://www.liulongbin.top:3006/api/addbook  添加图书的接口（POST请求）

### 7.2、分析接口的请求过程

- **通过 GET 方式请求接口的过程**

  ![image-20220426081114291](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Ajax/202204301132131.png)

- **通过 POST 方式请求接口的过程**

  ![image-20220426081205072](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Ajax/202204301132132.png)

### 7.3、接口测试工具

#### 7.3.1、使用 PostMan 测试 GET 接口

步骤：

1.选择请求的方式

2.填写请求的URL地址

3.填写请求的参数

4.点击 Send 按钮发起 GET 请求

5.查看服务器响应的结果

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Ajax/202204301132133.png" alt="image-20220429172449710" style="zoom:67%;" />

#### 7.3.2、使用 PostMan 测试 POST 接口

步骤：

1.选择请求的方式

2.填写请求的URL地址

3.选择 Body 面板并勾选数据格式

4.填写要发送到服务器的数据

5.点击 Send 按钮发起 POST 请求

6.查看服务器响应的结果

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Ajax/202204301132134.png" alt="image-20220429172621196" style="zoom:67%;" />

### 7.4、接口文档

#### 7.4.1、什么是接口文档

接口文档，顾名思义就是**接口的说明文档，它是我们调用接口的依据**。好的接口文档包含了对接口URL，参数以及输出内容的说明，我们参照接口文档就能方便的知道接口的作用，以及接口如何进行调用。

#### 7.4.2、接口文档的组成部分

接口文档可以包含很多信息，也可以按需进行精简，不过，一个合格的接口文档，应该包含以下6项内容，从而为接口的调用提供依据：

1. **接口名称**：用来标识各个接口的简单说明，如登录接口，获取图书列表接口等。
2. **接口URL**：接口的调用地址。
3. **调用方式**：接口的调用方式，如 GET 或 POST。
4. **参数格式**：接口需要传递的参数，每个参数必须包含参数名称、参数类型、是否必选、参数说明这4项内容。
5. **响应格式**：接口的返回值的详细描述，一般包含数据名称、数据类型、说明3项内容。
6. 返回示例（可选）：通过对象的形式，例举服务器返回数据的结构。

#### 7.4.3、接口文档示例

![image-20220426083153346](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Ajax/202204301132135.png)

![image-20220426083203295](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Ajax/202204301132136.png)

![image-20220426083213704](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg202204301054490.png)

## 八、form 表单与模板引擎

### 8.1、什么是表单

表单在网页中主要负责**数据采集功能**。HTML中的<form>标签，就是用于采集用户输入的信息，并通过<form>标签的提交操作，把采集到的信息提交到服务器端进行处理。

### 8.2、表单的组成部分

表单由三个基本部分组成：

- 表单标签（`<form></form>`）
- 表单域（`<input type='' name=''>`）
- 表单按钮（`<button type="submit"></button>`）

### 8.3、`<form>` 标签的属性

`<form>`标签用来采集数据，`<form>`标签的属性则是用来规定**如何把采集到的数据发送到服务器**

![image-20220430144904708](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301449936.png)

#### 8.3.1、enctype 属性

enctype 属性用来规定在**发送表单数据之前如何对数据进行编码**。

它的可选值有三个，默认情况下，enctype 的值为 application/x-www-form-urlencoded，表示在发送前编码所有的字符。

![image-20220430145120169](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301451214.png)

**注意：**

在涉及到**文件上传**的操作时，**必须**将 enctype 的值设置为 multipart/form-data

如果表单的提交不涉及到文件上传操作，则直接将 enctype 的值设置为 application/x-www-form-urlencoded 即可！

### 8.4、表单的同步提交及缺点

#### 8.4.1、什么是表单的同步提交

通过点击 submit 按钮，触发表单提交的操作，从而使页面跳转到 action URL 的行为，叫做表单的同步提交。

#### 8.4.2、表单同步提交的缺点

① `<form>`表单同步提交后，整个页面会发生跳转，**跳转到** **action URL** **所指向的地址**，用户体验很差。

② `<form>`表单同步提交后，**页面之前的状态和数据会丢失**。

#### 8.4.3、如何解决表单同步提交的缺点

如果使用表单提交数据，则会导致以下两个问题：

① 页面会发生跳转

② 页面之前的状态和数据会丢失

解决方案：**表单只负责采集数据，Ajax 负责将数据提交到服务器**。

### 8.5、通过 Ajax 提交表单数据

#### 8.5.1、监听表单提交事件

在 jQuery 中，可以使用如下两种方式，监听到表单的提交事件：

```javascript
$('#form1').submit(function(e) {
   alert('监听到了表单的提交事件')
})

$('#form1').on('submit', function(e) {
   alert('监听到了表单的提交事件')

```

#### 8.5.2、阻止表单默认提交行为

当监听到表单的提交事件以后，可以调用事件对象的 event.preventDefault() 函数，来阻止表单的提交和页面的跳转，示例代码如下：

```js
$('#form1').submit(function(e) {
   // 阻止表单的提交和页面的跳转
   e.preventDefault()
})

$('#form1').on('submit', function(e) {
   // 阻止表单的提交和页面的跳转
   e.preventDefault()
})

```

#### 8.5.3、快速获取表单中的数据

- serialize() 函数

  为了简化表单中数据的获取操作，jQuery 提供了 serialize() 函数，其语法格式如下：

  ```js
  $(selector).serialize()
  ```

  serialize() 函数的好处：可以一次性获取到表单中的所有的数据。

  - serialize() 函数示例

    ```html
    <form id="form1">
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="submit">提交</button>
    </form>
    ```

    ```js
    $('#form1').serialize()
    // 调用的结果：
    // username=用户名的值&password=密码的值
    ```

    注意：在使用 serialize() 函数快速获取表单数据时，**必须为每个表单元素添加** **name** **属性**！

## 九、模板引擎的基本概念

### 9.1、渲染结构时遇到的问题

```js
var rows = []
$.each(res.data, function (i, item) { // 循环拼接字符串
    rows.push('<li class="list-group-item">'+ item.content +'<span class="badge cmt-date">评论时间：'+ item.time +'</span><span class="badge cmt-person">评论人：'+ item.username +'</span></li>')
})
$('#cmt-list').empty().append(rows.join('')) // 渲染列表的UI结构

```

上述代码是通过**字符串拼接**的形式，来渲染UI结构。

如果UI结构比较复杂，则拼接字符串的时候需要格外注意**引号之前的嵌套**。且一旦需求发生变化，**修改起来也非常麻烦**。

### 9.2、什么是模板引擎

模板引擎，顾名思义，它可以根据程序员指定的模板结构和数据，自动生成一个完整的HTML页面。

![image-20220430181041041](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301810287.png)

### 9.3、模板引擎的好处

① 减少了字符串的拼接操作

② 使代码结构更清晰

③ 使代码更易于阅读与维护

## 十、art-template 模板引擎

### 10.1、art-template的安装

在浏览器中访问 http://aui.github.io/art-template/zh-cn/docs/installation.html 页面，找到下载链接后，鼠标右键，选择“**链接另存为**”，将 art-template 下载到本地，然后，通过 <script> 标签加载到网页上进行使用。

![image-20220430181419178](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301814191.png)

### 10.2、使用传统方式渲染 UI 结构

传统方式渲染

```html
<body>
  <div id="title"></div>
  <div id="name"></div>
  <div id="age"></div>
  <div id="isVIP"></div>
  <div id="date"></div>
  <ul id="hobby">
  </ul>
  <script>
    var data = {
      title: '<h3>用户信息</h3>',
      name: 'zs',
      age: 20,
      isVIP: true,
      regTime: new Date(),
      hobby: ['吃饭', '睡觉', '打豆豆']
    }
    $('#title').html(data.title)
    $('#name').text(data.name)
    $('#age').text(data.age)
    $('#isVIP').text(data.isVIP)
    $('#date').text(data.regTime)
    var rows = []
    $.each(data.hobby, function (i, item) {
      rows.push('<li>' + item + '</li>')
    })
    $('#hobby').append(rows.join(''))
  </script>
</body>
```

测试效果：

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202205011537240.png" alt="image-20220501122138307" style="zoom:67%;" />

### 10.3、art-template 模板引擎的基本使用

art-template 的使用步骤：

- 导入 art-template
- 定义数据
- 定义模板
- 调用 template 函数
- 渲染 HTML 结构

### 10.4、art-template 标准语法

- 条件输出

  如果要实现条件输出，则可以在 {{ }} 中使用 **if** … **else if** … **/if** 的方式，进行按需输出。

  ```html
  {{if value}} 按需输出的内容 {{/if}}
  
  {{if v1}} 按需输出的内容 {{else if v2}} 按需输出的内容 {{/if}}
  ```

- 循环输出

  如果要实现循环输出，则可以在 {{ }} 内，通过 each 语法循环数组，当前循环的索引使用 **$index** 进行访问，当前的循环项使用 **$value** 进行访问。

  ```html
  {{each arr}}
      {{$index}} {{$value}}
  {{/each}}
  ```

- 过滤器

  定义模板

  ```html
  {{value | filterName}}
  ```

  定义过滤器

  ```js
  template.defaults.imports.filterName = function(value){/* return 处理的结果*/}
  ```

  注意，过滤器最后一定要 return 一个值

art-template 的综合用法：

```js
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>art-template 模板引擎的基本使用</title>
  <script src="./lib/jquery.js"></script>
  <!--1. 导入模板引擎 -->
  <!-- 在 window 全局,多一个函数,叫做 template('模板的ID',需要渲染的数据对象) -->
  <script src="./lib/template-web.js"></script>
</head>

<body>
  <div id="container"></div>
  <!-- 3. 定义模板 -->
  <!-- 3.1 模板的 HTML 结构，必须定义到 script 中 -->
  <script type="text/html" id="tpl-user">
    <div>注册时间：{{regTime|dateFormat}}</div>
    <ul>
      {{each hobby}}
      <li>
        {{$index}} ----- {{$value}}
      </li>
      {{/each}}
    </ul>
  </script>
  <script type="text/javascript">
    // 定义一个格式化时间的过滤器 dateFormat 
    // data 是形参，对应的 regTime 是实参
    template.defaults.imports.dateFormat = function (date) {
      var y = date.getFullYear()
      var m = date.getMonth() + 1
      var d = date.getDate()

      return y + '-' + m + '-' + d
    }
    // 2. 定义需要渲染的数据
    var data = {
      title: '<h3>用户信息</h3>',
      name: 'zs',
      age: 20,
      isVIP: true,
      regTime: new Date(),
      hobby: ['吃饭', '睡觉', '打豆豆']
    }

    // 4. 调用 template 函数
    // template('模板的ID',需要渲染的数据对象)
    // template 函数返回 html 结构
    var htmlStr = template('tpl-user', data)
    console.log(htmlStr)
    // 5. 渲染 HTML 结构
    $('#container').html(htmlStr)
  </script>
</body>

</html>
```

测试结果：

![image-20220501153655363](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202205011537704.png)

## 十一、模板引擎的实现原理

### 11.1、正则与字符串操作

#### 11.1.1、基本语法：

exec() 函数用于检索字符串中的正则表达式的匹配。

如果字符串中有匹配的值，则返回该匹配值，否则返回 null。

```js
RegExpObject.exec(string)
```

示例代码：

```js
var str = 'hello'
// 定义规则：匹配 "o"
var pattern = /o/
// 输出的结果["o", index: 4, input: "hello", groups: undefined]
console.log(pattern.exec(str)) 
```

#### 11.1.2、分组：

正则表达式中 ( ) 包起来的内容表示一个分组，可以通过分组来**提取自己想要的内容**，示例代码如下：

```js
 var str = '<div>我是{{name}}</div>'
 // 提取 {{ }} 里面的内容
 var pattern = /{{([a-zA-Z]+)}}/

 var patternResult = pattern.exec(str)
 console.log(patternResult)
 // 得到 name 相关的分组信息
 // ["{{name}}", "name", index: 7, input: "<div>我是{{name}}</div>", groups: undefined]

```

测试结果：

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202205011640251.png" alt="image-20220501164009968" style="zoom: 80%;" />

#### 11.1.3、字符串的 replace 函数

replace() 函数用于在字符串中用一些字符**替换**另一些字符，语法格式如下：

```js
var result = '123456'.replace('123', 'abc') // 得到的 result 的值为字符串 'abc456'
```

示例代码如下：

```js
var str = '<div>我是{{name}}</div>'
var pattern = /{{([a-zA-Z]+)}}/

var patternResult = pattern.exec(str)
// patternResult[0] 的值是 {{name}}替换为 patternResult[1] 的值是 name
str = str.replace(patternResult[0], patternResult[1]) // replace 函数返回值为替换后的新字符串
// 输出的内容是：<div>我是name</div>
console.log(str)
```

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202205011650559.png" alt="image-20220501164009968" style="zoom: 80%;" />



#### 11.1.4、多次 replace

```js
var str = '<div>{{name}}今年{{ age }}岁了</div>'
var pattern = /{{\s*([a-zA-Z]+)\s*}}/

var patternResult = pattern.exec(str)
str = str.replace(patternResult[0], patternResult[1])
console.log(str) // 输出 <div>name今年{{ age }}岁了</div>

patternResult = pattern.exec(str)
str = str.replace(patternResult[0], patternResult[1])
console.log(str) // 输出 <div>name今年age岁了</div>

patternResult = pattern.exec(str)
console.log(patternResult) // 输出 null

```

![image-20220501165134394](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202205011706864.png)

#### 11.1.5、使用 while 循环 replace

```js
var str = '<div>{{name}}今年{{ age }}岁了</div>'
var pattern = /{{\s*([a-zA-Z]+)\s*}}/

var patternResult = null
while(patternResult = pattern.exec(str)) {
   str = str.replace(patternResult[0], patternResult[1])
}
console.log(str) // 输出 <div>name今年age岁了</div>
```

![image-20220501165322105](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202205011706661.png)

#### 11.1.6、replace 替换为真值

```js
var data = { name: '张三', age: 20 }
var str = '<div>{{name}}今年{{ age }}岁了</div>'
var pattern = /{{\s*([a-zA-Z]+)\s*}}/

var patternResult = null
while ((patternResult = pattern.exec(str))) {
   str = str.replace(patternResult[0], data[patternResult[1]])
}
console.log(str)
```

![image-20220501165708555](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202205011707912.png)

### 11.2、实现简易的模板引擎

实现步骤：

- 定义模板结构
- 预调用模板引擎
- 封装 template 函数
- 导入并使用自定义的模板引擎

#### 11.2.1、定义模板结构

```html
<!-- 定义模板结构 -->
<script type="text/html" id="tpl-user">
   <div>姓名：{{name}}</div>
   <div>年龄：{{ age }}</div>
   <div>性别：{{  gender}}</div>
   <div>住址：{{address  }}</div>
</script>
```

#### 11.2.2、预调用模板结构

```js
<script>
   // 定义数据
   var data = { name: 'zs', age: 28, gender: '男', address: '北京顺义马坡' }
  // 调用模板函数
   var htmlStr = template('tpl-user', data)
   // 渲染HTML结构
   document.getElementById('user-box').innerHTML = htmlStr
</script>

```

#### 11.2.3、封装 template 函数

```js
function template(id, data) {
   // 获取模板结构的所有内容
  var str = document.getElementById(id).innerHTML
  // 定义匹配规则
  var pattern = /{{\s*([a-zA-Z]+)\s*}}/
  var pattResult = null
  // 匹配模板结构的所有内容
  while ((pattResult = pattern.exec(str))) {
    str = str.replace(pattResult[0], data[pattResult[1]])
  }
  return str
}

```

#### 11.2.4、导入并使用自定义的模板结构

```html
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>自定义模板引擎</title>
    <!-- 导入自定义的模板引擎 -->
    <script src="./js/template.js"></script>
</head>
<body>
    
  <div id="user-box"></div>

  <script type="text/html" id="tpl-user">
    <div>姓名：{{name}}</div>
    <div>年龄：{{ age }}</div>
    <div>性别：{{  gender}}</div>
    <div>住址：{{address  }}</div>
  </script>

  <script>
    // 定义数据
    var data = { name: 'zs', age: 28, gender: '男', address: '北京顺义马坡' }

    // 调用模板引擎
    var htmlStr = template('tpl-user', data)

    // 渲染HTML结构
    document.getElementById('user-box').innerHTML = htmlStr
  </script>
</body>
```

测试结果：

![image-20220501170634233](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202205011707694.png)
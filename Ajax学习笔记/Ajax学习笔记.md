---
typora-copy-images-to: upload
---

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

### 5.8、请介绍一下XMLhttprequest对象。

Ajax的核心是 JavaScript 对象 XmlHttpRequest。该对象是浏览器内建对象，它是一种支持异步请求的技术。简

而言之，XmlHttpRequest 使您可以使用 JavaScript 向服务器提出请求并处理响应，而不阻塞用户。通过

XMLHttpRequest对象，Web开发人员可以在页面加载以后进行页面的局部更新。

#### 5.8.1、介绍一下XMLHttpRequest对象的常用方法和属性。

open(“method”,”URL”) 建立对服务器的调用，第一个参数是HTTP请求 方式可以为GET，POST或任何服务器所支持的您想调用的方式。

第二个参数是请求页面的URL。

send()方法，发送具体请求

abort()方法，停止当前请求

readyState属性 请求的状态 有5个可取值（0=未初始化 ，1=正在加载，2=以加载，3=交互中，4=完成）

responseText 属性 服务器的响应，表示为一个串

reponseXML 属性 服务器的响应，表示为XML

status 服务器的HTTP状态码，200对应ok 400对应not found

### 5.9、Ajax 的典型应用场景

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
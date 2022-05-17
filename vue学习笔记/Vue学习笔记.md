# 一、前端核心分析

## 1.1、概述

Soc原则：关注点分离原则

Vue 的核心库只关注视图层，方便与第三方库或既有项目整合。

HTML + CSS + JS : 视图 ： 给用户看，刷新后台给的数据

网络通信 ： axios

页面跳转 ： vue-router

状态管理：vuex

Vue-UI : ICE , Element UI

## 1.2、前端三要素

- HTML（结构）：超文本标记语言（Hyper Text Markup Language），决定网页的结构和内容
- CSS（表现）：层叠样式表（Cascading Style Sheets），设定网页的表现样式。
- JavaScript（行为）：是一种弱类型脚本语言，其源码不需经过编译，而是由浏览器解释运行，用于控制网页的行为

## 1.3、结构层（HTML）

略

## 1.4、表现层（CSS）

CSS层叠样式表是一门标记语言，并不是编程语言，因此不可以自定义变量，不可以引用等，换句话说就是不具备任何语法支持，它主要缺陷如下：

- 语法不够强大，比如无法嵌套书写，导致模块化开发中需要书写很多重复的选择器；
- 没有变量和合理的样式复用机制，使得逻辑上相关的属性值必须以字面量的形式重复输出，导致难以维护；

这就导致了我们在工作中无端增加了许多工作量。为了解决这个问题，前端开发人员会使用一种称之为【CSS预处理器】的工具,提供CSS缺失的样式层复用机制、减少冗余代码，提高样式代码的可维护性。大大的提高了前端在样式上的开发效率。

**什么是CSS预处理器**

CSS预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为CSS增加了一些编程的特性，将CSS作为目标生成文件，然后开发者就只需要使用这种语言进行CSS的编码工作。转化成通俗易懂的话来说就是**“用一种专门的编程语言，进行Web页面样式设计，再通过编译器转化为正常的CSS文件，以供项目使用”。**

**常用的CSS预处理器有哪些**

- SASS：基于Ruby ，通过服务端处理，功能强大。解析效率高。需要学习Ruby语言，上手难度高于LESS。
- LESS：基于NodeJS，通过客户端处理，使用简单。功能比SASS简单，解析效率也低于SASS，但在实际开发中足够了，所以如果我们后台人员如果需要的话，建议使用LESS。

## 1.5、行为层（JavaScript）

JavaScript一门弱类型脚本语言，其源代码在发往客户端运行之前不需要经过编译，而是将文本格式的字符代码发送给浏览器，由浏览器解释运行。

**Native 原生JS开发**

原生JS开发，也就是让我们按照【ECMAScript】标准的开发方式，简称ES，特点是所有浏览器都支持。截至到当前，ES标准以发布如下版本：

- ES3
- ES4（内部，未正式发布）
- ES5（全浏览器支持）
- ES6（常用，当前主流版本：webpack打包成为ES5支持）
- ES7
- ES8
- ES9（草案阶段）

区别就是逐步增加新特性。

**TypeScript 微软的标准**

TypeScript是一种由微软开发的自由和开源的编程语言。它是JavaScript的一个超集， 而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。由安德斯·海尔斯伯格(C#、Delphi、TypeScript之父； .NET创立者) 主导。该语言的特点就是除了具备ES的特性之外还纳入了许多不在标准范围内的新特性，所以会导致很多浏览器不能直接支持TypeScript语法， 需要编译后(编译成JS) 才能被浏览器正确执行。

**JavaScript框架**

- JQuery：大家熟知的JavaScript库，优点就是简化了DOM操作，缺点就是DOM操作太频繁，影响前端性能；在前端眼里使用它仅仅是为了兼容IE6，7，8；
- Angular：Google收购的前端框架，由一群Java程序员开发，其特点是将后台的MVC模式搬到了前端并增加了模块化开发的理念，与微软合作，采用了TypeScript语法开发；对后台程序员友好，对前端程序员不太友好；最大的缺点是版本迭代不合理（如1代–>2 代，除了名字，基本就是两个东西；截止发表博客时已推出了Angular6）
- React：Facebook 出品，一款高性能的JS前端框架；特点是提出了新概念 【虚拟DOM】用于减少真实 DOM 操作，在内存中模拟 DOM操作，有效的提升了前端渲染效率；缺点是使用复杂，因为需要额外学习一门【JSX】语言；
- Vue：一款渐进式 JavaScript 框架，所谓渐进式就是逐步实现新特性的意思，如实现模块化开发、路由、状态管理等新特性。其特点是综合了 Angular（模块化）和React(虚拟 DOM) 的优点；
- Axios：前端通信框架；因为 Vue 的边界很明确，就是为了处理 DOM，所以并不具备通信能力，此时就需要额外使用一个通信框架与服务器交互；当然也可以直接选择使用jQuery 提供的AJAX 通信功能；

## 1.6、前端工程化

前端开发：

- 模块化 （js的模块化、css的模块化、资源的模块化）
- 组件化（复用现有的 UI 结构、样式、行为）
- 规范化（目录结构的划分、编码规范化、接口规范化、文档规范化、Git 分支管理）
- 自动化（自动化构建、自动化部署、自动化测试）

# 二、前端发展史

## 2.1、UI框架

- Ant-Design：阿里巴巴出品，基于React的UI框架
- ElementUI、iview、ice：饿了么出品，基于Vue的UI框架
- BootStrap：Teitter推出的一个用于前端开发的开源工具包
- AmazeUI：又叫“妹子UI”，一款HTML5跨屏前端框架

## 2.2、JavaScript构建工具

- Babel：JS编译工具，主要用于浏览器不支持的ES新特性，比如用于编译TypeScript
- WebPack：模块打包器，主要作用就是打包、压缩、合并及按序加载

**注：以上知识点已将WebApp开发所需技能全部梳理完毕**

## 2.3、三端同一

**混合开发（Hybrid App）**

主要目的是实现一套代码三端统一（PC、Android：.apk、iOS：.ipa）并能够调用到设备底层硬件（如：传感器、GPS、摄像头等），打包方式主要有以下两种：

- 云打包：HBuild -> HBuildX，DCloud 出品；API Cloud
- 本地打包： Cordova（前身是 PhoneGap）

**微信小程序**

详见微信官网，这里就是介绍一个方便微信小程序UI开发的框架：WeUI

## 2.4、后端技术

前端人员为了方便开发也需要掌握一定的后端技术但我们Java后台人员知道后台知识体系极其庞大复杂，所以为了方便前端人员开发后台应用，就出现了Node JS这样的技术。Node JS的作者已经声称放弃Node JS(说是架构做的不好再加上笨重的node modules，可能让作者不爽了吧)开始开发全新架构的De no。
既然是后台技术，那肯定也需要框架和项目管理工具， Node JS框架及项目管理工具如下：

- Express：Node JS框架
- Koa：Express简化版
- NPM：项目综合管理工具，类似于Maven
- YARN：NPM的替代方案，类似于Maven和Gradle的关系

## 2.5、主流前端框架

Vue.js

**iView**

iview是一个强大的基于Vue的UI库， 有很多实用的基础组件比element ui的组件更丰富， 主要服务于PC界面的中后台产品。使用单文件的Vue组件化开发模式基于npm+webpack+babel开发， 支持ES 2015高质量、功能丰富友好的API， 自由灵活地使用空间。

- 官网地址
- Github
- iview-admin

**备注：属于前端主流框架，选型时可考虑使用，主要特点是移动端支持较多**

**Element UI**

Element是饿了么前端开源维护的Vue UI组件库， 组件齐全， 基本涵盖后台所需的所有组件，文档讲解详细， 例子也很丰富。主要用于开发PC端的页面， 是一个质量比较高的Vue UI组件库。

- 官网地址
- Git hub
- vue-element-admin

**备注：属于前端主流框架，选型时可考虑使用，主要特点是桌面端支持较多**

**ICE**

飞冰是阿里巴巴团队基于React/Angular/Vue的中后台应用解决方案， 在阿里巴巴内部， 已经有270多个来自几乎所有BU的项目在使用。飞冰包含了一条从设计端到开发端的完整链路，帮助用户快速搭建属于自己的中后台应用。

- 官网地址。
- Git hub

**备注：主要组件还是以React为主， 截止2019年02月17日更新博客前对Vue的支持还不太完善，目前尚处于观望阶段**

**VantUI**

Vant UI是有赞前端团队基于有赞统一的规范实现的Vue组件库， 提供了-整套UI基础组件和业务组件。通过Vant， 可以快速搭建出风格统一的页面，提升开发效率。

- 官网地址
- Github

**AtUI**

at-ui是一款基于Vue 2.x的前端UI组件库， 主要用于快速开发PC网站产品。它提供了一套n pm+web pack   babel前端开发工作流程， CSS样式独立， 即使采用不同的框架实现都能保持统一的UI风格。

- 官网地址
- Git hub

**Cube Ul**

cube-ui是滴滴团队开发的基于Vue js实现的精致移动端组件库。支持按需引入和后编译， 轻量灵活；扩展性强，可以方便地基于现有组件实现二次开发。

- 官网地址
- Github

**混合开发**

**Flutter**

Flutter是谷歌的移动端UI框架， 可在极短的时间内构建Android和iOS上高质量的原生级应用。Flutter可与现有代码一起工作， 它被世界各地的开发者和组织使用， 并且Flutter是免费和开源的。

- 官网地址
- Github

**备注：Google出品， 主要特点是快速构建原生APP应用程序， 如做混合应用该框架为必选框架**

**lonic**

lonic既是一个CSS框架也是一个Javascript UI库， lonic是目前最有潜力的一款HTML 5手机应用开发框架。通过SASS构建应用程序， 它提供了很多UI组件来帮助开发者开发强大的应用。它使用JavaScript MV VM框架和Angular JS/Vue来增强应用。提供数据的双向绑定， 使用它成为Web和移动开发者的共同选择。

- 官网地址
- 官网文档
- Git hub

**微信小程序**

**mpvue**

mpvue是美团开发的一个使用Vue.js开发小程序的前端框架， 目前支持微信小程序、百度智能小程序，头条小程序和支付宝小程序。框架基于Vue.js， 修改了的运行时框架runtime和代码编译器compiler实现， 使其可运行在小程序环境中， 从而为小程序开发引入了Vue.js开发体验。

- 官网地址
- Git hub

**备注：完备的Vue开发体验， 井且支持多平台的小程序开发， 推荐使用**

**WeUI**

WeUI是一套同微信原生视觉体验一致的基础样式库， 由微信官方设计团队为微信内网页和微信小程序量身设计， 令用户的使用感知更加统一。包含button、cell、dialog、toast、article、icon等各式元素。

- 官网地址
- Github

# 三、了解前后分离的演变史

为什么需要前后分离

## 3.1、后端为主的MVC时代

为了降低开发的复杂度， 以后端为出发点， 比如：Struts、Spring MVC等框架的使用， 就是后端的MVC时代；
以`SpringMVC`流程为例：

![f62afe1e9e6d4ae9dec1502d62e26992](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301324384.png)

- 发起请求到前端控制器(Dispatcher Servlet)

- 前端控制器请求HandlerMapping查找Handler，可以根据xml配置、注解进行查找

- 处理器映射器HandlerMapping向前端控制器返回Handler

- 前端控制器调用处理器适配器去执行Handler

- 处理器适配器去执行Handler

- Handler执行完成给适配器返回ModelAndView

- 处理器适配器向前端控制器返回ModelAndView，ModelAndView是SpringMvc框架的一个底层对象，包括Model和View

- 前端控制器请求视图解析器去进行视图解析，根据逻辑视图名解析成真正的视图(JSP)

- 视图解析器向前端控制器返回View

- 前端控制器进行视图渲染，视图渲染将模型数据(在ModelAndView对象中)填充到request域

- 前端控制器向用户响应结果
  
  **优点**
  
  MVC是一个非常好的协作模式， 能够有效降低代码的耦合度从架构上能够让开发者明白代码应该写在哪里。为了让View更纯粹， 还可以使用Thyme leaf、Frree marker等模板引擎， 使模板里无法写入Java代码， 让前后端分工更加清晰。
  
  **缺点**
  
- 前端开发重度依赖开发环境，开发效率低，这种架构下，前后端协作有两种模式：
  - 第一种是前端写DEMO， 写好后， 让后端去套模板。好处是DEMO可以本地开发， 很高效。不足是还需要后端套模板，有可能套错，套完后还需要前端确定，来回沟通调整的成本比较大；
  - 另一种协作模式是前端负责浏览器端的所有开发和服务器端的View层模板开发。好处是UI相关的代码都是前端去写就好，后端不用太关注，不足就是前端开发重度绑定后端环境，环境成为影响前端开发效率的重要因素。
  
- 前后端职责纠缠不清：模板引擎功能强大，依旧可以通过拿到的上下文变量来实现各种业务逻辑。这样，只要前端弱势一点，往往就会被后端要求在模板层写出不少业务代码，还有一个很大的灰色地带是Controller， 页面路由等功能本应该是前端最关注的， 但却是由后端来实现。Controller本身与Model往往也会纠缠不清，看了让人咬牙的业务代码经常会出现在Controller层。这些问题不能全归结于程序员的素养， 否则JSP就够了。

- 对前端发挥的局限性：性能优化如果只在前端做空间非常有限，于是我们经常需要后端合作，但由于后端框架限制，我们很难使用[Comet】、【Big Pipe】等技术方案来优化性能。
  
  **注：在这期间(2005年以前) ， 包括早期的JSP、PHP可以称之为Web 1.0时代。在这里想说一句， 如果你是一名Java初学者， 请你不要再把一些陈旧的技术当回事了， 比如JSP， 因为时代在变、技术在变、什么都在变(引用扎克伯格的一句话：唯一不变的是变化本身)；当我们去给大学做实训时，有些同学会认为我们没有讲什么干货，其实不然，只能说是你认知里的干货对于市场来说早就过时了而已**

## 3.2、基于AJAX带来的SPA时代

时间回到2005年A OAX(Asynchronous JavaScript And XML， 异步JavaScript和XML，老技术新用法)被正式提出并开始使用CDN作为静态资源存储， 于是出现了JavaScript王者归来(在这之前JS都是用来在网页上贴狗皮膏药广告的) 的SPA(Single Page Application) 单页面应用时代。

![8c4d810c04015321587b75c8df0b3a8c](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301324256.png)

**优点**

这种模式下， **前后端的分工非常清晰， 前后端的关键协作点是AJAX接口。**看起来是如此美妙， 但回过头来看看的话， 这与JSP时代区别不大。复杂度从服务端的JSP里移到了浏览器的JavaScript，浏览器端变得很复杂。类似Spring MVC， **这个时代开始出现浏览器端的分层架构：**
![efbadc70182d0cdd55bd4d9190dc922a.png](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301324221.png)
缺点

- 前后端接口的约定：如果后端的接口一塌糊涂，如果后端的业务模型不够稳定，那么前端开发会很痛苦；不少团队也有类似尝试，通过接口规则、接口平台等方式来做。有了和后端一起沉淀的接口规则，还可以用来模拟数据，使得前后端可以在约定接口后实现高效并行开发。
- 前端开发的复杂度控制：SPA应用大多以功能交互型为主，JavaScript代码过十万行很正常。大量JS代码的组织，与View层的绑定等，都不是容易的事情。

## 3.3、前端为主的MV*时代

此处的MV*模式如下：

- MVC(同步通信为主) ：Model、View、Controller
- MVP(异步通信为主) ：Model、View、Presenter
- MVVM(异步通信为主)：Model、View、View Model为了降低前端开发复杂度，涌现了大量的前端框架，比如：Angular JS、React、Vue.js、Ember JS等， 这些框架总的原则是先按类型分层， 比如Templates、Controllers、Models， 然后再在层内做切分，如下图：

![a8f5b31e56947212e43f5f263820f6d6.png](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301324782.png)

**优点**

- **前后端职责很清晰**：前端工作在浏览器端，后端工作在服务端。清晰的分工，可以让开发并行，测试数据的模拟不难， 前端可以本地开发。后端则可以专注于业务逻辑的处理， 输出RESTful等接口。
- **前端开发的复杂度可控**：前端代码很重，但合理的分层，让前端代码能各司其职。这一块蛮有意思的，简单如模板特性的选择，就有很多很多讲究。并非越强大越好，限制什么，留下哪些自由，代码应该如何组织，所有这一切设计，得花一本书的厚度去说明。
- **部署相对独立**：可以快速改进产品体验缺点
- 代码不能复用。比如后端依旧需要对数据做各种校验，校验逻辑无法复用浏览器端的代码。如果可以复用，那么后端的数据校验可以相对简单化。
- 全异步， 对SEO不利。往往还需要服务端做同步渲染的降级方案。
- 性能并非最佳，特别是移动互联网环境下。
- SPA不能满足所有需求， 依旧存在大量多页面应用。URL Design需要后端配合， 前端无法完全掌控。

<br/>

## 3.4、Node JS带来的全栈时代

前端为主的MV*模式解决了很多很多问题， 但如上所述， 依旧存在不少不足之处。随着Node JS的兴起， JavaScript开始有能力运行在服务端。这意味着可以有一种新的研发模式：

![2cc10d1766d761ef22b42a0a429ac244.png](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301325456.png)

在这种研发模式下，前后端的职责很清晰。对前端来说，两个UI层各司其职：

- Front-end Ul layer处理浏览器层的展现逻辑。通过CSS渲染样式， 通过JavaScript添加交互功能， HTML的生成也可以放在这层， 具体看应用场景。
- Back-end Ul layer处理路由、模板、数据获取、Cookie等。通过路由， 前端终于可以自主把控URL Design， 这样无论是单页面应用还是多页面应用， 前端都可以自由调控。后端也终于可以摆脱对展现的强关注，转而可以专心于业务逻辑层的开发。
通过Node， WebServer层也是JavaScript代码， 这意味着部分代码可前后复用， 需要SEO的场景可以在服务端同步渲染，由于异步请求太多导致的性能问题也可以通过服务端来缓解。前一种模式的不足，通过这种模式几乎都能完美解决掉。
与JSP模式相比， 全栈模式看起来是一种回归， 也的确是一种向原始开发模式的回归， 不过是一种螺旋上升式的回归。
基于Node JS的全栈模式， 依旧面临很多挑战：
- 需要前端对服务端编程有更进一步的认识。比如TCP/IP等网络知识的掌握。
- Node JS层与Java层的高效通信。Node JS模式下， 都在服务器端， RESTful HTTP通信未必高效， 通过SOAP等方式通信更高效。一切需要在验证中前行。
- 对部著、运维层面的熟练了解，需要更多知识点和实操经验。
- 大量历史遗留问题如何过渡。这可能是最大最大的阻力。

**注：看到这里，相信很多同学就可以理解，为什么我总在课堂上说：“前端想学后台很难，而我们后端程序员学任何东西都很简单”；就是因为我们后端程序员具备相对完善的知识体系。**

## 3.5、总结

综上所述，模式也好，技术也罢，没有好坏优劣之分，只有适合不适合；前后分离的开发思想主要是基于Soc(关注度分离原则)，上面种种模式，都是让前后端的职责更清晰，分工更合理高效。

# 四、webpack 的基本使用

## 4.1、什么是 webpack

概念：webpack 是前端项目工程化的具体解决方案。

主要功能：它提供了友好的前端模块化开发支持，以及代码压缩混淆、处理浏览器端 JavaScript 的兼容性、性能优化等强大的功能。

好处：让程序员把工作的重心放到具体功能的实现上，提高了前端开发效率和项目的可维护性。

注意：目前 Vue，React 等前端项目，基本上都是基于 webpack 进行工程化开发的。

## 4.2、**创建列表隔行变色项目**

步骤：

① 新建项目空白目录，并运行 npm init –y 命令，初始化包管理配置文件 package.json

② 新建 src 源代码目录

③ 新建 src -> index.html 首页和 src -> index.js 脚本文件

④ 初始化首页基本的结构

⑤ 运行 npm install jquery –S 命令，安装 jQuery

⑥ 通过 ES6 模块化的方式导入 jQuery，实现列表隔行变色效果

```javascript
//使用 ES6 导入语法 导入jQuery
import $ from 'jquery'
```

此时引入 jQuery 并不能实现隔行变色 ,是因为 ES6 语法在浏览器中的兼容性问题，此时需要用 webpack 来解决该问题

## 4.3、在项目中安装 webpack

在终端运行如下的命令，安装 webpack 相关的两个包：

npm install webpack@5.42.1 webpack-cli@4.7.2 -D 

- 在开发、上线、部署时需要用到的包，在命令行用 -S(--save) 存到 package.json 中的 dependencies 中使用

  例：npm i jquery -S

  ![image-20220403123330033](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301325422.png)

- 仅开发需要用到的包，在命令行用 -D(--save -dev) 存到 package.json 中的 devDependencies 中使用

  例：npm i webpack@5.42.1 webpack-cli@4.7.2 -D

  ![image-20220403123458534](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301405184.png)

## 4.4、在项目中配置 webpack

配置步骤：

① 在项目根目录中，创建名为 webpack.config.js 的 webpack 配置文件，并初始化如下的基本配置

```javascript
//使用 Node.js 中的导出语法，向外导出一个 webpack 的配置对象
//webpack 运行前会读取此配置项，配置后的插件都需要挂载到此配置项才能使用
module.exports = {
    //mode 用来指定构建模式，可选值有 development 和 production
    mode : 'development'
}
```

② 在 package.json 的 scripts 节点下，新增 dev 脚本如下：

```json
  "scripts": {
    "dev": "webpack" //script 节点下的脚本，可以通过 npm run 执行，例如 npm run dev 
  }
```

③ 在终端中运行 npm run dev 命令，启动 webpack 进行项目的打包构建

![image-20220408165518297](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301325055.png)

此时在目录中生成了一个 dist 文件夹并生成了一个 main.js 的文件，main.js 文件 是根据 index.js 文件自动生成的，在 html 中导入新生成的 main.js 文件，就可以解决兼容性的问题

## 4.5、mode 的可选值

mode 节点的可选值有两个，分别是：

- development
  -  开发环境
  -  不会对打包生成的文件进行代码压缩和性能优化
  -  打包速度快，适合在开发阶段使用

- production
  -  生产环境
  -  会对打包生成的文件进行代码压缩和性能优化
  -  打包速度很慢，仅适合在项目发布阶段使用

## 4.6、webpack.config.js 文件的作用

webpack.config.js **是 webpack（在package.json 中声明的脚本） 的配置文件**。webpack 在真正开始打包构建之前，会先读取这个配置文件，从而基于给定的配置，对项目进行打包。

注意：由于 webpack 是**基于 node.js 开发出来的**打包工具，因此在它的配置文件中，支持使用 node.js 相关的语法和模块进行 webpack 的个性化配置

## 4.7、**自定义打包的入口与出口**

在 webpack.config.js 配置文件中，通过 entry 节点指定打包的入口。通过 output 节点指定打包的出口。示例代码如下：

```javascript
//导入 node.js 中专门操作路径的模块
const path = require('path');

//使用 Node.js 中的导出语法，向外导出一个 webpack 的配置对象
module.exports = {
    //entry: '指定要处理哪个文件'
    entry: path.join(__dirname,'./src/index.js'), //打包入口文件的路径
    //output: '指定生成的文件要存放到哪里'
    output: {
        //存放到的目录
        path:path.join(__dirname,'./dist'), //输出文件的存放路径
        //生成的文件名
        filename:'bundle.js' //输出文件的名称
    }
}
```

## 4.8、webpack 中的插件

**webpack 插件的作用**

通过安装和配置第三方的插件，可以拓展 webpack 的能力，从而让 webpack 用起来更方便。最常用的

webpack 插件有如下两个：

① webpack-dev-server（每次修改 index.js 文件都需要重新 npm run dev，因此引申此插件）

- 类似于 node.js 阶段用到的 nodemon 工具

- 每当修改了源代码，webpack 会自动进行项目的打包和构建

② html-webpack-plugin

- webpack 中的 HTML 插件（类似于一个模板引擎插件）
- 可以通过此插件自定制 index.html 页面的内容

### 4.8.1、webpack-dev-server

webpack-dev-server 可以让 webpack **监听项目源代码的变化**，从而进行自动打包构建。

- **安装 webpack-dev-server**

  运行如下的命令，即可在项目中安装此插件：

  npm install webpack-dev-server@3.11.2 -D

- **配置 webpack-dev-server**

  ① 修改 package.json -> scripts 中的 dev 命令如下：

  ```json
  "dev": "webpack serve"
  ```

  ② 再次运行 npm run dev 命令，重新进行项目的打包

  ③ 在浏览器中访问 http://localhost:8080 地址，查看自动打包效果

  ![image-20220403170352958](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301325246.png)

注意：webpack-dev-server 会启动一个实时打包的 http 服务器

![image-20220403170154932](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301326149.png)

### 4.8.2、打包生成的文件哪儿去了？

① **不配置** webpack-dev-server 的情况下，webpack 打包生成的文件，会存放到实际的物理磁盘上

- 严格遵守开发者在 webpack.config.js 中指定配置
- 根据 output 节点指定路径进行存放

![image-20220403170315245](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301326460.png)

② **配置**了 webpack-dev-server 之后，打包生成的文件存放到了内存中

- 不再根据 output 节点指定的路径，存放到实际的物理磁盘上
- 提高了实时打包输出的性能，因为内存比物理磁盘速度快很多

### 4.8.3、**生成到内存中的文件该如何访问？**

webpack-dev-server 生成到内存中的文件，默认放到了项目的根目录中，而且是虚拟的、不可见的。 

- 可以直接用 / 表示项目根目录，后面跟上要访问的文件名称，即可访问内存中的文件

  ![image-20220403170352958](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301326549.png)

- 例如 /bundle.js 就表示要访问 webpack-dev-server 生成到内存中的 bundle.js 文件

  `webpack output is served from /` 表示生成的 bundle.js 在根目录

  ![image-20220408173034797](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301326593.png)

  根目录中没有 bundle.js 文件，此时的 bundle.js 文件在内存中

  ![image-20220403170352958](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301326613.png)

  可以访问内存中的 bundle.js 文件

  ![image-20220403170420324](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301326277.png)

  修改代码保存后会被 webpack-dev-server 插件监听到，此时插件会重新自动的打包在内存中生成新的 bundle.js 文件，生成新的文件后会自动刷新浏览器，节省重启服务器的时间

  此时，index.html 要实现隔行变色需要引入的是内存的 bundle.js 文件 即（/bundle.js）

### 4.8.4、 html-webpack-plugin

html-webpack-plugin 是 webpack 中的 HTML 插件，可以通过此插件自定制 index.html 页面的内容。

需求：通过 html-webpack-plugin 插件，将 src 目录下的 index.html 首页，复制到项目根目录中一份！（默认访问 http://localhost:8080 地址时自动跳转到 index.html）

![image-20220408172227874](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301327751.png)

- **安装 html-webpack-plugin**

  运行如下的命令，即可在项目中安装此插件：

  npm install html-webpack-plugin@5.3.2 -D

- **配置 html-webpack-plugin**

  ```javascript
  //导入 node.js 中专门操作路径的模块
  const path = require('path');
  
  
  //导入 HTML 插件。得到一个构造函数
  const HtmlPlugin = require('html-webpack-plugin')
  
  //创建 Html 插件的实例对象
  const htmlPlugin = new HtmlPlugin({
      template: './src/index.html', //指定原文件的存放路径
      filename: './index.html' //指定生成的文件的存放路径
  })
  
  module.exports = {
      //mode 用来指定构建模式，可选值有 development 和 production
      mode : 'development',
      entry: path.join(__dirname,'./src/index.js'), //打包入口文件的路径
      output: {
          path:path.join(__dirname,'./dist'), //输出文件的存放路径
          filename:'bundle.js' //输出文件的名称
      },
      
      Plugins: [htmlPlugin], //通过 Plugins 节点，使 htmlPlugin 插件生效
  }
  ```

### 4.8.5、 解惑html-webpack-plugin

① 通过 HTML 插件复制到项目根目录中的 index.html 页面，也被放到了内存中（访问根目录可直接访问到 index.html）

![image-20220403175640386](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301327078.png)

② HTML 插件在生成的 index.html 页面，自动注入了打包的 bundle.js 文件

![image-20220403180659553](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301327854.png)

### 4.8.6、devServer 节点

在 webpack.config.js 配置文件中，可以通过 devServer 节点对 webpack-dev-server 插件进行更多的配置，示例代码如下：

```javascript
    devServer:{
        open: true, //初次打包完成后。自动打开浏览器
        host: '127.0.0.1', //实时打包所使用的主机地址
        port: 8099 //实时打包所使用的端口号
    }
```

注意：凡是修改了 webpack.config.js 配置文件，或修改了 package.json 配置文件，必须重启实时打包的服务器，否则最新的配置文件无法生效！

## 4.9、webpack 中的 loader

### 4.9.1、loader 概述

在实际开发过程中，webpack 默认只能打包处理以 .js 后缀名结尾的模块。其他非 .js 后缀名结尾的模块，webpack 默认处理不了，需要调用 loader 加载器才可以正常打包，否则会报错！

loader 加载器的作用：协助 webpack 打包处理特定的文件模块。比如：

- css-loader 可以打包处理 .css 相关的文件

  没有 loader 处理 css 文件时，导入 css 文件会报错：

  ![image-20220408193948542](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301327029.png)

- less-loader 可以打包处理 .less 相关的文件

- babel-loader 可以打包处理 webpack 无法处理的高级 JS 语法

### 4.9.2、loader 的调用过程

![image-20220408192438293](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301327782.png)

### 4.9.3、打包处理 css 文件

- 安装：

  运行 npm i style-loader@3.0.0 css-loader@5.2.6 -D 命令，安装处理 css 文件的 loader

- 配置：

  在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：

  ```javascript
  module:{    //所有第三方文件模块的匹配规则
     rules:[ //文件后缀名的匹配规则
        {
           test:/\.css/,
           use:['style-loader','css-loader']
        }
          ]
      }
  ```

  其中，test 表示匹配的文件类型， use 表示对应要调用的 loader

  注意：

  1. use 数组中指定的 loader **顺序是固定的**

  2. 多个 loader 的调用顺序是：**从后往前调用**

**loader 调用的过程**

![01.loader调用的过程](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301327790.png)

### 4.9.4、打包处理 less 文件

- 安装：

  运行 npm i less-loader@10.0.1 less@4.1.1 -D 命令

- 配置：

  在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：

  ```javascript
      },
      module:{    //所有第三方文件模块的匹配规则
          rules:[ //文件后缀名的匹配规则
          //定义不同模块对应的 loader
              {
                  test: /\.css/,
                  use: ['style-loader','css-loader']
              },
          //处理 less 文件的 loader
              {
                  test:/\.less/,
                  use: ['style-loader','css-loader','less-loader']
              }
          ]
      }
  ```

### 4.9.5、打包处理样式表中与 url 路径相关的文件

- 安装：

  运行 npm i url-loader@4.1.1 file-loader@6.2.0 -D 命令

- 配置：

  ```javascript
    module:{    //所有第三方文件模块的匹配规则
          rules:[ //文件后缀名的匹配规则
          //定义不同模块对应的 loader
              {
                  test: /\.css/,
                  use: ['style-loader','css-loader']
              },
          //处理 less 文件的 loader
              {
                  test:/\.less/,
                  use: ['style-loader','css-loader','less-loader']
              },
          //文件后缀名的匹配规则
              {
                  test: /\.jpg|png|gif$/,
                  use: ['url-loader?limit=22229']
              }
          ]
      }
  ```

  其中 ? 之后的是 loader 的参数项

  1. limit 用来指定图片的大小，单位是字节（byte）

  2. 只有 <= limit 大小的图片，才会被转为 base64 格式的图片，否则 src 中是路径地址

     

  使用：

  ```javascript
  // 导入.jpg图片模块，得到图片文件
  import logo from './images/logo.jpg'
  // 给 img 标签的 src 动态赋值
  $('.box').attr('src',logo)
  //logo 是 base64的字符串
  console.log(logo)
  ```

  ![image-20220409103819140](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301327573.png)

  补充：base64 的图片优缺点

  ```html
  <img src = "logo.jpg">
  ```

  浏览器首先会请求下载 html 文件中的标签，此时并不会获取到 logo.jpg 的图片，要获取展示图片需要再发一次请求，拿到图片之后才能把图片渲染到 src 的位置。

  ```html
  <img
  src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAASABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBQIG/8QAJhAAAgICAgEBCQAAAAAAAAAAAQIAAwQRBSExBhITFCIjMkFRYf/EABgBAAIDAAAAAAAAAAAAAAAAAAQFAQID/8QAHREAAgMAAgMAAAAAAAAAAAAAAAECAxEEMRIyM//aAAwDAQACEQMRAD8ArcZwXtoMhGpINnulF7eW0D11/ZfxbGsutw8mlPl3sEb0QdESDE5tMTjhRS1RuFxsDsFYKNAdb/PUp05DPmF1tJZlYsQ3kkiAybeN9jiEUtSzCPkPT9nxROGv0mG9E/af1E6yeXai41h3Ygd6Y9GJvGVudAs66PJ6zEoZluUqSDvyDNzMZlw2ZWIOvIMRIv8AdFuJ85Hn/MRELFx//9k="
      alt="">
  ```

  使用 base64 的图片的时候，浏览器请求下载标签后可以顺带请求下载图片，可以避免发出不必要的请求，但是把图片转成 base64 的字符串会增大体积，所以不建议把大图片转为 base64 的字符串，更适合小图片。

### 4.9.6、webpack 处理样式的过程

- 加载文件

  ```js
  import './css/index.css'
  import './css/index.less'
  ```

- 使用 from 加载并接收文件（如果某个模块中，使用 from 接收到的成员为 undefined, 则没必要接收，例如：import a from './css/index.css'）

  ```js
  //index1.js 是 webpack 处理的一个入口
  //使用 ES6 导入语法 导入jQuery
  import $ from 'jquery'
  
  // 导入图片，得到图片文件
  import logo from './images/logo.jpg'
  ```

- webpack 加载处理 index.js 文件，会生成 bundle.js 文件，bundle.js 文件中包含打包好的样式、路径等模块

  ![image-20220409111030385](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301327253.png)

  webpack 把一个样式表加载过来之后，会把样式转换为类似于 js 文件运行

### 4.9.7、打包处理 js 文件中的高级语法（学习高级语法时使用）

webpack 只能打包处理一部分高级的 JavaScript 语法。对于那些 webpack 无法处理的高级 js 语法，需要借助于 babel-loader 进行打包处理。例如 webpack 无法处理下面的 JavaScript 代码：

```js
// 定义装饰器函数
function info(target) {
  target.info = 'Person info.'
}

// 定义一个普通的类
@info
class Person {}

console.log(Person.info)

```

- 安装

  运行如下的命令安装对应的依赖包：

  npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D 

- 配置

  1. 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：

  ```js
    // 使用 babel-loader 处理高级的 JS 语法
    // 在配置 babel-loader 的时候，程序员只需要把自己的代码进行转换即可；一定要排除 node_modules 目录中的 JS 文件
    // 因为第三方包中的 JS 兼容性，不需要程序员关心
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
  ```

  2. 在项目根目录下，创建名为 babel.config.js 的配置文件，定义 Babel 的配置项如下：

  ```js
  module.exports = {
    // 声明 babel 可用的插件
    // 将来，webpack 在调用 babel-loader 的时候，会先加载 plugins 插件来使用
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
  }
  ```

- 详情请参考 Babel 的官网 https://babeljs.io/docs/en/babel-plugin-proposal-decorators

## 4.10、打包发布

### 4.10.1、为什么要打包发布

项目开发完成之后，需要使用 webpack 对项目进行打包发布，主要原因有以下两点：

① 开发环境下，打包生成的文件存放于内存中，无法获取到最终打包生成的文件

② 开发环境下，打包生成的文件不会进行代码压缩和性能优化

为了让项目能够在生产环境中高性能的运行，因此需要对项目进行打包发布。

### 4.10.2、配置 webpaack 的打包发布

在 package.json 文件的 scripts 节点下，新增 build 命令如下：

```json
  "scripts": {
    "dev": "webpack serve",//开发环境中，运行 dev 命令
    "build": "webpack --mode production"//项目发布时，运行 build 命令 
  },
```

--model 是一个参数项，用来指定 webpack 的运行模式。production 代表生产环境，会对打包生成的文件进行代码压缩和性能优化

注意：通过 --model 指定的参数项（优先级更高），会覆盖 webpack.config.js 中的 model 选项。

### 4.10.3、优化图片和 js 文件的存放路径

**把 JavaScript 文件统一生成到 js 目录中**

- 在 webpack.config.js 配置文件的 output 节点中，进行如下的配置：

  ```js
    // 指定生成的文件要存放到哪里
    output: {
      // 存放的目录
      path: path.join(__dirname, 'dist'),
      // 明确告诉 webpack 把生成的 bundle.js 文件存放到 dist 目录下的 js 子目录中
      filename: 'js/bundle.js'
    }
  ```

**把图片文件统一生成到 image 目录中**

- 修改 webpack.config.js 中的 url-loader 配置项，新增 outputPath 选项即可指定图片文件的输出路径：

  ```js
        // 处理图片文件的 loader
        // 如果需要调用的 loader 只有一个，则只传递一个字符串也行，如果有多个loader，则必须指定数组
        // 在配置 url-loader 的时候，多个参数之间，使用 & 符号进行分隔
        { test: /\.jpg|png|gif$/, use: 'url-loader?limit=470&outputPath=images' },
  ```

### 4.10.4、自动清理 dist 目录下的旧文件

为了在每次打包发布时自动清理掉 dist 目录中的旧文件，可以安装并配置 clean-webpack-plugin 插件：

- 安装

  npm install --save-dev clean-webpack-plugin

- 配置

  ```js
  // 注意：左侧的 { } 是解构赋值 大写开头命名多为构造函数
  //按需导入插件，得到插件的构造函数
  const { CleanWebpackPlugin } = require('clean-webpack-plugin')
  
   // 插件的数组，将来 webpack 在运行时，会加载并调用这些插件
  //将创建好的插件实例对象，挂载到 plugins 节点中
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
  ```

## 4.11、Source Map

### 4.11.1、生产环境遇到的问题

前端项目在投入生产环境之前，都需要对 JavaScript 源代码进行压缩混淆，从而减小文件的体积，提高文件的加载效率。此时就不可避免的产生了另一个问题：

**对压缩混淆之后的代码除错（debug）是一件极其困难的事情**

### 4.11.2、什么是Source Map

Source Map 就是一个信息文件，里面储存着位置信息。也就是说，Source Map 文件中存储着压缩混淆后的代码，所对应的转换前的位置。

有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码，能够极大的方便后期的调试。

### 4.11.3、**webpack** 开发环境（dev）下的 Source Map

在开发环境下，webpack 默认启用了Source Map 功能。当程序运行出错时，可以直接在控制台提示错误行的位置，并定位到具体的源代码：

![image-20220409144801655](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301328262.png)

![image-20220409144840046](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301328110.png)

- **默认 Source Map 的问题**

- 开发环境下默认生成的Source Map，记录的是生成后的代码的位置。**会导致运行时报错的行数与源代码的行数不一致的问题**。示意图如下：

  ![image-20220409145040678](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301328815.png)

  ![image-20220409145051408](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301328724.png)

- **解决默认Source Map的问题**

  开发环境下，推荐在webpack.config.js 中添加如下的配置，即可保证运行时报错的行数与源代码的行数保持一致：

  ```js
  module.exports = {
    // 在开发调试阶段，建议大家都把 devtool 的值设置为 eval-source-map
    // 此项生成的 Source Map 能够保证“运行时报错的行数”与“源代码的行数”保持一致
    devtool: 'eval-source-map',
    // mode 代表 webpack 运行的模式，可选值有两个 development 和 production
    // 结论：开发时候一定要用 development，因为追求的是打包的速度，而不是体积；
    // 反过来，发布上线的时候一定能要用 production，因为上线追求的是体积小，而不是打包速度快！
    mode: 'development',
    }
  ```

### 4.11.4、webpack生产环境下（Build）的Source Map

在生产环境下，如果省略了devtool 选项，则最终生成的文件中不包含Source Map。这能够防止原始代码通过Source Map 的形式暴露给别有所图之人。

![image-20220409145512105](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301328919.png)

![image-20220409145536359](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301328893.png)

- **只定位行数不暴露源码**

  在生产环境下，如果只想定位报错的具体行数，且不想暴露源码。此时可以将devtool的值设置为

  nosources-source-map。实际效果如图所示：

  ![image-20220409145859168](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301328588.png)

  ![image-20220409145918046](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301328437.png)

- **定位行数且暴露源码**

  在生产环境下，如果想在定位报错行数的同时，展示具体报错的源码。此时可以将devtool的值设置为source-map。实际效果如图所示：

  ![image-20220409145959971](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301328781.png)

  ![image-20220409150016268](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301328317.png)

  采用此选项后：你应该将你的服务器配置为，不允许普通用户访问source map 文件！

### 4.11.5、**Source Map** **的最佳实践**

①开发环境下：

- 建议把devtool 的值设置为eval-source-map
- 好处：可以精准定位到具体的错误行

②生产环境下：

- 建议关闭 Source Map 或将 devtool 的值设置为 nosources-source-map 
- 好处：防止源码泄露，提高网站的安全性

## 4.12、webpack 中 @ 的原理和好处

在 vue 中 @ 表示 src 源代码目录，从外往里找；不需要使用 ../ 从里往外查找

在 webpack 中配置 @：

```js
  resolve: {
    alias: {
      // 告诉 webpack，程序员写的代码中，@ 符号表示 src 这一层目录
      '@': path.join(__dirname, './src/')
    }
  }
```

## 4.13、总结

①能够掌握webpack 的基本使用

- 安装、webpack.config.js、修改打包入口

②了解常用的plugin 的基本使用

- webpack-dev-server、html-webpack-plugin 

③了解常用的loader 的基本使用

- loader 的作用、loader 的调用过程

④能够说出Source Map 的作用

- 精准定位到错误行并显示对应的源码
- 方便开发者调试源码中的错误

# 五、vue 的基本使用

## 5.1、什么是MVVM

MVVM（Model-View-ViewModel）是一种软件设计模式，由微软WPF（用于替代WinForm，以前就是用这个技术开发桌面应用程序的）和Silverlight（类似于Java Applet，简单点说就是在浏览器上运行WPF）的架构师Ken Cooper和Ted Peters开发，是一种简化用户界面的**事件驱动编程方式**。由John Gossman（同样也是WPF和Sliverlight的架构师）与2005年在他的博客上发表。

MVVM源自于经典的MVC（Model-View-Controller）模式。MVVM的核心是ViewModel层，负责转换Model中的数据对象来让数据变得更容易管理和使用。其作用如下：

- 该层向上与视图层进行双向数据绑定
- 向下与Model层通过接口请求进行数据交互

![ea7626bb43abc08096b6505b9997f46d](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301408926.png)

MVVM已经相当成熟了，主要运用但不仅仅在网络应用程序开发中。当下流行的MVVM框架有Vue.js，Anfular JS

## 5.2、为什么要使用MVVM

MVVM模式和MVC模式一样，主要目的是分离视图（View）和模型（Model），有几大好处

- **低耦合**：视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的View上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。
- **可复用**：你可以把一些视图逻辑放在一个ViewModel里面，让很多View重用这段视图逻辑。
- **独立开发**：开发人员可以专注于业务逻辑和数据的开发（ViewMode），设计人员可以专注于页面设计。
- **可测试**：界面素来是比较难以测试的，而现在测试可以针对ViewModel来写。

![bdb1476dfc362f7b51ac829fb03fc99d](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301409302.png)
**（1）View**

View是视图层， 也就是用户界面。前端主要由HTH L和csS来构建， 为了更方便地展现vi eu to del或者Hodel层的数据， 已经产生了各种各样的前后端模板语言， 比如FreeMarker，Thyme leaf等等， 各大MV VM框架如Vue.js.Angular JS， EJS等也都有自己用来构建用户界面的内置模板语言。

**（2）Model**

Model是指数据模型， 泛指后端进行的各种业务逻辑处理和数据操控， 主要围绕数据库系统展开。这里的难点主要在于需要和前端约定统一的接口规则

**（3）ViewModel**

ViewModel是由前端开发人员组织生成和维护的视图数据层。在这一层， 前端开发者对从后端获取的Model数据进行转换处理， 做二次封装， 以生成符合View层使用预期的视图数据模型。
  需要注意的是View Model所封装出来的数据模型包括视图的状态和行为两部分， 而Model层的数据模型是只包含状态的

- 比如页面的这一块展示什么，那一块展示什么这些都属于视图状态(展示)
- 页面加载进来时发生什么，点击这一块发生什么，这一块滚动时发生什么这些都属于视图行为(交互)

视图状态和行为都封装在了View Model里。这样的封装使得View Model可以完整地去描述View层。由于实现了双向绑定， View Model的内容会实时展现在View层， 这是激动人心的， 因为前端开发者再也不必低效又麻烦地通过操纵DOM去更新视图。
  MVVM框架已经把最脏最累的一块做好了， 我们开发者只需要处理和维护View Model， 更新数据视图就会自动得到相应更新，真正实现`事件驱动编程`。
  `View`层展现的不是`Model`层的数据， 而是`ViewModel`的数据， 由`ViewModel`负责与`Model`层交互， 这就**完全解耦了View层和Model层， 这个解耦是至关重要的， 它是前后端分离方案实施的重要一环。**

## 5.3、Vue

### 5.3.1、vue 的特性

vue 框架的特性，主要体现在如下两方面：

- ① 数据驱动视图 

- ② 双向数据绑定

### 5.3.2、数据驱动试图

在使用了 vue 的页面中，vue 会监听数据的变化，从而自动重新渲染页面的结构。示意图如下：

![image-20220416204311407](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301409095.png)

好处：当页面数据发生变化时，页面会自动重新渲染！ 

注意：数据驱动视图是单向的数据绑定。

### 5.3.3、双向数据绑定

在填写表单时，双向数据绑定可以辅助开发者在不操作 DOM 的前提下，自动把用户填写的内容同步到数据源 中。示意图如下：

![image-20220416204408806](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301410426.png)

好处：开发者不再需要手动操作 DOM 元素，来获取表单元素最新的值！

### 5.3.2、MVVM

MVVM 是 vue 实现数据驱动视图和双向数据绑定的核心原理。MVVM 指的是 Model、View 和 ViewModel， 它把每个 HTML 页面都拆分成了这三个部分，如图所示：

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301329469.png" alt="image-20220416204536327" style="zoom:50%;" />

在 MVVM 概念中：

Model 表示当前页面渲染时所依赖的数据源。 

View 表示当前页面所渲染的 DOM 结构。 

ViewModel 表示 vue 的实例，它是 MVVM 的核心。

### 5.3.3、MVVM 的工作原理

ViewModel 作为 MVVM 的核心，是它把当前页面的数据源（Model）和页面的结构（View）连接在了一起。

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301329415.png" alt="image-20220416204704499" style="zoom:67%;" />

当数据源发生变化时，会被 ViewModel 监听到，VM 会根据最新的数据源自动更新页面的结构 当表单元素的值发生变化时，也会被 VM 监听到，VM 会把变化过后最新的值自动同步到 Model 数据源中

### 5.3.4、为什么要使用Vue.js

- 轻量级， 体积小是一个重要指标。Vue.js压缩后有只有20多kb(Angular压缩后56kb+，React压缩后44kb+)
- 移动优先。更适合移动端， 比如移动端的Touch事件
- 易上手，学习曲线平稳，文档齐全
- 吸取了Angular(模块化) 和React(虚拟DOＭ) 的长处， 并拥有自己独特的功能，如：计算属性
- 开源，社区活跃度高

## 5.4、第一个Vue程序

【说明】IDEA可以安装Vue的插件!

  注意：Vue不支持IE 8及以下版本， 因为Vue使用了IE 8无法模拟的ECMAScript 5特

性。但它支持所有兼容ECMAScript 5的浏览器。

**（1）下载地址**

- 开发版本
  - 包含完整的警告和调试模式：https：//yuejs.org/js/vue.js
  - 删除了警告， 30.96KB min+gzip：https：//vuejs.org/js/vue.min.js
- CDN

```javascript
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
```

**（2）代码编写**

Vue.js的核心是实现了MVVM模式， 她扮演的角色就是View Model层， 那么所谓的第一

个应用程序就是展示她的数据绑定功能，操作流程如下：

### 5.4.1、创建一个HTML文件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
</body>
</html>
```

### **5.4.2、引入Vue.js**

```javascript
<!--1.导入Vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
```

### **5.4.3、创建一个Vue实例**

```javascript
<script type="text/javascript">
    var vm = new Vue({
        el:"#app",
        /*Model：数据*/
        data:{
            message:"hello,vue!"
        }
    });
</script>
```

说明：

- el: '#vue'：绑定元素的ID
- data:{message:'Hello Vue!'}：数据对象中有一个名为message的属性，并设置了初始值 Hello Vue！

### **5.4.4、将数据绑定到页面元素**

```html
<!--view层，模板-->
<div id="app">
    {{message}}
</div>
```

说明：只需要在绑定的元素中使用双花括号将Vue创建的名为message属性包裹起来， 即可实现数据绑定功能， 也就实现了View Model层所需的效果， 是不是和EL表达式非常像?

### 5.4.5、整体示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!--view层，模板-->
<div id="app">
    {{message}}
</div>
<!--1.导入Vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script type="text/javascript">
    var vm = new Vue({
        el:"#app",
        /*Model：数据*/
        data:{
            message:"hello,vue!"
        }
    });
</script>
</body>
</html>

```

为了能够更直观的体验Vue带来的数据绑定功能， 我们需要在浏览器测试一番， 操作流程如下：

  1、在浏览器上运行第一个Vue应用程序， 进入开发者工具
  2、在控制台输入vm.message=‘HelloWorld’， 然后回车， 你会发现浏览器中显示的内容会直接变成HelloWorld
  此时就可以在控制台直接输入vm.message来修改值， 中间是可以省略data的， 在这个操作中， 我并没有主动操作DOM， 就让页面的内容发生了变化， 这就是借助了Vue的数据绑定功能实现的； MV VM模式中要求View Model层就是使用观察者模式来实现数据的监听与绑定， 以做到数据与视图的快速响应。

# 五、基础语法指令

## 5.1、指令的概念

指令（Directives）是 vue 为开发者提供的模板语法，用于辅助开发者渲染页面的基本结构。

vue 中的指令按照不同的用途可以分为如下 6 大类：

① 内容渲染指令 

② 属性绑定指令 

③ 事件绑定指令 

④ 双向绑定指令 

⑤ 条件渲染指令 

⑥ 列表渲染指令 

注意：指令是 vue 开发中最基础、最常用、最简单的知识点。

## 5.2、v-cloak 指令用法

插值表达式存在的问题：“闪动”

如何解决问题：使用 v-cloak 指令

解决该问题的原理：先隐藏，替换好值之后再显示最终的值

1. 提供样式

```css
[v-cloak] {
  display: none;
}
```

2. 在插值表达式所在的标签中添加cloak指令

```html
<div v-cloak>
  {{ message }}
</div>
```

## 5.3、内容渲染指令

内容渲染指令用来辅助开发者渲染 DOM 元素的文本内容。常用的内容渲染指令有如下 3 个：

- v-text 填充纯文本
  
  - 相比插值表达式更加简洁
  - **详细：**
    
    更新元素的 textContent。如果要更新部分的 textContent，需要使用 {{ Mustache }} 插值。
  - **示例：**
    
    ```html
    <!-- 把 gender 对应的值，渲染到 span 标签中 -->
    <!-- 注意：在 p 标签中，默认的文本“性别”会被 gender 的值覆盖掉 -->
  <span v-text="gender">性别</span>
    ```
    
    **注意：v-text 指令会覆盖元素内默认的值**
  
- {{}} 语法
  
  - vue 提供的 {{ }} 语法，专门用来解决 v-text 会覆盖默认文本内容的问题。这种 {{ }} 语法的专业名称是插值表达 式（英文名为：Mustache）。
  
    ```html
    <!-- 使用{{ }} 插值表达式，将对应的值渲染到元素的内容节点中 -->
    <!-- 同时保留元素自身的默认值 -->
    <p>
        姓名：{{username}}
    </p>
    ```
  
  注意：相对于 v-text 指令来说，插值表达式在开发中更常用一些！因为它不会覆盖元素中默认的文本内容。
  
- v-html 填充 HTML 片段
  
  - v-text 指令和插值表达式只能渲染纯文本内容。如果要把包含 HTML 标签的字符串渲染为页面的 HTML 元素， 则需要用到 v-html 这个指令
  
  - 存在安全问题（在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。只在可信内容上使用 v-html，永不用在用户提交的内容上。）
  
  - 本网站内部数据可以使用，来自第三方的数据不可以使用
  
  - **详细：**
    
  
  更新元素的 innerHTML。注意：**内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译**。如果试图使用 v-html 组合模板，可以重新考虑是否通过使用组件来替代。
  
  - **示例：**
    
    ```html
    <div v-html="html"></div>
    ```
  
- v-pre 填充原始信息
  - 显示原始信息，跳过大量没有指令的节点会加快编译。（分析编译过程）
  - **示例：**
    ```html
    <span v-pre>{{ this will not be compiled }}</span>
    ```

## 5.4、数据响应式

- 如何理解响应式
  - h5 中的响应式（屏幕尺寸的变化导致样式的变化）
  - 数据的响应式（数据的变化导致页面内容的变化）

- 什么是数据绑定
  
- 数据绑定：将数据填充到标签中
  
- v-once 只编译一次（组件 - 对低开销的静态组件使用 v-once）
  - 显示内容之后不再具有响应式功能
  - **详细：**
    
    只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。
    ```html
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="utf-8">
    		<title>v-once</title>
    		<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    	</head>
    	<body>
    		<div id="app">
    			<div>{{msg}}</div>
    			<div v-once>{{info}}</div>
    		</div>
    		<script type="text/javascript">
    		/*
    			v-once 的应用场景：如果显示的信息后续不需要再修改，
    			就可以使用 v-once 提高性能
    		*/
    			var vm = new Vue({
    				el : '#app',
    				data : {
    					msg:'Hello Vue',
    					info:'nihao'
    				},
    			})
    		</script>
    	</body>
    </html>
    
    ```
  - **测试结果：**
    
    ![截图](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301329316.png)
    



## 5.5、属性绑定指令 v-bind

如果需要为元素的属性动态绑定属性值，则需要用到 v-bind 属性绑定指令。用法示例如下

```html
<!DOCTYPE html>
<html lang="en" xmlns:v-bind="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!--view层，模板-->
<div id="app">
    <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
</div>
<!--1.导入Vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script type="text/javascript">
    var vm = new Vue({
        el:"#app",
        /*Model：数据*/
        data:{
            message: '页面加载于 ' + new Date().toLocaleString()
        }
    });
</script>
</body>
</html>

```

由于 v-bind 指令在开发中使用频率非常高，因此，vue 官方为其提供了简写形式（简写为英文的 : ）

在 vue 提供的模板渲染语法中，除了支持绑定简单的数据值之外，还支持 Javascript 表达式的运算，例如：

```html
    {{number + 1 }}
    {{ok ?'Yes' :'No'}}
    {{message.split('').reverse().join('')}}
    <div :id="'list-'+id"></div>
```

### 5.5.1、样式绑定

- **class 样式绑定**
  - class样式对象绑定
    ```html
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="utf-8" />
    		<title>对象样式处理</title>
    		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    		<style type="text/css">
    			.active{
    				width : 100px;
    				height: 100px;
    				border: 1px solid lightpink;
    			}
    			.error{
    				background: #ADD8E6;
    			}
    		</style>
    	</head>
    	<body>
    		<div id="app">
    			<div v-bind:class="{ active : isActive, error : isError}">对象样式处理</div>
    			<button v-on:click="handle">切换</button>
    		</div>
    		<script>
    			var obj = new Vue({
    				el:"#app",
    				data:{
    					isActive : true,
    					isError : true
    				},
    				methods:{
    					handle : function(){
    						//控制 isActive 的值在 true 和 false 之间进行切换
    						this.isActive = !this.isActive;
    						this.isError = !this.isError;
    					}
    				}
    			})
    		</script>
    	</body>
    </html>
    
    ```
  - 测试结果：
    
    <img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301330535.png" alt="83aac3a3961e3be60bf2b3e9fba3169a" style="zoom:50%;" />
    
    ![截图](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301329069.png)
  - class样式数组绑定
    ```html
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="utf-8" />
    		<title>数组样式处理</title>
    		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    		<style type="text/css">
    			.active{
    				width : 100px;
    				height: 100px;
    				border: 1px solid lightpink;
    			}
    			.error{
    				background: #ADD8E6;
    			}
    		</style>
    	</head>
    	<body>
    		<div id="app">
    			<div v-bind:class="[ activeClass,errorClass ]">对象样式处理</div>
    			<button v-on:click="handle">切换</button>
    		</div>
    		<script>
    			var obj = new Vue({
    				el:"#app",
    				data:{
    					activeClass : 'active',
    					errorClass : 'error'
    				},
    				methods:{
    					handle : function(){
    						this.activeClass = '';
    						this.errorClass = '';
    					}
    				}
    			})
    		</script>
    	</body>
    </html>
    
    ```
  - 测试结果
    
    <img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301330968.png" alt="83aac3a3961e3be60bf2b3e9fba3169a.png" style="zoom:50%;" />
    
    ![f4cb9b91b6f2aefd2f13af60786670e5](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301331460.png)
  - class样式对象绑定和数组绑定结合使用及简化操作
    ```html
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="utf-8" />
    		<title>对象数组处理</title>
    		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    		<style type="text/css">
    			.active{
    				width : 100px;
    				height: 100px;
    				border: 1px solid lightpink;
    			}
    			.error{
    				background: #ADD8E6;
    			}
    			.test{
    				font-weight: bold;
    			}
    			.base{
    				font-style: italic;
    			}
    		</style>
    	</head>
    	<body>
    		<div id="app">
    			<!--  -->
    			<div v-bind:class="[ activeClass,errorClass,{test : isTest} ]">测试样式</div>
    			<!--class绑定的值简化操作  从data中取数组和对象中的值-->
    			<div v-bind:class="arrClasses"></div>
    			<div v-bind:class="objClasses"></div>
    			<!--默认的class样式会保留  -->
    			<div class="base" v-bind:class="objClasses">测试样式</div>
    			<button v-on:click="handle">切换</button>
    		</div>
    		<script>
    			var obj = new Vue({
    				el:"#app",
    				data:{
    					activeClass : 'active',
    					errorClass : 'error',
    					isTest : true,
    					arrClasses : ['active','error'],
    					objClasses : {
    						active : true,
    						error : true
    					}
    				},
    				methods:{
    					handle : function(){
    						this.arrClasses[1] = '';
    						this.objClasses.error = !this.objClasses.error;
    					}
    				}
    			})
    		</script>
    	</body>
    </html>
    
    ```
  - **测试结果**
    
    <img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301331283.png" alt="截图" style="zoom:50%;" />
    
    <img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301331961.png" alt="截图" style="zoom:50%;" />

- **style 样式处理**
  - 内联样式 style：
  ```html
  <!DOCTYPE html>
  <html>
  	<head>
  		<meta charset="utf-8">
  		<title>内联样式style</title>
  		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  	</head>
  	<body>
  		<div id="app">
  		<!-- 对象语法 -->
  		<div v-bind:style="{color:activeColor,fontSize:fontSize}">你，你好</div>
  		<div v-bind:style="objStyle">你，你好</div>
  		<!-- overridingStyles会覆盖objStyle样式 -->
  		<!-- 数组语法 -->
  		<div v-bind:style="[objStyle,overridingStyles]">你说很高兴我能遇见你</div>
  		<button v-on:click="handle">切换</button>
  		</div>
  		<script>
  		var vm = new Vue({
  			el : '#app',
  			data : {
  				activeColor : 'red',
  				fontSize : '13px',
  				objStyle : {
  					background : 'orange',
  					border : '1px solid blue',
  					width : '50px',
  					height : '100px'
  				},
  				overridingStyles : {
  					background : '#ccc',
  					border : '1px solid blue',
  					width : '100px',
  					height : '50px'
  				}
  			},
  			methods:{
  				handle : function(){
  					this.objStyle.width = '100px'
  					this.overridingStyles.height = '100px'
  				}
  			}
  		})
  		</script>
  	</body>
  </html>
  
  ```
  - 测试结果
    
    <img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301331657.png" alt="截图" style="zoom:50%;" />
    
    <img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301331441.png" alt="截图" style="zoom:50%;" />
  - 

## 5.2、条件渲染指令 分支结构

### 5.2.1、v-if、v-show 的使用

条件渲染指令用来辅助开发者按需控制 DOM 的显示与隐藏。条件渲染指令有如下两个，分别是：

- v-if

- v-show

```html
<div id="app">
    <p v-if = "networkState === 200">请求成功 --- 被 v-if 控制</p>
    <p v-show = "networkState === 200">请求成功 --- 被 v-show 控制</p>   
</div>
```

v-if 和 v-show 的区别：

实现原理不同： 

- v-if 指令会动态地创建或移除 DOM 元素，从而控制元素在页面上的显示与隐藏； 

- v-show 指令会动态为元素添加或移除 style="display: none;" 样式，从而控制元素的显示与隐藏； 

性能消耗不同： 

- v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此： 

- 如果需要非常频繁地切换，则使用 v-show 较好 

- 如果在运行时条件很少改变，则使用 v-if 较好

### 5.2.2、v-if、v-else、v-else-if 的使用

v-if 可以单独使用，或配合 v-else 指令一起使用：

```html
<!DOCTYPE html>
<html lang="en" xmlns:v-bind="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!--view层，模板-->
<div id="app">
    <h1 v-if="type==='A'">A</h1>
    <h1 v-else-if="type==='B'">B</h1>
    <h1 v-else-if="type==='D'">D</h1>
    <h1 v-else>C</h1>
</div>
<!--1.导入Vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script type="text/javascript">
    var vm = new Vue({
        el:"#app",
        /*Model：数据*/
        data:{
            type: 'A'
        }
    });
</script>
</body>
</html>

```

注意：v-else、v-else-if 指令必须配合 v-if 指令一起使用，否则它将不会被识别！

## 5.3、列表渲染 循环结构

vue 提供了 v-for 列表渲染指令，用来辅助开发者基于一个数组来循环渲染一个列表结构。v-for 指令需要使 用 item in items 形式的特殊语法，其中：

- items 是待循环的数组

-  item 是被循环的每一项

```html
data:{
    list:[
    { id: 1, name: 'zs'},
    { id: 1, name: 'ls'},
    ]
}

<ul>
    <li v-for="item in list">姓名是：{{item.name}}</li>
</ul>
```

### 5.3.1、v-for 中的索引

v-for 指令还支持一个可选的第二个参数，即当前项的索引。语法格式为 (item, index) in items，示例代码如下：

```html
data:{
    list:[
    { id: 1, name: 'zs'},
    { id: 1, name: 'ls'},
    ]
}

<ul>
    <li v-for="(item,index) in list">索引是：{{index}},姓名是：{{item.name}</li>
</ul>
```

注意：v-for 指令中的 item 项和 index 索引都是形参，可以根据需要进行重命名。例如 (user, i) in userlist

### 5.3.2、使用 key 维护列表的状态

当列表的数据变化时，默认情况下，vue 会尽可能的复用已存在的 DOM 元素，从而提升渲染的性能。但这种 默认的性能优化策略，会导致有状态的列表无法被正确更新。 

为了给 vue 一个提示，以便它能跟踪每个节点的身份，从而在保证有状态的列表被正确更新的前提下，提升渲 染的性能。此时，需要为每项提供一个唯一的 key 属性

```html
data:{
    list:[
    { id: 1, name: 'zs'},
    { id: 1, name: 'ls'},
    ]
}

<ul>
    <li v-for="user in userlist" :key="user.id">
    	<input type="checkbox"/>
        姓名：{{user.name}}
    </li>
</ul>
```

![image-20220415182343881](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301331165.png)添加一个新的数据项，勾选的是 索引为 0 ，id = 3 的数据项（复选框勾选的数据项发生了改变）

![image-20220415182555710](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301331650.png)

总结：index（索引）不具有唯一性，id 具有唯一性

**key 的注意事项：**

1. key 的值只能是字符串或数字类型

2. key 的值必须具有唯一性（即：key的值不能重复）

3. 建议把数据项 id 属性的值作为 key 的值（因为 id 属性的值具有唯一性）

4. 使用 index 的值当作 key 的值没有任何意义（因为 index 的值不具有唯一性）

   此时勾选的是 索引为 0 ，id = 1 的数据项 (索引和每一项数据没有强烈的绑定关系，可能在下一次指向的是另一个数据项)


### 5.3.3、v-if 和 v-for

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301331588.png" alt="截图" style="zoom:50%;" />

- **作用：**
  
  v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 true值的时候被渲染
  
  v-for 指令基于一个数组来渲染一个列表。v-for 指令需要使用 item in items 形式的特殊语法，其中 items 是源数据数组或者对象，而 item 则是被迭代的数组元素的别名
  
  在 v-for 的时候，建议设置key值，并且保证每个key值是独一无二的，这便于diff算法进行优化
- **v-for 与 v-if 的优先级**
  
  v-for与v-if置于同一标签，v-for 优先级是比 v-if 高
  ```html
  <div id="app">
      <p v-if="isShow" v-for="item in items">
          {{ item.title }}
      </p>
  </div>
  ```
- **注意事项：**
  
  永远不要把 v-if 和 v-for 同时用在同一个元素上，带来性能方面的浪费（每次渲染都会先循环再进行条件判断）
  
  如果避免出现这种情况，则在外层嵌套template（页面渲染不生成dom节点），在这一层进行v-if判断，然后在内部进行v-for循环
  ```html
  <template v-if="isShow">
      <p v-for="item in items">
  </template>
  ```
- 如果条件出现在循环内部，可通过计算属性computed提前过滤掉那些不需要显示的项
  ```javascript
  computed: {
      items: function() {
        return this.list.filter(function (item) {
          return item.isShow
        })
      }
  }
  ```

## 5.4、事件绑定 v-on

- - `v-on` 监听事件
  
  - **用法：**
  
  - 事件有Vue的事件、和前端页面本身的一些事件!我们这里的click是vue的事件， 可以绑定到Vue中的methods中的方法事件!
  
  - **示例：**
    ```html
    <!DOCTYPE html>
    <html lang="en" xmlns:v-on="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
    <div id="app">
    
        <button v-on:click="sayHi">点我</button>
        <!--
            sayHi() 
        <button @click="sayHi()">点我</button>
        -->
    </div>
    <script src="../js/vue.js"></script>
    <script type="text/javascript">
        var vm = new Vue({
            el:"#app",
            data:{
                message:'Hello World'
            },
            methods:{
                sayHi:function(event){
                    //'this'在方法里面指向当前Vue实例
                    alert(this.message);
                }
            }
        });
    </script>
    </body>
    </html>
    ```

### 5.4.1、事件函数参数传递

- 如果事件直接绑定函数名称，那么默认会传递事件对象作为事件函数的第一个参数
- 如果事件绑定函数调用，那么事件对象必须作为最后一个参数显示传递，并且事件对象的名称必须是 $event

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>参数传递</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			<button @click = 'handle1'>点击1</button>
			<button @click = 'handle2(123,456,$event)'>点击2</button>
		</div>
		<script>
			var vm = new Vue({
				el : '#app',
				methods : {
                // 接受事件参数对象 event
					handle1 : function(e){
						console.log(e.target.tagName)
					},
                // 接收传递过来的参数值
                // 在形参处用 event 接受传递过来的原生事件参数对象 $event
					handle2 : function(p,p1,event){
						console.log(p,p1)
						console.log(event.target.innerHTML)
						event.stopPropagation()
					}
				}
			})
		</script>
	</body>
</html>

```

### 5.4.2、事件修饰符

在事件处理函数中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。因此， vue 提供了事件修饰符的概念，来辅助程序员更方便的对事件的触发进行控制。常用的 5 个事件修饰符如下：

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301332956.png" alt="image-20220418153837426" style="zoom:67%;" />

示例：

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>阻止冒泡、默认行为</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			{{num}}
			<div @click="handle0">
				<button @click.stop="handle1">点击1</button>
			</div>
			<a href="http://www.baidu.com" @click.prevent="handle2">baidu</a>
		</div>
		<script>
			var vm = new Vue({
				el:"#app",
				data:{
					num : 0
				},
				methods:{
					handle0:function(){
						this.num++;
					},
					handle1:function(event){
						//阻止冒泡
						// event.stopPropagation();
					},
					handle2:function(event){
						// event.preventDefault();
					}
				}
			})
		</script>
	</body>
</html>

```

### 5.4.3、按键修饰符

- .enter 回车键
  ```html
  <input v-on:keyup.enter = 'submit'>
  ```
- .delete 删除键
  ```html
  <input v-on:keyup.delete = 'handle'>
  ```

## 5.5、v-model 指令的修饰符

为了方便对用户输入的内容进行处理，vue 为 v-model 指令提供了 3 个修饰符，分别是：

![image-20220418154452719](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301412018.png)

### 5.5.1、数据双向绑定

Vue.js是一个MV VM框架， 即数据双向绑定， 即当数据发生变化的时候， 视图也就发生变化， 当视图发生变化的时候，数据也会跟着同步变化。这也算是Vue.js的精髓之处了。
  值得注意的是，我们所说的数据双向绑定，一定是对于UI控件来说的非UI控件不会涉及到数据双向绑定。单向数据绑定是使用状态管理工具的前提。如果我们使用vue x那么数据流也是单项的，这时就会和双向数据绑定有冲突。

### 5.5.2、为什么要实现数据的双向绑定

在Vue.js中，如果使用vuex， 实际上数据还是单向的， 之所以说是数据双向绑定，这是用的UI控件来说， 对于我们处理表单， Vue.js的双向数据绑定用起来就特别舒服了。即两者并不互斥，在全局性数据流使用单项，方便跟踪；局部性数据流使用双向，简单易操作。

### 5.5.3、v-model 底层原理

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>v-model</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			<!-- v-on绑定input标准事件，用来监听输入域中发生变化时执行函数或赋值的操作 -->
			<input type="text" v-bind:value="msg" v-on:input="handle">
			<input type="text" v-bind:value="msg" v-on:input="msg = $event.target.value">
			<input type="text" v-model="msg">
			<p>{{msg}}</p>
		</div>
		<script>
		var vm = new Vue({
			el : '#app',
			data : {
				msg : '' 
			},
			methods:{
				handle : function(event){
					//使用输入域中的最新的数据覆盖原来的数据
					this.msg = event.target.value
				}
			}
		})
		</script>
	</body>
</html>

```

测试结果：

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301332321.png" alt="截图" style="zoom:50%;" />

### 5.5.4、v-model的运用场景

你可以用 `v-model` 指令在表单、及元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇， 但 `v-model` 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。
  注意：`v-model` 会忽略所有表单元素的value、checked、selected特性的初始值而总是将Vue实例的数据作为数据来源。你应该通过JavaScript在组件的data选项中声明初始值!

**（1）input 单行文本**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="app">
    输入的文本：<input type="text" v-model="message" value="hello">{{message}}
</div>

<script src="../js/vue.js"></script>
<script type="text/javascript">
    var vm = new Vue({
        el:"#app",
        data:{
            message:""
        }
    });
</script>
</body>
</html>
```

**（2）textarea 多行文本：**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="app">
   多行文本：<textarea v-model="pan"></textarea>&nbsp;&nbsp;多行文本是：{{pan}}
</div>

<script src="../js/vue.js"></script>
<script type="text/javascript">
    var vm = new Vue({
        el:"#app",
        data:{
            message:"Hello hello!"
        }
    });
</script>
</body>
</html>
```

**（3）checkbox 单复选框**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="app">
    单复选框：
    <input type="checkbox" id="checkbox" v-model="checked">
    &nbsp;&nbsp;
    <label for="checkbox">{{checked}}</label>
</div>
<script src="../js/vue.js"></script>
<script type="text/javascript">
    var vm = new Vue({
        el:"#app",
        data:{
            checked:false
        }
    });
</script>
</body>
</html>

```

**（4）checkbox 多复选框**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<div id="app">
    多复选框：
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    &nbsp;&nbsp;
    <label for="jack">Jack</label>
    <input type="checkbox" id="join" value="Join" v-model="checkedNames">
    &nbsp;&nbsp;
    <label for="join">Jack</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    &nbsp;&nbsp;
    <label for="mike">Mike</label>
    <span>选中的值：{{checkedNames}}</span>
</div>

<script src="../js/vue.js"></script>
<script type="text/javascript">
    var vm = new Vue({
        el:"#app",
        data:{
            checkedNames:[]
        }
    });
</script>
</body>
</html>
```

```html
<!DOCTYPE html>
<html>

    <head>
        <meta charset="utf-8" />
        <title></title>
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    </head>

    <body>
        <div id="app">
            <label for="A">
                <input type="radio" value="A" id="A" v-model="msg"/>A
            </label>
            <input type="radio" value="B" v-model="msg" />B
            <input type="radio" value="C" v-model="msg" />C
            <input type="radio" value="D" v-model="msg" />D
            <p>{{msg}}</p>
            <label for="ok">
                <input type="checkbox" name="" id="ok" value="ok"  v-model="ok"/>同意协议
            </label>
            <h2>是否同意协议：{{ok?'同意':'不同意'}}</h2>
            <button :disabled="!ok">立即注册</button>
            <br />
            <input type="checkbox" v-model="hobby" value="篮球" />篮球
            <input type="checkbox" v-model="hobby" value="足球" />足球
            <input type="checkbox" v-model="hobby" value="排球" />排球
            <input type="checkbox" v-model="hobby" value="乒乓球" />乒乓球
            <p>{{hobby}}</p>
        </div>
        <script type="text/javascript">
            var vm = new Vue({
                el: '#app',
                data: {
                    msg: '',
                    ok: true,
                    hobby: []
                },
                methods: {
                    msgchange: function(event) {
                        this.msg = event.target.value;
                    }
                }
            })
        </script>
    </body>

</html>
```

**测试结果**

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301332682.png" alt="截图" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301332593.png" alt="截图" style="zoom:50%;" />

**（6）radio 单选按钮**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<div id="app">
    单选框按钮
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <span>选中的值：{{picked}}</span>
</div>

<script src="../js/vue.js"></script>
<script type="text/javascript">
    var vm = new Vue({
        el:"#app",
        data:{
            picked:'Two'
        }
    });
</script>
</body>
</html>
```

**（7）select 下拉框**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="app">
<!--    性别：
    <input type="radio" name="sex" value="男" v-model="pan">男
    <input type="radio" name="sex" value="女" v-model="pan">女
    <p>选中了：{{pan}}</p>-->

    下拉框:
    <select v-model="pan">
        <option value="" disabled>---请选择---</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
    </select>
    <span>value:{{pan}}</span>

</div>

<script src="../js/vue.js"></script>
<script type="text/javascript">
    var vm = new Vue({
        el:"#app",
        data:{
            pan:"A"
        }
    });
</script>
</body>
</html>
```

**（8）form 表单操作综合案例**

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>表单操作</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
		<style type="text/css">
			form div{
				height: 40px;
				line-height: 40px;
			}
			form div:nth-child(4){
				height: auto;
			}
			form div span:first-child{
				display: inline-block;
				width: 100px;
			}
		</style>
	</head>
	<body>
		<div id="app">
			<form action="" method="">
				<div>
					<span>姓名：</span>
					<span><input type="text" v-model="uname"></span>
				</div>
				<div>
					<span>性别：</span>
					<span>
						<input type="radio" id="male" value="1" v-model="gender">
						<label for="male">男</label>
						<input type="radio" id="female" value="2" v-model="gender">
						<label for="female">女</label>
					</span>
				</div>
				<div>
					<span>爱好：</span>
					<input type="checkbox" id="ball" v-model="hobby" value="1">
					<label for="ball">篮球</label>
					<input type="checkbox" id="rap" v-model="hobby" value="2"/>
					<label for="rap">唱rap</label>
					<input type="checkbox" id="dance" v-model="hobby" value="3"/>
					<label for="dance">跳舞</label>
				</div>
				<div>
					<span>职业：</span>
					<!-- multiple 属性为 true 时 支持多个选项选中 -->
					<select v-model="occupation" multiple="true">
						<option value="0">请选择职业...</option>
						<option value="1">教师</option>
						<option value="2">软件工程师</option>
						<option value="3">律师</option>
					</select>
				</div>
				<div>
					<span>个人简介：</span>
					<textarea v-model="desc"></textarea>
				</div>
				<div>
					<input type="submit" value="提交" @click.prevent="handle" />
				</div>
			</form>
		</div>
		<script>
			var vm = new Vue({
				el : '#app',
				data : {
					uname : 'Lily',
					gender : '1',
					hobby : ['1','2'],
					occupation: ['1','2'],
					desc : '你，你好，你说很高兴我能遇见你'
					
				},
				methods : {
					handle:function(){
						console.log(this.uname);
						console.log(this.gender);;
						//toString直接获取数据
						console.log(this.hobby.toString())
						console.log(this.occupation);
						console.log(this.desc);
					}
				}
			})
		</script>
	</body>
</html>

```

**测试结果：**

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301332438.png" alt="截图" style="zoom:50%;" />

注意：v-model表达式的初始值未能匹配任何选项，元系将被渲染为“未选中”状态。 在iOS中， 这会使用户无法选择第一个选项，因为这样的情况下，iOS不会触发change事件。因此，更推荐像上面这样提供一个值为空的禁用选项。

### 5.5.5 表单域修饰符

- .lazy

  - 在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。可以添加 lazy 修饰符，从而转为在 change 事件（失去焦点时触发）之后进行同步：

    ```html
    <!-- 在“change”时而非“input”时更新 -->
    <input v-model.lazy="msg">
    ```

- .number

  - 如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符：

    ```html
    <input v-model.number="age" type="number">
    ```

  - 这通常很有用，因为即使在 type="number" 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 parseFloat() 解析，则会返回原始的值。

- .trim

  - 如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：

    ```html
    <input v-model.trim="msg">
    ```

**综合案例：**

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>表单域修饰符</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			<div>
			<input type="text" v-model.number="age"/>
			</div>
			<div>
			<input type="text" v-model.trim="address">
			</div>
			<div>
			<input type="text" v-model.lazy="msg">
			</div>
			<div>{{msg}}</div>
			<button @click="handle">Click</button>
		</div>
		<script>
		var vm = new Vue({
			el : '#app',
			data : {
				age : '',
				address : '',
				msg : ''
			},
			methods:{
				handle : function(){
					console.log(this.age += 13) 
					console.log(this.address.length)
				}
			}
		})
		</script>
	</body>
</html>

```

**测试结果**

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301332379.png" alt="截图" style="zoom:50%;" />

### 5.5.6、总结

v-bind只能实现数据的单项绑定

使用v-model指令可以实现表单元素和model中数据的双向数据绑定

注意：v-model只能用于表单元素之中

# 六、 自定义指令

## 6.1、自定义指令示例  

​	除了核心功能默认内置的指令 (`v-model` 和 `v-show`)，Vue 也允许注册自定义指令。注意，在 Vue2.0 中，代码复用和抽象的主要形式是组件。然而，有的情况下，你仍然需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令。举个聚焦输入框的例子，如下：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>自定义指令</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			<input type="text" v-focus />
		</div>
		<script>
		//注册一个全局自定义指令：v-focus
			Vue.directive('focus',{
				//当前绑定的元素插入到 DOM 中时
				//inserted：被绑定元素插入父节点时调用（仅保证父节点存在，但不一定已被插入文档 中）
				inserted : function(el){
				//el表示指令所绑定的元素，可以用来直接操作DOM
				el.focus()
				}
			});

			var vm = new Vue({
				el:"#app"
			})
		</script>
	</body>
</html>

```

测试结果：

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301332862.png" alt="截图" style="zoom:50%;" />

### 6.1.1、自定义对象中的钩子函数及钩子函数参数

**钩子函数：**

一个指令定义对象可以提供如下几个钩子函数 (均为可选)：

- `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
- `update`：所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。

**钩子函数参数：**

- el：指令所绑定的元素，可以用来直接操作 DOM。
- binding：一个对象，包含以下 property：
  - name：指令名，不包括 v- 前缀。
  
  - value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
  
  - oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可
    
    用。无论值是否改变都可用。
  
- expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
  
  - arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
  
  - modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
  
  
  
- vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
- oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

## 6.2、带参数的自定义指令（改变元素背景色）

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>带参数自定义指令</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>
	<body>
				<div id="app">
					<input type="text" v-color = "msg">
				</div>
				<script>
					Vue.directive('color',{
						//bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
						bind : function(el,binding){
							el.style.backgroundColor = binding.value.color
						}
					})
					var vm = new Vue({
						el:"#app",
						data:{
							msg : {
								color : 'orange'
							}
						}
					})
				</script>
	</body>
</html>
```

**测试结果：**

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301332133.png" alt="截图" style="zoom:50%;" />

## 6.3、自定义局部指令用法

如果想注册局部指令，组件中也接受一个 directives 的选项：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>局部指令</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			<input type="text" v-color="msg" />
			<input type="text" v-color="msg" />
			<input type="text" v-foucs/>
		</div>
		<script>
			var vm = new Vue({
				el:"#app",
				data:{
					msg : {
						color : 'orange'
					}
				},
				directives:{
					color:{
						bind : function(el,binding){
						el.style.backgroundColor = binding.value.color
						}
					},
					foucs:{
						inserted : function(el){
						el.focus()
						}
					}
				}
			})
		</script>
	</body>
</html>

```

测试结果：

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301332498.png" alt="image-20220320150949270" style="zoom:50%;" />

## 6.4、自定义指令（新）

### 6.4.1、什么是自定义指令

vue 官方提供了 v-text、v-for、v-model、v-if 等常用的指令。除此之外 vue 还允许开发者自定义指令。

### 6.4.2、自定义指令的分类

vue 中的自定义指令分为两类，分别是：

- 私有自定义指令

- 全局自定义指令

### 6.4.3、私有自定义指令

在每个 vue 组件中，可以在 directives 节点下声明私有自定义指令。

使用**对象的形式**定义自定义指令，示例代码如下：

```js
  // 私有自定义指令的节点
  directives: {
    // 定义名为 color 的指令，指向一个配置对象
     color: {
      // 当指令第一次被绑定到元素上的时候，会立即触发 bind 函数
      // 形参中的 el 表示当前指令所绑定到的那个 DOM 对象
      bind(el) {
        console.log('触发了 v-color 的 bind 函数')
        el.style.color 'blue'
      }
    } 
```

### 6.4.4、使用自定义指令

在使用自定义指令时，需要加上 v- 前缀。示例代码如下：

```html
<!-- 生命自定义指令时，指令的名称是 color -->
<!-- 使用自定义指令时，需要加上 v- 指令前缀 -->
<h1 v-color>App组件</h1>
```

### 6.4.5、为自定义指令动态绑定参数值

在 template 结构中使用自定义指令时，可以通过等号（=）的方式，为当前指令动态绑定参数值：

```vue
<!-- 在使用指令时，动态为当前指令绑定参数值 color -->
<h1 v-color="color">App组件</h1>

data(){
	return{
	<!-- 定义 color 颜色值 -->	
		color:'blue'
	}
}
```

### 6.4.6、通过 binding 获取指令的参数值

在声明自定义指令时，可以通过形参中的第二个参数，来接收指令的参数值：

```js
<!-- 在使用指令时，动态为当前指令绑定参数值 color -->
<h1 v-color="color">App组件</h1>
<!-- 直接给 v-color 赋值 -->
<p v-color = " 'red' ">测试 </p>
<button @click="color = 'green'">改变 color 的颜色值</button>

<script>
export default {
data(){
	return{
	<!-- 定义 color 颜色值 -->	
		color:'blue'
	}
},
  // 私有自定义指令的节点
  directives: {
    // 定义名为 color 的指令，指向一个配置对象
     color: {
      // 当指令第一次被绑定到元素上的时候，会立即触发 bind 函数
      // 形参中的 el 表示当前指令所绑定到的那个 DOM 对象
      // 通过 binding 对象的 .value 属性，获取动态的参数值。即上面的 'blue' 值
      bind(el, binding) {
        console.log('触发了 v-color 的 bind 函数')
        el.style.color = binding.value
      }
    } 
  }
</script>
```

点击 "改变 color 的颜色值" 的按钮，不会改变颜色。bind 函数只调用 1 次：当指令第一次绑定到元素时调用，当 DOM 更新时 bind 函数不会被触发。

测试结果：

点击按钮后，data 数据中的 color 值改变了，但没有调用自定义指令中的 bind() 函数，所以不会改变颜色

![image-20220416193115578](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301332812.png)



### 6.4.7、update 函数

bind 函数只调用 1 次：当指令第一次绑定到元素时调用，当 DOM 更新时 bind 函数不会被触发。 update 函 数会在每次 DOM 更新时被调用。示例代码如下：

```js
  // 私有自定义指令的节点
  directives: {
    // 定义名为 color 的指令，指向一个配置对象
     color: {
      // 当指令第一次被绑定到元素上的时候，会立即触发 bind 函数
      // 形参中的 el 表示当前指令所绑定到的那个 DOM 对象
      bind(el, binding) {
        console.log('触发了 v-color 的 bind 函数')
        el.style.color = binding.value
      },
      // 在 DOM 更新的时候，会触发 update 函数
      update(el, binding) {
        console.log('触发了 v-color 的 update 函数')
        el.style.color = binding.value
      }
    } 
```

测试结果：

![image-20220416193348871](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301333119.png)

### 6.4.8、函数简写

如果 insert 和update 函数中的逻辑完全相同，则对象格式的自定义指令可以简写成函数格式：

insert 和 update 函数都是要修改 DOM 元素的字体的颜色样式

```js
directives:{
  // 在 insert 和 update 时，会触发相同的业务逻辑
  color(el, binding) {
     el.style.color = binding.value
    }  
}  
```

### 6.4.9、全局自定义指令

全局共享的自定义指令需要通过“Vue.directive()”进行声明，示例代码如下：

需要在 **main.js** 中定义全局自定义指令（全局的过滤器也需要在 main.js 中定义）

对象的形式定义：

```js
// 全局自定义指令
Vue.directive('color', {
  bind(el, binding) {
    el.style.color = binding.value
  },
  update(el, binding) {
    el.style.color = binding.value
  }
}) 
```

函数的形式定义：

```js
// 参数1：字符串，表示全局自定义指令的名字
// 参数2：对象，用来接收指令的参数值
Vue.directive('color', function(el, binding) {
  el.style.color = binding.value
})
```



# 六、vue 组件

## 6.1、什么是组件

组件是（对）可复用的`Vue`实例， 说白了就是一组可以重复使用的模板， 跟JSTL的自定义标签、`Thymeleal`的`th:fragment`等框架有着异曲同工之妙，通常一个应用会以一棵嵌套的组件树的形式来组织：
![截图](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301333587.png)
![截图](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301333139.png)

例如，你可能会有页头、侧边栏、内容区等组件，每个组件又包含了其它的像导航链接、博文之类的组件。

**第一个Vue组件**

### **6.1.1、全局组件注册**

注意：在实际开发中，我们并不会用以下方式开发组件，而是采用vue-cli创建，vue模板文件的方式开发，以下方法只是为了让大家理解什么是组件。
  使用`Vue.component()`方法注册组件，格式如下：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>组件注册</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			<button-counter></button-counter>
			<button-counter></button-counter>
		</div>
		<script>
		 //先注册组件
			Vue.component('button-counter',{
				data : function (){
					return {
						count : 0
					}
				},
				template:
				'<div><h1>hi....</h1><button v-on:click="count++">You clicked me {{ count }} times.</button></div>',
			})
			//再实例化Vue
			var vm =  new Vue({
				el : '#app'
			})
		</script>
	</body>
</html>


```

说明：

- Vue.component()：注册组件
- button-counter：自定义组件的名字
- template：组件的模板
- 当点击按钮时，每个组件都会各自独立维护它的 count。因为你每用一次组件，就会有
  
  一个它的新实例被创建。

- data 必须是一个函数
  - 当我们定义这个 `<button-counter>` 组件时，你可能会发现它的 data 并不是像这样直接提供一个对象：
    ```javascript
    data: {
      count: 0
    }
    ```
  - 取而代之的是，**一个组件的 data 选项必须是一个函数**，因此每个实例可以维护一份被返回对象的独立的拷贝：
  - ```javascript
    data: function () {
      return {
        count: 0
      }
    }
    ```

- - 组件模板 template 内容必须**单个根元素**（在标签外面套一个父标签）
    
    `template `：一个字符串模板作为 Vue 实例的标识使用。模板将会**替换**挂载的元素。挂载元素的内容都将被忽略，除非模板的内容有分发插槽。
  - 组件模板内容可以是模板字符串
    ```javascript
    			Vue.component('button-counter',{
    				data : function (){
    					return {
    						count : 0
    					}
    				},
    				template:
    				`
    				<div>
    				<h1>hi....</h1>
    				<button v-on:click="count++">You clicked me {{ count }} times.					</button>
    				</div>
    				`
    			})
    ```

- 组件命名方式
  - 短横线方式
    ```javascript
    Vue.component('my-component-name', { /* ... */ })
    ```
  - 驼峰方式
    ```javascript
    Vue.component('MyComponentName', { /* ... */ })
    ```
    
    注意：如果使用驼峰命名组件，那么在使用组件的时候，只能在字符串模板中使用驼峰的方式使用组件，但是在普通的标签模式中，必须使用短横线的方式使用组件，并且小写首字母。
    ```html
    		<div id="app">
    			<my-component-name></my-component-name>
    			<my-component-name></my-component-name>
    		</div>
    ```
  - 

### **6.1.2、局部组件注册**

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>局部组件</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			<hello-world></hello-world>
			<hello-tom></hello-tom>
			<hello-jerry></hello-jerry>
			<!-- <test-com></test-com> -->
		</div>
		<!-- 
		局部组件注册
		局部组件只能在注册他的父组件中使用
		 -->	
		<script>
		//*************** 错误示例：************************
		// Vue.component('test-com',{
		// 	template : `<div>test<hello-world></hello-world></div>`
		// })
			var HelloWorld = {
				// 用一个变量存放一个类似于组件注册的第二个参数
				data: function() {
					return {
						msg: 'helloworld!'
					}
				},
				template: `<div>{{msg}}</div>`
			}
			var HelloTom = {
				// 用一个变量存放一个类似于组件注册的第二个参数
				data: function() {
					return {
						msg: 'HelloTom!'
					}
				},
				template: `<div>{{msg}}</div>`
			}
			var HelloJerry = {
				// 用一个变量存放一个类似于组件注册的第二个参数
				data: function() {
					return {
						msg: 'HelloJerry!'
					}
				},
				template: `<div>{{msg}}</div>`
			}

			// 创建根实例
			var vm = new Vue({
				el: '#app',
				components: { //注册一系列的局部组件
					// <button-counter> 将只在父模板可用
					'hello-world': HelloWorld,
					'hello-tom': HelloTom,
					'hello-jerry': HelloJerry,
				}
			})
		</script>
	</body>
</html>

```

**注意： 局部组件只能在注册他的父组件中使用，在其子组件中不可用。否则会报相关错误。**

![截图](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301333356.png)

### 6.1.3、组件的自定义属性 props

props 是组件的自定义属性，在封装通用组件的时候，合理地使用 props 可以极大的提高组件的复用性！

它的语法格式如下：

```js
//main.js
// 导入需要被全局注册的那个组件
import Count from '@/components/Count.vue'
Vue.component('MyCount', Count)
```

```javascript
//父组件
<Mycount :init="9"></Mycount>
```

```javascript
//全局组件

//props 中的数据，可以直接在模板结构中被使用
<p>count 的值是：{{init}}</p>

export default{
  // props 是"自定义属性"，允许使用者通过自定义属性，为当前组件指定初始值
  // 自定义属性的名字，是封装者自定义的（只要名称合法即可）
  // props 中的数据，可以直接在模板结构中被使用
  // 注意：props 是只读的，不要直接修改 props 的值，否则终端会报错！
  // 定义数组形式的 props: ['自定义属性A','自定义属性B','其它自定义属性...'],
    props: ['init'],   
    //组件的私有数据
    data(){
        return{  
        }
    }
}
```

#### 6.1.3.1、props 是只读的

vue 规定：组件中封装的自定义属性是只读的，**程序员不能直接修改 props 的值**。否则会直接报错：

```js
   <button @click="init += 1">+1</button>
```

![image-20220410144352271](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301333971.png)

要想修改 props 的值，可以把 props 的值转存到 data 中，因为 data 中的数据都是可读可写的！

```javascript
  data() {
    return {
      // 把 props 中的 init 值，转存到 count 上
      count: this.init
    }
  }
```

可通过this 获取 init 的值

![image-20220410162431055](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301333614.png)

#### 6.1.3.2、props 的 default 默认值

在声明自定义属性时，可以通过 default 来定义属性的默认值。示例代码如下：

```javascript
export default{
    //定义对象形式的 prop
    props: {
    // 自定义属性A : { /* 配置选项 */ },
    // 自定义属性B : { /* 配置选项 */ },
    // 自定义属性C : { /* 配置选项 */ },    
        init: {
            //用 default 属性定义属性的默认值
            default: 0
        }
    }
}
```

#### 6.1.3.3、props 的 type 值类型

在声明自定义属性时，可以通过 type 来定义属性的值类型。示例代码如下：

```js
export default{
    props: {
        init: {
            //用 default 属性定义属性的默认值
            default: 0
            //使用 type 属性定义属性的值类型
            //如果传递过来的值不符合此类型，则会在终端报错
            type: Number
        }
    }
}
```

#### 6.1.3.4、**props** **的** **required** **必填项**

在声明自定义属性时，可以通过 required 选项，将属性设置为必填项，强制用户必须传递属性的值。示例代

码如下：

```js
export default{
    props: {
        init: {
            //用 default 属性定义属性的默认值
            default: 0
            //使用 type 属性定义属性的值类型
            //如果传递过来的值不符合此类型，则会在终端报错
            type: Number,
            //必填项校验
            required: true
        }
    }
}
```



### 6.1.4、组件之间的样式冲突问题

默认情况下，写在 .vue 组件中的样式会全局生效，因此很容易造成多个组件之间的样式冲突问题。

导致组件之间样式冲突的根本原因是：

① 单页面应用程序中，所有组件的 DOM 结构，都是基于唯一的 index.html 页面进行呈现的

② 每个组件中的样式，都会影响整个 index.html 页面中的 DOM 元素

#### 6.1.4.1、如何解决组件样式冲突的问题

为每个组件分配唯一的**自定义属性**，在编写组件样式时，通过属性选择器来控制样式的作用域，示例代码如下：

```html
<template>
	<div class="container" data-v-001>
        <h3 data-v-001>
            轮播图组件
        </h3>
    </div>
</template>

<style>
/*通过中括号“属性选择器”，来防止组件之间的“样式冲突问题”，
  因为每个组件分配的自定义属性时“唯一的” */
    .container[data-v-001]{
        border:1px solid red;
    }
</style>
```

#### 6.1.4.2、style 节点的 scoped 属性

为了提高开发效率和开发体验，vue 为 style 节点提供了 scoped 属性，从而防止组件之间的样式冲突问题

```html
<template>
	<div class="container" data-v-001>
        <h3 data-v-001>
            轮播图组件
        </h3>
    </div>
</template>

<style scoped>
/* style 节点的 scoped 属性，用来自动为每个组件分配唯一的“自定义属性”，
  并自动为当前组件的 DOM 标签和 style 样式应用这个自定义属性，防止组件的
  样式冲突问题*/
    .container[data-v-001]{
        border:1px solid red;
    }
</style>
```

测试结果：

![image-20220410155529901](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301333060.png)

#### 6.1.4.3、/deep/ 样式穿透

如果给当前组件的 style 节点添加了 scoped 属性，则当前组件的样式对其子组件是不生效的。如果想让某些样式对子组件生效，可以使用 /deep/ 深度选择器。

```css
<style lang="less" scoped>
.title{
    color: blue;/*不加 /deep/ 时。生成的选择器格式为 .title[data-v-052242de]*/
}
/deep/ .title{
    color: blue;/*加 /deep/ 时。生成的选择器格式为 [data-v-052242de] .title
    表示：自定义属性[data-v-052242de]的子元素 title*/
}
</style>
```

不加 /deep/ 时

![image-20220410161454284](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301333794.png)

加 /deep/ 时

![image-20220410161334392](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301334892.png)

适用领域：

希望在父组件中直接改造子组件的样式

当使用第三方组件库的时候，如果有修改第三方组件默认样式（例：将第三方按钮颜色的绿色改为粉色）的需求，需要用到 /deep/



### 6.1.3、父组件向子组件传值

**组件内部通过使用props属性传递参数**

1. ##### 组件内部通过 props 接收传递过来的值

   ```javascript
   Vue.component('menu-item',{
       props:['title'],
       tamplte:`<div>{{title}}</div>`
   })
   ```

**注意：props属性名规则**

- 在 props 中使用驼峰形式，模板中需要使用短横线的形式
- 字符串形式的模板中没有这个限制

------

示例：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>props属性名规则</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			<div>{{pmsg}}</div>
			<!-- 以驼峰的形式命名在html模板中使用短横线的形式 -->
			<menu-item :menu-title="ptitle"></menu-item>
		</div>
		<script>
		Vue.component('third-com',{
			//以驼峰的形式命名
			props:['testTitle'],
			template:`<div>{{testTitle}}</div>`
		})
		Vue.component('menu-item',{
			//以驼峰的形式命名
			props:['menuTitle'],
			//在字符串模板中没有限制
			template:`<div>{{menuTitle}}<third-com testTitle="hello"></third-com></div>`
		})
			var vm = new Vue({
				el:"#app",
				data:{
					pmsg:'父组件中内容',
					ptitle:'动态绑定属性'
				}
			})
		</script>
	</body>
</html>

```

**测试结果：**

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301334485.png" alt="image-20220320150949270" style="zoom:50%;" />

****

2. ##### 父组件通过属性将值传递给子组件

像这样给 prop 传入一个静态的值：

```html
<blog-post title="My journey with Vue"></blog-post>
```

prop 可以通过 v-bind 动态赋值，例如：

```html
<!-- 动态赋予一个变量的值 -->
<blog-post v-bind:title="post.title"></blog-post>

<!-- 动态赋予一个复杂表达式的值 -->
<blog-post
  v-bind:title="post.title + ' by ' + post.author.name"
></blog-post>
```

在上述两个示例中，我们传入的值都是字符串类型的，但实际上任何类型的值都可以传给一个 prop。

props 属性名类型：

- 字符串 String
- 数值 Number
- 布尔值 Boolean
- 数组 Array
- 对象 Object

****

示例：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>props属性值类型</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>
	<body>
		<!--  -->
		<div id="app">
			{{pmsg}}
          <!-- 加上 v-bind 传入的就是原始数据类型，否则传入的是字符串类型 例如：:pnum传入的是数值number类型，pnum传入的则是字符串String类型  -->
			<menu-item :pstr="pstr" :pnum="123" :pboo="true" :parr="parr" :pobj="pobj"></menu-item>
		</div>
		<script>
		Vue.component('menu-item',{
			props:['pstr','pnum','pboo','parr','pobj'],
			template:`
			<div>
			<div>{{pstr}}</div>
			<div>{{pnum}}</div>
			<div>{{pboo}}</div>
			<ul>
			<li :key = 'index' v-for = '(item,index) in parr '>{{item}}</li>
			</ul>
			<div>
				{{pobj.name +'--'+ pobj.age}}
			</div>
			</div>
			`
		})
		var vm = new Vue({
			el : '#app',
			data : {
				pmsg : '父组件中内容：',
				pstr : 'hello',
				parr : ['apple','orange','banana'],
				pobj : {
					name : 'jack',
					age : '20'
				}
			}
		})
		</script>
	</body>
</html>

```

说明：

- v-for="item in items"：遍历Vue实例中定义的名为items的数组，并创建同等数量的组件
- v-bind:panh="item"：将遍历的item项绑定到组件中props定义名为item属性上；= 号左边的panh为props定义的属性名，右边的为item in items 中遍历的item项的值

### 6.1.4、子组件向父组件传值

1. 子组件通过触发自定义事件（$emit）向父组件传递信息
2. 父组件监听（v-on）子组件的事件

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>子组件向父组件传值</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			<div :style="{fontSize:fontSize + 'px'}">{{pmsg}}</div>
			<!-- 父组件监听子组件的事件 -->
          <!-- 在使用函数时$event接收子组件传递过来的值作为参数 ，在表达式中直接使用$event -->
			<menu-item :parr="parr" @enlarge-text = 'handle($event)'></menu-item>
		</div>
		<script>
		Vue.component('menu-item',{
			props:['parr'],
			template:`
			<div>
			<ul>
				<li  :key = 'index' v-for='(item,index) in parr'>
					{{item}}
				</li>
			</ul>
			<button @click='parr.push("lemon")'>点击</button>
			//子组件触发自定义事件
			//第二个参数是传递给父组件的值
			//修改数据时，通过 $emit() 触发自定义事件
			<button @click='$emit("enlarge-text",5)'>扩大父组件字体大小</button>

			</div>
			`
		})
			var vm = new Vue({
				el:"#app",
				data:{
					pmsg:'父组件中内容',
					parr:['apple','orange','banana'],
					fontSize : 10
				},
				methods:{
					handle:function(val){
						//扩大字体大小
						this.fontSize+=val;
					}
				}
			})
		</script>
	</body>
</html>

```

测试结果：

![image-20220320163709022](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301334946.png)

### 6.1.5、自定义事件

父组件是使用 props 传递数据给子组件，但如果子组件要把数据传递回去，就需要使用自定义事件！

我们可以使用 v-on 绑定自定义事件, 每个 Vue 实例都实现了事件接口(Events interface)，即：

- 使用 `$on(eventName)` 监听事件
- 使用 `$emit(eventName)` 触发事件

另外，父组件可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件。

以下实例中子组件已经和它外部完全解耦了。它所做的只是触发一个父组件关心的内部事件。

```html
<div id="app">
    <div id="counter-event-example">
      <p>{{ total }}</p>
      <button-counter v-on:increment="incrementTotal"></button-counter>
      <button-counter v-on:increment="incrementTotal"></button-counter>
    </div>
</div>
 
<script>
Vue.component('button-counter', {
  template: '<button v-on:click="incrementHandler">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementHandler: function () {
      this.counter += 1
      //修改数据时，通过 $emit() 触发自定义事件  
      this.$emit('increment',this.counter)
    }
  },
})
new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal(val) {
      this.total = val
    }
  }
})
</script>
```

### 6.1.6、非父子组件传值

在 vue 中，兄弟组件之间数据共享的方案是 EventBus。

EventBus 的使用步骤：

1. 创建 eventBus.js 模块，并向外共享一个 Vue 的实例对象
2. 在数据发送方，调用 bus.$emit('事件名称','要发送的数据')方法触发自定义事件
3. 在数据接收方，调用 bus.$on('事件名称','事件处理函数')方法注册一个自定义事件

兄弟组件 A （数据发送方）

```js
//导入 eventBus.js 模块
import bus from './eventBus.js'

export default{
    data(){
        return{
            msg : 'hello vue,js'
        }
    },
    methods:{
        sendMsg(){
            bus.$emit('share',this.msg)
        }
    }
}
```

eventBus.js

```js
import Vue from 'vue'

//向外共享 Vue 的实例对象
export default new Vue()
```

兄弟组件 C（数据接收方）

```js
import bus from './eventBus.js'

export default{
    data(){
        return{
            msgFromLeft: ''
        }
    },
    created(){
        // val 表示事件处理函数的形参，接收兄弟组件传递过来的数据
        bus.$on('share',val=>{
            this.msgFromLeft = val
        })
    }
}
```

 示例：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>兄弟组件直接的数据交互</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			<test-tom></test-tom>
			<test-jerry></test-jerry>
			<div>
				<button @click="handles">销毁事件</button>
			</div>
		</div>
		<script>
		//提供事件中心
		var hub = new Vue();
		Vue.component('test-tom',{
			data:function(){
				return{
					num : 0
				}
			},
			template:`
			<div>
			<div>
				Tom：{{num}}
			</div>
			<div>
				<button @click = 'handle'>点击</button>
			</div>
			</div>
			`,
			methods:{
				handle:function(){
				//触发兄弟组件的事件
				   hub.$emit('jerry-event',2);
				}
			},
			mounted:function(){
				//监听事件
             //
				hub.$on('tom-event',(val)=>{
					this.num += val;
				})
			}
		})
		Vue.component('test-jerry',{
			data:function(){
				return{
					num : 0
				}
			},
			template:`
			<div>
			<div>
				Jerry：{{num}}
			</div>
			<div>
				<button @click = 'handle'>点击</button>
			</div>
			</div>
			`,
			methods:{
				handle:function(){
					//触发兄弟组件的事件
					hub.$emit('tom-event',1);
				}
			},
			mounted:function(){
				//监听事件
				hub.$on('jerry-event',(val)=>{
					this.num += val;
				})
			}
		})		
			var vm = new Vue({
				el:"#app",
				methods:{
					handles:function(){
						//销毁事件
						hub.$off('tom-event');
						hub.$off('jerry-event');
					}
				}
			})
		</script>
	</body>
</html>
```

### 6.1.6、ref 引用

- 什么是 ref 引用

  ref 用来辅助开发者在**不依赖于 jQuery 的情况下**，获取 DOM 元素或组件的引用。

  每个 vue 的组件实例上，都包含一个 **$refs 对象**，里面存储着对应的 DOM 元素或组件的引用。默认情况下，**组件的 $refs 指向一个空对象**

  ![image-20220415204013784](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Ajax/202205171354462.png)

- 使用 ref 引用 DOM 元素

  如果想要使用 ref 引用页面上的 DOM 元素，则可以按照如下的方式进行操作：

  ```js
  <template>
    <div class="app-container">
       <!-- 使用 ref 属性,为对应的 DOM 添加引用名称 -->
      <h1 ref="myh1">App 根组件</h1>
      <button @click="showThis">打印 this</button>
      <hr />
  
      <div class="box">
        <!-- 渲染 Left 组件和 Right 组件 -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods:{
      showThis(){
        //当前 App 组件的实例对象
        console.log(this)
        //通过 this.$refs.引用的名称 可以获取到 DOM 元素的引用
        console.log(this.$refs.myh1)
        //操作 DOM 元素,把文本颜色改为红色
        this.$refs.myh1.style.color = 'red'
      }
    }
  }
  </script>
  ```

  测试结果:

  ![image-20220415204511234](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301334121.png)



- 使用 ref 引用子组件实例

  如果想要使用 ref 引用页面上的子组件实例，则可以按照如下的方式进行操作：

  ```js
  <template>
    <div class="app-container">
      <h1 ref="myh1">App 根组件</h1>
      <button @click="showThis">打印 this</button>
      <button @click="onReset">重置Left组件的count值0</button>
      <hr />
  
      <div class="box">
        <!-- 渲染 Left 组件和 Right 组件 -->
        <!-- 使用 ref 属性,为对应的组件添加引用名称 -->
        <Left ref="comLeft"></Left>
      </div>
    </div>
  </template>
  
  <script>
  import Left from '@/components/Left.vue'
  export default {
    methods: {
      onReset(){
        console.log(this)
        //通过 this.$ref.引用的名称 可以引用组件的实例
        //设置Left子组件 count 值为0
        // this.$refs.comLeft.count = 0
        //调用 Left 子组件 的 reset 方法 
        this.$refs.comLeft.reset()
      }
    },
    components: {
      Left
    }
  }
  ```

  测试结果：

  ![image-20220415210955683](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301334474.png)

- 案例需求：控制文本框和按钮的按需切换并且让文本框自动获得焦点

  通过布尔值 inputVisible 来控制组件中的文本框与按钮的按需切换。示例代码如下：

  ```js
  <template>
    <div class="app-container">
      <h1 ref="myh1">App 根组件</h1>
     <input type="text" v-if="inputVisible" @blur="showbtn">
     <button v-else @click="showinput">展示输入框</button>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return{
        // 控制输入框和按钮的按需切换
        // 默认值 false ,表示默认展示按钮，隐藏输入框
        inputVisible : false
      }
    },
    methods: {
      //点击按钮展示输入框
      showinput(){
        this.inputVisible = true
      },
      //输入框失焦展示按钮
      showbtn(){
        this.inputVisible = false
      }
    }
  }
  
    </script>
  ```

  当文本框展示出来之后，如果希望它立即获得焦点，则可以为其添加 ref 引用，并调用原生 DOM 对象的 .focus() 方法即可。示例代码如下：

  ```js
  <input type="text" v-if="inputVisible" @blur="showbtn" ref="ipt">
  <button v-else @click="showinput">展示输入框</button>
  
  methods: {
      showInput(){
          //获取文本框的 DOM 引用，并调用，.focus()使其自动获取焦点
          this.inputVisible = true
          //此时文本框的 DOM 为 undefined，
          console.log( this.$refs.ipt)
          this.$refs.ipt.focus()
      }
  }
  ```

  此时不能获取文本框的 DOM 元素，最新的值 `this.inputVisible = true` 还没有渲染到 DOM 页面，因此引出下面的方法。

  ![image-20220416001745333](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301334514.png)

- **this.$nextTick(cb)方法**

  组件的 $nextTick(cb) 方法，会把 cb 回调推迟到下一个 DOM 更新周期之后执行。通俗的理解是：等组件的DOM 更新完成之后，再执行 cb 回调函数。从而能保证 cb 回调函数可以操作到最新的 DOM 元素。

  ```js
  <input type="text" v-if="inputVisible" @blur="showbtn" ref="ipt">
  <button v-else @click="showinput">展示输入框</button>
  methods: {
      showInput(){
        this.inputVisible = true
        //把对 input 文本框的操作，推迟到下次 DOM 更新之后。否则页面上根本不存在文本框元素
        //让展示出来的文本框，自动获取焦点
        this.$nextTick(()=>{
          this.$refs.ipt.focus()
        })
      }
  },
  //updated 的方法需定义在，methods 同级
//updated 的方法是：一旦数据发生改变,updated 函数可以一直执行，但在 this.inputVisible = false 时，无法自动获取焦点
  updated: {
     this.$refs.ipt.focus()
  }  
  ```
  



### 6.1.6、组件插槽的作用

父组件向子组件传递内容

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>组件插槽</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			<todo-title>有bug发生</todo-title>
			<todo-title>有一个警告</todo-title>
			<!-- 自定义组件中没有内容则显示slot默认内容 -->
			<todo-title></todo-title>
		</div>
		<script>
		Vue.component('todo-title',{
			template:`
			<div>
				<strong>ERROR:</strong>
				<slot>默认内容</slot>
			</div>
			`
		});
			var vm = new Vue({
				el:"#app"
			})
		</script>
	</body>
</html>
```

测试结果：

![image-20220324195555900](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301334060.png)

### 6.1.7、具名插槽用法

1. 插槽定义

2. 插槽内容

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>组件插槽</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			<base-layout>
				<p slot="header">标题信息</p>
				<p>主要内容1</p>
				<p>主要内容2</p>
				<p slot="footer">底部信息</p>
			</base-layout>
			<base-layout>
			<!-- 临时的包裹中间的内容,最终并不会渲染到页面上 -->
       	  <!-- 优点：可以包裹多个标签 -->    
			<template slot="header">
				<p>标题信息1</p>
				<p>标题信息2</p>
			</template>
			<p>中间信息1</p>
			<p>中间信息2</p>
			<template slot="footer">
				<p>底部信息1</p>
				<p>底部信息2</p>
			</template>
			</base-layout>
		</div>
		<script>
		Vue.component('base-layout',{
			template:`
			<div>
			<header>
				<slot name="header"></slot>
			</header>
			<main>
			//默认插槽
				<slot></slot>
			</main>
			<footer>
				<slot name="footer"></slot>
			</footer>
			</div>
			`
		});
			var vm = new Vue({
				el:"#app"
			})
		</script>
	</body>
</html>
```

测试结果：

![image-20220320194502800](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301334195.png)

### 6.1.8、作用域插槽

应用场景：父组件对子组件的内容进行加工处理

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>作用域插槽</title>
		<style type="text/css">
			.current{
				color: orange;
			}
		</style>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			<!-- 父组件获取子组件中的数据，并对子组件进行加工处理 -->
			<fruit-list :list="list">
				<!-- 需要通过template进行包裹，借助其slot-scope属性获取子组件的数据 -->
				<template slot-scope="slotProps">
					<strong class="current" v-if="slotProps.info.id==3">			      {{slotProps.info.name}}</strong>
					<span v-else>{{slotProps.info.name}}</span>
				</template>
			</fruit-list>
		</div>
		<script>
		Vue.component('fruit-list',{
			props:['list'],
			template:`
			<div>
			<li :key="item.key" v-for="item in list">
			//子组件的模板中提供插槽，slot中填充要显示的数据。还需要绑定属性，其值就是要操作的数据item
			<slot :info="item">
				{{item.name}}
			</slot>
			</li>
			</div>
			`
		})
			var vm = new Vue({
				el:"#app",
				data:{
					list:[{
						id:'1',
						name:'apple'
					},
					{
						id:'2',
						name:'banana'
					},
					{
						id:'3',
						name:'orange'
					}
					]
				}
			})
		</script>
	</body>
</html>

```

测试结果：

![image-20220320202749350](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301334642.png)


### 6.1.9、动态组件

1. **什么是动态组件**

   动态组件指的是动态切换组件的显示与隐藏

2. **如何实现动态组件渲染**

   vue 提供了一个内置的 `<component>` 组件，专门用来实现动态组件的渲染。示例代码如下：

   ```js
   <template>
     <div class="app-container">
       <h1>App 根组件</h1>
       <hr />
       <!-- 在给comName 赋值时，子组件用单引号括起来 -->
       <!-- 点击按钮，动态指定要渲染的组件 -->
       <button @click="comName = 'Left'">展示 Left 子组件</button>
       <button @click="comName = 'Right' ">展示 Right 组件</button>
       <div class="box">
         <!-- 渲染 Left 组件和 Right 组件 -->
             
         <!-- 1. component 标签是 vue 内置的，作用：组件的占位符 -->
         <!-- 2. is 属性的值，表示要渲染的组件的名字 -->
         <!-- 3. is 属性的值，应该是组件在 components 节点下的注册名称 -->
         <component :is="comName"></component>
       </div>
     </div>
   </template>
   
   <script>
   import Left from '@/components/Left.vue'
   import Right from '@/components/Right.vue'
   export default {
     data(){
       return{
         comName : 'Left'
       }
     },
     components: {
       Left,
       Right
     }
   }
   </script>
   ```

3. **使用 keep-alive 保持状态**

   默认情况下，切换动态组件时无法保持组件的状态（切换组件时，组件会被销毁）。

   ![image-20220416113739537](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301334339.png)

   此时可以使用 vue 内置的  组件保持动态组 件的状态。示例代码如下：

   ```js
    <keep-alive>
       <component :is="comName"></component>
    </keep-alive>
   ```

   测试结果：

   此时的 Left 子组件被缓存起来了，Right 子组件是处于激活的状态

   ![image-20220416113955660](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301335939.png)

4. **keep-alive 对应的生命周期函数**

   当组件被缓存时，会自动触发组件的 deactivated 生命周期函数。

   当组件被激活时，会自动触发组件的 activated 生命周期函数。

   ```js
   export default {
     created() {
       console.log("Left 组件被创建");
     },
     destroyed() {
       console.log("Left 组件被销毁");
     },
     // 当组件第一次被创建的时候，既会执行 created 生命周期，也会执行 activated 生命周期
     // 当时，当组件被激活的时候，只会触发 activated 生命周期，不再触发 created。因为组件没有被重新创建
     activated() {
       console.log("Left 组件被激活了");
     },
     deactivated(){
       console.log("Left 组件被缓存了");
     }
   };
   ```

   测试结果：

   ![image-20220416115141893](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301335250.png)

5. **keep-active 的 include,exclude 属性**

   include 属性用来指定：只有名称匹配的组件会被缓存。多个组件名之间使用英文的逗号分隔

   exclude 属性用来指定：名称匹配的组件不会被缓存。

   注意：不要同时使用 include 和 exclude 这两个属性

   ```js
      <!-- 在使用 keep-alive 的时候，可以通过 include 指定哪些组件需要被缓存； -->
   		<keep-alive include="MyLeft">
           <component :is="comName"></component>
         </keep-alive>
   ```

6. **组件注册名称和组件声明时 name 属性的区别**

   组件声明时候的 “name” 名称的主要应用场景：结合 `<keep-alive>` 标签实现组件缓存功能；以及在调试工具中看到组件的 name 名称

   <img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301335403.png" alt="image-20220416121111432" style="zoom:50%;" />

   ```js
   <script>
   export default {
     // 当提供了 name 属性之后，组件的名称，就是 name 属性的值
     name: 'MyRight'
   }
   </script>
   ```

   组件的 “注册名称” 的主要应用场景是：以标签的形式，把注册好的组件，渲染和使用到页面结构之中。

   如果在“声明组件”的时候，没有为组件指定 name 名称，则组件的名称默认就是“注册时候的名称”,`<Left></Left>`

   ```js
   export default {
     components: {
       Left,
       Right
     }
   }
   ```

### 6.1.10、插槽

1. **什么是插槽**

   插槽（Slot）是 vue 为组件的封装者提供的能力。允许开发者在封装组件时，把不确定的、希望由用户指定的部分定义为插槽。

   ![image-20220416151049977](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301335483.png)

   可以把插槽认为是组件封装期间，为用户预留的内容的占位符

2. 体验插槽的基础用法

   在封装组件时，可以通过`<slot>`元素定义插槽，从而为用户预留内容占位符。示例代码如下：

   App.vue

   ```js
         <Left>
           <!-- 在使用 Left 组件时，为插槽指定具体内容 -->
           <p>这是在 Left 组件的内容区域，声明的 p 标签</p>
         </Left>
   ```

   Left.vue

   ```js
   <template>
     <div class="left-container">
       <h3>Left 组件</h3>
       <hr />
       <!-- 声明一个插槽区域 -->
       <slot></slot>
     </div>
   </template>
   ```

   2.1. 如果在封装组件时没有预留任何插槽`<slot>`，则用户提供的任何自定义内容都会被丢弃。示例代码如下

   ```js
   <template>
     <div class="left-container">
       <h3>Left 组件</h3>
       <hr />
       <!-- 封装组件时，没有预留任何插槽 -->
     </div>
   </template>
   ```

   此时 App.vue 中自定义的内容会被丢弃

   2.2. 后备内容（默认内容）：

   封装组件时，可以为预留的`<slot>`插槽提供后备内容（默认内容）。如果组件的使用者没有为插槽提供任何 内容，则后备内容会生效。示例代码如下

   ```js
   <template>
     <div class="left-container">
       <h3>Left 组件</h3>
       <hr />
       <!-- 声明一个插槽区域 -->
       <!-- vue 官方规定：每一个 slot 插槽，都要有一个 name 名称 -->
       <!-- 如果省略了 slot 的 name 属性，则有一个默认名称叫做 default -->
       <slot name="default">
         <h6>这是 default 插槽的后备内容</h6>
       </slot>
     </div>
   </template>
   ```

3. 具名插槽

   如果在封装组件时需要预留多个插槽节点，则需要为每个`<slot>`插槽指定具体的 name 名称。这种带有具体 名称的插槽叫做“具名插槽”。示例代码如下：

   ```js
   //Article.vue
   <template>
      // 定义根元素时一般以 -container 结尾
     <div class="article-container">
       <h3>Article 组件</h3>
       <!-- 文章的标题 -->
       <div class="header-box">
         <slot name="title"></slot>
       </div>
   
       <!-- 文章的内容 -->
       <div class="content-box">
         <slot name="content"></slot>
       </div>
   
       <!-- 文章的作者 -->
       <div class="footer-box">
         <slot name="author"></slot>
       </div>
     </div>
   </template>
   ```

   注意：没有指定 name 名称的插槽， 会有隐含的名称叫做 “default”。

   3.1. 为具名插槽提供内容

   在向具名插槽提供内容的时候，我们可以在一个`<tempalte>`元素上使用 v-slot 指令，并以 v-slot 的参数的形式提供其名称。（v-slot 的缩写，即把参数之前的所有内容 (v-slot:) 替换为字符 #。例如 v-slot:header 可以被重写为 #header）

   v-slot 指令必须定义在 `<tempalte>`元素上

   ![image-20220416164421732](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301335189.png)

   示例代码如下：

   ```js
       <Article>
         <template #title>
           <h3>一首诗</h3>
         </template>
   
         <template #content>
         //以下内容将会填充到名称为 content 的插槽中去
           <div>
             <p>啊，大海，全是水。</p>
             <p>啊，蜈蚣，全是腿。</p>
             <p>啊，辣椒，净辣嘴。</p>
           </div>
         </template>
   
         <template #author>
           <div>作者：彬果锅</div>
         </template>
       </Article>
   ```

   测试结果：

   ![image-20220416161054979](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301335222.png)

4. 作用域插槽

   在封装组件的过程中，可以为预留的`<slot>`插槽绑定 props 数据，这种带有 props 数据的`<slot>`叫做“作用域插槽”。示例代码如下：

   在封装组件时，为预留的 `<slot>` 提供属性对应的值

   ```js
   <!-- 文章的内容 -->
   <div class="content-box">
         <!-- 在封装组件时，为预留的 <slot> 提供属性对应的值，这种用法，叫做 “作用域插槽” -->
         <slot name="content" msg="hello vue.js" :user="userinfo"></slot>
   </div>
   
   <script>
   export default {
     // 声明组件，首字母要大写
     name: 'Article',
     data() {
       return {
         // 用户的信息对象
         userinfo: {
           name: 'zs',
           age: 20
         }
       }
     }
   }
   </script>
   ```

   预留的 `<slot>` 提供属性对应的值用 “=”接收

   ```js
       //接收预留的<slot>提供属性对应的值 存放在一个空对象scope中
   		<template #content="scope">
           <div>
             <p>啊，大海，全是水。</p>
             <p>啊，蜈蚣，全是腿。</p>
             <p>啊，辣椒，净辣嘴。</p>
             <p>{{ scope }}</p>
             <p>{{ scope.msg }}</p>
             <p>{{ scope.user}}</p>
   			 <p>{{ scope.user.name}}</p>
           </div>
         </template>
   ```

   测试结果：

   ![image-20220416163258237](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301335810.png)

   4.2. 解构插值 Prop

   作用域插槽对外提供的数据对象，可以使用解构赋值简化数据的接收过程。示例代码如下：

   ```js
        //作用域插槽对外提供的数据对象，可以通过“解构赋值”简化接收的过程
   	  <template #content="{ msg, user }">
           <div>
             <p>啊，大海，全是水。</p>
             <p>啊，蜈蚣，全是腿。</p>
             <p>啊，辣椒，净辣嘴。</p>
             <p>{{ msg }}</p>
             <p>{{ user.name }}</p>
           </div>
         </template>
   ```

   测试结果：

   ![image-20220416164045358](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301335203.png)



## 6.2、组件化开发

vue 是一个支持组件化开发的前端框架。 vue 中规定：组件的后缀名是 .vue。之前接触到的 App.vue 文件本质上就是一个 vue 的组件。

### 6.2.1、什么是组件化开发

组件化开发指的是：根据封装的思想，把页面上可重用的 UI 结构封装为组件，从而方便项目的开发和维护。

### 6.2.2、vue 组件的三个组成部分

每个 .vue 组件都由 3 部分构成，分别是： 

- template -> 组件的模板结构 

- script -> 组件的 JavaScript 行为 

- style -> 组件的样式 

其中，每个组件中必须包含 template 模板结构，而 script 行为和 style 样式是可选的组成部分

### 6.2.3、template

vue 规定：每个组件对应的模板结构，需要定义到 `<template>` 节点中:

```html
<template>
	<!-- 当前组件的 DOM 结构，需要定义到 template 标签的内部 -->
</template>
```

注意：

- template 是 vue 提供的容器标签，只起到包裹性质的作用，它不会被渲染为真正的 DOM 元素 

- template 中只能包含唯一的根节点

### 6.2.4、script

vue 规定：开发者可以在 `<script>` 节点中封装组件的 JavaScript 业务逻辑。

`<script>`节点的基本结构如下：

```js
<script>
    // 组件相关的 data 数据、methods 方法等，
    // 都需要定义到 export default 所导出的对象中
    export default{}
 </script>
```

vue 组件中的 data 必须是函数

vue 规定：.vue 组件中的 data 必须是一个函数，不能直接指向一个数据对象。 

因此在组件中定义 data 数据节点时，下面的方式是错误的：

```js
data:{ //组件中，不能直接让 data 指向一个数据对象（会报错）
   count: 0
}
```

会导致多个组件实例共用同一份数据的问题

### 6.2.5、style

vue 规定：组件内的 `<style>` 节点是可选的，开发者可以在 `<style>` 节点中编写样式美化当前组件的 UI 结构。

`<style>`节点的基本结构如下：

```css
<style>
h1 {
    font-weight : normal;
}
</style>
```

让 style 中支持 less 语法

在 `<style>` 标签上添加 lang="less" 属性，即可使用 less 语法编写组件的样式

```less
<style lang="less">
h1 {
    font-weight : normal;
    span{
        color: red;
    }
}
</style>
```

## 6.3、组件的生命周期

**生命周期 & 生命周期函数** 

生命周期（Life Cycle）是指一个组件从创建 -> 运行 -> 销毁的整个阶段，强调的是一个时间段。 

生命周期函数：是由 vue 框架提供的内置函数，会伴随着组件的生命周期，自动按次序执行。 

注意：生命周期强调的是时间段，生命周期函数强调的是时间点。

![lifecycle](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301336493.png)

![image-20220410174743595](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301336746.png)



### 6.3.1、beforeCreate() 生命周期函数

**在初始化事件和生命周期函数后**触发beforeCreate()函数，beforeCreate()函数 props、data、methods 未被创建，都处于不可用状态

测试代码：

```js
export default {
    props: ['info'],
    data() {
        return{
            message: 'hello vue.js'
        }
    },
    methods: {
        show(){
            console.log('调用了 Demo 组件的 show 方法')
        }
    },
    // 创建阶段的第1个生命周期函数
    beforeCreate() {
        console.log(this.info)
        console.log(this.message)
        this.show()
    }
}
```

测试结果：

![image-20220410180626975](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301336605.png)

### 6.3.2、created() 生命周期函数

初始化 props、data、methods后，触发 created 函数。但是组件的模板结构尚未生成 （不能操作 Dom）。

测试代码:

```js
<template>
  <div class="demo-container">

  </div>
</template>

<script>
export default {
    props: ['info'],
    data() {
        return{
            message: 'hello vue.js'
        }
    },
    methods: {
        show(){
            console.log('调用了 Demo 组件的 show 方法')
        }
    },
    // 创建阶段的第1个生命周期函数
    beforeCreate() {
        // console.log(this.info)
        // console.log(this.message)
        // this.show()
    },
    created() {
        console.log(this.info)
        console.log(this.message)
        this.show()
    }
}
</script>

<style lang="less" scoped>
.demo-container{
    background: pink;
    height: 200px;
}
</style>
```

测试结果：

![image-20220411203207502](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301336755.png)

created 生命周期函数，非常常用。经常在它里面，调用 methods 中的方法，请求服务器的数据。并且，把请求到的数据，转存到 data 中（关键步骤），供 template 模板渲染的时候使用！

在 created() 生命周期函数阶段，发起 Ajax 请求，拿取数据。（需求：在刚进入页面时，就希望看到数据）

测试代码：

```html
<template>
  <div class="demo-container">
     <h3>一共有 {{books.length}} 本图书</h3>
  </div>
</template>

<script>
export default {
    props: ['info'],
    data() {
        return{
            message: 'hello vue.js',
            // 定义 books 数组，存储的是所有图书的列表数据。默认为空数组！
            books: []
        }
    },
    methods: {
        //使用 Ajax 请求图书列表的数据
        initBookList(){
            const xhr = new XMLHttpRequest()
            xhr.addEventListener('load',()=>{
                //返回的数据是字符串类型，转为JSON类型
                const result = JSON.parse(xhr.responseText)
                // console.log(result);
                //Ajax 请求回来的数据转存到 data 中
                this.books = result.data
            })
            xhr.open('GET','http://www.liulongbin.top:3006/api/getbooks')
            xhr.send()
        }   
    },
    created() {
        // created 生命周期函数，非常 常用。
        // 经常在它里面，调用 methods 中的方法，请求服务器的数据。
        // 并且，把请求到的数据，转存到 data 中，供 template 模板渲染的时候使用！
        this.initBookList()
    }
}
</script>

<style lang="less" scoped>
.demo-container{
    background: pink;
    height: 200px;
}
</style>
```

测试结果：

将网速调慢。1. 先将空数组渲染到页面

![image-20220411214524238](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301336306.png)

2. 在 Ajax 数据请求完成后，页面渲染出转储存 data 中的数据。

![image-20220411215305584](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301336999.png)

### 6.3.3、beforeMount() 生命周期函数

将要把内存中编译好的 HTML 结构渲染到浏览器中，此时浏览器中还没有当前组件的 DOM 结构。

测试代码：

```js
    created() {
        //此时浏览器还没有当前组件的 DOM 元素
        console.log(document.querySelector('#myh3'))
    },
    beforeMount(){
        //此时浏览器还没有当前组件的 DOM 元素
        console.log('beforeMount')
        console.log(document.querySelector('#myh3'))
    }
```

测试结果：

此时还不能操作 DOM 元素

![image-20220412082727602](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301336580.png)

### 6.3.4、Mounted() 生命周期函数

在 Mounted 之前，内存中编译生成的 HTML 结构，替换掉 el 属性指定的 DOM 元素。

在 Mounted 阶段，已经把内存中的 HTML 结构，成功渲染到了浏览器之中。此时浏览器中已然包含了当前组件的 DOM 结构。

测试代码：

```js
// 如果要操作当前组件的 DOM，最早，只能在 mounted 阶段执行   
	mounted() {
        console.log(this.$el)
        const dom = document.querySelector('#myh3')
        console.log(dom)
    }
```

测试结果：

![image-20220412084319698](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301336268.png)

**总结：在组件创建阶段的生命周期函数只执行一次。**

### 6.3.5、beforeupdate() 生命周期函数

当数据发生变化后，触发 beforeupdate() 函数，此阶段可以获取最新数据，但数据还没有渲染到组件的模板结构中

测试代码：

```js
    beforeUpdate(){
        console.log('beforeUpdate')
        console.log(this.message);
        const dom = document.querySelector('#pmes')
        console.log(dom.innerHTML)
    }
```

测试结果：

![image-20220412091831461](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301336147.png)

### 6.3.6、updated() 生命周期函数

在此阶段之前，根据最新的数据，已经将组件的 DOM 结构重新渲染。

测试代码：

```js
  // 当数据变化之后，为了能够操作到最新的 DOM 结构，必须把代码写到 updated 生命周期函数中
  updated() {
     console.log('updated')
     console.log(this.message)
     const dom = document.querySelector('#pppp')
     console.log(dom.innerHTML)
  }
```



测试结果：

![image-20220412093109596](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301336932.png)

**总结：在组件运行阶段的生命周期函数，根据数据的变化函数可以一直执行，若数据没有发生变化则不执行函数。**

### 6.3.7、beforeDestroy() 生命周期函数

将要销毁此组件，此时尚未销毁，组件还处于正常工作的状态

测试代码：

```js
  beforeDestroy() {
    console.log("beforeDestroy");
    this.message = "aaa";
    console.log(this.message);
  }
```

测试结果：

此阶段组件还处于正常工作的状态

![image-20220412123416194](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301337163.png)6.3.8、destroyed() 生命周期函数

在 destroyed() 函数之前，已经销毁了当前组件的数据侦听器、子组件、事件监听。

在 destroyed() 阶段，组件已经被销毁，此组件在浏览器中对应的 DOM 结构已被完全移除！

测试代码：

```js
    console.log("destroyed");
    this.message = 'aaa'
```

测试结果：

DOM 结构已经被完全移除，数据不能够渲染到 DOM 结构中

![image-20220412123620004](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301337430.png)

# 七、Axios异步通信

## 7.1、什么是Axios

Axios是一个开源的可以用在浏览器端和Node JS的异步通信框架， 她的主要作用就是实现AJAX异步通信，其功能特点如

下：

- 从浏览器中创建XMLHttpRequests
- 从node.js创建http请求
- 支持Promise API[JS中链式编程]
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换JSON数据
- 客户端支持防御XSRF(跨站请求伪造)

GitHub：[https://github.com/axios/axios](https://)
中文文档：[http://www.axios-js.com/](https://)

## 7.2、为什么要使用Axios

>  axios 是一个专注于网络请求的库！

由于`Vue.js`是一个视图层框架并且作者(尤雨溪) 严格准守SoC(关注度分离原则)所以`Vue.js`并不包含AJAX的通信功能， 为了解决通信问题， 作者单独开发了一个名为`vue-resource`的插件， 不过在进入2.0版本以后停止了对该插件的维护并推荐了`Axios`框架。少用jQuery， 因为它操作Dom太频繁!

## 7.3、第一个Axios应用程序

### 7.3.1、axios 的基本使用

发起 GET 请求

```javascript
<script>
    // http://www.liulongbin.top:3006/api/getbooks
    // 1. 调用 axios 方法得到的返回值是 Promise 对象 console.log(axios) 返回 Promise 对象
    const info = axios({
      // 请求方式
      method: 'GET',
      // 请求的地址
      url: 'http://www.liulongbin.top:3006/api/getbooks',
      // URL 中的查询参数（get请求使用params）
      params: {
        id: 1
      },
      // 请求体参数（post请求使用data）
      data: {}
    //Promise 对象的then 方法 指定一个成功的回调函数
    }).then(function (result) {
      console.log(result)
    })
		// 返回一个 Promise 对象
		console.log(info)
  </script>
```

测试结果：

![image-20220418191433317](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301353215.png)

axios 封装的6个属性：

![axios 封装的 6 个属性](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301353148.png)

注意：真实的数据在 result.data 中

### 7.3.2、结合 async 和 await（ES6语法） 调用 axios

```javascript
<script>
document.querySelector('#btnPost').addEventListener('click', async function () {
      // 如果调用某个方法的返回值是 Promise 实例，则前面可以添加 await！
      // await 只能用在被 async “修饰”的方法中
      // 解构赋值，const result = {promise对象中的6个属性}
      // 解构出重点关心的 data 属性 const{data} = await axios({})
    
      const { data } = await axios({
        method: 'POST',
        url: 'http://www.liulongbin.top:3006/api/post',
        data: {
          name: 'zs',
          age: 20
        }
      })

      console.log(data)
    })

    document.querySelector('#btnGet').addEventListener('click', async function () {
      // 解构赋值的时候，使用 : 进行重命名
      // 1. 调用 axios 之后，使用 async/await 进行简化
      // 2. 使用解构赋值，从 axios 封装的大对象中，把 data 属性解构出来
      // 3. 把解构出来的 data 属性，使用 冒号 进行重命名，一般都重命名为 { data: res }
      const { data: res } = await axios({
        method: 'GET',
        url: 'http://www.liulongbin.top:3006/api/getbooks'
      })

      console.log(res.data)
    })

    // $.ajax()   $.get()  $.post()
    // axios()    axios.get()    axios.post()    axios.delete()   axios.put()
```

测试结果：

![image-20220409181040825](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301353860.png)



### 7.3.3、基于 axios.get 和 axios.post 发起请求

```js
<script>
document.querySelector('#btnGET').addEventListener('click', async function () {
      /* axios.get('url地址', {
        // GET 参数
        params: {}
      }) */

      const { data: res } = await axios.get('http://www.liulongbin.top:3006/api/getbooks', {
        params: { id: 3 }
      })
      console.log(res)
    })

    document.querySelector('#btnPOST').addEventListener('click', async function () {
      // axios.post('url', { /* POST 请求体数据 */ })
      const { data: res } = await axios.post('http://www.liulongbin.top:3006/api/post', { name: 'zs', gender: '女' })
      console.log(res)
    })
  </script>
```

测试结果：

![image-20220409183006003](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301353070.png)

### 7.3.4、全局配置 axios 

我们可能会在很多组件里用到数据/实用工具，但是不想污染全局作用域。这种情况下，可以通过在原型上定义它们使其在每个 Vue 的实例中可用。

Vue.prototype 详解，浏览 https://blog.csdn.net/ZYS10000/article/details/107233453/

在 main.js 中添加 axios 到 Vue.prototype，并配置 axios 的请求根路径

```js
import axios from 'axios'

// 全局配置 axios 的请求根路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'
// 把 aioxs 挂载到 Vue.prototype 原型上，供每个 .vue 组件的实例直接使用
// $http 是自定义的名称 
Vue.prototype.$http = axios
// 今后，在每个 .vue 组件中要发起请求，直接调用 this.$http.xxx
```

$ 是在 Vue 所有实例中都可用的 property 的一个简单约定。这样做会避免和已被定义的数据、方法、计算属性产生冲突。

使用全局 axios

- POST

  ```js
  export default {
    methods: {
      async postInfo() {
        const { data: res } = await this.$http.post('/api/post', { name: 'zs', age: 20 })
        console.log(res)
      },
      // 点击按钮，获取图书列表的数据
      async btnGetBooks() {
        const { data: res } = await this.$http.get('/api/getbooks')
        console.log(res)
      }
    }
  }
  ```

- GET

  ```js
  export default {
    methods: {
      async getInfo() {
        const { data: res } = await this.$http.get('/api/get')
        console.log(res)
      },
      // 点击按钮，获取图书列表的数据
      async btnGetBooks() {
        const { data: res } = await this.$http.get('/api/getbooks')
        console.log(res)
      }
    }
  }
  ```

**注意：把 axios 挂载到 Vue 原型上，有一个缺点：不利于 API 接口的复用！！！**

解决方法：将获取列表数据的 API 接口，封装到 utils 目录下的 request 模块中

实现步骤：

1. 一般选择在外面的根目录下，创建`utils`文件夹，`utils`文件夹下创建 `request.js`

   封装request请求的文件

   ```js
   import axios from 'axios'
   
   // 调用 axios.create() 函数，创建一个 axios 的实例对象，用 request 来接收
   
   const request = axios.create({
     // 指定请求路径
     baseURL: 'http://www.liulongbin.top:3006'
   })
   
   export default request
   ```

2. 使用封装好 request 模块

   ```js
   //导入 request 模块
   import request from '@/utils/request.js'
   
   export default {
     methods: {
       // 点击按钮，获取图书列表的数据
       async btnGetBooks() {
         const { data: res } = await request.get('/api/getbooks')
         console.log(res)
       }
     }
   }
   ```

   

### 7.3.5、axios 示例

咱们开发的接口大部分都是采用JSON格式， 可以先在项目里模拟一段JSON数据， 数据内容如下：创建一个名为data.json的文件并填入上面的内容， 放在项目的根目录下

```json
{
  "name": "秋刀鱼",
  "url": "https://www.cnblogs.com/eliaukqy/",
  "page": 1,
  "isNonProfit": true,
  "address": {
    "street": "湖北理工学院",
    "city": "湖北黄石",
    "country": "中国"
  },
  "links": [
    {
      "name": "bilibili",
      "url": "https://space.bilibili.com/95256449"
    },
    {
      "name": "秋刀鱼",
      "url": "https://blog.kuangstudy.com"
    },
    {
      "name": "百度",
      "url": "https://www.baidu.com/"
    }
  ]
}
```

**测试代码**

```html
<!DOCTYPE html>
<html lang="en" xmlns:v-binf="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!--v-cloak 解决闪烁问题-->
    <style>
        [v-cloak]{
            display: none;
        }
    </style>
</head>
<body>
<div id="vue">
    <div>地名：{{info.name}}</div>
    <div>地址：{{info.address.country}}--{{info.address.city}}--{{info.address.street}}</div>
    <div>链接：<a v-binf:href="info.url" target="_blank">{{info.url}}</a> </div>
</div>
<!--引入js文件-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script type="text/javascript">
    var vm = new Vue({
        el:"#vue",
        //data：属性：vm
        data(){
            return{
                info:{
                    name:null,
                    address:{
                        country:null,
                        city:null,
                        street:null
                    },
                    url:null
                }
            }
        },
        mounted(){//钩子函数
            axios
                .get('data.json')
                .then(response=>(this.info=response.data));
        }
    });
</script>
</body>
</html>

```

说明：

1. 在这里使用了v-bind将a:href的属性值与Vue实例中的数据进行绑定
2. 使用axios框架的get方法请求AJAX并自动将数据封装进了Vue实例的数据对象中
3. 我们在data中的数据结构必须和Ajax响应回来的数据格式匹配！



# 八、常用特性概览 (计算属性、自定义事件、侦听器、过滤器)

## 8.1、计算属性

计算属性指的是通过一系列运算之后，最终得到一个属性值。这个动态计算出来的属性值可以被模板结构或 methods 方法使用。示例代码如下：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>计算属性</title>
		<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			<p>{{msg}}</p>
			<p>{{ReverseString}}</p>
		</div>
		<script type="text/javascript">
			var vm = new Vue({
				el : '#app',
				data : {
					msg : 'nihao'
				},
				//逆序输出字符串
				computed:{
					ReverseString(){
						return this.msg.split('').reverse().join('');
					}
				},
             methods: {
                 show(){
                     console.log(this.ReverseString)
                 }
             }
			})
		</script>
	</body>

```

测试结果：

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301353485.png" alt="image-20220323210516595" style="zoom:50%;" />

### 8.1.1、计算属性的特点：

1. 虽然计算属性在**声明的时候**被定义为**方法**，但计算属性的本质是一个属性
2. 计算属性**会缓存计算的结果**，只有计算属性**依赖的数据变化时**，才会重新进行运算

### 8.1.2、computed vs methods

我们可以使用 methods 来替代 computed，效果上两个都是一样的，但是 computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。而使用 methods ，在重新渲染的时候，函数总会重新调用执行。

注意：methods和computed里的东西不能重名

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!--view层，模板-->
<div id="app">
    <p>currentTime1:{{currentTime1()}}</p>
    <p>currentTime2:{{currentTime2}}</p>
</div>

<!--1.导入Vue.js-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
<script type="text/javascript">
    var vm = new Vue({
        el:"#app",
        data:{
          message:"pan"
        },
        methods:{
            currentTime1:function(){
                return Date.now();//返回一个时间戳
            }
        },
        computed:{
            currentTime2:function(){//计算属性：methods，computed方法名不能重名，重名之后，只会调用methods的方法
                this.message;
                return Date.now();//返回一个时间戳
            }
        }
    });
</script>
</body>
</html>
```

**说明：**

- methods：定义方法， 调用方法使用currentTime1()， 需要带括号
- computed：定义计算属性， 调用属性使用currentTime2， 不需要带括号：this.message是为了能够让currentTime2观察到数据变化而变化
- 如何在方法中的值发生了变化，则缓存就会刷新!可以在控制台使用vm.message=”abc"， 改变下数据的值，再次测试观察效果!

**结论：**
  调用方法时，每次都需要讲行计算，既然有计算过程则必定产生系统开销，那如果这个结果是不经常变化的呢?此时就可以考虑将这个结果缓存起来，采用计算属性可以很方便的做到这点，**计算属性的主要特性就是为了将不经常变化的计算结果进行缓存，以节约我们的系统开销；**

### 8.1.3、computed setter

computed 属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>computed setter</title>
		<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">

		</div>
		<script type="text/javascript">
			var vm = new Vue({
				el : '#app',
				data : {
					name : 'Google',
					url: 'http://www.google.com'
				},
				computed:{
					site : {
					//getter
					get:function(){
						return this.name + ' ' + this.url
					},
					//setter
					set : function(newvalue){
						var names = newvalue.split(',')
						this.name = names[0]
						this.url = names[names.length - 1]
					}
				  }
				}
			})
			// 调用 setter， vm.name 和 vm.url 也会被对应更新
			vm.site = 'baidu,http://www.baidu.com';
			document.write('name: '+vm.name);
			document.write('<br>');
			document.write('url: '+vm.url)
		</script>
	</body>
</html>

```

测试结果：

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301354227.png" alt="image-20220323210916204" style="zoom: 80%;" />

从实例运行结果看在运行 vm.site = 'baidu,http://www.baidu.com'; 时，setter 会被调用， vm.name 和 vm.url 也会被对应更新。





## 8.3、自定义事件

通以上代码不难发现，数据项在Vue的实例中， 但删除操作要在组件中完成， 那么组件如何才能删除Vue实例中的数据呢?此时就涉及到参数传递与事件分发了， Vue为我们提供了自定义事件的功能很好的帮助我们解决了这个问题； 使用this.$emit(‘自定义事件名’， 参数) ， 操作过程如下：

 1-在vue的实例中增加了methods对象并定义了一个名为removeTodoltems的方法

```javascript
var vm = new Vue({
        el:"#vue",
        data:{
            title_text:"秦老师系列课程",
            todoItems:['test1','test2','test3']
        },
        methods:{
            removeItems:function(index){
                console.log("删除了"+this.todoItems[index]+"OK");
                //splice（） 方法向/从数组中添加/删除项目，然后返回被删除的项目，其中index
                this.todoItems.splice(index,1);
            }
        }
    });
```

2-修改todo-items待办内容组件的代码，增加一个删除按钮，并且绑定事件！

```javascript
Vue.component("todo-items",{
        props:["item_p","index_p"],
        template:"<li>{{index_p+1}},{{item_p}} <button @click='remove'>删除</button></li>",
        methods:{
            remove:function (index) {
            //这里的remove是自定义事件名称，需要在HTML中使用v-on:remove的方式
                //this.$emit 自定义事件分发
                this.$emit自定义事件分发this.emit 自定义事件分发
                this.
emit自定义事件分发this.emit('remove',index);
            }
        }
    });
```

3-修改todo-items待办内容组件的HTML代码，增加一个自定义事件，比如叫remove，可以和组件的方法绑定，然后绑定到vue的方法！

```html
<!--增加了v-on:remove="removeTodoItems(index)"自定义事件，该组件会调用Vue实例中定义的-->
<todo-items slot="todo-items" v-for="(item,index) in todoItems"
                    :item_p="item" :index_p="index" v-on:remove="removeItems(index)" :key="index"></todo-items>

```

**对上一个代码进行修改，实现删除功能**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!--view层，模板-->
<div id="vue">
    <todo>
        <todo-title slot="todo-title" :title="title_text"></todo-title>
        <!--<todo-items slot="todo-items" v-for="(item,index) in todoItems" v-bind:item="item"></todo-items>-->
        <!--如下为简写-->
        <todo-items slot="todo-items" v-for="(item,index) in todoItems"
                    :item_p="item" :index_p="index" v-on:remove="removeItems(index)" :key="index"></todo-items>
    </todo>
</div>
<!--1.导入Vue.js-->
<script src="../js/vue.js"></script>
<script type="text/javascript">
    Vue.component('todo',{
        template:'<div>\
                <slot name="todo-title"></slot>\
                <ul>\
                    <slot name="todo-items"></slot>\
                </ul>\
            </div>'
    });
    Vue.component('todo-title',{
        props:['title'],
        template:'<div>{{title}}</div>'
    });
    //这里的index，就是数组的下标，使用for循环遍历的时候，可以循环出来！
    Vue.component("todo-items",{
        props:["item_p","index_p"],
        template:"<li>{{index_p+1}},{{item_p}} <button @click='remove_methods'>删除</button></li>",
        methods:{
            remove_methods:function (index) {
                //this.$emit 自定义事件分发
                this.$emit('remove',index);
            }
        }
    });

    var vm = new Vue({
        el:"#vue",
        data:{
            title_text:"秦老师系列课程",
            todoItems:['test1','test2','test3']
        },
        methods:{
            removeItems:function(index){
                console.log("删除了"+this.todoItems[index]+"OK");
                this.todoItems.splice(index,1);
            }
        }
    });
</script>
</body>
</html>
```

**逻辑理解**

![Vue学习笔记.assets/05d401d4852fb1a8d5136c3c722827be.png](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301354349.png)

**8.4、Vue入门小结**

核心：数据驱动，组件化

优点：借鉴了AngularJS的模块化开发和React的虚拟Dom，虚拟Dom就是把Demo操作放到内存中执行；

- 常用的属性：
- v-if
- v-else-if
- v-else
- v-for
- v-on绑定事件，简写@
- v-model数据双向绑定
- v-bind给巨剑绑定参数，简写：

组件化：

- 组合组件slot插槽
- 组件内部绑定事件需要使用到this.$emit("事件名",参数);
- 计算属性的特色，缓存计算数据

遵循SoC关注度分离原则，Vue是纯粹的视图框架，并不包含，比如Ajax之类的通信功能，为了解决通信问题，我们需要使用Axios框架做异步通信；

**说明**

Vue的开发都是要基于NodeJS，实际开发采用Vue-cli脚手架开发，vue-router路由，vuex做状态管理；Vue UI，界面我们一般使用ElementUI（饿了么出品），或者ICE（阿里巴巴出品）来快速搭建前端项目~~

官网：

[https://element.eleme.cn/#/zh-CN](https://)

[https://ice.work/](https://)

## 8.4、watch 侦听器

watch 侦听器允许开发者监视数据的变化，从而针对数据的变化做特定的操作。

### 8.4.1、图示侦听器的过程

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301354362.png" alt="image-20220323212839860" style="zoom:80%;" />

### 8.4.2、侦听器的应用场景

虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 `watch` 选项提供了一个更通用的方法，来响应数据的变化。**当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的**。

### 8.4.3、侦听器案例

案例：验证用户名是否可用

需求：输入框中输入姓名，失去焦点时验证是否存在，如果已经存在，提示重新输入，如果不存在，提示可以使用。

需求分析：

1. 通过 v-model 实现数据绑定
2. 需要提供提示信息
3. 需要侦听器监听输入信息的变化
4. 需要修改触发的事件

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>侦听器案例</title>
		<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			<div>
				<span>用户名：</span>
				<span>
					<!-- 从实时验证改为失去焦点时验证 -->
					<input type="text" v-model.lazy="username">
				</span>
				<span>{{tip}}</span>
			</div>
		</div>
		<script type="text/javascript">
		/*
			侦听器
			1.采用侦听器监听用户名的变化
			2.请用后台接口进行验证
			3.根据验证的结果调整提示值
		*/
			var vm = new Vue({
				el: '#app',
				data: {
					username: '',
					tip: ''
				},
				methods:{
					checkName : function(uname){
						//调用接口，但是可以使用定时任务的方式模拟接口调用
						var that = this;
						setTimeout(function(){
							//模拟接口调用
							//settimeout中的this对象是Windows，所以在外面先获取this对象
							if(uname == 'admin'){
								that.tip = '用户名已经存在，请更换一个'
							}else{
								that.tip = '用户名可以使用'
							}
						},2000)
					}
				},
				watch: {
					//侦听器本质上是一个函数，要监测哪个数据的变化，就把数据名作为方法名即可
					//数据变化时触发函数，函数的参数 val 表示的是 当前属性的最新值
					username: function(val) {
						this.checkName(val);
						this.tip = '正在验证...';
					}
				}
			})
		</script>
	</body>
</html>

```

测试结果：

此时正在模拟接口正在调用

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301354258.png" alt="image-20220323213654869" style="zoom:67%;" />

数据发生变化时触发 `usename` 的监听事件，先模拟接口提示验证信息，在两秒后调用一次 `checkName()` 方法进行验证。

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301354316.png" alt="image-20220323214434857" style="zoom:67%;" />

#### 8.4.3.1使用 watch 和 ajax 检测用户名是否可用

```js
 <script src="./lib/jquery-v3.6.0.js"></script>
  <script>
    const vm = new Vue({
      el: '#app',
      data: {
        username: 'admin'
      },
      // 所有的侦听器，都应该被定义到 watch 节点下
      watch: {
        // 侦听器本质上是一个函数，要监视哪个数据的变化，就把数据名作为方法名即可
        // 新值在前，旧值在后
        username(newVal) {
          // 请求的值不能为空，否则会报错。因此在值为空的时候结束侦听
          if (newVal === '') return
          // 1. 调用 jQuery 中的 Ajax 发起请求，判断 newVal 是否被占用！！！
          $.get('https://www.escook.cn/api/finduser/' + newVal, function (result) {
            console.log(result)
          })
        }
      }
    })
  </script>
```

测试结果：

调用接口检测 admin 用户名不可用

![Vue学习笔记.assets/image-20220415192841220](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301354132.png)

**监听器的应用场景：监听某个数据发生的变化，并执行一件事**

### 8.4.4、侦听器 vs 计算属性

- 示例:

  ```js
  <!DOCTYPE html>
  <html>
  	<head>
  		<meta charset="utf-8">
  		<title>侦听器</title>
  		<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  	</head>
  	<body>
  		<div id="app">
  			<div>
  				<span>名：</span>
  				<span>
  					<input type="text" v-model="FirstName">
  				</span>
  			</div>
  			<div>
  				<span>姓：</span>
  				<span>
  					<input type="text" v-model="LastName">
  				</span>
  			</div>
  			<div>{{FullName}}</div>
  		</div>
  		<script type="text/javascript">
  			var vm = new Vue({
  				el: '#app',
  				data: {
  					LastName: '',
  					FirstName: '',
  					FullName: ''
  				},
  				computed:{
  					FullName : function(){
  						return this.FirstName + ' ' +this.LastName; 
  					}
  				}
  				,
  				watch: {
  					//函数名要和 data 中的属性名保持一致
  					//数据变化时触发函数，函数的参数 val 表示的是 当前属性的最新值
  				 //function 有两个参数 第一个参数是：当前属性最新的值  第二个参数：发生改变之前的值（新值在前旧值在后）
  					FirstName: function(val) {
  						this.FullName = val + ' ' + this.LastName;
  					},
  					LastName: function(val) {
  						this.FullName = this.FirstName + ' ' + val;
  					}
  				}
  			})
  		</script>
  	</body>
  </html>
  
  ```

  测试结果：

  <img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301354823.png" alt="image-20220323213415538" style="zoom:80%;" />

  此示例计算属性效率更高，当处理异步或开销比较大的时候使用侦听器效果更好。


### 8.4.5、以上都属于使用方法来定义侦听器

### 8.4.6、对象格式来定义侦听函数(immediate、deep的使用)

- **immediate** **选项**

  默认情况下，组件在初次加载完毕后不会调用 watch 侦听器。如果想让 watch 侦听器立即被调用，则需要使用 immediate 选项。示例代码如下：

  ```js
   <script>
      const vm = new Vue({
        el: '#app',
        data: {
          username: 'admin'
        },
        // 所有的侦听器，都应该被定义到 watch 节点下
        watch: {
          // 定义对象格式的侦听器
          // handler 是固定写法，表示当 username 的值变化时，自动调用 handler 处理函数
          username: {
            // 侦听器的处理函数
            handler(newVal, oldVal) {
              console.log(newVal, oldVal)
            },
            // immediate 选项的默认值是 false
            // immediate 的作用是：控制侦听器是否自动触发一次！
            // 表示页面初次渲染好之后，就立即触发当前的 watch 侦听器
            immediate: true
          }
        }
      })
    </script>
  ```

  测试结果:

  ![image-20220415194120924](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301354725.png)

- deep 选项

  如果 watch 侦听的是一个对象，如果对象中的属性值发生了变化，则无法被监听到。此时需要使用 deep 选项，代码示例如下：

  ```js
  <script>
      const vm = new Vue({
        el: '#app',
        data: {
          // 用户的信息对象
          info: {
            username: 'admin',
            address: {
              city: '北京'
            }
          }
        },
        // 所有的侦听器，都应该被定义到 watch 节点下
        watch: {
           info: {
            handler(newVal) {
              console.log(newVal)
            },
            // 开启深度监听，只要对象中任何一个属性变化了，都会触发“对象的侦听器”
            deep: true
          } 
        }
      })
    </script>
  ```

- 侦听对象子属性的变化也可以使用方法的格式

  ```js
  <script>
      const vm = new Vue({
        el: '#app',
        data: {
          // 用户的信息对象
          info: {
            username: 'admin',
            address: {
              city: '北京'
            }
          }
        },
        // 所有的侦听器，都应该被定义到 watch 节点下
        watch: {
          // 如果要侦听的是对象的子属性的变化，则必须包裹一层单引号
          'info.username'(newVal) {
            console.log(newVal)
          }
        }
      })
    </script>
  ```

### 8.4.6、总结:

侦听器的格式

1. 方法格式的侦听器
   + 缺点1：无法在刚进入页面的时候，自动触发！！！
   + 缺点2：如果侦听的是一个对象，如果对象中的属性发生了变化，不会触发侦听器！！！
2. 对象格式的侦听器
   + 好处1：可以通过 **immediate** 选项，让侦听器自动触发！！！
   + 好处2：可以通过 **deep** 选项，让侦听器深度监听对象中每个属性的变化！！！



## 8.5、过滤器

### 8.5.1、过滤器的基本使用

1. 定义过滤器

   - 第一个参数是过滤器的名字

   - 第二个参数是过滤器的功能函数 (若不定义vue就不知道这个字符串是什么，有什么作用)。

     过滤器的功能函数

     - 声明 `function(data,argv1,argv2...){}`
     - 第一个参数是传入的要过滤的数据，即调用时管道符左边的内容。
     - 第二个参数开始往后就是调用过滤器的时候传入的参数。

2. 过滤器的作用是什么？

   过滤器是用来格式化数据的一个函数。**过滤器不会修改原始数据**，它的作用是过滤数据，就是**对数据进行加工处理并返回处理后的数据**，比如做一些数据格式上的修改，状态转换等。

3. 过滤器的用法

   过滤器可以用在两个地方：**插值表达式 和 `v-bind` 表达式**过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：

   ```html
   <!-- 在双花括号中 -->
   {{ message | capitalize }}
   
   <!-- 在 `v-bind` 中 -->
   <div v-bind:id="rawId | formatId"></div>
   ```

### 8.5.2、私有过滤器和全局过滤器

```html
<!-- 在双花括号中 -->
{{ message | capitalize }}

<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | formatId"></div>
```

在 filters 节点下定义的过滤器，称为“私有过滤器”，因为它只能在当前 vm 实例所控制的 el 区域内使用：

```javascript
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```

如果希望在多个 vue 实例之间共享过滤器，则可以按照如下的格式定义全局过滤器：

```javascript
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
new Vue({
  // ...
})
```

当全局过滤器和局部过滤器重名时，会采用局部过滤器。

### 8.5.3、连续调用多个过滤器

过滤器可以串联地进行调用，例如：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>过滤器</title>
		<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			<input type="text" v-model="msg">
			<div>{{msg|upper}}</div>
			<div>{{msg||upper||lower}}</div>
			<div :id= "msg|upper">测试数据</div>
		</div>
		<script type="text/javascript">
			Vue.filter('upper',function(val){
				//过滤器业务逻辑
				return val.charAt(0).toUpperCase() + val.slice(1);
			})
			var vm = new Vue({
				el : '#app',
				data : {
					msg : ''
				},
				//定义局部过滤器
				filters:{
					lower : function(val){
						return val.charAt(0).toLowerCase() + val.slice(1);
					}
				}
			})
		</script>
	</body>
</html>


```

**总结：**

```html
{{ msg || upper }}
```

过滤器函数总接收表达式的值 (之前的操作链的结果) 作为第一个参数。在上述例子中，`upper` 过滤器函数将会收到 `msg` 的值作为第一个参数。

过滤器可以串联：

```html
{{ msg || upper || lower }}
```

在这个例子中，`upper` 被定义为接收单个参数的过滤器函数，表达式 `msg` 的值将作为参数传入到函数中。然后继续调用同样被定义为接收单个参数的过滤器函数 `lower`，将 `upper` 的结果传递到 `lower` 中。

过滤器是 JavaScript 函数，因此可以接收参数：

```html
{{ message | filterA('arg1', arg2) }}
```

这里，`filterA` 被定义为接收三个参数的过滤器函数。其中 `message` 的值作为第一个参数，普通字符串 `'arg1'` 作为第二个参数，表达式 `arg2` 的值作为第三个参数。

### 8.5.4、带参数的过滤器

过滤器的本质是 JavaScript 函数，因此可以接收参数，格式如下：

```html
<!-- arg1 和 arg2 是传递给 filterA 的参数 -->
<p>{{ message | filterA(arg1,arg2)}}</p>

<!--过滤器处理函数的形参列表中：-->
<!-- 第一个参数：永远都是“管道符”前面待处理的值 -->
<!-- 从第二个参数开始，才是调用过滤器时传递过来的 arg1 和 arg2 参数 -->
Vue.filter('filterA',(msg,arg1,arg2) => {
<!-- 过滤器的代码逻辑 -->
})
```

**案例：使用过滤器格式化日期**

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>带参数的过滤器</title>
		<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			<div>
				{{date|format('yyyy-MM-dd hh:mm:ss')}}
			</div>
		</div>
		<script type="text/javascript">
			// Vue.filter('format',function(val,arg){
			// 	if(arg == 'yyyy-MM-dd'){
			// 		var reg;
			// 		reg = val.getFullYear() +'-' + (val.getMonth()+1) + '-' + val.getDate();
			// 		return reg;
			// 	}
			// 	return val;
			// })
            
			//val 即传入要过滤的数据 date, arg 即传入的参数 yyyy-MM-dd
			Vue.filter('format', function(val, arg) {
				//函数 dateFormat  定义形参 需要过滤的数据 date  过滤的格式 format
				function dateFormat(date, format) {
				    if (typeof date === "string") {
						var mts = date.match(/(\/Date\((\d+)\)\/)/);
						if (mts && mts.length >= 3) {
							date = parseInt(mts[2]);
						}
					}
					date = new Date(date);
					if (!date || date.toDateString() == "Invalid Date") {
						return "";
					}
					var map = {
						"M": date.getMonth() + 1, // 月份
						"d": date.getDate(), // 日
						"h": date.getHours(), // 小时
						"m": date.getMinutes(), // 分
						"s": date.getSeconds(), // 秒
						"q": Math.floor((date.getMonth() + 3) / 3), //季度
						"S": date.getMilliseconds() //毫秒
					};
					format = format.replace(/([yMdhmsqS])+/g, function(all, t) {
						var v = map[t];
						if (v !== undefined) {
							if (all.length > 1) {
								v = '0' + v;
								v = v.substr(v.length - 2);
							}
							return v;
						} else if (t === 'y') {
							return (date.getFullYear() + '').substr(4 - all.length);
						}
						return all;
					});
					return format;
				}
				//调用dateFormat函数并返回格式化后的日期
				//对数据进行加工处理并返回处理后的数据
				return dateFormat(val,arg)
			})
			var vm = new Vue({
				el: '#app',
				data: {
					//获取当前日期
					date: new Date()
				}
			})
		</script>
	</body>
</html>

```

测试结果：

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301355686.png" alt="image-20220323224147011" style="zoom:67%;" />

# 九、vue-cli

## 9.1、什么是vue-cli

vue-cli官方提供的一个脚手架，用于快速生成一个vue的项目模板；

预先定义好的目录结构及基础代码，就好比咱们在创建Maven项目时可以选择创建一个骨架项目，这个估计项目就是脚手架，我们的开发更加的快速；

中文官网：https://cli.vuejs.org/zh/

**项目的功能：**

- 统一的目录结构
- 本地调试
- 热部署
- 单元测试
- 集成打包上线

## 9.2、需要的环境

- Node.js：[http://nodejs.cn/download/](https://)

  安装就是无脑的下一步就好，安装在自己的环境目录下

- Git：[https://git-scm.com/doenloads](https://)

  镜像：[https://npm.taobao.org/mirrors/git-for-windows/](https://)

**确认nodejs安装成功：**

- cmd下输入node -v，查看是否能够正确打印出版本号即可！
- cmd下输入npm -v，查看是否能够正确打印出版本号即可！
  这个npm，就是一个软件包管理工具，就和linux下的apt软件安装差不多！
**安装Node.js淘宝镜像加速器（cnpm）**
这样的话，下载会快很多~

```
#-g 就是全局安装
npm install cnpm -g

#或使用如下语句解决npm速度慢的问题
npm install --registry=https://registry.npm.taobao.org
```

安装的过程可能有点慢~，耐心等待！虽然安装了cnpm，但是尽量少用！

  安装的位置：`C:\Users\administrator\AppData\Roaming\npm`

![Vue学习笔记.assets/461afcb940922444efca074b6e4a7841.png](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301355521.png)

<br/>

  **安装vue-cli**

```
cnpm instal1 vue-cli-g
#测试是否安装成功#查看可以基于哪些模板创建vue应用程序，通常我们选择webpack
vue list
```

![120c1970be45960f24799dc32a8f783b4.png](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301355911.png)

## 9.3、vue 项目的运行流程

在工程化的项目中，vue 要做的事情很单纯：通过 main.js 把 App.vue 渲染到 index.html 的指定区域中。

其中：

① App.vue 用来编写待渲染的模板结构

② index.html 中需要预留一个 el 区域 

③ main.js 把 App.vue 渲染到了 index.html 所预留的区域中

## 9.4、第一个vue-cli应用程序

1.创建一个Vue项目，我们随便建立一个空的文件夹在电脑上，我这里在D盘下新建一个目录

```
D:\Project\vue-study;
```

2.创建一个基于webpack模板的vue应用程序

```
#1、首先需要进入到对应的目录 cd D:\Project\vue-study
#2、这里的myvue是顶日名称，可以根据自己的需求起名
vue init webpack myvue

```

一路都选择no即可；

  **说明：**

- Project name：项目名称，默认回车即可
- Project description：项目描述，默认回车即可
- Author：项目作者，默认回车即可
- Install vue-router：是否安装vue-router，选择n不安装（后期需要再手动添加）
- Use ESLint to lint your code:是否使用ESLint做代码检查，选择n不安装（后期需要再手动添加)
- Set up unit tests:单元测试相关，选择n不安装（后期需要再手动添加）
- Setupe2etests with Nightwatch：单元测试相关，选择n不安装（后期需要再手动添加）
- Should we run npm install for you after the,project has been created:创建完成后直接初始化，选择n，我们手动执行；运行结果！

**（1）初始化并运行**

```
cd myvue
npm install
npm run dev
```

执行完成后，目录多了很多依赖

当出现问题时，可以查看提示进行处理如下

![5f4c94d19107d70771f295600c5cba76.png](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301355728.png)

# 十、webpack使用

## 10.1、什么是Webpack

本质上， webpack是一个现代JavaScript应用程序的静态模块打包器(module bundler) 。当webpack处理应用程序时， 它会递归地构建一个依赖关系图(dependency graph) ， 其中包含应用程序需要的每个模块， 然后将所有这些模块打包成一个或多个bundle.
  Webpack是当下最热门的前端资源模块化管理和打包工具， 它可以将许多松散耦合的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分离，等到实际需要时再异步加载。通过loader转换， 任何形式的资源都可以当做模块， 比如Commons JS、AMD、ES 6、CSS、JSON、Coffee Script、LESS等；
  伴随着移动互联网的大潮， 当今越来越多的网站已经从网页模式进化到了WebApp模式。它们运行在现代浏览器里， 使用HTML 5、CSS 3、ES 6等新的技术来开发丰富的功能， 网页已经不仅仅是完成浏览器的基本需求； WebApp通常是一个SPA(单页面应用) ， 每一个视图通过异步的方式加载，这导致页面初始化和使用过程中会加载越来越多的JS代码，这给前端的开发流程和资源组织带来了巨大挑战。
  前端开发和其他开发工作的主要区别，首先是前端基于多语言、多层次的编码和组织工作，其次前端产品的交付是基于浏览器的，这些资源是通过增量加载的方式运行到浏览器端，如何在开发环境组织好这些碎片化的代码和资源，并且保证他们在浏览器端快速、优雅的加载和更新，就需要一个模块化系统，这个理想中的模块化系统是前端工程师多年来一直探索的难题。

## 10.2、模块化的演进

**Script标签**

```javascript
<script src = "module1.js"></script>
<script src = "module2.js"></script>
<script src = "module3.js"></script>
```

这是最原始的JavaScript文件加载方式，如果把每一个文件看做是一个模块，那么他们的接口通常是暴露在全局作用域

下，也就是定义在window对象中，不同模块的调用都是一个作用域。

  这种原始的加载方式暴露了一些显而易见的弊端：

- 全局作用域下容易造成变量冲突
- 文件只能按照`<script>`的书写顺序进行加载
- 开发人员必须主观解决模块和代码库的依赖关系
- 在大型项目中各种资源难以管理，长期积累的问题导致代码库混乱不堪

**CommonsJS**

服务器端的NodeJS遵循CommonsJS规范，该规范核心思想是允许模块通过require方法来同步加载所需依赖的其它模块，然后通过exports或module.exports来导出需要暴露的接口。

```javascript
require("module");
require("../module.js");
export.doStuff = function(){};
module.exports = someValue;
```

**优点：**

- 服务器端模块便于重用
- NPM中已经有超过45万个可以使用的模块包
- 简单易用

**缺点：**

- 同步的模块加载方式不适合在浏览器环境中，同步意味着阻塞加载，浏览器资源是异步加载的
- 不能非阻塞的并行加载多个模块

**实现：**

服务端的NodeJS

Browserify，浏览器端的CommonsJS实现，可以使用NPM的模块，但是编译打包后的文件体积较大

modules-webmake，类似Browserify，但不如Browserify灵活

wreq，Browserify的前身

**AMD**

Asynchronous Module Definition规范其实主要一个主要接口define(id?,dependencies?,factory);它要在声明模块的时候指定所有的依赖dependencies，并且还要当做形参传到factory中，对于依赖的模块提前执行。

```javascript
define("module",["dep1","dep2"],functian(d1,d2){
    return someExportedValue;
});
require（["module","../file.js"],function(module，file){});
```

**优点**

- 适合在浏览器环境中异步加载模块
- 可以并行加载多个模块

**缺点**

- 提高了开发成本，代码的阅读和书写比较困难，模块定义方式的语义不畅
- 不符合通用的模块化思维方式，是一种妥协的实现

**实现**

- RequireJS
- curl

**CMD**

Commons Module Definition规范和AMD很相似，尽保持简单，并与CommonsJS和NodeJS的Modules规范保持了很

大的兼容性。

```javascript
define(function(require,exports,module){
    var $=require("jquery");
    var Spinning = require("./spinning");
    exports.doSomething = ...;
    module.exports=...;
});
```

**优点：**

- 依赖就近，延迟执行
- 可以很容易在NodeJS中运行缺点
- 依赖SPM打包，模块的加载逻辑偏重

**实现**

- Sea.js
- coolie

**ES6模块**

EcmaScript 6标准增加了JavaScript语言层面的模块体系定义。ES 6模块的设计思想， 是尽量静态化， 使编译时就能确定模块的依赖关系， 以及输入和输出的变量。Commons JS和AMD模块，都只能在运行时确定这些东西。

```javascript
import "jquery"
export function doStuff(){}
module "localModule"{}
```

**优点**

- 容易进行静态分析
- 面向未来的Ecma Script标准

**缺点**

- 原生浏览器端还没有实现该标准
- 全新的命令，新版的Node JS才支持

**实现**

- Babel

**大家期望的模块**

  系统可以兼容多种模块风格， 尽量可以利用已有的代码， 不仅仅只是JavaScript模块化， 还有CSS、图片、字体等资源也需要模块化。

## 10.3、安装Webpack

WebPack是一款模块加载器兼打包工具， 它能把各种资源， 如JS、JSX、ES 6、SASS、LESS、图片等都作为模块来处理和使用。

  **安装：**

```
npm install webpack -g
npm install webpack-cli -g
```

测试安装成功

- webpack -v
- webpack-cli -v

![95ac3f86e6fc6cba1c528ec28d86ad15.png](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301355475.png)

**配置**

创建 `webpack.config.js`配置文件

- entry：入口文件， 指定Web Pack用哪个文件作为项目的入口
- output：输出， 指定WebPack把处理完成的文件放置到指定路径
- module：模块， 用于处理各种类型的文件
- plugins：插件， 如：热更新、代码重用等
- resolve：设置路径指向
- watch：监听， 用于设置文件改动后直接打包

```javascript
module.exports = {
    entry:"",
    output:{
        path:"",
        filename:""
    },
    module:{
        loaders:[
            {test:/\.js$/,;\loade:""}
        ]
    },
    plugins:{},
    resolve:{},
    watch:true
}
```

直接运行`webpack`命令打包

## 10.4、使用webpack

1. 创建项目
2. 创建一个名为modules的目录，用于放置JS模块等资源文件
3. 在modules下创建模块文件，如hello.js，用于编写JS模块相关代码

```javascript
//暴露一个方法：sayHi
exports.sayHi = function(){
    document.write("<div>Hello Webpack</div>");
}
```

4. 在modules下创建一个名为main.js的入口文件，用于打包时设置entry属性

```javascript
//require 导入一个模块，就可以调用这个模块中的方法了
var hello = require("./hello");
hello.sayHi();
```

5. 在项目目录下创建webpack.config.js配置文件，使用webpack命令打包

```javascript
module.exports = {
    entry:"./modules/main.js",
    output:{
        filename:"./js/bundle.js"
    }
}
```

6. 在项目目录下创建HTML页面，如index.html，导入webpack打包后的JS文件

```html
<!DOCTYPE html>
 <html lang="en">
     <head>
         <meta charset="UTF-8">
         <title>狂神说Java</title>
     </head>
     <body>
         <script src="dist/js/bundle.js"></script>
     </body>
 </html>

```

7. 在IDEA控制台中直接执行webpack；如果失败的话，就使用管理员权限运行即可！
8. 运行HTML看效果

**说明**

```
#参数--watch 用于监听变化
webpack --watch
```

# 十一、vue-router路由

## 11.1、说明

- 什么是前端路由：Hash 地址与组件之间的**对应关系**


- 前端路由的工作方式：
  - 用户点击了页面上的路由链接
  
  - 导致了 URL 地址栏中的 Hash 值发生了变化
  
- 前端路由监听到了 Hash 地址的变化
  
  - 前端路由把当前 Hash 地址对应的组件渲染到浏览器中
  
    ![image-20220416122605954](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301355155.png)
  
- SPA 与前端路由

  - SPA 指的是一个 web 网站只有唯一的一个 HTML 页面，所有组件的展示与切换都在这唯一的一个页面内完成。

    此时，不同组件之间的切换需要通过前端路由来实现。

  - 结论：在 SPA 项目中，不同功能之间的切换，要依赖于前端路由来完成！

  

Vue Router是Vue.js官方的路由管理器。它和Vue.js的核心深度集成， 让构建单页面应用变得易如反掌。包含的功能有：

- 嵌套的路由/视图表
- 模块化的、基于组件的路由配置
- 路由参数、查询、通配符
- 基于Vue js过渡系统的视图过渡效果
- 细粒度的导航控制
- 带有自动激活的CSS class的链接
- HTML5 历史模式或hash模式， 在IE 9中自动降级
- 自定义的滚动行为

## 11.2、手动实现简易的路由

- 步骤1：通过 `<component>` 标签，结合 comName 动态渲染组件。

- 步骤2：在 App.vue 组件中，为 `<a>` 链接添加对应的 hash 值：

- 步骤3：在 created 生命周期函数中，监听浏览器地址栏中 hash 地址的变化，动态切换要展示的组件的名称：

  示例代码：

  ```html
  <template>
    <div class="app-container">
      <h1>App 根组件</h1>
  
      <a href="#/home">首页</a>
      <a href="#/movie">电影</a>
      <a href="#/about">关于</a>
      <hr />
  <!-- 通过 is 属性，指定要展示的组件的名称 -->
      <component :is="comName"></component>
    </div>
  </template>
  
  <script>
  // 导入组件
  import Home from '@/components/Home.vue'
  import Movie from '@/components/Movie.vue'
  import About from '@/components/About.vue'
  
  export default {
    name: 'App',
    data() {
      return {
        // 在动态组件的位置，要展示的组件的名字，值必须是字符串
        comName: 'Home'
      }
    },
    created() {
      // 只要当前的 App 组件一被创建，就立即监听 window 对象的 onhashchange 事件
      // 普通函数 this 指向调用它的对象，箭头函数中本身没有 this ，但是它在声明时可以捕获其 		   所在上下文的this供自己使用。
      window.onhashchange = () => {
        console.log('监听到了 hash 地址的变化', location.hash)
        switch (location.hash) {
          case '#/home':
            this.comName = 'Home'
            break
          case '#/movie':
            this.comName = 'Movie'
            break
          case '#/about':
            this.comName = 'About'
            break
        }
      }
    },
    // 注册组件
    components: {
      Home,
      Movie,
      About
    }
  }
  </script>
  <style lang="less" scoped>
  .app-container {
    background-color: #efefef;
    overflow: hidden;
    margin: 10px;
    padding: 15px;
    > a {
      margin-right: 10px;
    }
  }
  </style>
  
  ```

  测试结果：

  ![image-20220404172923071](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301420497.png)

  补充：普通函数和箭头函数的区别

  **1、箭头函数是匿名函数，不能作为构造函数，不能使用new，普通函数可以作为构造函数，使用new。**

  <img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301355031.png" alt="img" style="zoom:50%;" />

  <img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301355795.png" alt="img" style="zoom: 67%;" />

   **2、箭头函数捕获上下文中的this作为自己的this，普通函数指向调用它的对象**

  

  <img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301356700.png" alt="img" style="zoom: 50%;" />

  3、箭头函数采用rest参数传递实参，普通函数采用arguments解决实参传递

  <img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301356154.png" alt="img" style="zoom: 67%;" />

   4、箭头函数没有原型属性

  <img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301356189.png" alt="img" style="zoom: 67%;" />

## 11.3、vue-router 的基本用法

### 11.3.1、在项目中安装 vue-router

在 vue2 的项目中，安装 vue-router 的命令如下：

```
npm i vue-router@3.5.2 -S
```

### 11.3.2、创建路由模板

在 src 源代码目录下，新建 router/index.js 路由模块，并初始化如下的代码：

```javascript
//导入 Vue 和 VueRouter 的包
import Vue from 'vue'
import VueRouter from 'vue-router'

//调用Vue.use()函数，把 VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

//创建路由的实例对象
const router = new VueRouter()

//向外共享路由实例对象
export default router
```

### 11.3.3、导入并挂载路有模板

在 src/main.js 入口文件中，导入并挂载路由模块。示例代码如下：

```javascript
import Vue from 'vue'
import App from './App2.vue'

//导入路由模块
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //挂载路由模块
  router: router
}).$mount('#app')

```

### 11.3.4、声明路由链接和占位符

在 src/App.vue 组件中，使用 vue-router 提供的 `<router-link`> 和 `<router-view>` 声明路由链接和占位符：

```html
<template>
  <div class="app-container">
      <h1>App 组件</h1>
    <!-- 定义路由链接 -->
    <!-- <a href="#/home">首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a> -->
    <!-- 当安装配置了vue-router后，就可以使用 router-link 来替代普通路由的 a 链接 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/movie">电影</router-link>
    <router-link to="about">关于</router-link>
    <hr>

    <!-- 定义路由占位符 -->
    <router-view></router-view>
  </div>
</template>
```

### 11.3.5、声明路由的匹配规则

在 src/router/index.js 路由模块中，通过 routes 数组声明路由的匹配规则。示例代码如下：

```javascript
//导入 Vue 和 VueRouter 的包
import Vue from 'vue'
import VueRouter from 'vue-router'

//调用Vue.use()函数，把 VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

//导入需要使用路由切换展示的组件
import Home from '../components/Home.vue'
import Movie from '../components/Movie.vue'
import About from '../components/About.vue'

//创建路由的实例对象
const router =  new VueRouter({
    //routes 是一个数组，作用：定义“hash”地址与“组件”之间的对应关系
    routes:[//在 routes 数组中，声明路由的匹配规则
        //path 表示要匹配的 hash 地址；component 表示要展示的路由组件
        {path:'/home',component:Home},
        {path:'/movie',component:Movie},
        {path:'/about',component:About},
        {path:'/',component:Home}
    ]
})

//向外共享路由实例对象
export default router
```

## 11.4、vue-router 的常见用法

### 11.4.1、路由重定向

路由重定向指的是：用户在访问地址 A 的时候，强制用户跳转到地址 C ，从而展示特定的组件页面。通过路由规则的 redirect 属性，指定一个新的路由地址，可以很方便地设置路由的重定向：

```js
//创建路由的实例对象
const router =  new VueRouter({
    routes:[//在 routes 数组中，声明路由的匹配规则
        //当用户访问 / 的时候，通过 redirect 属性跳转到 /home 对应的路由规则
        {path: '/',redirect: '/home'},
        //path 表示要匹配的 hash 地址；component 表示要展示的路由组件
        {path: '/home',component: Home},
        {path: '/movie',component: Movie},
        {path: '/about',component: About},
       
    ]
})
```

### 11.4.2、嵌套路由

通过路由实现组件的嵌套展示，叫做嵌套路由。

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301356539.png" alt="image-20220419082734367" style="zoom:67%;" />

### 11.4.3、声明子路由链接和子路由占位符

在 About.vue 组件中，声明 tab1 和 tab2 的子路由链接以及子路由占位符。示例代码如下：

```html
<template>
  <div class="about-container">
    <h3>About 组件</h3>

    <!-- 声明两个子级路由链接 -->
    <router-link to="/about">tab1</router-link>
    <router-link to="/about/tab2">tab2</router-link>

    <hr />

    <!-- 声明子级路由占位符 -->
    <router-view></router-view>
  </div>
</template>
```

测试结果：

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301356869.png" alt="image-20220419083101540" style="zoom:50%;" />

### 11.4.4、通过 children 属性声明子路由规则

在 src/router/index.js 路由模块中，导入需要的组件，并使用 children 属性声明子路由规则：

```js
<template>
  <div class="about-container">
    <h3>About 组件</h3>

    <!-- 子级路由链接 -->
     // 开启默认子路由需要删除路由链接里的 /tab1，则匹配 about 组件的规则并遵循默认子路由规则显示 tab1 组件
    <router-link to="/about">tab1</router-link>
	 //<router-link to="/about/tab1">tab1</router-link>
    <router-link to="/about/tab2">tab2</router-link>

    <hr />

    <!-- 子级路由占位符 -->
    <router-view></router-view>
  </div>
</template>

import Tab1 from '@/components/tabs/Tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'

// 创建路由的实例对象
const router = new VueRouter({
  // routes 是一个数组，作用：定义 “hash 地址” 与 “组件” 之间的对应关系
  routes: [
    {
      // about 页面的路由规则（父级路由规则）
      path: '/about',
      component: About,
      // About 页面重定向到子路由，匹配子路由规则
      // redirect: '/about/tab1',
      children: [
        // 通过 children 属性，嵌套声明子路由规则
        // 默认子路由：如果 children 数组中，某个路由规则的 path 值为空字符串，则这条路由规则，叫做“默认子路由”
        // 开启默认子路由需要删除路由链接里的 /tab1
        { path: '', component: Tab1 },
        { path: 'tab2', component: Tab2 }
      ]
    },
    { path: '/login', component: Login },
    { path: '/main', component: Main }
  ]
})
```

注意：默认子路由规则：在子路由规则中的 path 值为空字符串。在父组件展示的时候，开启默认子路由的组件就会一起显示

### 11.4.5、动态路由匹配

有一下三个路由链接：

```html
    <router-link to="/movie/1">洛基</router-link>
    <router-link to="/movie/2?name=zs&age=20">雷神</router-link>
    <router-link to="/movie/3">复联</router-link>
```

如果用以下的方法定义路由规则，复用性太差

```js
{ path: '/movie/1', component: Movie },
{ path: '/movie/2', component: Movie },
{ path: '/movie/3', component: Movie }
```

所以引申出**动态路由**

动态路由的概念：

动态路由指的是：把 Hash 地址中可变的部分定义为参数项，从而提高路由规则的复用性。 在 vue-router 中使用英文的冒号（:）来定义路由的参数项。示例代码如下：

```js
// 路由的动态参数以: 进行声明，冒号后面的是动态参数的名称
{ path: '/movie/:mid', component: Movie },

    
 //动态路由 将以下 3 个路由规则，合并成了一个，提高了路由规则的复用性
{ path: '/movie/1', component: Movie },
{ path: '/movie/2', component: Movie },
{ path: '/movie/3', component: Movie }
```

在动态路由渲染出来的组件中，访问到动态匹配的参数值

- 可以使用 this.$route.params 对象访问到动态匹配的参数值。

  ![image-20220419213315779](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301356819.png)

  ```html
  // 路由的动态参数以: 进行声明，冒号后面的是动态参数的名称
  { path: '/movie/:mid', component: Movie, props: true },
  
  <template>
    <div class="movie-container">
      <!-- this.$route 是路由的“参数对象” -->
      <!-- this.$router 是路由的“导航对象” -->
      <h3>Movie 组件 --- {{ $route.params.mid }}</h3>
      <button @click="showThis">打印 this</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Movie',
    methods: {
      showThis() {
        console.log(this)
      }
    }
  }
  </script>
  ```

  注意：

  在 hash 地址中，/ 后面的参数项，叫做路径参数，在路由“参数对象”中，需要使用 this.$route.params 来访问路径参数。

  在 hash 地址中，？后面的参数项，叫做“查询参数”，在路由“参数对象”中，需要使用 this.$route.query 来访问查询参数

  在 this.$route 中，path 只是路径部分；fullPath 是完整的 hash 地址

  例如： "/movie/2?name=zs&age=20" 是 fullpath 的值，"/movie/2" 是 path 的值

  ```html
  <router-link to="/movie/1">洛基</router-link>
  <router-link to="/movie/2?name=zs&age=20">雷神</router-link>
  <router-link to="/movie/3">复联</router-link>
  ```
  ![image-20220420133057451](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301356020.png)

- 使用 props 接收路由参数值

  为了简化路由参数的获取形式，vue-router 允许在路由规则中开启 props 传参。示例代码如下：

  ```html
     <!--  需求：在 Movie 组件中，希望根据 id 的值，展示对应电影的详情信息
       可以为路由规则开启 props 传参，从而方便的拿到动态参数的值-->
  	<!-- 在定义路由规则时 声明 props: true 选项 -->
      { path: '/movie/:mid', component: Movie, props: true },
  
      <template>
        <div class="movie-container">
          <!-- this.$route 是路由的“参数对象” -->
          <!-- this.$router 是路由的“导航对象” -->
          <!--  直接使用 props 中接收的路由参数 -->
          <h3>Movie 组件  --- {{ mid }}</h3>
        </div>
      </template>
  
      <script>
      export default {
        name: 'Movie',
        // 使用 props 接收路由规则中匹配到的参数项
        props: ['mid']
        }
      }
      </script>
  ```


### 11.4.6、声明式导航 & 编程式导航

在浏览器中，**点击链接**实现导航的方式，叫做声明式导航。例如： 

- 普通网页中点击`<a>`链接、vue 项目中点击`<router-link>`都属于声明式导航 

在浏览器中，**调用 API** 方法实现导航的方式，叫做**编程式导航**。例如： 

- 普通网页中调用 **location.href** 跳转到新页面的方式，属于编程式导航

##### vue-router 提供了许多编程式导航的 API，其中最常用的导航 API 分别是： 

① this.$router.push('hash 地址') 

- 跳转到指定 hash 地址，并**增加一条历史记录** 

② this.$router.replace('hash 地址') 

- 跳转到指定的 hash 地址，并替换掉当前的历史记录 

③ this.$router.go(数值 n) 

- 实现导航历史前进、后退

##### $router.push

调用 this.$router.push() 方法，可以跳转到指定的 hash 地址，从而展示对应的组件页面。示例代码如下:

```html
<template>
  <div class="home-container">
    <h3>Home 组件</h3>
    <hr />
    <button @click="gotoLk">通过 push 跳转到“洛基”页面</button>
    <router-link to="/main">访问后台主页</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    gotoLk() {
      // 通过编程式导航 API，导航跳转到指定的页面
      this.$router.push('/movie/1')
    }
  }
}
</script>
```

测试结果：

点击 push 跳转

![image-20220420141110600](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301356528.png)

会增加一条历史记录

![image-20220420140820569](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301356955.png)

##### $router.replace 

调用 this.$router.replace() 方法，可以跳转到指定的 hash 地址，从而展示对应的组件页面。

push 和 replace 的区别： 

- push 会增加一条历史记录 

- replace 不会增加历史记录，而是替换掉当前的历史记录

![image-20220420141017438](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301357711.png)

##### $router.go

调用 this.$router.go() 方法，可以在浏览历史中前进和后退。示例代码如下：

```html
<template>
  <div class="movie-container">
    <!-- this.$route 是路由的“参数对象” -->
    <!-- this.$router 是路由的“导航对象” -->
    <h3>Movie 组件 --- {{ $route.params.mid }} --- {{ mid }}</h3>
    <button @click="goback">go</button>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  // 接收 props 数据
  props: ['mid'],
  methods: {
    goback() {
      // go(-1) 表示后退一层 go(-2) 表示后退两层
      //go(1) 表示前进一层 go(-2) 表示前进两层
      // 如果后退的层数超过上限，则原地不动
      this.$router.go(-1)
    }
  }
}
</script>
```

#####  $router.go 的简化用法

在实际开发中，一般只会前进和后退一层页面。因此 vue-router 提供了如下两个便捷方法： 

① $router.back() 

- 在历史记录中，后退到上一个页面

 ② $router.forward() 

- 在历史记录中，前进到下一个页面

```html
<template>
  <div class="movie-container">
    <!-- this.$route 是路由的“参数对象” -->
    <!-- this.$router 是路由的“导航对象” -->
    <h3>Movie 组件 --- {{ $route.params.mid }} --- {{ mid }}</h3>
     <!-- 在行内使用编程式导航跳转的时候，this 必须要省略，否则会报错！ -->
    <button @click="$router.back()">back 后退</button>
    <button @click="$router.forward()">forward 前进</button>
  </div>
</template>
```

### 11.4.7、导航守卫

导航守卫可以控制路由的访问权限。示意图如下：

![image-20220420144849089](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301357670.png)

##### 全局前置守卫

每次发生路由的导航跳转时，都会触发全局前置守卫。因此，在全局前置守卫中，程序员可以对每个路由进行 访问权限的控制：

```js
//创建路由实例对象
const user = new VueRouter({ ... })
// 全局前置守卫
router.beforeEach(function(to, from, next) {
  // to 表示将要访问的路由的信息对象
  // from 表示将要离开的路由的信息对象
  // next() 函数表示放行的意思
}
                           
```

##### next 函数的 3 种调用方式

![image-20220420145544310](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301357606.png)

当前用户拥有后台主页的访问权限，直接放行：next() 

当前用户没有后台主页的访问权限，强制其跳转到登录页面：next('/login') 

当前用户没有后台主页的访问权限，不允许跳转到后台主页：next(false)

##### 控制后台主页的访问权限

```js
// 为 router 实例对象，声明全局前置导航守卫
// 只要发生了路由的跳转，必然会触发 beforeEach 指定的 function 回调函数
router.beforeEach(function(to, from, next) {
  // to 表示将要访问的路由的信息对象
  // from 表示将要离开的路由的信息对象
  // next() 函数表示放行的意思
  // 分析：
  // 1. 要拿到用户将要访问的 hash 地址
  // 2. 判断 hash 地址是否等于 /main。
  // 2.1 如果等于 /main，证明需要登录之后，才能访问成功
  // 2.2 如果不等于 /main，则不需要登录，直接放行  next()
  // 3. 如果访问的地址是 /main。则需要读取 localStorage 中的 token 值
  // 3.1 如果有 token，则放行
  // 3.2 如果没有 token，则强制跳转到 /login 登录页
  if (to.path === '/main') {
    // 要访问后台主页，需要判断是否有 token
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      // 没有登录，强制跳转到登录页
      next('/login')
    }
  } else {
    next()
  }
})
```

点击路由链接访问后台主页

![image-20220420145904779](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301357101.png)

此时无 token 值

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301357337.png" alt="image-20220420150113211" style="zoom:50%;" />

强制跳转到 /login 登录页

![image-20220420150157525](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301357229.png)

测试输入 token 值

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301358053.png" alt="image-20220420150304633" style="zoom:67%;" />

再次访问后台主页

<img src="https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301357990.png" alt="image-20220420150412075" style="zoom:50%;" />

# 十二、实战快速上手

我们采用实战教学模式并结合ElementUI组件库，将所需知识点应用到实际中，以最快速度带领大家掌握Vue的使用；

## 12.1、创建工程

注意：命令行都要使用管理员模式运行

1. 创建一个名为hello-vue的工程vue init webpack hello-vue
2. 安装依赖， 我们需要安装vue-router、element-ui、sass-loader和node-sass四个插件

```
#进入工程目录
cd hello-vue
#安装vue-routern 
npm install vue-router --save-dev
#安装element-ui
npm i element-ui -S
#安装依赖
npm install
# 安装SASS加载器
cnpm install sass-loader node-sass --save-dev
#启功测试
npm run dev
```

3. Npm命令解释：

- npm install moduleName：安装模块到项目目录下
- npm install -g moduleName：-g的意思是将模块安装到全局，具体安装到磁盘哪个位置要看npm config prefix的位置
- npm install -save moduleName：–save的意思是将模块安装到项目目录下， 并在package文件的dependencies节点写入依赖，-S为该命令的缩写
- npm install -save-dev moduleName:–save-dev的意思是将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖，-D为该命令的缩写

## 12.2、创建登录页面

把没有用的初始化东西删掉！

  在源码目录中创建如下结构：

- assets：用于存放资源文件
- components：用于存放Vue功能组件
- views：用于存放Vue视图组件
- router：用于存放vue-router配置

![1f2dd436d89d8d0ad53d5c4bde7f31d6.png](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301358650.png)

**创建首页视图，在views目录下创建一个名为Main.vue的视图组件：**

```javascript
<template>
    <div>首页</div>
</template>
<script>
    export default {
            name:"Main"
    }
</script>
<style scoped>
</style>
```

创建登录页视图在views目录下创建名为Login.vue的视图组件，其中el-*的元素为ElementUI组件；

```html
<template>
  <div>
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onsubmit('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>

    <el-dialog title="温馨提示" :visible.sync="dialogVisiable" width="30%" :before-close="handleClose">
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "Login",
      data(){
          return{
            form:{
              username:'',
              password:''
            },
            //表单验证，需要在 el-form-item 元素中增加prop属性
            rules:{
              username:[
                {required:true,message:"账号不可为空",trigger:"blur"}
              ],
              password:[
                {required:true,message:"密码不可为空",tigger:"blur"}
              ]
            },

            //对话框显示和隐藏
            dialogVisible:false
          }
      },
      methods:{
          onSubmit(formName){
            //为表单绑定验证功能
            this.$refs[formName].validate((valid)=>{
              if(valid){
                //使用vue-router路由到指定界面，该方式称为编程式导航
                this.$router.push('/main');
              }else{
                this.dialogVisible=true;
                return false;
              }
            });
          }
      }
    }
</script>

<style lang="scss" scoped>
  .login-box{
    border:1px solid #DCDFE6;
    width: 350px;
    margin:180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }
  .login-title{
    text-align:center;
    margin: 0 auto 40px auto;
    color: #303133;
  }
</style>


```

创建路由，在router目录下创建一个名为index.js的vue-router路由配置文件

```
//导入vue
import Vue from 'vue';
import VueRouter from 'vue-router';
//导入组件
import Main from "../views/Main";
import Login from "../views/Login";
//使用
Vue.use(VueRouter);
//导出
export default new VueRouter({
  routes: [
    {
      //登录页
      path: '/main',
      component: Main
    },
    //首页
    {
      path: '/login',
      component: Login
    },
  ]

})
```

APP.vue

```html
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```

main.js

```javascript
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from "./router"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(router)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})

```

测试：在浏览器打开 http://localhost:8080/#/login

如果出现错误: 可能是因为sass-loader的版本过高导致的编译错误，当前最高版本是8.0.

2，需要退回到7.3.1 ；

去package.json文件里面的 "sass-loader"的版本更换成7.3.1，然后重新cnpm install就可以了；

## 12.3、路由嵌套

嵌套路由又称子路由，在实际应用中，通常由多层嵌套的组件组合而成。
demo
1、 创建用户信息组件，在 views/user 目录下创建一个名为 Profile.vue 的视图组件；
Profile.vue

```javascript
<template>
  <h1>个人信息</h1>
</template>
<script>
  export default {
    name: "UserProfile"
  }
</script>
<style scoped>
</style>

```

2、在用户列表组件在 views/user 目录下创建一个名为 List.vue 的视图组件；
List.vue

```javascript
<template>
  <h1>用户列表</h1>
</template>
<script>
  export default {
    name: "UserList"
  }
</script>
<style scoped>
</style>

```

3、 修改首页视图，我们修改 Main.vue 视图组件，此处使用了 ElementUI 布局容器组件，代码如下：
Main.vue

```javascript
<template>
    <div>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-openeds="['1']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-caret-right"></i>用户管理</template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                <!--插入的地方-->
                  <router-link to="/user/profile">个人信息</router-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                <!--插入的地方-->
                  <router-link to="/user/list">用户列表</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-caret-right"></i>内容管理</template>
              <el-menu-item-group>
                <el-menu-item index="2-1">分类管理</el-menu-item>
                <el-menu-item index="2-2">内容列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-header>
          <el-main>
          <!--在这里展示视图-->
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>
<script>
    export default {
        name: "Main"
    }
</script>
<style scoped lang="scss">
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>

```

4、 配置嵌套路由修改 router 目录下的 index.js 路由配置文件，使用children放入main中写入子模块，代码如下
index.js

```javascript
//导入vue
import Vue from 'vue';
import VueRouter from 'vue-router';
//导入组件
import Main from "../views/Main";
import Login from "../views/Login";
//导入子模块
import UserList from "../views/user/List";
import UserProfile from "../views/user/Profile";

//使用
Vue.use(VueRouter);
//导出
export default new VueRouter({
  routes: [
    {
      //登录页
      path: '/main',
      component: Main,
      //  写入子模块
      children: [
        {
          path: '/user/profile',
          component: UserProfile,
        }, {
          path: '/user/list',
          component: UserList,
        },
      ]
    },
    //首页
    {
      path: '/login',
      component: Login

    },
  ]
})

```

5、 路由嵌套实战效果图

![276a18263f374640db39d5a5b7bcb544.png](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301358828.png)

图 路由嵌套效果图

## 12.4、参数传递

这里演示如果请求带有参数该怎么传递
demo
 用的还是上述例子的代码 修改一些代码 这里不放重复的代码了
第一种取值方式
1、 修改路由配置, 主要是router下的index.js中的 path 属性中增加了 :id 这样的占位符

```javascript
{
    path: '/user/profile/:id', 
    name:'UserProfile', 
    component: UserProfile
}
```

2、传递参数
 此时我们在Main.vue中的route-link位置处 to 改为了 :to，是为了将这一属性当成对象使用，注意 router-link 中的 name 属性名称 一定要和 路由中的 name 属性名称 匹配，因为这样 Vue 才能找到对应的路由路径；

```javascript
<!--name是组件的名字 params是传的参数 如果要传参数的话就需要用v:bind:来绑定-->
<router-link :to="{name:'UserProfile',params:{id:1}}">个人信息</router-link>
```

3、在要展示的组件Profile.vue中接收参数 使用 {undefined{$route.params.id}}来接收
Profile.vue 部分代码

```javascript
<template>
  <!--  所有的元素必须在根节点下-->
  <div>
    <h1>个人信息</h1>
    {{$route.params.id}}
  </div>
</template>
```

2、传递参数和之前一样 在Main.vue中修改route-link地址

```javascript
<!--name是组件的名字 params是传的参数 如果要传参数的话就需要用v:bind:来绑定-->
<router-link :to="{name:'UserProfile',params:{id:1}}">个人信息</router-link>
```

3、在Profile.vue接收参数为目标组件增加 props 属性
Profile.vue

```javascript
<template>
  <div>
    个人信息
    {{ id }}
  </div>
</template>
<script>
    export default {
      props: ['id'],
      name: "UserProfile"
    }
</script>
<style scoped>
</style>
```

![5713fe270dee777307f05236c4f1bdea.png](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301358309.png)

图 传参效果图

## 12.5、组件重定向

重定向的意思大家都明白，但 Vue 中的重定向是作用在路径不同但组件相同的情况下，比

如：

在router下面index.js的配置

```javascript
{
  path: '/main',
  name: 'Main',
  component: Main
},
{
  path: '/goHome',
  redirect: '/main'
}
```

说明：这里定义了两个路径，一个是 /main ，一个是 /goHome，其中 /goHome 重定向

到了 /main 路径，由此可以看出重定向不需要定义组件；

使用的话，只需要在Main.vue设置对应路径即可；

```html
<el-menu-item index="1-3">
    <router-link to="/goHome">回到首页</router-link>
</el-menu-item>
```

## 12.6、路由模式与 404

路由模式有两种

- hash：路径带 # 符号，如 http://localhost/#/login
- history：路径不带 # 符号，如 http://localhost/login

修改路由配置，代码如下：

```javascript
export default new Router({
  mode: 'history',
  routes: [
  ]
});
```

404 demo

1.创建一个NotFound.vue视图组件

NotFound.vue

```javascript
<template>
    <div>
      <h1>404,你的页面走丢了</h1>
    </div>
</template>
<script>
    export default {
        name: "NotFound"
    }
</script>
<style scoped>
</style>
```

2.修改路由配置index.js

```javascript
import NotFound from '../views/NotFound'
{
   path: '*',
   component: NotFound
}
```

3.效果图

![9f6e5d793eec9febf6c27c71c8540dc8.png](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301358363.png)

图 404效果图

**路由钩子与异步请求**

beforeRouteEnter：在进入路由前执行

beforeRouteLeave：在离开路由前执行

在Profile.vue中写

```javascript
  export default {
    name: "UserProfile",
    beforeRouteEnter: (to, from, next) => {
      console.log("准备进入个人信息页");
      next();
    },
    beforeRouteLeave: (to, from, next) => {
      console.log("准备离开个人信息页");
      next();
    }
  }
```

参数说明：

- to：路由将要跳转的路径信息
- from：路径跳转前的路径信息
- next：路由的控制参数
- next() 跳入下一个页面
- next(’/path’) 改变路由的跳转方向，使其跳到另一个路由
- next(false) 返回原来的页面
- next((vm)=>{}) 仅在 beforeRouteEnter 中可用，vm 是组件实例

**在钩子函数中使用异步请求**

1、安装 Axios

```
cnpm install --save vue-axios
```

2、main.js引用 Axios

```javascript
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
```

3、准备数据 ： 只有我们的 static 目录下的文件是可以被访问到的，所以我们就把静态文

件放入该目录下。

数据和之前用的json数据一样 需要的去上述axios例子里

```javascript
// 静态数据存放的位置
static/mock/data.json
```

4.在 beforeRouteEnter 中进行异步请求

Profile.vue

```javascript
  export default {
    //第二种取值方式
    // props:['id'],
    name: "UserProfile",
    //钩子函数 过滤器
    beforeRouteEnter: (to, from, next) => {
      //加载数据
      console.log("进入路由之前")
      next(vm => {
        //进入路由之前执行getData方法
        vm.getData()
      });
    },
    beforeRouteLeave: (to, from, next) => {
      console.log("离开路由之前")
      next();
    },
    //axios
    methods: {
      getData: function () {
        this.axios({
          method: 'get',
          url: 'http://localhost:8080/static/mock/data.json'
        }).then(function (response) {
          console.log(response)
        })
      }
    }
  }

```

5.路由钩子和axios结合图

![a303effe000076ca752dae571d042a71.png](https://cdn.jsdelivr.net/gh/godsaury/PicBed@master/NoteImg/Vue/202204301359149.png)

**到此结束 完结★,°:.☆(￣▽￣)/$:.°★**

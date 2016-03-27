<main class="container task-detail-page"><div class="breadcrumb nav-title"><span class="active">任务十五：零基础JavaScript编码（三）</span></div><div class="main container-fluid"><div class="row task-detail-wrap"><div class="task-detail col-md-9"><div><dl>
	<dt>面向人群：</dt>
	<dd>零基础或初学者</dd>
	<dt>难度：</dt>
	<dd>简单</dd>
</dl>

<h3>重要说明</h3>
<p>百度前端技术学院的课程任务是由百度前端工程师专为对前端不同掌握程度的同学设计。我们尽力保证课程内容的质量以及学习难度的合理性，但即使如此，真正决定课程效果的，还是你的每一次思考和实践。</p>
<p>课程多数题目的解决方案都不是唯一的，这和我们在实际工作中的情况也是一致的。因此，我们的要求不仅仅是实现设计稿的效果，更是要多去思考不同的解决方案，评估不同方案的优劣，然后使用在该场景下最优雅的方式去实现。那些最终没有被我们采纳的方案，同样也可以帮助我们学到很多知识。所以，我们列出的参考资料未必是实现需求所必须的。有的时候，实现题目的要求很简单，甚至参考资料里就有，但是背后的思考和亲手去实践却是任务最关键的一部分。在学习这些资料时，要多思考，多提问，多质疑。相信通过和小伙伴们的交流，能让你的学习事半功倍。</p>

<h3>任务目的</h3>
<ul>
	<li>在上一任务基础上继续JavaScript的体验</li>
	<li>接触一下JavaScript中的高级选择器</li>
	<li>学习JavaScript中的数组对象遍历、读写、排序等操作</li>
	<li>学习简单的字符串处理操作</li>
</ul>

<h3>任务描述</h3>
<ul>
	<li>参考以下示例代码，读取页面上已有的source列表，从中提取出城市以及对应的空气质量</li>
	<li>将数据按照某种顺序排序后，在resort列表中按照顺序显示出来</li>
</ul>

<pre>
&lt;!DOCTYPE&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;IFE JavaScript Task 01&lt;/title&gt;
  &lt;/head&gt;
&lt;body&gt;

  &lt;ul id="source"&gt;
    &lt;li&gt;北京空气质量：&lt;b&gt;90&lt;/b&gt;&lt;/li&gt;
    &lt;li&gt;上海空气质量：&lt;b&gt;70&lt;/b&gt;&lt;/li&gt;
    &lt;li&gt;天津空气质量：&lt;b&gt;80&lt;/b&gt;&lt;/li&gt;
    &lt;li&gt;广州空气质量：&lt;b&gt;50&lt;/b&gt;&lt;/li&gt;
    &lt;li&gt;深圳空气质量：&lt;b&gt;40&lt;/b&gt;&lt;/li&gt;
    &lt;li&gt;福州空气质量：&lt;b&gt;32&lt;/b&gt;&lt;/li&gt;
    &lt;li&gt;成都空气质量：&lt;b&gt;90&lt;/b&gt;&lt;/li&gt;
  &lt;/ul&gt;

  &lt;ul id="resort"&gt;
    &lt;!--
    &lt;li&gt;第一名：北京空气质量：&lt;b&gt;90&lt;/b&gt;&lt;/li&gt;
    &lt;li&gt;第二名：北京空气质量：&lt;b&gt;90&lt;/b&gt;&lt;/li&gt;
    &lt;li&gt;第三名：北京空气质量：&lt;b&gt;90&lt;/b&gt;&lt;/li&gt;
     --&gt;

  &lt;/ul&gt;

  &lt;button id="sort-btn"&gt;排序&lt;/button&gt;

&lt;script type="text/javascript"&gt;

/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
  /*
  coding here
  */

  /*
  data = [
    ["北京", 90],
    ["北京", 90]
    ……
  ]
  */

  return data;

}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {

}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {

}

function btnHandle() {
  var aqiData = getData();
  aqiData = sortAqiData(aqiData);
  render(aqiData);
}


function init() {

  // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数

}

init();

&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h3>任务注意事项</h3>
<ul>
	<li>实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识</li>
	<li>请注意代码风格的整齐、优雅</li>
  <li>代码中含有必要的注释</li>
  <li>建议不使用任何第三方库、框架</li>
	<li>示例代码仅为示例，可以直接使用，也可以完全自己重写</li>
</ul>

<h3>任务协作建议</h3>
<ul>
	<li>团队集中讨论，明确题目要求，保证队伍各自对题目要求认知一致</li>
	<li>各自完成任务实践</li>
	<li>交叉互相Review其他人的代码，建议每个人至少看一个同组队友的代码</li>
	<li>相互讨论，最后合成一份组内最佳代码进行提交</li>
</ul>

<h3>在线学习参考资料</h3>
<ul>
	<li><a target="_blank" href="http://www.imooc.com/view/36">JavaScript入门篇</a></li>
	<li><a target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript">MDN JavaScript</a></li>
</ul></div>
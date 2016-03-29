<main class="container task-detail-page"><div class="breadcrumb nav-title"><span class="active">任务十六：零基础JavaScript编码（四）</span></div><div class="main container-fluid"><div class="row task-detail-wrap"><div class="task-detail col-md-9"><div><dl>
	<dt>面向人群：</dt>
	<dd>零基础或初学者</dd>
	<dt>难度：</dt>
	<dd>中等</dd>
</dl>

<h3>重要说明</h3>
<p>百度前端技术学院的课程任务是由百度前端工程师专为对前端不同掌握程度的同学设计。我们尽力保证课程内容的质量以及学习难度的合理性，但即使如此，真正决定课程效果的，还是你的每一次思考和实践。</p>
<p>课程多数题目的解决方案都不是唯一的，这和我们在实际工作中的情况也是一致的。因此，我们的要求不仅仅是实现设计稿的效果，更是要多去思考不同的解决方案，评估不同方案的优劣，然后使用在该场景下最优雅的方式去实现。那些最终没有被我们采纳的方案，同样也可以帮助我们学到很多知识。所以，我们列出的参考资料未必是实现需求所必须的。有的时候，实现题目的要求很简单，甚至参考资料里就有，但是背后的思考和亲手去实践却是任务最关键的一部分。在学习这些资料时，要多思考，多提问，多质疑。相信通过和小伙伴们的交流，能让你的学习事半功倍。</p>

<h3>任务目的</h3>
<ul>
	<li>在上一任务基础上继续JavaScript的体验</li>
	<li>深入学习JavaScript的事件机制及DOM操作</li>
	<li>学习事件代理机制</li>
  <li>学习简单的表单验证功能</li>
  <li>学习外部加载JavaScript文件</li>
</ul>

<h3>任务描述</h3>
<ul>
	<li>参考以下示例代码，用户输入城市名称和空气质量指数后，点击“确认添加”按钮后，就会将用户的输入在进行验证后，添加到下面的表格中，新增一行进行显示</li>
	<li>用户输入的城市名必须为中英文字符，空气质量指数必须为整数</li>
  <li>用户输入的城市名字和空气质量指数需要进行前后去空格及空字符处理（trim）</li>
  <li>用户输入不合规格时，需要给出提示（允许用alert，也可以自行定义提示方式）</li>
  <li>用户可以点击表格列中的“删除”按钮，删掉那一行的数据</li>
</ul>

<h4>task.html</h4>
<pre>
&lt;!DOCTYPE&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;IFE JavaScript Task 01&lt;/title&gt;
    &lt;script src="task.js"&gt;&lt;/script&gt;
  &lt;/head&gt;
&lt;body&gt;

  &lt;div&gt;
    &lt;label&gt;城市名称：&lt;input id="aqi-city-input" type="text"&gt;&lt;/label&gt;&lt;br&gt;
    &lt;label&gt;空气质量指数：&lt;input id="aqi-value-input" type="text"&gt;&lt;/label&gt;&lt;br&gt;
    &lt;button id="add-btn"&gt;确认添加&lt;/button&gt;
  &lt;/div&gt;
  &lt;table id="aqi-table"&gt;
  &lt;!--
    &lt;tr&gt;
      &lt;td&gt;城市&lt;/td&gt;&lt;td&gt;空气质量&lt;/td&gt;&lt;td&gt;操作&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;北京&lt;/td&gt;&lt;td&gt;90&lt;/td&gt;&lt;td&gt;&lt;button&gt;删除&lt;/button&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;北京&lt;/td&gt;&lt;td&gt;90&lt;/td&gt;&lt;td&gt;&lt;button&gt;删除&lt;/button&gt;&lt;/td&gt;
    &lt;/tr&gt;
   --&gt;
  &lt;/table&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<h4>task.js</h4>
<pre>
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.

  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();

</pre>

<h3>任务注意事项</h3>
<ul>
	<li>实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识</li>
	<li>请注意代码风格的整齐、优雅</li>
  <li>代码中含有必要的注释</li>
	<li>验证输入逻辑可以在失去焦点时判断，也可以在点击按钮时判断</li>
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
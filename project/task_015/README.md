<main class="container task-detail-page"><div class="breadcrumb nav-title"><span class="active">����ʮ�壺�����JavaScript���루����</span></div><div class="main container-fluid"><div class="row task-detail-wrap"><div class="task-detail col-md-9"><div><dl>
	<dt>������Ⱥ��</dt>
	<dd>��������ѧ��</dd>
	<dt>�Ѷȣ�</dt>
	<dd>��</dd>
</dl>

<h3>��Ҫ˵��</h3>
<p>�ٶ�ǰ�˼���ѧԺ�Ŀγ��������ɰٶ�ǰ�˹���ʦרΪ��ǰ�˲�ͬ���ճ̶ȵ�ͬѧ��ơ����Ǿ�����֤�γ����ݵ������Լ�ѧϰ�Ѷȵĺ����ԣ�����ʹ��ˣ����������γ�Ч���ģ��������ÿһ��˼����ʵ����</p>
<p>�γ̶�����Ŀ�Ľ������������Ψһ�ģ����������ʵ�ʹ����е����Ҳ��һ�µġ���ˣ����ǵ�Ҫ�󲻽�����ʵ����Ƹ��Ч��������Ҫ��ȥ˼����ͬ�Ľ��������������ͬ���������ӣ�Ȼ��ʹ���ڸó����������ŵķ�ʽȥʵ�֡���Щ����û�б����ǲ��ɵķ�����ͬ��Ҳ���԰�������ѧ���ܶ�֪ʶ�����ԣ������г��Ĳο�����δ����ʵ������������ġ��е�ʱ��ʵ����Ŀ��Ҫ��ܼ򵥣������ο���������У����Ǳ����˼��������ȥʵ��ȴ��������ؼ���һ���֡���ѧϰ��Щ����ʱ��Ҫ��˼���������ʣ������ɡ�����ͨ����С����ǵĽ������������ѧϰ�°빦����</p>

<h3>����Ŀ��</h3>
<ul>
	<li>����һ��������ϼ���JavaScript������</li>
	<li>�Ӵ�һ��JavaScript�еĸ߼�ѡ����</li>
	<li>ѧϰJavaScript�е���������������д������Ȳ���</li>
	<li>ѧϰ�򵥵��ַ����������</li>
</ul>

<h3>��������</h3>
<ul>
	<li>�ο�����ʾ�����룬��ȡҳ�������е�source�б�������ȡ�������Լ���Ӧ�Ŀ�������</li>
	<li>�����ݰ���ĳ��˳���������resort�б��а���˳����ʾ����</li>
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
    &lt;li&gt;��������������&lt;b&gt;90&lt;/b&gt;&lt;/li&gt;
    &lt;li&gt;�Ϻ�����������&lt;b&gt;70&lt;/b&gt;&lt;/li&gt;
    &lt;li&gt;������������&lt;b&gt;80&lt;/b&gt;&lt;/li&gt;
    &lt;li&gt;���ݿ���������&lt;b&gt;50&lt;/b&gt;&lt;/li&gt;
    &lt;li&gt;���ڿ���������&lt;b&gt;40&lt;/b&gt;&lt;/li&gt;
    &lt;li&gt;���ݿ���������&lt;b&gt;32&lt;/b&gt;&lt;/li&gt;
    &lt;li&gt;�ɶ�����������&lt;b&gt;90&lt;/b&gt;&lt;/li&gt;
  &lt;/ul&gt;

  &lt;ul id="resort"&gt;
    &lt;!--
    &lt;li&gt;��һ������������������&lt;b&gt;90&lt;/b&gt;&lt;/li&gt;
    &lt;li&gt;�ڶ�������������������&lt;b&gt;90&lt;/b&gt;&lt;/li&gt;
    &lt;li&gt;����������������������&lt;b&gt;90&lt;/b&gt;&lt;/li&gt;
     --&gt;

  &lt;/ul&gt;

  &lt;button id="sort-btn"&gt;����&lt;/button&gt;

&lt;script type="text/javascript"&gt;

/**
 * getData����
 * ��ȡidΪsource���б���ȡ���г������ּ����ж�Ӧ�Ŀ�������
 * ����һ�����飬��ʽ��������ʾ��
 */
function getData() {
  /*
  coding here
  */

  /*
  data = [
    ["����", 90],
    ["����", 90]
    ����
  ]
  */

  return data;

}

/**
 * sortAqiData
 * ������������data���д�С���������
 * ����һ������������
 */
function sortAqiData(data) {

}

/**
 * render
 * ���ź���ĳ��м���������ָ���������ʾ��idλresort���б���
 * ��ʽ��ul�е�ע�͵Ĳ���
 */
function render(data) {

}

function btnHandle() {
  var aqiData = getData();
  aqiData = sortAqiData(aqiData);
  render(aqiData);
}


function init() {

  // ���������sort-btn��һ������¼������ʱ����btnHandle����

}

init();

&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h3>����ע������</h3>
<ul>
	<li>ʵ�ּ򵥹��ܵ�ͬʱ������ϸѧϰJavaScript�����﷨���¼���DOM��ص�֪ʶ</li>
	<li>��ע�����������롢����</li>
  <li>�����к��б�Ҫ��ע��</li>
  <li>���鲻ʹ���κε������⡢���</li>
	<li>ʾ�������Ϊʾ��������ֱ��ʹ�ã�Ҳ������ȫ�Լ���д</li>
</ul>

<h3>����Э������</h3>
<ul>
	<li>�ŶӼ������ۣ���ȷ��ĿҪ�󣬱�֤������Զ���ĿҪ����֪һ��</li>
	<li>�����������ʵ��</li>
	<li>���滥��Review�����˵Ĵ��룬����ÿ�������ٿ�һ��ͬ����ѵĴ���</li>
	<li>�໥���ۣ����ϳ�һ��������Ѵ�������ύ</li>
</ul>

<h3>����ѧϰ�ο�����</h3>
<ul>
	<li><a target="_blank" href="http://www.imooc.com/view/36">JavaScript����ƪ</a></li>
	<li><a target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript">MDN JavaScript</a></li>
</ul></div>
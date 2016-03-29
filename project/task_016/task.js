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
    var input_city = document.getElementById("aqi-city-input");
    var input_aqi = document.getElementById("aqi-value-input");
    var city_tip = document.getElementById("aqi-city-tip");
    var aqi_value_tip = document.getElementById("aqi-value-tip");
    var other_tip = document.getElementById("other-tip");

    // 清除提示
    city_tip.innerHTML = "";
    aqi_value_tip.innerHTML = "";
    other_tip.innerHTML = "";

    city = input_city.value.trim();
    aqi = input_aqi.value.trim();
    if (!isLetter(city)) {
        city_tip.innerHTML = "请输入中英文字符（不包括数字、特殊字符）";
        return false;
    }
    if (!isInt(aqi)) {
        aqi_value_tip.innerHTML = "请输入整数";
        return false;
    }
    // 检查是否是否重复
    if (city in aqiData && aqiData[city] == aqi) {
        other_tip.innerHTML = "请不要插入重复数据";
        return false;
    }

    // 清楚 input value
    input_city.value = "";
    input_aqi.value = "";
    aqiData[city] = aqi;
    return true;
}

/**
 * 判断用户所给的参数num是否为整形（只要求值相同）
 * @param num
 * @returns {boolean}
 */
function isInt(num) {
    return num == parseInt(num, 10);
}

/**
 * 判断用户所给的参数letter是否为中英文，是返回true。否返回false
 * @param letter
 */
function isLetter(letter)  {
    // 如果leeter为空，直接返回 false。
    if (!letter) {
        return false;
    }
    var re = /[^a-zA-Z\u4e00-\u9fa5]/;
    return !re.test(letter);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    console.log(aqiData);

    var aqi_table = document.getElementById("aqi-table");
    // 如果 aqiData 为空，清空 aqi_table
    if (0 == Object.keys(aqiData).length) {
        aqi_table.innerHTML = "";
        aqi_table.style.display = "none";
        return;
    }
    var innerData = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for (var k in aqiData) {
        innerData += ("<tr><td>" + k + "</td><td>" +  aqiData[k] + " </td><td><button class='del-btn'>删除</button></td> </tr>");
    }
    aqi_table.innerHTML = innerData;
    aqi_table.style.display = "table";
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    if (addAqiData()) {
        renderAqiList();
    }
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(e) {
    if (e && e.target && e.target.nodeName.toLowerCase() == "button") {
        var node = e.target.parentNode.parentNode;
        var city = node.firstChild.textContent;
        if (city in aqiData) {
            delete  aqiData[city];
            renderAqiList();
        }
    }
}

function init() {
    document.getElementById("add-btn").addEventListener("click", addBtnHandle);

    // 使用事件委托
    document.getElementById("aqi-table").addEventListener("click", function(e) {delBtnHandle(e)});
}

init();
# video-scroll

模仿苹果官网 鼠标滚动控制视频动画

原生js

使用方法：

添加DOM
```
<div id="viScroll"></div>
```

js调用
```
var viScroll = new videoScroll('viScroll', {
	url: "video/91cdbc49-b42a-4ddb-a481-9c47f944e901.mp4", //视频地址
	totalHeight: 500 //占用高度
});
```

*[DEMO](http://gaoprotest.applinzi.com/)

PS:部分浏览器卡顿，欢迎fork 或者 提出修改意见。

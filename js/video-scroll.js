! function() {
	videoScroll = function(ele, options) {
		var defaults = {
			totalHeight: 1000
		}; //参数设置
		options.totalHeight = options.totalHeight ? options.totalHeight : defaults.totalHeight;

		var _this = document.getElementById(ele)
		var winHeight = document.body.scrollHeight||document.documentElement.scrollHeight;
		var video = document.createElement("video");
		var info, i = 0 , flag = 4,scrollcount = myBrowser();
		video.src = options.url; //设置视频路径
		video.style.position = "fixed";
		_this.appendChild(video);

		function init() {
			var i = winHeight + video.duration * options.totalHeight,
				duration = video.duration,
				offsetTop = _this.offsetTop,
				pixe = duration / i;
				console.log(winHeight);
			video.style.width = options.width + "px";
			video.style.height = options.height + "px";
			_this.style.height = i + "px";

				window.onscroll = function() {
					if (!flag) {
						var sT = document.body.scrollTop||document.documentElement.scrollTop - offsetTop;
						if (sT >= 0) {
							video.currentTime = duration * sT / i;
						}
						flag = scrollcount;
					}flag--;
				}
		}
		video.addEventListener("loadeddata", function() {
			init();
		});
		function myBrowser() {
			var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
			var isOpera = userAgent.indexOf("Opera") > -1;
			if (isOpera) {
				return 1;
			}; //判断是否Opera浏览器
			if (userAgent.indexOf("Firefox") > -1) {
				return 4;
			} //判断是否Firefox浏览器
			if (userAgent.indexOf("Chrome") > -1) {
				return 1;
			}
			if (userAgent.indexOf("Safari") > -1) {
				return 1;
			} //判断是否Safari浏览器
			if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
				return 1;
			}; //判断是否IE浏览器
		}
	};
}();
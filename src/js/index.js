document.addEventListener('DOMContentLoaded', function() {

	//获取页面上元素
	var box = document.querySelector('.box');
	var ul = document.querySelector('.imgs');

	// 无缝滚动关键1：复值第一张图片到最后
	var copyLi = ul.children[0].cloneNode(true);
	ul.appendChild(copyLi);

	var len = ul.children.length;

	//声明一个索引值
	var index = 0;

	//声明一个清除定时器变量
	var timer;

	var imgWidth = 1200;

	//一直执行动画效果，不用手动执行，直到页面关闭为止
	var anmition = setInterval(add, 5000);

	// 初始化
	init();

	//点击前后按钮
	box.onclick = function(e) {
		//对象兼容写法
		e = e || window.event;

		//事件源的兼容写法
		var target = e.target || e.srcElement;

		//判断
		if(target.className === 'next') {
			index++;
			init();
		} else if(target.className == 'prev') {
			index--;
			init();
		} else if(target.parentNode.className === 'page') {
			index = target.children.length - 1;
			init();
		}
	}

	// 鼠标移入清除执行定时器移出恢复定时器
	box.onmouseenter = function() {
		clearInterval(anmition);
	}
	//鼠标移出恢复执行的定时器
	box.onmouseleave = function() {
		anmition = setInterval(add, 3000);
	}

	function add() {
		index++;
		init();

	}

	//封装一个内部图片改变的动画的函数
	function init() {

		//判断index的索引值
		if(index > len - 1) {
			// 无缝滚动关键2：当滚动到赋值图片后，一瞬间把left值改成0,index值改成1
			ul.style.left = 0;
			index = 1;
		} else if(index < 0) {
			index = len - 1;
		}

		//清除上一次定时器
		clearInterval(timer)

		//设置一个目标值
		var target = -index * imgWidth;

		//设置定时器
		timer = setInterval(function() {

			//获取当前图片的位置
			var current = ul.offsetLeft;

			//初始化一个速度
			var speed = (target - current) / 10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			current += speed;
			//判断当改变到一定位置时清除定时器
			if(current == target) {
				clearInterval(timer);
				current == target;
			}

			ul.style.left = current + 'px';
		}, 30);

		var page = document.querySelector('.page');
		var span = page.children;

		// 高亮页码
		// 先清除所有高亮，再给当前添加高亮
		for(var i = 0; i < len - 1; i++) {

			page.children[i].className = '';
		}
		if(index == len - 1) {
			page.children[0].className = 'active';
		} else {
			page.children[index].className = 'active';
		}

	}

	//获取页面subject container盒子上元素
	var _subject = document.querySelector('.subject');
	//subject发起ajax请求数据
	ajax.get({
		url: `http://localhost:10086/api/index_s.php`,
		success: function(data) {
			console.log(data)

			//创建一个ul
			var ul = document.createElement('ul');
			ul.innerHTML = data.map(function(item) {
				return `
						 			<li>
						 			<h4 class="imgR"><img  src="${item.imgurl}"></h4>
						 			</li>
						 	`
			}).join('');
			//插入ul之前先清空
			//_subject.innerHTML = '';
			_subject.appendChild(ul);
			
			imgR = document.getElementsByClassName('imgR');
			function add() {

				for(let i = 0; i < imgR.length; i++) {

					imgR[i].onclick = function() {
						console.log(i);
						chuanCan(i, data);
					}
				}
			}
			add();

			// 页面传参
			function chuanCan(idx, data) {
				var str = '';
				for(var arr in data[idx]) {
					str += arr + '=' + encodeURI(data[idx][arr]) + '&';
				}
				//去除多余的&
				str = str.slice(0, -1);
				// 跳转页面
				console.log(str);
				location.href = 'list.html?' + str;

			}
			

		}
	})

	//获取页面area container盒子上元素
	var area = document.querySelector('.area');
	//subject发起ajax请求数据
	ajax.get({
		url: `http://localhost:10086/api/index_a.php`,
		success: function(data) {
			console.log(data)

			//创建一个ul
			var ul = document.createElement('ul');
			ul.innerHTML = data.map(function(item) {
				return `
						 			<li>
						 			<h4 class="imgR"><img  src="${item.imgurl}"></h4>
						 			</li>
						 	`
			}).join('');
			//插入ul之前先清空
			//area.innerHTML = '';
			area.appendChild(ul);
			
			imgR = document.getElementsByClassName('imgR');
			
			function add() {

				for(let i = 0; i < imgR.length; i++) {

					imgR[i].onclick = function() {
						console.log(i);
						chuanCan(i, data);
					}
				}
			}
			add();

			// 页面传参
			function chuanCan(idx, data) {
				var str = '';
				for(var arr in data[idx]) {
					str += arr + '=' + encodeURI(data[idx][arr]) + '&';
				}
				//去除多余的&
				str = str.slice(0, -1);
				// 跳转页面
				console.log(str);
				location.href = 'list.html?' + str;

			}

		}
	})

	//获取页面品牌推荐 container 类名为center盒子上元素
	var center = document.querySelector('.center');
	//subject发起ajax请求数据
	ajax.get({
		url: `http://localhost:10086/api/index_c.php`,
		success: function(data) {
			console.log(data)

			//创建一个ul
			var ul = document.createElement('ul');
			ul.innerHTML = data.map(function(item) {
				return `
						 			<li>
						 			<h4 class="imgR"><img  src="${item.imgurl}"></h4>
						 			</li>
						 	`
			}).join('');
			//插入ul之前先清空
			//center.innerHTML = '';
			center.appendChild(ul);
			imgR = document.getElementsByClassName('imgR');
			function add() {

				for(let i = 0; i < imgR.length; i++) {

					imgR[i].onclick = function() {
						console.log(i);
						chuanCan(i, data);
					}
				}
			}
			add();

			// 页面传参
			function chuanCan(idx, data) {
				var str = '';
				for(var arr in data[idx]) {
					str += arr + '=' + encodeURI(data[idx][arr]) + '&';
				}
				//去除多余的&
				str = str.slice(0, -1);
				// 跳转页面
				console.log(str);
				location.href = 'list.html?' + str;
			}

		
		
		}
	})
	
	//获取页面品牌推荐 container 类名为center盒子上元素
	var right = document.querySelector('.right');
	//subject发起ajax请求数据
	ajax.get({
		url: `http://localhost:10086/api/index_l.php`,
		success: function(data) {
			console.log(data)

			//创建一个ul
			var ul = document.createElement('ul');
			ul.innerHTML = data.map(function(item) {
				return `
						 			<li>
						 			<h4 class="imgR"><img  src="${item.imgurl}"></h4>
						 			</li>
						 	`
			}).join('');
			//插入ul之前先清空
			//right.innerHTML = '';
			right.appendChild(ul);
			
			imgR = document.getElementsByClassName('imgR');
			function add() {

				for(let i = 0; i < imgR.length; i++) {

					imgR[i].onclick = function() {
						console.log(i);
						chuanCan(i, data);
					}
				}
			}
			add();

			// 页面传参
			function chuanCan(idx, data) {
				var str = '';
				for(var arr in data[idx]) {
					str += arr + '=' + encodeURI(data[idx][arr]) + '&';
				}
				//去除多余的&
				str = str.slice(0, -1);
				// 跳转页面
				console.log(str);
				location.href = 'list.html?' + str;

			}

		}
	})

//获取页面品牌推荐 container 类名为conm_1盒子上元素
	var conm_1 = document.querySelector('.conm_1');
	//subject发起ajax请求数据
	ajax.get({
		url: `http://localhost:10086/api/index_m.php`,
		success: function(data) {

			//创建一个ul
			var ul = document.createElement('ul');
			ul.innerHTML = data.map(function(item) {
				return `
						 			<li>
						 			<h4 class="imgR"><img  src="${item.imgurl}"></h4>
						 			</li>
						 	`
			}).join('');
			//插入ul之前先清空
			//conm_1.innerHTML = '';
			conm_1.appendChild(ul);
			
			imgR = document.getElementsByClassName('imgR');
			function add() {

				for(let i = 0; i < imgR.length; i++) {

					imgR[i].onclick = function() {
						console.log(i);
						chuanCan(i, data);
					}
				}
			}
			add();

			// 页面传参
			function chuanCan(idx, data) {
				var str = '';
				for(var arr in data[idx]) {
					str += arr + '=' + encodeURI(data[idx][arr]) + '&';
				}
				//去除多余的&
				str = str.slice(0, -1);
				// 跳转页面
				console.log(str);
				location.href = 'list.html?' + str;

			}

		}
	})
	
	
//获取页面品牌推荐 container 类名为conm_2盒子上元素
	var conm_2 = document.querySelector('.conm_2');
	//subject发起ajax请求数据
	ajax.get({
		url: `http://localhost:10086/api/index_m.php`,
		success: function(data) {

			//创建一个ul
			var ul = document.createElement('ul');
			ul.innerHTML = data.map(function(item) {
				return `
						 			<li>
						 			<h4 class="imgR"><img  src="${item.imgurl}"></h4>
						 			</li>
						 	`
			}).join('');
			//插入ul之前先清空
			//conm_2.innerHTML = '';
			conm_2.appendChild(ul);
			imgR = document.getElementsByClassName('imgR');
			function add() {

				for(let i = 0; i < imgR.length; i++) {

					imgR[i].onclick = function() {
						console.log(i);
						chuanCan(i, data);
					}
				}
			}
			add();

			// 页面传参
			function chuanCan(idx, data) {
				var str = '';
				for(var arr in data[idx]) {
					str += arr + '=' + encodeURI(data[idx][arr]) + '&';
				}
				//去除多余的&
				str = str.slice(0, -1);
				// 跳转页面
				console.log(str);
				location.href = 'list.html?' + str;

			}

		}
	})
	
	//获取页面品牌推荐 container 类名为conm_3盒子上元素
	var conm_3 = document.querySelector('.conm_3');
	//subject发起ajax请求数据
	ajax.get({
		url: `http://localhost:10086/api/index_m.php`,
		success: function(data) {

			//创建一个ul
			var ul = document.createElement('ul');
			ul.innerHTML = data.map(function(item) {
				return `
						 			<li>
						 			<h4 class="imgR"><img  src="${item.imgurl}"></h4>
						 			</li>
						 	`
			}).join('');
			//插入ul之前先清空
			//conm_3.innerHTML = '';
			conm_3.appendChild(ul);
			imgR = document.getElementsByClassName('imgR');
			function add() {

				for(let i = 0; i < imgR.length; i++) {

					imgR[i].onclick = function() {
						console.log(i);
						chuanCan(i, data);
					}
				}
			}
			add();

			// 页面传参
			function chuanCan(idx, data) {
				var str = '';
				for(var arr in data[idx]) {
					str += arr + '=' + encodeURI(data[idx][arr]) + '&';
				}
				//去除多余的&
				str = str.slice(0, -1);
				// 跳转页面
				console.log(str);
				location.href = 'list.html?' + str;

			}

		}
	})
	
	//获取页面品牌推荐 container 类名为conm_4盒子上元素
	var conm_4 = document.querySelector('.conm_4');
	//subject发起ajax请求数据
	ajax.get({
		url: `http://localhost:10086/api/index_m.php`,
		success: function(data) {

			//创建一个ul
			var ul = document.createElement('ul');
			ul.innerHTML = data.map(function(item) {
				return `
						 			<li>
						 			<h4 class="imgR"><img  src="${item.imgurl}"></h4>
						 			</li>
						 	`
			}).join('');
			//插入ul之前先清空
			//conm_4.innerHTML = '';
			conm_4.appendChild(ul);
			imgR = document.getElementsByClassName('imgR');
			function add() {

				for(let i = 0; i < imgR.length; i++) {

					imgR[i].onclick = function() {
						console.log(i);
						chuanCan(i, data);
					}
				}
			}
			add();

			// 页面传参
			function chuanCan(idx, data) {
				var str = '';
				for(var arr in data[idx]) {
					str += arr + '=' + encodeURI(data[idx][arr]) + '&';
				}
				//去除多余的&
				str = str.slice(0, -1);
				// 跳转页面
				console.log(str);
				location.href = 'list.html?' + str;

			}

		}
	})
	
	//获取页面品牌推荐 container 类名为conm_5盒子上元素
	var conm_5 = document.querySelector('.conm_5');
	//subject发起ajax请求数据
	ajax.get({
		url: `http://localhost:10086/api/index_m.php`,
		success: function(data) {

			//创建一个ul
			var ul = document.createElement('ul');
			ul.innerHTML = data.map(function(item) {
				return `
						 			<li>
						 			<h4 class="imgR"><img  src="${item.imgurl}"></h4>
						 			</li>
						 	`
			}).join('');
			//插入ul之前先清空
			//conm_5.innerHTML = '';
			conm_5.appendChild(ul);
			imgR = document.getElementsByClassName('imgR');
			function add() {

				for(let i = 0; i < imgR.length; i++) {

					imgR[i].onclick = function() {
						console.log(i);
						chuanCan(i, data);
					}
				}
			}
			add();

			// 页面传参
			function chuanCan(idx, data) {
				var str = '';
				for(var arr in data[idx]) {
					str += arr + '=' + encodeURI(data[idx][arr]) + '&';
				}
				//去除多余的&
				str = str.slice(0, -1);
				// 跳转页面
				console.log(str);
				location.href = 'list.html?' + str;

			}

		}
	})
	
	//获取页面品牌推荐 container 类名为conm_6盒子上元素
	var conm_6 = document.querySelector('.conm_6');
	//subject发起ajax请求数据
	ajax.get({
		url: `http://localhost:10086/api/index_m.php`,
		success: function(data) {

			//创建一个ul
			var ul = document.createElement('ul');
			ul.innerHTML = data.map(function(item) {
				return `
						 			<li>
						 			<h4 class="imgR"><img  src="${item.imgurl}"></h4>
						 			</li>
						 	`
			}).join('');
			//插入ul之前先清空
			//conm_6.innerHTML = '';
			conm_6.appendChild(ul);
			imgR = document.getElementsByClassName('imgR');
			function add() {

				for(let i = 0; i < imgR.length; i++) {

					imgR[i].onclick = function() {
						console.log(i);
						chuanCan(i, data);
					}
				}
			}
			add();

			// 页面传参
			function chuanCan(idx, data) {
				var str = '';
				for(var arr in data[idx]) {
					str += arr + '=' + encodeURI(data[idx][arr]) + '&';
				}
				//去除多余的&
				str = str.slice(0, -1);
				// 跳转页面
				console.log(str);
				location.href = 'list.html?' + str;

			}

		}
	})
	
	//获取页面品牌推荐 container 类名为conm_7盒子上元素
	var conm_7 = document.querySelector('.conm_7');
	//subject发起ajax请求数据
	ajax.get({
		url: `http://localhost:10086/api/index_m.php`,
		success: function(data) {

			//创建一个ul
			var ul = document.createElement('ul');
			ul.innerHTML = data.map(function(item) {
				return `
						 			<li>
						 			<h4 class="imgR"><img  src="${item.imgurl}"></h4>
						 			</li>
						 	`
			}).join('');
			//插入ul之前先清空
			//conm_7.innerHTML = '';
			conm_7.appendChild(ul);
			imgR = document.getElementsByClassName('imgR');
			function add() {

				for(let i = 0; i < imgR.length; i++) {

					imgR[i].onclick = function() {
						console.log(i);
						chuanCan(i, data);
					}
				}
			}
			add();

			// 页面传参
			function chuanCan(idx, data) {
				var str = '';
				for(var arr in data[idx]) {
					str += arr + '=' + encodeURI(data[idx][arr]) + '&';
				}
				//去除多余的&
				str = str.slice(0, -1);
				// 跳转页面
				console.log(str);
				location.href = 'list.html?' + str;

			}

		}
	})
	
	//获取页面品牌推荐 container 类名为conm_8盒子上元素
	var conm_8 = document.querySelector('.conm_8');
	//subject发起ajax请求数据
	ajax.get({
		url: `http://localhost:10086/api/index_m.php`,
		success: function(data) {
			
			//创建一个ul
			var ul = document.createElement('ul');
			ul.innerHTML = data.map(function(item) {
				return `
						 			<li>
						 			<h4 class="imgR"><img  src="${item.imgurl}"></h4>
						 			</li>
						 	`
			}).join('');
			//插入ul之前先清空
			//conm_8.innerHTML = '';
			conm_8.appendChild(ul);
			
			function add() {

				for(let i = 0; i < imgR.length; i++) {

					imgR[i].onclick = function() {
						console.log(i);
						chuanCan(i, data);
					}
				}
			}
			add();

			// 页面传参
			function chuanCan(idx, data) {
				var str = '';
				for(var arr in data[idx]) {
					str += arr + '=' + encodeURI(data[idx][arr]) + '&';
				}
				//去除多余的&
				str = str.slice(0, -1);
				// 跳转页面
				location.href = 'list.html?' + str;

			}
			
			

		}
	})


//获取页面品牌推荐 container 类名为cnxh盒子上元素
	var cnxh = document.querySelector('.cnxh');
	//subject发起ajax请求数据
	ajax.get({
		url: `http://localhost:10086/api/index_x.php`,
		success: function(data) {

			//创建一个ul
			var ul = document.createElement('ul');
			ul.innerHTML = data.map(function(item) {
				return `
						 			<li>
						 			<h4 class="imgR"><img  src="${item.imgurl}"></h4>
						 			<p class="cnxh_1">${item.name}</P>
						 			<p class="cnxh_2">${item.price}</P>
						 			</li>
						 	`
			}).join('');
			//插入ul之前先清空
			//nxh.innerHTML = '';
			cnxh.appendChild(ul);
			imgR = document.getElementsByClassName('imgR');
			
			function add() {

				for(let i = 0; i < imgR.length; i++) {

					imgR[i].onclick = function() {
						console.log(i);
						chuanCan(i, data);
					}
				}
			}
			add();

			// 页面传参
			function chuanCan(idx, data) {
				var str = '';
				for(var arr in data[idx]) {
					str += arr + '=' + encodeURI(data[idx][arr]) + '&';
				}
				//去除多余的&
				str = str.slice(0, -1);
				// 跳转页面
				console.log(str);
				location.href = 'list.html?' + str;

			}
			
			
			
			

		}
	})

})
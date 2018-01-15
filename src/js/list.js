document.addEventListener('DOMContentLoaded', function() {

	//获取页面上元素

	//获取页面品牌推荐 container 类名为cnxh盒子上元素
	var goods = document.querySelector('.goods');
	console.log(goods)
	//subject发起ajax请求数据
	ajax.get({
		url: `http://localhost:10086/api/list.php`,
		success: function(data) {
			console.log(data)
			//创建一个ul
			var ul = document.createElement('ul');
			ul.innerHTML = data.map(function(item) {
				return `
						 			<li>
						 			<h4 class="imgR"><img  src="${item.imgurl}"></h4>
						 			<p class="cnxh_1">${item.name}</P>
						 			<p class="cnxh_1_1">${item.name}</P>
						 			<p class="cnxh_2">￥：${item.price}</P><span></span>
						 			</li>
						 	`
			}).join('');
			//插入ul之前先清空
			//nxh.innerHTML = '';
			goods.appendChild(ul);

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
				location.href = 'datelist.html?' + str;

			}

		}
	})
})
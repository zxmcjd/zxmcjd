document.addEventListener('DOMContentLoaded', function() {

	// 获取传过来的参数
	var res = location.search;

	res = res.slice(1);
	res = res.split('&');
	// 将传过来的参数写进对象
	var date = {};
	res.forEach(function(item) {
		// 以等号拆分数组
		var arr = item.split('=');
		//把内容写进对象里
		date[arr[0]] = decodeURI(arr[1]);
	})
	console.log(date)

	//获取页面上的元素
	var Bimg = document.getElementById('Bimg');
	//把从列表页转过来的参数图片写入 id为Bimg的img中
	Bimg.src = date.imgurl;

	var b = document.getElementById('b');
	var la = document.getElementById('la');
	var jq = document.getElementById('jq');
	var pp = document.getElementById('pp');

	b.innerHTML = date.name;
	la.innerHTML = date.name;
	jq.innerHTML = date.price;
	pp.innerHTML = date.name;
	
	var bimg_1 = document.getElementById('bimg_1');
	var bimg_2 = document.getElementById('bimg_2');
	var bimg_3 = document.getElementById('bimg_3');
	var bimg_4 = document.getElementById('bimg_4');
	bimg_1.src = date.imgurl;
	bimg_2.src = date.imgurl;
	bimg_3.src = date.imgurl;
	bimg_4.src = date.imgurl;
//	bimg_5.src = date.imgurl;
	
	//获取页面品牌推荐 container 类名为cnxh盒子上元素
	var abums_1 = document.querySelector('.abums_1');
	var ul = abums_1.querySelector('ul');
	var imgs = ul.querySelectorAll('li');
	var img1 = imgs[0].firstElementChild;

	//用for循环把小图遍历出来 点击按钮绑定事件
	imgs[0].className = 'active';
	for(var i = 0; i < imgs.length; i++) {
		imgs[i].onclick = function() {
			for(var j = 0; j < imgs.length; j++) {
				imgs[j].className = ''
			}
			var img = this.firstElementChild;
			//把小图片的路径换成大图片的路径
			Bimg.src = img.src;
		}
	}
	
	var img_1 = document.getElementById('img_1');
	var sp_1 = document.getElementById('sp_1');

	img_1.src=date.imgurl;
	sp_1.innerHTML=date.name;

	var toCar = document.getElementById('toCar');
	console.log(toCar);
	var gdDate;
	if(!gdDate) {
		gdDate = {};
	} else {
		gdDate = JSON.parse(gdDate);
	}
	//记得点击toCar后cookie才有数据
	toCar.onclick = function() {
		Cookie.set('gdDate', JSON.stringify(date));
		console.log(666);
	}

})
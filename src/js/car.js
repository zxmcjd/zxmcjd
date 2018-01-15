$(function() {
	/*
	    选择元素
	    操作元素
	        * 绑定事件
	        * DOM节点操作
	        * ...
	 */

	var $datalist = $('.datalist');
	var $btnFirst = $('.btnFirst');
	var $trs = $datalist.find('tbody tr');
	var $checkboxs = $trs.find(':checkbox');

	//隔行换色
	$trs.filter(':even').addClass('even');

	// 给按钮绑定事件
	// 实现tr的选取和取消
	$btnFirst.on('click', function() {
		var $tr = $trs.first(); //得到第一个tr
		if($tr.hasClass('selected')) {
			//取消
			$tr
				.removeClass('selected')
				.find(':checkbox')
				.prop('checked', false);
		} else {
			//选中
			$tr
				.addClass('selected') //添加一个类
				.find(':checkbox') //查找后代元素chebox
				// .checked = true  //(原生js写法)
				.prop('checked', true);
		}
	});

	// 获取第三行
	$('.btn3').on('click', function() {
		var $currentTr = $trs.eq(2);
		$currentTr.toggleClass('selected');
		$currentTr.find(':checkbox').prop('checked', true);
	});

	//获取第2-5行
	$('.btn2-5').click(function() {
		var $currentTr = $trs.slice(1, 5); //slice(start,[end]): 选取一个从start到end(不包括end)匹配的子集
		//链式调用
		$currentTr.toggleClass('selected').find(':checkbox').prop('checked', true);
	})

	//全选
	$('#all').click(function() {
		var $checked = $checkboxs.filter(':checked');

		if($trs.hasClass('selected')) {
			$checked.closest('tr').siblings().addClass('selected');
			if($checked.length === $checkboxs.length) {
				$trs.removeClass('selected');
			}
		} else {
			$trs.toggleClass('selected');
		}

		$checkboxs.prop('checked', this.checked);
	});

	//事件委托实现点击任意位置取消，选择当前行
	$datalist.on('click', 'tbody tr', function() {
			//this为当前行dom节点
			$(this).toggleClass('selected')

				//勾选复选框
				.find(':checkbox').prop('checked', $(this).hasClass('selected')); //hasClass返回布尔值

			checkAll();
		})

		//删除
		.on('click', '.btnDelete', function(e) {
			//获取当前行
			var $currentTr = $(this).closest('tr').remove();
			console.log(this);

			var $trs1 = $datalist.find('tbody tr');
			$trs1.each(function(idx, ele) {
				console.log(idx, ele);
				ele.children[1].innerText = idx + 1;
			})
			$trs1.removeClass('even').filter(':even').addClass('even');

			e.stopPropagation();
		});

	//反选
	$('#btnFx').on('click', function() {
		$trs.toggleClass('selected');

		// 勾选状态
		// 遍历所有复选框
		// $checkboxs.each(function(idx,ele){
		//  // ele === this
		//  // console.log(idx,ele)
		//  ele.checked = !ele.checked;
		// });

		//高级用法
		$checkboxs.prop('checked', function(idx, attr) { //执行函数后，看函数的返回值
			console.log(idx, attr);

			return !attr;
		});

		checkAll();
	})

	//表格搜索选取
	$('.choose').click(function() {
		$trs.removeClass().find(':checkbox').prop('checked', false);
		var $_val = $('#keyword').val();

		$("tbody tr:contains(" + $_val + ")").toggleClass('selected').find(':checkbox').prop('checked', true);
	})

	// 全选按钮的状态
	// 数量对比
	function checkAll() {
		// 获取选中的个数
		// 筛选：filter
		// 判断勾选的数量与复选框的数量是否相等
		var $checked = $checkboxs.filter(':checked');
		$('#all').prop('checked', $checked.length === $checkboxs.length);
	}

	//获取COOKIE;
	if(document.cookie) {
		var date = JSON.parse(Cookie.get('gdDate'));
	}

	var $Bimg = $('#Bimg').get(0);
	var $item = $('#item').get(0);
	var $pr = $('#pr').get(0);
	var $qty = $('#num').get(0);
	var $outup = $('#outup').get(0);
	var $qty = $('#num').get(0);
	var $zj = $('#zj').get(0);
	var $outup_1 = $('#outup_1').get(0);
	var $outup_2 = $('#outup_2').get(0);
	var $all_ok = $('.all_ok').get(0);

	//	$Bimg.append(date.name);
	//	$item.append(date.price);

	$Bimg.innerHTML = date.name;
	$pr.src = date.imgurl;

	//	var g = $("img").attr("src", date.imgurl);
	//	$pr.append(g);

	$item.innerHTML = date.price;

	//点击数量计算相应的价格
	$qty.oninput = function() {

		var _price = $item.innerHTML;

		var _qty = $qty.value;
		console.log(_qty)
		date.qty = _qty;
		// console.log()

		//把从输入框获取到的数量写入num盒子中
		$outup.innerHTML = _qty;
		$outup_1.innerHTML = _qty;
		$zj.innerHTML = '总价：' + (_price * _qty).toFixed(2);
		$outup_2.innerHTML = (_price * _qty).toFixed(2);
		var h =(_price * _qty).toFixed(2);console.log( h)
		return h;
	}

	$all_ok.onclick = function() {
		var s=$qty.oninput()*1;
		var e=55*1;
		$outup_2.innerHTML=s+e;
	}

})
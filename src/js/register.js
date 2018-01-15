window.onload = function() {
	//获取页面上的元素
	var username = document.getElementById('s_jh');
	var password = document.getElementById('o1_password');
	var o2_password = document.getElementById('o2_password');
	var btnRegister = document.getElementById('btnRegister');
	var tip = document.querySelector('.tip');
	var output = document.querySelector('.output');
	var yzm = document.querySelector('#yzm');
	var btnrefresh = document.querySelector('.btnrefresh');
	var y_zm = document.querySelector('#y_zm');
	//用户注册需知的一些基本格式要求
	//用户注册的手机格式要求
	/*
			手机号码
				11位
				158 8888 8888
				1 [34578]
		 */
	username.onblur = function() {
		var _username = username.value;
		var reg = /^1[34578]\d{9}$/i;
		if(!reg.test(_username)) {
			output.innerHTML = '手机号不合法';
			return false;
		}
		if(_username !== '') {

			ajax.get({
				data: {
					username: _username
				},
				url: `http://localhost:10086/api/register.php`,
				success: function(res) {
					console.log(res)
					if(res == 'fail') {

						tip.innerHTML = "已注册！";
						tip.style.color = "red";
						btnRegister.disabled = true;
					} else {
						tip.innerHTML = "正确";
						tip.style.color = "green";
						btnRegister.disabled = false;
					}
				}
			})

		}
	}

	//用户注册的密码 格式要求
	/*
			密码  
				长度小于20 
				不能包含空格
	
	*/
	//输入密码
	var _password;
	password.onblur = function() {
		_password = password.value;
		var reg = /^\S{6,20}$/
		if(!reg.test(_password)) {
			output.innerHTML = '密码长度不少于6不大于20';
			return false;
		}
	}

	//再次输入密码
	o2_password.onblur = function() {
		var _o2_password = o2_password.value;
		if(_password != _o2_password) {
			output.innerHTML = '两次密码输入不一致';
		}
	}

	//生成验证码
	//生成验证码的函数
	function add() {

		//声明一个变量来存放随机验证码
		var sum = '';

		//利用for循环遍历生成四位数的验证码
		for(var i = 0; i < 4; i++) {
			var num = parseInt(Math.random() * 10);

			sum += num;

		}
		yzm.innerHTML = sum;
	}
	add();

	btnrefresh.onclick = function() {
		add();
	}

	y_zm.onblur = function() {
		//判断输入的验证码与生成的验证码是否一致
		if(y_zm.value != yzm.innerHTML) {
			//清空输入框的值
			y_zm.value = '';
			output.innerHTML = '验证码输入有误请重新输入';
			add();
		}
	}

	//判断是否注册成功
	btnRegister.onclick = function() {
		var _username = username.value;
		var _password = password.value;
		// console.log(_username);
		if(_username !== '') {

			// 发起ajax请求
			ajax.get({
				// hardcode
				url: `http://localhost:10086/api/register.php`,
				data: {
					username: _username,
					password: _password
				},
				success: function(data) {
					console.log(data)
					if(data == 'ok') {
						output.innerHTML = "注册失败，请稍后再试"
					} else {
						alert('注册成功请登录');
						window.location.href = "log.html";
					}
				}
			})

		}

	}

}
window.onload = function() {
	/*获取页面的元素*/
	var username0 = document.getElementById('o_email');
	var password0 = document.getElementById('o_password');
	var btnSignIn = document.querySelector('#btnSignIn');
	var err = document.querySelectorAll('.err');
	btnSignIn.onclick = function() {
		var _username0 = username0.value;
		var _password0 = password0.value;
		// console.log(_username);
		if(_username0 !== '') {
			ajax.get({
				data: {
					username: _username0,
					password: _password0,
				},
				url: `http://localhost:10086/api/log.php`,
				success: function(data) {
					console.log(data)
					if(data=='fail'){
						err[0].innerText = "用户名或密码错误";
					} else {
						window.location.href = "index.html";
					}
				}
			})
		}
	}

}
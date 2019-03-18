function Check() {
	var logTag = document.getElementById('username')
	var log = logTag.value
	var passTag = document.getElementById('password')
	var pass = passTag.value
	var passLen = pass.length
	var pattern = /\d/g
	var arrNum = pass.match(pattern)
	console.log(arrNum)
	console.log(passLen)
	if (log.toLowerCase() === log && arrNum === null && 6 <= passLen && passLen <= 16) {
		logTag.style.color = "Green";
		passTag.style.color = "Green";
		alert('Вы залогинились!');
		return;
	} else {
		logTag.style.color = "Red";
		passTag.style.color = "Red";
		alert('Вы не залогинились!');
	}
}
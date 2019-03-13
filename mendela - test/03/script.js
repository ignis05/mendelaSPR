window.onload = function () {
	let div = document.getElementById('data')
	let date = new Date()
	let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
	let month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
	let year = date.getFullYear()
	let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
	let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
	let second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
	div.innerHTML = day + '/' + month + '/' + (year - 2000) + ' ' + hour + ':' + minute + ':' + second
}
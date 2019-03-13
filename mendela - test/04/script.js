window.onload = function() {
	let date = new Date()
	console.log(date.getDate())
	do {
		date.setDate(date.getDate() + 1)
	} while (date.getDay() != 1)
	
	for(let i = 0; i < 7; i++) {
		let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
		let month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
		let year = ('' + date.getFullYear()).slice(2, 4)
		document.getElementsByClassName('data')[i].innerHTML = year + '-' + month + '-' + day
		date.setDate(date.getDate() + 1)
	}
}
	setInterval(function () {  
	 flagg = 0

	 if(flagg == 0){
	 	document.getElementById('time').style.fontSize = "170px";
	 	flagg = 1
	 }

	 date = new Date(),  
	 h = date.getHours(),  
	 m = date.getMinutes(),  
	 s = date.getSeconds(),  
	 h = (h < 10) ? '0' + h : h,  
	 m = (m < 10) ? '0' + m : m,  
	 s = (s < 10) ? '0' + s : s,  
	 mouth = date.getMonth(),
	 datee = date.getDate(),
	 yearr = date.getFullYear()

	if(mouth == 1){
		mou = "Января"
	}
	if(mouth == 2){
	 	mou = "Февраля"
	}

	if(mouth == 3){
		 	mou = "Марта"
		 }

	if(mouth == 4){
		 	mou = "Апреля"
		 }

	if(mouth == 5){
		 	mou = "Мая"
		 }
	if(mouth == 6){
		 	mou = "Июня"
		 }

	if(mouth == 7){
		 	mou = "Июля"
		 }

	if(mouth == 8){
			mou = "Августа"
		 }

	if(mouth == 9){
		 	mou = "Сентября"
		 }

	if(mouth == 10){
		 	mou = "Октября"
		 }

	if(mouth == 11){
		 	mou = "Ноября"
		 }

	if(mouth == 12){
		 	mou = "Декабря"
		 }

	 document.getElementById('time').innerHTML = h + ':' + m + ':' + s;  
	 document.getElementById('dmy').innerHTML = datee + ' ' + mou + ' ' + yearr;  
	}, 1000);
